"""
Génère les pages de langue du site (référencement multilingue).

    python _tools/build_i18n.py

La page française (index.html à la racine) et les traductions de effect.js
sont la source. Le script produit :
  - en/index.html, es/index.html, pt/index.html, ma/index.html
    (textes déjà traduits dans le HTML, titre, description, balises sociales
    et données structurées dans la bonne langue) ;
  - sitemap.xml avec toutes les versions linguistiques.

À relancer après chaque modification de index.html ou des traductions.
Ce dossier commence par "_" : GitHub Pages ne le publie pas.
"""

import datetime
import html
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://www.dofuscripts.com/"

# Clé de traduction (effect.js) -> réglages de la page
LANGS = {
    "en": {
        "dir": "en",
        "html_lang": "en",
        "hreflang": "en",
        "og_locale": "en_GB",
        "title": "DofuScripts – Dofus 3.0 Unity Script Packs (Level 1 to 200)",
        "description": "Dofus 3.0 Unity script packs from level 1 to 200: zones, dungeons and soul stones with an 8-character team. Lifetime scripts, demo video and Discord support.",
        "og_title": "DofuScripts — Dofus 3.0 script packs with full coaching",
        "og_description": "Dofus script packs from level 1 to 200, demo video and complete support",
        "hero_alt": "Tristepin, a Dofus character, attacking with his flaming sword",
        "org_description": "Dofus 3.0 Unity script packs from level 1 to 200 with full support on Discord.",
    },
    "es": {
        "dir": "es",
        "html_lang": "es",
        "hreflang": "es",
        "og_locale": "es_ES",
        "title": "DofuScripts – Packs de scripts Dofus 3.0 Unity (nivel 1 a 200)",
        "description": "Packs de scripts para Dofus 3.0 Unity del nivel 1 al 200: zonas, mazmorras y piedras de alma con un team de 8. Scripts de por vida, vídeo demo y soporte en Discord.",
        "og_title": "DofuScripts — Packs de scripts para Dofus 3.0 con acompañamiento total",
        "og_description": "Packs de scripts Dofus del nivel 1 al 200, vídeo demo y soporte completo",
        "hero_alt": "Tristepin, personaje de Dofus, atacando con su espada en llamas",
        "org_description": "Packs de scripts para Dofus 3.0 Unity del nivel 1 al 200 con soporte completo en Discord.",
    },
    "pt": {
        "dir": "pt",
        "html_lang": "pt",
        "hreflang": "pt",
        "og_locale": "pt_BR",
        "title": "DofuScripts – Pacotes de scripts Dofus 3.0 Unity (nível 1 a 200)",
        "description": "Pacotes de scripts para Dofus 3.0 Unity do nível 1 ao 200: zonas, calabouços e pedras de alma com equipe de 8. Scripts vitalícios, vídeo demo e suporte no Discord.",
        "og_title": "DofuScripts — Pacotes de scripts para Dofus 3.0 com suporte completo",
        "og_description": "Pacotes de scripts Dofus do nível 1 ao 200, vídeo demo e suporte completo",
        "hero_alt": "Tristepin, personagem de Dofus, atacando com sua espada flamejante",
        "org_description": "Pacotes de scripts para Dofus 3.0 Unity do nível 1 ao 200 com suporte completo no Discord.",
    },
    "ar": {
        "dir": "ma",
        "html_lang": "ar-MA",
        "hreflang": "ar-MA",
        "og_locale": "ar_MA",
        "title": "DofuScripts – Packs dyal scripts Dofus 3.0 Unity (lvl 1 htal 200)",
        "description": "Packs dyal scripts Dofus 3.0 Unity men lvl 1 htal 200: zones, donjons o pierres d'âme b ferqa dyal 8. Scripts dial mada lhayat, vidéo démo o suivi f Discord.",
        "og_title": "DofuScripts — Packs dyal scripts Dofus 3.0 m3a suivi kamel",
        "og_description": "Packs dyal scripts Dofus men lvl 1 htal 200, vidéo démo o suivi kamel",
        "hero_alt": "Tristepin, personnage dyal Dofus, m3a sif dyalo li cha3el",
        "org_description": "Packs dyal scripts Dofus 3.0 Unity men lvl 1 htal 200 m3a suivi kamel f Discord.",
    },
}

