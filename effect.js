document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".snow-container");
  if (container) {
    const numFlakes = 2;
    for (let i = 0; i < numFlakes; i += 1) {
      const flake = document.createElement("div");
      flake.classList.add("snowflake");
      flake.style.left = `${Math.random() * 100}vw`;
      const size = Math.random() * 8 + 4;
      flake.style.width = `${size}px`;
      flake.style.height = `${size}px`;
      flake.style.animationDuration = `${Math.random() * 20 + 15}s`;
      container.appendChild(flake);
    }
  }

  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  const translations = {
    fr: {
      "nav.home": "ACCUEIL",
      "nav.packs": "NOS PACKS",
      "nav.video": "VIDEO",
      "nav.discord": "Discord",
      "nav.languageLabel": "Changer de langue",
      "nav.languageCode": "FR",
      "nav.languageFlag": "https://flagcdn.com/w40/fr.png",
      "hero.title": "Comme un <br> boost pour Dofus.",
      "hero.subtitle": "Bénéficiez d'un avantage injuste sur les joueurs, tout <br> en restant totalement indétectable",
      "hero.ctaHeading": "Commencez dès maintenant&nbsp;!",
      "hero.ctaBody": "Achetez un de nos packs et commencez à bot avec un suivi complet de notre part du début à la fin, nous répondrons à toutes vos questions durant le processus pour que vous soyez autonome dans le futur et aussi découvrir une autre partie du botting Dofus peu connue. Un Google Doc est inclus également avec tous les stuffs et des explications du lvl 1 à 200.",
      "hero.cardCombatTitle": "⚔️ Combats automatique en team de 8 personnages",
      "hero.cardCombatBody": "Chargez votre script, lancez-le, vendez les ressources et encaissez les kamas&nbsp;!",
      "hero.cardRoiTitle": "Rentabilité garantie",
      "hero.cardRoiBody": "Sois rentable dès le premier jour seulement",
      "hero.sectionBgText": "Rejoins notre cercle privé <span style=\"color:#8cbbf5\">Discord</span> en achetant un de nos packs pour bénéficier de nos services Dofus.",
      "hero.sectionBgMembers": "+15 membres actuellement",
      "packs.title": "Nos packs",
      "packs.subtitle": "Voici les différents packs",
      "packs.prereqTitle": "Prérequis conseillés",
      "packs.noticeTitle": "À prendre en considération ⚠️",
      "packs.noticeBody": "- Tu peux le faire sur n'importe quel serveur<br>- Nous pouvons fournir les proxy et comptes vierges<br>- Paiement en 2 fois possible pour le plus gros pack.<br>- Nos scripts sont a vie (pas d'abonnement)",
      "packs.questions": "Des questions&nbsp;? Contacte <span style=\"color:#f0abfc\">@1brutal</span> sur Discord.",
      "pack1.title": "🥉 Pack pierres d'âmes (5 scripts)",
      "pack1.feature1": "Toutes les zones pour confectionner la \"Grande pierre d'âme parfaite\"",
      "pack1.prereq1": "Être niveau 110/113",
      "pack1.prereq2": "Avoir plusieurs comptes déjà stuff",
      "pack1.rentability": "<strong style=\"color:#AD46FF\">Rentabilité</strong> — 24M de kamas par jour a peu près",
      "pack2.title": "🥈 Pack zones et donjons du lvl 1 à 150 (30 scripts)",
      "pack2.tagline": "Rentabilité garantie",
      "pack2.feature1": "Le pack pour farmer les pierres d'âme.",
      "pack2.feature2": "Des scripts vous permettant de monter lvl 150 tout en générant des kamas à travers différentes zones et donjons. (Plus d'une vingtaine de scripts, donjons et zones réunis)",
      "pack2.feature3": "Une feuille de route que vous pourrez suivre complètement ainsi qu'un suivi de ma part tout au long pour vous aider au maximum sur chacune de vos questions. Je pourrai vous conseiller sur quelles zones ou donjons faire.",
      "pack2.feature4": "Tous les DofusBook par tranche de niveau ainsi que les profils de classe nécessaires pendant votre leveling, du niveau 1 au niveau 150.",
      "pack2.prereq1": "15 millions de kamas",
      "pack2.prereq2": "8 comptes abonnés lvl 1",
      "pack2.rentability": "<strong style=\"color:#AD46FF\">Rentabilité</strong> — 30 à 50M de kamas par jour",
      "pack3.title": "🥇 Pack zones et donjons du lvl 1 à 200 (43 scripts)",
      "pack3.feature1": "Les 2 packs précédents",
      "pack3.feature2": "Rajout de zones et donjons à faire une fois lvl 198",
      "pack3.feature3": "Scripts 150 à 200.",
      "pack3.feature4": "Tous les DofusBook du pack précédent mais aussi le stuff à utiliser une fois 198.",
      "pack3.feature5": "Une feuille de route que vous pourrez suivre complètement ainsi qu'un suivi de ma part tout au long pour vous aider au maximum sur chacune de vos questions.",
      "pack3.prereq1": "15 millions de kamas",
      "pack3.prereq2": "8 comptes abonnés lvl 1",
      "pack3.prereq3": "Un budget plus conséquent accélère la progression",
      "pack3.rentability": "<strong style=\"color:#AD46FF\">Rentabilité</strong> — La rentabilité de la team une fois les zones 200 atteintes varie de 50 à 100 millions de kamas par jour",
      "video.title": "Vidéo démonstrative",
      "video.subtitle": "DofuScripts",
      "footer.communityTitle": "REJOINDRE LA COMMUNAUTÉ",
      "footer.invite": "Lien d'invitation permanent :",
      "footer.widgetFallback": "Le widget semble désactivé sur le serveur. Pour l'activer : <strong>Paramètres du serveur → Widget → Activer le widget</strong>.",
      "footer.joinCta": "Rejoins-nous !",
      "footer.copyright": "Copyright 2025-2026 <span id=\"y\"></span> — Brutal HQ. Tout droits réservés."
    },
    en: {
      "nav.home": "HOME",
      "nav.packs": "OUR PACKS",
      "nav.video": "VIDEO",
      "nav.discord": "Discord",
      "nav.languageLabel": "Change language",
      "nav.languageCode": "EN",
      "nav.languageFlag": "https://flagcdn.com/w40/gb.png",
      "hero.title": "Like a <br> boost for Dofus.",
      "hero.subtitle": "Gain an unfair edge over other players while <br> staying completely undetectable",
      "hero.ctaHeading": "Get started now!",
      "hero.ctaBody": "Buy one of our bundles and start botting with full guidance from our team. We stay with you from start to finish, answering every question so you become autonomous and discover the lesser known side of Dofus botting. A Google Doc with every build and explanations from level 1 to 200 is included.",
      "hero.cardCombatTitle": "⚔️ Automated fights with a full 8-character team",
      "hero.cardCombatBody": "Load your script, launch it, sell the loot, and stack kamas!",
      "hero.cardRoiTitle": "Guaranteed profitability",
      "hero.cardRoiBody": "Be profitable from day one.",
      "hero.sectionBgText": "Join our private <span style=\"color:#8cbbf5\">Discord</span> circle by purchasing any pack and unlock every Dofus service we offer.",
      "hero.sectionBgMembers": "+15 members right now",
      "packs.title": "Our packs",
      "packs.subtitle": "Pick the bundle that suits your goals",
      "packs.prereqTitle": "Recommended prerequisites",
      "packs.noticeTitle": "Important to consider ⚠️",
      "packs.noticeBody": "- Works on every server<br>- We can provide proxies and fresh accounts<br>- 2-part payment possible for the biggest pack<br>- Scripts are lifetime licenses (no subscription)",
      "packs.questions": "Questions? Contact <span style=\"color:#f0abfc\">@1brutal</span> on Discord.",
      "pack1.title": "🥉 Soul stone bundle (5 scripts)",
      "pack1.feature1": "Every zone needed to craft the \"Perfect Large Soul Stone\".",
      "pack1.prereq1": "Be level 110/113",
      "pack1.prereq2": "Have several geared accounts",
      "pack1.rentability": "<strong style=\"color:#AD46FF\">ROI</strong> — About 24M kamas per day",
      "pack2.title": "🥈 Zones & dungeons level 1–150 (30 scripts)",
      "pack2.tagline": "Guaranteed profitability",
      "pack2.feature1": "Everything you need to farm soul stones.",
      "pack2.feature2": "Scripts to reach level 150 while generating kamas across curated zones and dungeons (20+ scripts included).",
      "pack2.feature3": "A complete roadmap plus 1:1 support to answer every question and point you to the best zones or dungeons.",
      "pack2.feature4": "Every DofusBook setup per level bracket plus the class profiles you need from 1 to 150.",
      "pack2.prereq1": "15 million kamas",
      "pack2.prereq2": "8 subscribed level 1 accounts",
      "pack2.rentability": "<strong style=\"color:#AD46FF\">ROI</strong> — 30 to 50M kamas per day",
      "pack3.title": "🥇 Zones & dungeons level 1–200 (43 scripts)",
      "pack3.feature1": "Everything from the first two bundles",
      "pack3.feature2": "Extra zones and dungeons once you reach level 198",
      "pack3.feature3": "150–200 scripts included.",
      "pack3.feature4": "All prior DofusBook builds plus the gear to use past 198.",
      "pack3.feature5": "A complete roadmap with constant guidance so none of your questions stay unanswered.",
      "pack3.prereq1": "15 million kamas",
      "pack3.prereq2": "8 subscribed level 1 accounts",
      "pack3.prereq3": "A bigger budget speeds things up",
      "pack3.rentability": "<strong style=\"color:#AD46FF\">ROI</strong> — Once at level 200 zones, expect 50–100M kamas per day",
      "video.title": "Demo video",
      "video.subtitle": "DofuScripts",
      "footer.communityTitle": "JOIN THE COMMUNITY",
      "footer.invite": "Permanent invite link:",
      "footer.widgetFallback": "The widget seems disabled on the server. Enable it via <strong>Server Settings → Widget → Enable Widget</strong>.",
      "footer.joinCta": "Join us!",
      "footer.copyright": "Copyright 2025-2026 <span id=\"y\"></span> — Brutal HQ. All rights reserved."
    },
    es: {
      "nav.home": "INICIO",
      "nav.packs": "NUESTROS PACKS",
      "nav.video": "VIDEO",
      "nav.discord": "Discord",
      "nav.languageLabel": "Cambiar idioma",
      "nav.languageCode": "ES",
      "nav.languageFlag": "https://flagcdn.com/w40/es.png",
      "hero.title": "Como un <br> impulso para Dofus.",
      "hero.subtitle": "Consigue una ventaja injusta sobre los demás <br> jugadores sin dejar rastro detectable",
      "hero.ctaHeading": "¡Empieza ahora mismo!",
      "hero.ctaBody": "Compra uno de nuestros packs y comienza a botear con el acompañamiento total de nuestro equipo de principio a fin. Respondemos a todas tus dudas para que seas autónomo y descubras el lado menos conocido del botting en Dofus. Incluimos un Google Doc con todos los sets y explicaciones del nivel 1 al 200.",
      "hero.cardCombatTitle": "⚔️ Combates automáticos con un team de 8 personajes",
      "hero.cardCombatBody": "Carga tu script, lánzalo, vende los recursos y acumula kamas.",
      "hero.cardRoiTitle": "Rentabilidad garantizada",
      "hero.cardRoiBody": "Sé rentable desde el primer día.",
      "hero.sectionBgText": "Únete a nuestro círculo privado de <span style=\"color:#8cbbf5\">Discord</span> comprando cualquiera de los packs y accede a todos nuestros servicios de Dofus.",
      "hero.sectionBgMembers": "+15 miembros actualmente",
      "packs.title": "Nuestros packs",
      "packs.subtitle": "Elige el pack que encaja contigo",
      "packs.prereqTitle": "Requisitos recomendados",
      "packs.noticeTitle": "A tener en cuenta ⚠️",
      "packs.noticeBody": "- Funciona en cualquier servidor<br>- Podemos proporcionar proxies y cuentas nuevas<br>- Pago en 2 cuotas para el pack grande<br>- Nuestros scripts son de por vida (sin suscripción)",
      "packs.questions": "¿Dudas? Contacta a <span style=\"color:#f0abfc\">@1brutal</span> en Discord.",
      "pack1.title": "🥉 Pack de piedras de alma (5 scripts)",
      "pack1.feature1": "Todas las zonas para fabricar la \"Gran piedra de alma perfecta\".",
      "pack1.prereq1": "Ser nivel 110/113",
      "pack1.prereq2": "Tener varias cuentas ya equipadas",
      "pack1.rentability": "<strong style=\"color:#AD46FF\">Rentabilidad</strong> — Unos 24M de kamas al día",
      "pack2.title": "🥈 Zonas y mazmorras nivel 1–150 (30 scripts)",
      "pack2.tagline": "Rentabilidad garantizada",
      "pack2.feature1": "El pack ideal para farmear piedras de alma.",
      "pack2.feature2": "Scripts para subir al 150 y generar kamas en distintas zonas y mazmorras (más de veinte scripts).",
      "pack2.feature3": "Ruta completa y acompañamiento personal para responder a cada duda y recomendarte las mejores zonas o mazmorras.",
      "pack2.feature4": "Todos los DofusBook por tramo de nivel y los perfiles por clase del 1 al 150.",
      "pack2.prereq1": "15 millones de kamas",
      "pack2.prereq2": "8 cuentas abonadas nivel 1",
      "pack2.rentability": "<strong style=\"color:#AD46FF\">Rentabilidad</strong> — 30 a 50M de kamas por día",
      "pack3.title": "🥇 Zonas y mazmorras nivel 1–200 (43 scripts)",
      "pack3.feature1": "Incluye los dos packs anteriores",
      "pack3.feature2": "Zonas y mazmorras extra al alcanzar el nivel 198",
      "pack3.feature3": "Scripts del 150 al 200.",
      "pack3.feature4": "Todos los DofusBook anteriores más el equipo para usar desde 198.",
      "pack3.feature5": "Ruta detallada con soporte constante para resolver cualquier pregunta.",
      "pack3.prereq1": "15 millones de kamas",
      "pack3.prereq2": "8 cuentas abonadas nivel 1",
      "pack3.prereq3": "Un presupuesto mayor acelera el progreso",
      "pack3.rentability": "<strong style=\"color:#AD46FF\">Rentabilidad</strong> — Al llegar a las zonas 200 generas entre 50 y 100M de kamas al día",
      "video.title": "Video demostrativo",
      "video.subtitle": "DofuScripts",
      "footer.communityTitle": "UNIRSE A LA COMUNIDAD",
      "footer.invite": "Enlace de invitación permanente:",
      "footer.widgetFallback": "El widget parece desactivado en el servidor. Actívalo en <strong>Ajustes del servidor → Widget → Activar widget</strong>.",
      "footer.joinCta": "¡Únete!",
      "footer.copyright": "Copyright 2025-2026 <span id=\"y\"></span> — Brutal HQ. Todos los derechos reservados."
    },
    pt: {
      "nav.home": "INÍCIO",
      "nav.packs": "NOSSOS PACOTES",
      "nav.video": "VÍDEO",
      "nav.discord": "Discord",
      "nav.languageLabel": "Mudar idioma",
      "nav.languageCode": "PT",
      "nav.languageFlag": "https://flagcdn.com/w40/pt.png",
      "hero.title": "Como um <br> impulso para o Dofus.",
      "hero.subtitle": "Ganhe uma vantagem injusta sobre outros <br> jogadores enquanto permanece completamente indetectável",
      "hero.ctaHeading": "Comece agora!",
      "hero.ctaBody": "Compre um de nossos pacotes e comece a usar bots com total orientação de nossa equipe. Ficamos com você do início ao fim, respondendo a todas as perguntas para que você se torne autônomo e descubra o lado menos conhecido do botting no Dofus. Um Google Doc com todas as builds e explicações do nível 1 ao 200 está incluído.",
      "hero.cardCombatTitle": "⚔️ Lutas automatizadas com uma equipe completa de 8 personagens",
      "hero.cardCombatBody": "Carregue seu script, inicie-o, venda os recursos e acumule kamas!",
      "hero.cardRoiTitle": "Rentabilidade garantida",
      "hero.cardRoiBody": "Seja rentável desde o primeiro dia.",
      "hero.sectionBgText": "Junte-se ao nosso círculo privado no <span style=\"color:#8cbbf5\">Discord</span> comprando qualquer pacote e desbloqueie todos os serviços Dofus que oferecemos.",
      "hero.sectionBgMembers": "+15 membros atualmente",
      "packs.title": "Nossos pacotes",
      "packs.subtitle": "Escolha o pacote que combina com seus objetivos",
      "packs.prereqTitle": "Pré-requisitos recomendados",
      "packs.noticeTitle": "Importante considerar ⚠️",
      "packs.noticeBody": "- Funciona em qualquer servidor<br>- Podemos fornecer proxies e contas novas<br>- Pagamento em 2 vezes possível para o maior pacote<br>- Nossos scripts são vitalícios (sem assinatura)",
      "packs.questions": "Perguntas? Contate <span style=\"color:#f0abfc\">@1brutal</span> no Discord.",
      "pack1.title": "🥉 Pacote Pedras de Alma (5 scripts)",
      "pack1.feature1": "Todas as zonas necessárias para criar a \"Grande Pedra de Alma Perfeita\".",
      "pack1.prereq1": "Ser nível 110/113",
      "pack1.prereq2": "Ter várias contas equipadas",
      "pack1.rentability": "<strong style=\"color:#AD46FF\">ROI</strong> — Cerca de 24M de kamas por dia",
      "pack2.title": "🥈 Zonas e calabouços nível 1–150 (30 scripts)",
      "pack2.tagline": "Rentabilidade garantida",
      "pack2.feature1": "Tudo o que você precisa para farmar pedras de alma.",
      "pack2.feature2": "Scripts para chegar ao nível 150 enquanto gera kamas em zonas e calabouços selecionados (mais de 20 scripts incluídos).",
      "pack2.feature3": "Um roteiro completo mais suporte individual para responder a todas as perguntas e indicar as melhores zonas ou calabouços.",
      "pack2.feature4": "Cada configuração DofusBook por faixa de nível mais os perfis de classe que você precisa de 1 a 150.",
      "pack2.prereq1": "15 milhões de kamas",
      "pack2.prereq2": "8 contas nível 1 assinadas",
      "pack2.rentability": "<strong style=\"color:#AD46FF\">ROI</strong> — 30 a 50M de kamas por dia",
      "pack3.title": "🥇 Zonas e calabouços nível 1–200 (43 scripts)",
      "pack3.feature1": "Tudo dos dois primeiros pacotes",
      "pack3.feature2": "Zonas e calabouços extras ao atingir o nível 198",
      "pack3.feature3": "Scripts 150–200 incluídos.",
      "pack3.feature4": "Todas as builds anteriores do DofusBook mais o equipamento para usar após o 198.",
      "pack3.feature5": "Um roteiro completo com orientação constante para que nenhuma de suas perguntas fique sem resposta.",
      "pack3.prereq1": "15 milhões de kamas",
      "pack3.prereq2": "8 contas nível 1 assinadas",
      "pack3.prereq3": "Um orçamento maior acelera as coisas",
      "pack3.rentability": "<strong style=\"color:#AD46FF\">ROI</strong> — Ao chegar nas zonas 200, espere 50–100M de kamas por dia",
      "video.title": "Vídeo de demonstração",
      "video.subtitle": "DofuScripts",
      "footer.communityTitle": "JUNTE-SE À COMUNIDADE",
      "footer.invite": "Link de convite permanente:",
      "footer.widgetFallback": "O widget parece desativado no servidor. Ative-o via <strong>Configurações do Servidor → Widget → Ativar Widget</strong>.",
      "footer.joinCta": "Junte-se a nós!",
      "footer.copyright": "Copyright 2025-2026 <span id=\"y\"></span> — Brutal HQ. Todos os direitos reservados."
    },
    ar: {
      "nav.home": "ACCUEIL",
      "nav.packs": "LES PACKS",
      "nav.video": "VIDEO",
      "nav.discord": "Discord",
      "nav.languageLabel": "Beddel lougha",
      "nav.languageCode": "MA",
      "nav.languageFlag": "https://flagcdn.com/w40/ma.png",
      "hero.title": "Bhal shi <br> boost l Dofus.",
      "hero.subtitle": "Rbe7 l'avantage 3la nuss lkhriin o <br> b9a maakatbanach ga3",
      "hero.ctaHeading": "Bda daba!",
      "hero.ctaBody": "Chri wahed men les packs dyalna o bda tkhdem lbot b tawjih kamel men lferqa dyalna. Kanb9aw m3ak men lwel htal lekher, o kanjawbou 3la ay soual bach tweli autonome o tktachef  jiha li maame3roufach dyal lbot f Dofus. Google Doc fih ga3 les builds o char7 men lvl 1 htal 200 rah dakhel m3ah.",
      "hero.cardCombatTitle": "⚔️ Modarebat otomotikiya b ferqa kamla dyal 8 d les persos",
      "hero.cardCombatBody": "Chargi script dyalek, tle9o, bi3 ressources o jme3 lkamas!",
      "hero.cardRoiTitle": "Rentabilité madmouna",
      "hero.cardRoiBody": "Kon rabe7 men nhar lowel.",
      "hero.sectionBgText": "Dkhol m3ana l cercle privé f <span style=\"color:#8cbbf5\">Discord</span> ila khditi ay pack o stafeD men ga3 les services Dofus li kan9edmo.",
      "hero.sectionBgMembers": "+15 membre daba",
      "packs.title": "Les packs dyalna",
      "packs.subtitle": "Khtar pack li kiwaleb l'ahdaf dyalek",
      "packs.prereqTitle": "Chorot matlouba",
      "packs.noticeTitle": "Haja mohima khass t3refha ⚠️",
      "packs.noticeBody": "- Khwdam f ay serveur<br>- N9edro n3tiwk proxies o comptes jdad<br>- Momkin tkheles 3la 2 marral l pack lkbir<br>- Les scripts dyalna dial mada lhayat (bla abonnement)",
      "packs.questions": "Chi soual? Sift l <span style=\"color:#f0abfc\">@1brutal</span> f Discord.",
      "pack1.title": "🥉 Pack Pierre d'Âmes (5 scripts)",
      "pack1.feature1": "Ga3 les zones bach tsayeb \"Grande pierre d'âme parfaite\".",
      "pack1.prereq1": "Level 110/113",
      "pack1.prereq2": "3andek comptes wajdine",
      "pack1.rentability": "<strong style=\"color:#AD46FF\">Rentabilité</strong> — Ta9riban 24M kamas f nhar",
      "pack2.title": "🥈 Zones o donjons lvl 1–150 (30 scripts)",
      "pack2.tagline": "Rentabilité madmouna",
      "pack2.feature1": "Kolchi li khassek bach tfarmi pierre d'âme.",
      "pack2.feature2": "Scripts bach tvesl lvl 150 o nta katdkhl kamas f zones o donjons mokhtara (ktar men 20 scripts).",
      "pack2.feature3": "Tri9 kamla o support 1:1 bach njawbk 3la ay soual o nwarik ahsan zones wla donjons.",
      "pack2.feature4": "Ga3 DofusBook builds l kol lvl bracket plus les profils de classe li htaje men 1 htal 150.",
      "pack2.prereq1": "15 melyoun kamas",
      "pack2.prereq2": "8 comptes abonnés lvl 1",
      "pack2.rentability": "<strong style=\"color:#AD46FF\">Rentabilité</strong> — 30 tal 50M kamas f nhar",
      "pack3.title": "🥇 Zones o donjons lvl 1–200 (43 scripts)",
      "pack3.feature1": "Kolchi men les 2 packs lowlin",
      "pack3.feature2": "Zones o donjons zaydin mli tawsal lvl 198",
      "pack3.feature3": "Scripts 150–200 dakhline.",
      "pack3.feature4": "Ga3 les DofusBook 9dam plus stuff li tkhdem bih foug 198.",
      "pack3.feature5": "Tri9 kamla m3a tawjih da2im bach hta soual mayb9a bla jawab.",
      "pack3.prereq1": "15 melyoun kamas",
      "pack3.prereq2": "8 comptes abonnés lvl 1",
      "pack3.prereq3": "Budget kbir kaysahel lmamouriya",
      "pack3.rentability": "<strong style=\"color:#AD46FF\">Rentabilité</strong> — Mli tawsal zones 200, tsenna 50–100M kamas f nhar",
      "video.title": "Video démonstrative",
      "video.subtitle": "DofuScripts",
      "footer.communityTitle": "DKHOL M3ANA",
      "footer.invite": "Lien d'invitation daim:",
      "footer.widgetFallback": "L widget banlih désactivé f serveur. Bach takctivih: <strong>Server Settings → Widget → Enable Widget</strong>.",
      "footer.joinCta": "Dkhol m3ana!",
      "footer.copyright": "Copyright 2025-2026 <span id=\"y\"></span> — Brutal HQ. Tous droits réservés."
    }
  };

  const defaultLanguage = "fr";
  const storedLanguage = localStorage.getItem("dofuLang");
  let activeLanguage = translations[storedLanguage] ? storedLanguage : defaultLanguage;

  const languageButton = document.getElementById("languageButton");
  const languageMenu = document.getElementById("languageMenu");
  const languageButtonLabel = document.getElementById("languageButtonLabel");
  const languageButtonFlag = document.getElementById("languageButtonFlag");
  const languageOptions = document.querySelectorAll(".language-option");
  const srLanguageLabel = document.querySelector('.sr-only[data-i18n="nav.languageLabel"]');
  const i18nNodes = document.querySelectorAll("[data-i18n]");

  const closeLanguageMenu = () => {
    if (!languageButton || !languageMenu) return;
    languageButton.setAttribute("aria-expanded", "false");
    languageMenu.classList.remove("open");
  };

  const toggleLanguageMenu = () => {
    if (!languageButton || !languageMenu) return;
    const expanded = languageButton.getAttribute("aria-expanded") === "true";
    languageButton.setAttribute("aria-expanded", (!expanded).toString());
    languageMenu.classList.toggle("open", !expanded);
  };

  const setLanguage = (lang) => {
    const dictionary = translations[lang] || translations[defaultLanguage];
    i18nNodes.forEach((node) => {
      const key = node.dataset.i18n;
      if (key && Object.prototype.hasOwnProperty.call(dictionary, key)) {
        node.innerHTML = dictionary[key];
      }
    });
    activeLanguage = lang;
    document.documentElement.lang = lang;

    // Set text direction: LTR for all (Darija is Latin script)
    document.documentElement.dir = 'ltr';

    const buttonCode = dictionary["nav.languageCode"] || lang.toUpperCase();
    if (languageButtonLabel) {
      languageButtonLabel.textContent = buttonCode;
    }
    const buttonFlag = dictionary["nav.languageFlag"] || "";
    if (languageButtonFlag) {
      languageButtonFlag.src = buttonFlag;
    }
    const label = dictionary["nav.languageLabel"] || "Changer de langue";
    if (languageButton) {
      languageButton.setAttribute("aria-label", label);
    }
    if (srLanguageLabel) {
      srLanguageLabel.textContent = label;
    }
    languageOptions.forEach((option) => {
      option.classList.toggle("active", option.dataset.lang === lang);
    });
    localStorage.setItem("dofuLang", lang);
  };

  if (languageButton && languageMenu) {
    languageButton.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleLanguageMenu();
    });
  }

  languageOptions.forEach((option) => {
    option.addEventListener("click", (event) => {
      event.stopPropagation();
      const { lang } = option.dataset;
      if (lang) {
        setLanguage(lang);
        closeLanguageMenu();
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!languageMenu || !languageButton) return;
    const clickedButton = languageButton.contains(event.target);
    const clickedMenu = languageMenu.contains(event.target);
    if (!clickedButton && !clickedMenu) {
      closeLanguageMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLanguageMenu();
    }
  });

  setLanguage(activeLanguage);
});