# Ordre des pages dans le sitemap et les balises hreflang
PAGES = [("fr", "", "fr")] + [(k, v["dir"] + "/", v["hreflang"]) for k, v in LANGS.items()]


def read(name):
    with open(os.path.join(ROOT, name), encoding="utf-8", newline="") as f:
        return f.read().replace("\r\n", "\n")


def write(name, text):
    path = os.path.join(ROOT, name)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8", newline="") as f:
        f.write(text.replace("\n", "\r\n"))


def load_translations():
    js = read("effect.js")
    start = js.index("const translations = ") + len("const translations = ")
    end = js.index("\n  };", start) + 4
    block = js[start:end].rstrip(";")
    block = re.sub(r"^(\s*)(fr|en|es|pt|ar):", r'\1"\2":', block, flags=re.M)
    return json.loads(block)


def strip_tags(text):
    text = re.sub(r"<[^>]+>", "", text)
    return re.sub(r"\s+", " ", html.unescape(text)).strip()


def strip_emoji(text):
    return re.sub(r"^[^\w(]+", "", text).strip()


def set_meta(doc, attr, name, value):
    pat = re.compile(r'(<meta %s="%s"\s+content=")[^"]*(")' % (attr, re.escape(name)))
    assert pat.search(doc), name
    return pat.sub(lambda m: m.group(1) + html.escape(value, quote=True) + m.group(2), doc, count=1)


def translate_nodes(doc, dico):
    """Remplace le contenu de chaque élément data-i18n par sa traduction."""
    count = 0

    def repl(m):
        nonlocal count
        key = m.group("key")
        if key not in dico:
            return m.group(0)
        count += 1
        return m.group("open") + dico[key] + m.group("close")

    pat = re.compile(
        r'(?P<open><(?P<tag>\w+)\b[^>]*?\bdata-i18n="(?P<key>[^"]+)"[^>]*>)(?P<body>.*?)(?P<close></(?P=tag)>)',
        re.S,
    )
    doc = pat.sub(repl, doc)
    return doc, count


def build_page(src, lang, cfg, dico):
    url = SITE + cfg["dir"] + "/"
    doc = src

    # Textes de la page
    doc, n = translate_nodes(doc, dico)
    expected = len(re.findall(r'\bdata-i18n="', src))
    assert n == expected, (lang, n, expected)

    # Langue
    doc = doc.replace('<html lang="fr" data-page-lang="fr">',
                      '<html lang="%s" data-page-lang="%s">' % (cfg["html_lang"], lang), 1)
    doc = doc.replace("<!doctype html>\n",
                      "<!doctype html>\n<!-- Page générée par _tools/build_i18n.py à partir de index.html : ne pas modifier à la main -->\n", 1)

    # Titre, description, adresses
    doc = re.sub(r"<title>.*?</title>", "<title>%s</title>" % html.escape(cfg["title"], quote=False), doc, count=1)
    doc = re.sub(r'(<meta name="description"\s+content=")[^"]*(")',
                 lambda m: m.group(1) + html.escape(cfg["description"], quote=True) + m.group(2), doc, count=1)
    doc = doc.replace('<link rel="canonical" href="%s" />' % SITE, '<link rel="canonical" href="%s" />' % url, 1)
    doc = set_meta(doc, "property", "og:url", url)
    doc = set_meta(doc, "name", "twitter:url", url)
    doc = set_meta(doc, "property", "og:title", cfg["og_title"])
    doc = set_meta(doc, "name", "twitter:title", cfg["og_title"])
    doc = set_meta(doc, "property", "og:description", cfg["og_description"])
    doc = set_meta(doc, "name", "twitter:description", cfg["og_description"])

    # Locales Open Graph
    doc = re.sub(r'  <meta property="og:locale:alternate" content="[^"]*">\n', "", doc)
    others = ["fr_FR"] + [c["og_locale"] for k, c in LANGS.items() if k != lang]
    block = '  <meta property="og:locale" content="%s">\n' % cfg["og_locale"]
    block += "".join('  <meta property="og:locale:alternate" content="%s">\n' % o for o in others)
    doc = doc.replace('  <meta property="og:locale" content="fr_FR">\n', block, 1)

    # Menu de langue : bouton actif et liens relatifs depuis le sous-dossier
    doc = re.sub(r'(<img id="languageButtonFlag" class="flag-icon" src=")[^"]*("[^>]*alt=")[^"]*(")',
                 lambda m: m.group(1) + dico["nav.languageFlag"] + m.group(2) + dico["nav.languageCode"] + m.group(3), doc, count=1)
    doc = re.sub(r'(<span id="languageButtonLabel">)[^<]*(</span>)',
                 lambda m: m.group(1) + dico["nav.languageCode"] + m.group(2), doc, count=1)
    doc = re.sub(r'(id="languageButton"[^>]*?aria-label=")[^"]*(")',
                 lambda m: m.group(1) + dico["nav.languageLabel"] + m.group(2), doc, count=1, flags=re.S)

    def fix_lang_href(m):
        target = m.group(1)
        return 'data-href="../%s"' % ("" if target == "./" else target)

    doc = re.sub(r'data-href="([^"]*)"', fix_lang_href, doc)

    # Fichiers locaux : chemins relatifs depuis le sous-dossier
    doc = re.sub(r'(?<![\w-])(src|href|srcset)="(?!https?:|#|/|\.\./|data:|mailto:)([^"]+)"',
                 r'\1="../\2"', doc)

    # Textes alternatifs et titres d'éléments
    doc = re.sub(r'(<img src="\.\./Tristepin\.png" alt=")[^"]*(")',
                 lambda m: m.group(1) + html.escape(cfg["hero_alt"], quote=True) + m.group(2), doc, count=1)
    doc = doc.replace('title="Vidéo démonstrative DofuScripts"',
                      'title="%s"' % html.escape(strip_tags(dico["video.title"]) + " DofuScripts", quote=True), 1)

    # Données structurées
    m = re.search(r'(<script type="application/ld\+json">)(.*?)(</script>)', doc, re.S)
    data = json.loads(m.group(2))
    for node in data["@graph"]:
        t = node["@type"]
        if t == "Organization":
            node["description"] = cfg["org_description"]
        elif t == "WebPage":
            node["@id"] = url + "#webpage"
            node["url"] = url
            node["name"] = cfg["title"]
            node["description"] = cfg["description"]
            node["inLanguage"] = cfg["html_lang"]
        elif t == "VideoObject":
            node["name"] = strip_tags(dico["video.title"]) + " DofuScripts"
        elif t == "ItemList":
            node["@id"] = url + "#packs"
            node["name"] = strip_tags(dico["packs.title"]) + " DofuScripts"
            for i, item in enumerate(node["itemListElement"], start=1):
                prod = item["item"]
                prod["name"] = strip_emoji(strip_tags(dico["pack%d.title" % i]))
                prod["description"] = strip_tags(dico["pack%d.feature1" % i]) + " " + strip_tags(dico["pack%d.rentability" % i])
                prod["offers"]["url"] = url + "#packs"
    for node in data["@graph"]:
        if node["@type"] == "WebPage":
            node["isPartOf"] = {"@id": SITE + "#website"}
    dumped = json.dumps(data, ensure_ascii=False, indent=2)
    dumped = "\n".join("  " + line for line in dumped.split("\n"))
    doc = doc[:m.start(2)] + "\n" + dumped + "\n  " + doc[m.end(2):]

    return doc


def build_sitemap():
    today = datetime.date.today().isoformat()
    alternates = "".join(
        '    <xhtml:link rel="alternate" hreflang="%s" href="%s%s"/>\n' % (h, SITE, path) for _, path, h in PAGES
    ) + '    <xhtml:link rel="alternate" hreflang="x-default" href="%s"/>\n' % SITE
    urls = ""
    for _, path, _h in PAGES:
        urls += (
            "  <url>\n"
            "    <loc>%s%s</loc>\n"
            "    <lastmod>%s</lastmod>\n"
            "%s"
            "    <image:image>\n"
            "      <image:loc>%sDofuScripts.png</image:loc>\n"
            "    </image:image>\n"
            "  </url>\n"
        ) % (SITE, path, today, alternates, SITE)
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
        '        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n'
        '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n'
        + urls +
        "</urlset>\n"
    )


def main():
    translations = load_translations()
    src = read("index.html")
    for lang, cfg in LANGS.items():
        write(cfg["dir"] + "/index.html", build_page(src, lang, cfg, translations[lang]))
        print("page générée :", cfg["dir"] + "/index.html")
    write("sitemap.xml", build_sitemap())
    print("sitemap.xml mis à jour")


if __name__ == "__main__":
    main()
