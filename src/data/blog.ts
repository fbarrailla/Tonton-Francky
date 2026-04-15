export interface BlogSection {
  type: 'paragraph' | 'heading' | 'list' | 'quote' | 'code' | 'gallery';
  text?: string;
  items?: string[];
  images?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  date: string;
  readTime: number;
  category: string;
  categoryEn: string;
  thumbnail: string;
  ebookCta?: boolean;
  ebookType?: 'claude' | 'ai' | 'vietnam';
  content: BlogSection[];
  contentEn: BlogSection[];
}

const posts: BlogPost[] = [
  {
    slug: 'monetiser-site-vitrine',
    title: 'Monétiser un site vitrine : ce qui marche vraiment',
    titleEn: 'Monetizing a Showcase Website: What Actually Works',
    excerpt: "La plupart des conseils sur la monétisation sont théoriques. Voici ce qui fonctionne vraiment quand ton site a peu de trafic — et dans quel ordre commencer.",
    excerptEn: "Most advice on monetization is theoretical. Here's what actually works when your site has low traffic — and in which order to start.",
    date: '2026-04-11',
    readTime: 6,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/blog/monetiser-vitrine.png',
    content: [
      {
        type: 'paragraph',
        text: "Tu as lancé ton site. Il est en ligne. Il est propre. Et maintenant tu te demandes : est-ce que ça peut rapporter quelque chose ?",
      },
      {
        type: 'paragraph',
        text: "La plupart des articles vont te parler d'AdSense, d'affiliation en masse, de trafic organique. Des conseils pour des sites qui font déjà 50 000 visites par mois.",
      },
      {
        type: 'paragraph',
        text: "Toi tu en fais 300. Et tu veux quand même avancer.",
      },
      {
        type: 'quote',
        text: "Un petit site bien ciblé peut générer plus qu'un gros site généraliste. La taille n'est pas le facteur déterminant. L'intention si.",
      },
      {
        type: 'heading',
        text: "Ce qui ne marche pas (et pourquoi on te le vend quand même)",
      },
      {
        type: 'paragraph',
        text: "Commençons par vider le sac des mauvaises idées.",
      },
      {
        type: 'list',
        items: [
          "Google AdSense — sur un site à faible trafic, tu gagneras littéralement quelques centimes par mois. Et tu dégrades l'expérience de tes visiteurs pour ça.",
          "Attendre d'avoir du trafic avant de monétiser — le trafic ne vient pas tout seul. La monétisation aide à créer de la valeur, qui attire le trafic.",
          "Le bouton \"travaillons ensemble\" sans offre claire — les visiteurs ne savent pas ce que tu proposes. Ils passent leur chemin.",
        ],
      },
      {
        type: 'paragraph',
        text: "Ces stratégies fonctionnent à grande échelle. À petite échelle, elles sont soit invisibles, soit contre-productives.",
      },
      {
        type: 'heading',
        text: "1. Les services : le levier le plus puissant sur un petit trafic",
      },
      {
        type: 'paragraph',
        text: "Un seul visiteur converti en client, c'est souvent 500€, 1 000€, parfois plus. Tu n'as pas besoin de 10 000 visites pour que ça vaille le coup.",
      },
      {
        type: 'paragraph',
        text: "Mais ça ne marche que si tu as une offre lisible. Pas juste un portfolio. Une proposition : pour qui tu travailles, ce que tu fais exactement, à quel prix.",
      },
      {
        type: 'list',
        items: [
          "Une page dédiée à ton offre, pas juste une section \"contact\"",
          "Un tarif indicatif ou une fourchette — ça filtre les mauvais leads et rassure les bons",
          "Un exemple concret de résultat, pas juste une liste de compétences",
        ],
      },
      {
        type: 'quote',
        text: "Un site vitrine sans offre claire, c'est une vitrine avec les volets fermés.",
      },
      {
        type: 'heading',
        text: "2. Les produits numériques : vendre pendant que tu dors",
      },
      {
        type: 'paragraph',
        text: "Un ebook, un template, un guide PDF, un cours en ligne. Des produits que tu crées une fois et qui se vendent en continu.",
      },
      {
        type: 'paragraph',
        text: "Le gros avantage : tu n'as pas besoin de trafic sur ton site pour commencer. Si tu as une audience ailleurs — une newsletter, un compte Instagram, une communauté — tu peux vendre immédiatement.",
      },
      {
        type: 'paragraph',
        text: "La règle d'or : le produit doit résoudre un problème précis que tu as toi-même rencontré. Pas un guide généraliste. Un guide sur le problème exact que tes visiteurs ont.",
      },
      {
        type: 'list',
        items: [
          "Gumroad ou Lemon Squeezy pour la vente sans infrastructure",
          "Un prix entre 9€ et 49€ pour commencer — facile à acheter, suffisant pour valider",
          "Une page de vente intégrée à ton site, pas juste un lien externe",
        ],
      },
      {
        type: 'heading',
        text: "3. L'affiliation contextuelle : oui, mais honnête",
      },
      {
        type: 'paragraph',
        text: "L'affiliation fonctionne quand elle est naturelle. Tu parles d'un outil que tu utilises vraiment ? Tu mets un lien affilié. C'est tout.",
      },
      {
        type: 'paragraph',
        text: "Ce qui ne fonctionne pas : les listes \"top 10 outils\" sans contexte, les liens agressifs, les comparatifs que tu n'as jamais testés.",
      },
      {
        type: 'paragraph',
        text: "Ce qui fonctionne : un article sur ton workflow avec les outils que tu utilises au quotidien. Tes lecteurs font confiance à ton retour d'expérience. Le clic vient naturellement.",
      },
      {
        type: 'quote',
        text: "L'affiliation honnête, c'est recommander quelque chose que tu paierais de ta poche. Le reste est du bruit.",
      },
      {
        type: 'heading',
        text: "4. La newsletter : l'actif que tu possèdes vraiment",
      },
      {
        type: 'paragraph',
        text: "Ton site convertit les visiteurs en abonnés. Ta newsletter convertit les abonnés en clients. C'est le seul canal que tu contrôles entièrement — pas d'algorithme, pas de reach organique qui s'effondre.",
      },
      {
        type: 'paragraph',
        text: "Tu n'as pas besoin de 10 000 abonnés. 500 personnes qui lisent vraiment ce que tu écris valent plus que 50 000 followers Instagram.",
      },
      {
        type: 'list',
        items: [
          "Un formulaire d'inscription visible dès la page d'accueil",
          "Un incentive simple : un guide gratuit, un template, un mini-cours",
          "Une cadence régulière — mensuelle au minimum, hebdomadaire si tu peux",
        ],
      },
      {
        type: 'heading',
        text: "Dans quel ordre commencer",
      },
      {
        type: 'paragraph',
        text: "Si tu pars de zéro, voici l'ordre qui fait sens :",
      },
      {
        type: 'list',
        items: [
          "Jour 1 — Installe un formulaire de newsletter. Même si tu n'as rien à envoyer encore.",
          "Semaine 1 — Clarifie ton offre de service. Une page, une proposition, un tarif.",
          "Mois 1 — Lance un premier produit numérique simple. Un guide, un template.",
          "En parallèle — Intègre des liens affiliés dans tes articles existants là où c'est pertinent.",
        ],
      },
      {
        type: 'paragraph',
        text: "La monétisation n'est pas une destination. C'est une couche que tu ajoutes progressivement, article par article, offre par offre.",
      },
      {
        type: 'quote',
        text: "Tu n'as pas besoin d'un grand site. Tu as besoin d'un site qui a quelque chose à offrir.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "You launched your site. It's live. It looks clean. And now you're wondering: can this actually make money?",
      },
      {
        type: 'paragraph',
        text: "Most articles will tell you about AdSense, mass affiliate marketing, organic traffic. Advice for sites already pulling 50,000 visits a month.",
      },
      {
        type: 'paragraph',
        text: "You're getting 300. And you still want to move forward.",
      },
      {
        type: 'quote',
        text: "A small, well-targeted site can earn more than a large generic one. Size isn't the deciding factor. Intent is.",
      },
      {
        type: 'heading',
        text: "What doesn't work (and why people still sell it to you)",
      },
      {
        type: 'paragraph',
        text: "Let's clear out the bad ideas first.",
      },
      {
        type: 'list',
        items: [
          "Google AdSense — on a low-traffic site, you'll earn literally a few cents a month. And you'll degrade the user experience in the process.",
          "Waiting for traffic before monetizing — traffic doesn't come on its own. Monetization helps create value, which attracts traffic.",
          "A \"let's work together\" button with no clear offer — visitors don't know what you're proposing. They move on.",
        ],
      },
      {
        type: 'paragraph',
        text: "These strategies work at scale. At small scale, they're either invisible or counterproductive.",
      },
      {
        type: 'heading',
        text: "1. Services: the most powerful lever on low traffic",
      },
      {
        type: 'paragraph',
        text: "One visitor converted into a client is often €500, €1,000, sometimes more. You don't need 10,000 visits for it to be worth it.",
      },
      {
        type: 'paragraph',
        text: "But it only works if you have a readable offer. Not just a portfolio. A proposition: who you work with, exactly what you do, at what price.",
      },
      {
        type: 'list',
        items: [
          "A dedicated page for your offer, not just a \"contact\" section",
          "An indicative price or range — it filters bad leads and reassures good ones",
          "A concrete example of a result, not just a list of skills",
        ],
      },
      {
        type: 'quote',
        text: "A showcase site without a clear offer is a storefront with the shutters closed.",
      },
      {
        type: 'heading',
        text: "2. Digital products: selling while you sleep",
      },
      {
        type: 'paragraph',
        text: "An ebook, a template, a PDF guide, an online course. Products you create once and sell continuously.",
      },
      {
        type: 'paragraph',
        text: "The big advantage: you don't need site traffic to start. If you have an audience elsewhere — a newsletter, an Instagram account, a community — you can sell immediately.",
      },
      {
        type: 'paragraph',
        text: "The golden rule: the product must solve a specific problem you've personally encountered. Not a generic guide. A guide for the exact problem your visitors have.",
      },
      {
        type: 'list',
        items: [
          "Gumroad or Lemon Squeezy for selling without infrastructure",
          "A price between €9 and €49 to start — easy to buy, enough to validate",
          "A sales page integrated into your site, not just an external link",
        ],
      },
      {
        type: 'heading',
        text: "3. Contextual affiliate links: yes, but honest",
      },
      {
        type: 'paragraph',
        text: "Affiliate marketing works when it's natural. You're writing about a tool you actually use? Add an affiliate link. That's it.",
      },
      {
        type: 'paragraph',
        text: "What doesn't work: \"top 10 tools\" lists with no context, aggressive links, comparisons you've never actually tested.",
      },
      {
        type: 'paragraph',
        text: "What works: an article about your workflow with the tools you use daily. Your readers trust your hands-on experience. The click comes naturally.",
      },
      {
        type: 'quote',
        text: "Honest affiliate marketing means recommending something you'd pay for yourself. The rest is noise.",
      },
      {
        type: 'heading',
        text: "4. The newsletter: the asset you actually own",
      },
      {
        type: 'paragraph',
        text: "Your site converts visitors into subscribers. Your newsletter converts subscribers into clients. It's the only channel you fully control — no algorithm, no organic reach collapsing overnight.",
      },
      {
        type: 'paragraph',
        text: "You don't need 10,000 subscribers. 500 people who genuinely read what you write are worth more than 50,000 Instagram followers.",
      },
      {
        type: 'list',
        items: [
          "A sign-up form visible from the homepage",
          "A simple incentive: a free guide, a template, a mini-course",
          "A regular cadence — monthly at minimum, weekly if you can",
        ],
      },
      {
        type: 'heading',
        text: "What order to start in",
      },
      {
        type: 'paragraph',
        text: "If you're starting from zero, here's the order that makes sense:",
      },
      {
        type: 'list',
        items: [
          "Day 1 — Set up a newsletter form. Even if you have nothing to send yet.",
          "Week 1 — Clarify your service offer. One page, one proposition, one price.",
          "Month 1 — Launch a first simple digital product. A guide, a template.",
          "In parallel — Add affiliate links to existing articles where it's genuinely relevant.",
        ],
      },
      {
        type: 'paragraph',
        text: "Monetization isn't a destination. It's a layer you add progressively, article by article, offer by offer.",
      },
      {
        type: 'quote',
        text: "You don't need a big site. You need a site that has something to offer.",
      },
    ],
  },
  {
    slug: 'creer-site-web-claude-code',
    title: "J'ai écrit un e-book pour que tu crées ton site avec Claude Code",
    titleEn: 'I Wrote an E-book So You Can Build Your Website with Claude Code',
    excerpt: "La plupart des gens ont une idée mais ne lancent jamais rien. Voici pourquoi j'ai écrit ce guide — et ce qu'il va changer pour toi.",
    excerptEn: "Most people have an idea but never ship anything. Here's why I wrote this guide — and what it'll change for you.",
    date: '2026-04-09',
    readTime: 5,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/ebook.png',
    ebookCta: true,
    ebookType: 'claude',
    content: [
      {
        type: 'paragraph',
        text: "La plupart des gens ont une idée. Un projet, un portfolio, une boutique, un blog. Quelque chose qu'ils veulent mettre en ligne.",
      },
      {
        type: 'paragraph',
        text: "Mais ils ne le font jamais.",
      },
      {
        type: 'paragraph',
        text: "Pas par manque de motivation. Par manque de point de départ.",
      },
      {
        type: 'heading',
        text: "L'ancienne façon de faire",
      },
      {
        type: 'paragraph',
        text: "Créer un site web, ça voulait dire apprendre. Beaucoup apprendre.",
      },
      {
        type: 'list',
        items: [
          'Le HTML pour la structure',
          'Le CSS pour le design',
          'Le JavaScript pour l\'interactivité',
          'Un framework comme React ou Vue',
          'L\'hébergement, le domaine, les DNS...',
        ],
      },
      {
        type: 'paragraph',
        text: "Des semaines de tutoriels. Des mois de pratique. Et souvent, on abandonne avant même d'avoir lancé la première page.",
      },
      {
        type: 'quote',
        text: 'Le problème, ce n\'est pas le manque de ressources. C\'est l\'écart entre "apprendre" et "construire".',
      },
      {
        type: 'heading',
        text: 'Ce qui a changé',
      },
      {
        type: 'paragraph',
        text: "En 2024, un outil a tout changé pour moi : Claude Code.",
      },
      {
        type: 'paragraph',
        text: "Claude Code, c'est un assistant IA qui s'intègre directement dans ton terminal. Tu lui décris ce que tu veux, il écrit le code, crée les fichiers, structure le projet.",
      },
      {
        type: 'paragraph',
        text: "Tu n'as plus besoin de tout savoir. Tu as besoin de savoir quoi demander.",
      },
      {
        type: 'quote',
        text: 'L\'IA écrit le code. Toi tu définis le résultat.',
      },
      {
        type: 'heading',
        text: "Ce que j'ai écrit dans cet e-book",
      },
      {
        type: 'paragraph',
        text: "J'ai passé des heures à tester ce workflow. À comprendre ce qui bloque les débutants. À simplifier chaque étape.",
      },
      {
        type: 'paragraph',
        text: "Et j'ai mis tout ça dans un guide pratique, structuré en chapitres qui s'enchaînent logiquement :",
      },
      {
        type: 'list',
        items: [
          'Chapitre 1 — Maîtriser le terminal (la base de tout)',
          'Chapitre 2 — Installer et lancer Claude Code',
          'Chapitre 3 — Construire ton premier projet',
          'Chapitre 4 — Designer une interface moderne',
          'Chapitre 5 — Déployer ton site en ligne',
        ],
      },
      {
        type: 'paragraph',
        text: "Chaque chapitre est fait pour être appliqué immédiatement. Pas de théorie inutile. Pas de détours.",
      },
      {
        type: 'heading',
        text: 'Pour qui c\'est fait',
      },
      {
        type: 'paragraph',
        text: "C'est fait pour toi si :",
      },
      {
        type: 'list',
        items: [
          'Tu veux construire, pas juste apprendre',
          'Tu en as marre des tutoriels interminables',
          'Tu veux quelque chose en ligne, rapidement',
        ],
      },
      {
        type: 'paragraph',
        text: "Ce n'est pas fait pour toi si tu veux tout comprendre avant de commencer. Ce livre, c'est action d'abord.",
      },
      {
        type: 'heading',
        text: 'Le seul état d\'esprit dont tu as besoin',
      },
      {
        type: 'quote',
        text: 'Tu n\'es pas là pour devenir développeur. Tu es là pour devenir un builder.',
      },
      {
        type: 'paragraph',
        text: "Tu n'as pas besoin de tout savoir. Tu as besoin de savoir comment demander, affiner, et livrer.",
      },
      {
        type: 'paragraph',
        text: "La vitesse prime sur la perfection. Un site imparfait en ligne vaut mieux qu'un projet parfait qui n'existe que dans ta tête.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "Most people have an idea. A project, a portfolio, a shop, a blog. Something they want to put online.",
      },
      {
        type: 'paragraph',
        text: "But they never do it.",
      },
      {
        type: 'paragraph',
        text: "Not for lack of motivation. For lack of a starting point.",
      },
      {
        type: 'heading',
        text: 'The old way',
      },
      {
        type: 'paragraph',
        text: "Building a website used to mean learning. A lot of learning.",
      },
      {
        type: 'list',
        items: [
          'HTML for structure',
          'CSS for design',
          'JavaScript for interactivity',
          'A framework like React or Vue',
          'Hosting, domain, DNS...',
        ],
      },
      {
        type: 'paragraph',
        text: "Weeks of tutorials. Months of practice. And often, you give up before even launching the first page.",
      },
      {
        type: 'quote',
        text: "The problem isn't a lack of resources. It's the gap between \"learning\" and \"building\".",
      },
      {
        type: 'heading',
        text: 'What changed',
      },
      {
        type: 'paragraph',
        text: "In 2024, one tool changed everything for me: Claude Code.",
      },
      {
        type: 'paragraph',
        text: "Claude Code is an AI assistant that integrates directly into your terminal. You describe what you want, it writes the code, creates the files, structures the project.",
      },
      {
        type: 'paragraph',
        text: "You no longer need to know everything. You need to know what to ask.",
      },
      {
        type: 'quote',
        text: 'AI writes the code. You define the outcome.',
      },
      {
        type: 'heading',
        text: "What I wrote in this e-book",
      },
      {
        type: 'paragraph',
        text: "I spent hours testing this workflow. Understanding what blocks beginners. Simplifying every step.",
      },
      {
        type: 'paragraph',
        text: "And I put all of it into a practical guide, structured in chapters that flow naturally:",
      },
      {
        type: 'list',
        items: [
          'Chapter 1 — Mastering the Terminal (the foundation of everything)',
          'Chapter 2 — Installing and Launching Claude Code',
          'Chapter 3 — Building Your First Project',
          'Chapter 4 — Designing a Modern Interface',
          'Chapter 5 — Deploying Your Website Online',
        ],
      },
      {
        type: 'paragraph',
        text: "Each chapter is meant to be applied immediately. No useless theory. No detours.",
      },
      {
        type: 'heading',
        text: "Who it's for",
      },
      {
        type: 'paragraph',
        text: "It's for you if:",
      },
      {
        type: 'list',
        items: [
          'You want to build, not just learn',
          "You're tired of endless tutorials",
          'You want something live, fast',
        ],
      },
      {
        type: 'paragraph',
        text: "It's not for you if you want to understand everything before starting. This book is action first.",
      },
      {
        type: 'heading',
        text: 'The only mindset you need',
      },
      {
        type: 'quote',
        text: "You are not here to become a developer. You are here to become a builder.",
      },
      {
        type: 'paragraph',
        text: "You don't need to know everything. You need to know how to ask, refine, and ship.",
      },
      {
        type: 'paragraph',
        text: "Speed matters more than perfection. An imperfect site online is worth more than a perfect project that only exists in your head.",
      },
    ],
  },
  {
    slug: 'maitriser-lia-prompt-engineering',
    title: "L'IA ne te remplacera pas. Mais quelqu'un qui sait mieux te parler, oui.",
    titleEn: "AI Won't Replace You. But Someone Who Knows How to Talk to It Better Will.",
    excerpt: "La majorité des gens utilisent l'IA comme un moteur de recherche amélioré. Voici pourquoi c'est une erreur — et comment le prompt engineering change tout.",
    excerptEn: "Most people use AI like a fancy search engine. Here's why that's a mistake — and how prompt engineering changes everything.",
    date: '2026-04-09',
    readTime: 6,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/ebook-ai-thumb.png',
    ebookCta: true,
    ebookType: 'ai',
    content: [
      {
        type: 'paragraph',
        text: "L'IA n'est plus un concept futuriste. ChatGPT, Claude, Gemini — ces outils sont là, accessibles, gratuits pour la plupart.",
      },
      {
        type: 'paragraph',
        text: "Et pourtant, la majorité des gens les utilisent mal.",
      },
      {
        type: 'paragraph',
        text: "Ils posent des questions vagues. Ils obtiennent des réponses génériques. Ils concluent que \"l'IA, c'est overrated\".",
      },
      {
        type: 'quote',
        text: "L'IA est aussi bonne que le prompt que tu lui donnes.",
      },
      {
        type: 'heading',
        text: "Ce que l'IA fait vraiment",
      },
      {
        type: 'paragraph',
        text: "Voilà ce que personne ne t'explique clairement : l'IA ne \"pense\" pas. Elle ne comprend pas. Elle prédit.",
      },
      {
        type: 'paragraph',
        text: "Pense à l'autocomplete de ton téléphone — mais entraîné sur des milliards de textes, avec une puissance de calcul astronomique. C'est ça, l'IA.",
      },
      {
        type: 'list',
        items: [
          'Elle prédit les mots les plus probables selon ton contexte',
          'Elle imite des tonnes et des tons différents',
          'Elle structure des idées avec une fluidité impressionnante',
          'Elle peut se tromper avec une confiance absolue',
        ],
      },
      {
        type: 'paragraph',
        text: "Donc si ton prompt est flou, l'IA remplit les blancs avec des suppositions. Et ces suppositions sont rarement les bonnes.",
      },
      {
        type: 'heading',
        text: "Le prompt engineering, c'est quoi exactement ?",
      },
      {
        type: 'paragraph',
        text: "C'est l'art de poser les bonnes questions pour obtenir les meilleurs résultats.",
      },
      {
        type: 'paragraph',
        text: "Regarde la différence :",
      },
      {
        type: 'list',
        items: [
          'Prompt faible : "Écris quelque chose sur le marketing"',
          'Prompt fort : "Écris un guide de 500 mots sur le marketing digital pour débutants, avec 3 conseils actionnables et des exemples concrets"',
        ],
      },
      {
        type: 'paragraph',
        text: "Même IA. Résultat complètement différent.",
      },
      {
        type: 'heading',
        text: "La structure d'un prompt parfait",
      },
      {
        type: 'paragraph',
        text: "Un bon prompt a 4 éléments clés :",
      },
      {
        type: 'list',
        items: [
          'Rôle — dis à l\'IA qui elle est : "Tu es un copywriter professionnel"',
          'Tâche — ce qu\'elle doit faire : "Écris une page de vente percutante"',
          'Contexte — donne des détails : "Le produit est un e-book sur l\'IA pour débutants"',
          'Format — définis le résultat : "Utilise des bullet points et un ton persuasif"',
        ],
      },
      {
        type: 'quote',
        text: "Tu n'apprends pas à coder. Tu apprends à commander. C'est un superpouvoir différent — et tout aussi puissant.",
      },
      {
        type: 'heading',
        text: "Deux types de personnes",
      },
      {
        type: 'paragraph',
        text: "Il y a maintenant deux catégories de personnes dans le monde du travail :",
      },
      {
        type: 'list',
        items: [
          'Ceux qui utilisent l\'IA au hasard → questions basiques, résultats moyens, facilement remplaçables',
          'Ceux qui maîtrisent les prompts → contrôlent les outputs, automatisent, construisent des systèmes, avancent 10x plus vite',
        ],
      },
      {
        type: 'paragraph',
        text: "La bonne nouvelle : la plupart des gens sont encore dans la première catégorie. L'opportunité est immense.",
      },
      {
        type: 'heading',
        text: "Le changement de mindset essentiel",
      },
      {
        type: 'paragraph',
        text: "Avant l'IA, tu étais l'exécutant. Tu faisais le travail.",
      },
      {
        type: 'paragraph',
        text: "Maintenant, tu es le directeur. L'IA est l'exécutant.",
      },
      {
        type: 'paragraph',
        text: "Au lieu de penser \"qu'est-ce que je dois faire ?\", tu penses \"qu'est-ce que je dois demander ?\"",
      },
      {
        type: 'quote',
        text: "Meilleurs prompts = meilleurs résultats. Il n'y a pas de raccourci.",
      },
      {
        type: 'heading',
        text: "Ce que couvre l'e-book",
      },
      {
        type: 'paragraph',
        text: "J'ai condensé tout ça dans un guide pratique en 11 chapitres :",
      },
      {
        type: 'list',
        items: [
          'Ce qu\'est vraiment l\'IA (sans le jargon)',
          'Le prompt engineering de zéro',
          'L\'anatomie d\'un prompt parfait',
          'Les techniques avancées (Chain of Thought, Role Stacking, Prompt Chaining)',
          'Les cas d\'usage concrets : business, dev, contenu, freelance',
          'Les erreurs classiques et comment les corriger',
          'Les outils IA à connaître absolument',
          '10 prompts prêts à l\'emploi en bonus',
        ],
      },
      {
        type: 'paragraph',
        text: "Pas de théorie inutile. Chaque chapitre est fait pour être appliqué immédiatement.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "AI is no longer a futuristic concept. ChatGPT, Claude, Gemini — these tools are here, accessible, mostly free.",
      },
      {
        type: 'paragraph',
        text: "And yet, most people are using them wrong.",
      },
      {
        type: 'paragraph',
        text: "They ask vague questions. They get generic answers. They conclude that \"AI is overrated.\"",
      },
      {
        type: 'quote',
        text: "AI is only as good as the prompt you give it.",
      },
      {
        type: 'heading',
        text: "What AI actually does",
      },
      {
        type: 'paragraph',
        text: "Here's what nobody clearly explains: AI doesn't \"think.\" It doesn't understand. It predicts.",
      },
      {
        type: 'paragraph',
        text: "Think of your phone's autocomplete — but trained on billions of texts with astronomical computing power. That's AI.",
      },
      {
        type: 'list',
        items: [
          'It predicts the most likely words based on your context',
          'It mimics countless tones and styles',
          'It structures ideas with impressive fluency',
          'It can be completely wrong with absolute confidence',
        ],
      },
      {
        type: 'paragraph',
        text: "So if your prompt is vague, AI fills the gaps with assumptions. And those assumptions are rarely right.",
      },
      {
        type: 'heading',
        text: "What is prompt engineering, exactly?",
      },
      {
        type: 'paragraph',
        text: "It's the art of asking the right questions to get the best results.",
      },
      {
        type: 'paragraph',
        text: "Look at the difference:",
      },
      {
        type: 'list',
        items: [
          'Weak prompt: "Write something about marketing"',
          'Strong prompt: "Write a 500-word beginner-friendly guide on digital marketing, including 3 actionable tips and real-world examples"',
        ],
      },
      {
        type: 'paragraph',
        text: "Same AI. Completely different result.",
      },
      {
        type: 'heading',
        text: "The anatomy of a perfect prompt",
      },
      {
        type: 'paragraph',
        text: "A great prompt has 4 key elements:",
      },
      {
        type: 'list',
        items: [
          'Role — tell AI who it is: "You are a professional copywriter"',
          'Task — what it should do: "Write an engaging landing page"',
          'Context — give background: "The product is an AI ebook for beginners"',
          'Format — define the output: "Use bullet points and a persuasive tone"',
        ],
      },
      {
        type: 'quote',
        text: "You're not learning to code. You're learning to direct. It's a different superpower — and just as powerful.",
      },
      {
        type: 'heading',
        text: "Two types of people",
      },
      {
        type: 'paragraph',
        text: "There are now two categories of people in the workforce:",
      },
      {
        type: 'list',
        items: [
          'Those who use AI casually → basic questions, average results, easily replaceable',
          'Those who master prompts → control the output, automate, build systems, move 10x faster',
        ],
      },
      {
        type: 'paragraph',
        text: "The good news: most people are still in the first category. The opportunity is massive.",
      },
      {
        type: 'heading',
        text: "The essential mindset shift",
      },
      {
        type: 'paragraph',
        text: "Before AI, you were the executor. You did the work.",
      },
      {
        type: 'paragraph',
        text: "Now, you are the director. AI is the executor.",
      },
      {
        type: 'paragraph',
        text: "Instead of thinking \"what should I do?\", you think \"what should I ask?\"",
      },
      {
        type: 'quote',
        text: "Better prompts = better results. There is no shortcut.",
      },
      {
        type: 'heading',
        text: "What the e-book covers",
      },
      {
        type: 'paragraph',
        text: "I packed all of this into a practical 11-chapter guide:",
      },
      {
        type: 'list',
        items: [
          'What AI really is (without the jargon)',
          'Prompt engineering from scratch',
          'The anatomy of a perfect prompt',
          'Advanced techniques (Chain of Thought, Role Stacking, Prompt Chaining)',
          'Real-world use cases: business, dev, content creation, freelancing',
          'Common mistakes and how to fix them',
          'The AI tools you need to know',
          '10 ready-to-use bonus prompts',
        ],
      },
      {
        type: 'paragraph',
        text: "No useless theory. Every chapter is designed to be applied immediately.",
      },
    ],
  },
  {
    slug: 'hanoi-tam-dao-vietnam',
    title: "Ha Noi et Tam Dao : deux visages du Vietnam du Nord",
    titleEn: "Ha Noi and Tam Dao: Two Faces of Northern Vietnam",
    excerpt: "La capitale chaotique et envoûtante, puis une escapade dans les nuages à 1 000 mètres d'altitude. Deux endroits, un seul voyage inoubliable.",
    excerptEn: "The chaotic and spellbinding capital, then a getaway into the clouds at 1,000 metres altitude. Two places, one unforgettable trip.",
    date: '2026-04-09',
    readTime: 7,
    category: 'Voyages',
    categoryEn: 'Travels',
    thumbnail: '/blog/ha-noi-01.jpg',
    content: [
      {
        type: 'paragraph',
        text: "Ha Noi, c'est le genre de ville qui t'agresse et te séduit en même temps. Les klaxons, la fumée des motos, les ruelles du vieux quartier qui débordent de vie — c'est intense, c'est bruyant, c'est magnifique.",
      },
      {
        type: 'paragraph',
        text: "J'y suis arrivé sans trop savoir à quoi m'attendre. Je repars avec la certitude que c'est l'une des villes les plus vivantes que j'ai traversées.",
      },
      {
        type: 'gallery',
        images: [
          '/blog/ha-noi-01.jpg',
          '/blog/ha-noi-02.jpg',
        ],
      },
      {
        type: 'heading',
        text: "Le Vieux Quartier : le cœur battant de la ville",
      },
      {
        type: 'paragraph',
        text: "Le Vieux Quartier de Ha Noi, c'est un labyrinthe. Chaque rue porte le nom d'un métier — la rue des marchands de soie, celle des herboristes, celle des vendeurs de papier. Un héritage vieux de plusieurs siècles qui résiste encore à la modernisation.",
      },
      {
        type: 'paragraph',
        text: "Je me suis perdu volontairement dedans. C'est le meilleur moyen de découvrir les vraies adresses : les gargotes sans menu en anglais, les cafés cachés au 3ème étage, les ruelles où des gamins jouent au foot entre les scooters.",
      },
      {
        type: 'gallery',
        images: [
          '/blog/ha-noi-07.jpg',
          '/blog/ha-noi-04.jpg',
        ],
      },
      {
        type: 'heading',
        text: "Manger à Ha Noi : une religion",
      },
      {
        type: 'paragraph',
        text: "Les Hanoïens mangent à toute heure, partout, sur des petits tabourets en plastique posés directement sur le trottoir. Et c'est absolument délicieux.",
      },
      {
        type: 'list',
        items: [
          'Bún Chả — le plat culte de la capitale : nouilles de riz, grillades de porc, sauce sucrée-acide et herbes fraîches',
          'Bánh Tráng Nướng — la "pizza vietnamienne" de rue, croustillante et généreuse',
          'Phở Bò — le classique, meilleur ici qu\'ailleurs selon les locaux',
          'Cà Phê Trứng — le café à l\'œuf, une spécialité hanoïenne unique',
        ],
      },
      {
        type: 'gallery',
        images: [
          '/blog/ha-noi-03.jpg',
        ],
      },
      {
        type: 'heading',
        text: "Les lacs : des îlots de calme au milieu du chaos",
      },
      {
        type: 'paragraph',
        text: "Ha Noi est une ville de lacs. Le plus célèbre, Hoan Kiem, est au centre de tout. Le matin, les habitants y pratiquent le tai-chi au bord de l'eau. Le soir, les familles s'y promènent.",
      },
      {
        type: 'paragraph',
        text: "Plus au nord, le lac de l'Ouest (Hồ Tây) est immense. J'y ai traîné un après-midi entier, à regarder le temps passer. La lumière du coucher de soleil sur l'eau — c'est l'un de ces moments qu'on n'oublie pas.",
      },
      {
        type: 'gallery',
        images: [
          '/blog/ha-noi-05.jpg',
          '/blog/ha-noi-06.jpg',
        ],
      },
      {
        type: 'heading',
        text: "Le Musée d'Ethnologie : une leçon d'histoire vivante",
      },
      {
        type: 'paragraph',
        text: "Je ne suis pas grand fan des musées en général. Mais celui-là m'a surpris. Le Musée d'Ethnologie du Vietnam retrace la vie des 54 ethnies du pays avec une précision et une sensibilité rares.",
      },
      {
        type: 'paragraph',
        text: "À l'intérieur : des reconstitutions de maisons traditionnelles, des outils du quotidien, des costumes, des objets rituels. Une plongée dans un Vietnam rural et ancestral, à mille lieues des touristes de la vieille ville.",
      },
      {
        type: 'gallery',
        images: [
          '/blog/ha-noi-09.jpg',
          '/blog/ha-noi-10.jpg',
        ],
      },
      {
        type: 'heading',
        text: "La vraie rencontre : dîner chez l'habitant",
      },
      {
        type: 'paragraph',
        text: "Le meilleur souvenir de Ha Noi n'est pas un monument. C'est une soirée chez des amis locaux — un repas improvisé, des rires qu'on n'a pas besoin de traduire, la chaleur d'une famille qui t'accueille comme si tu étais là depuis toujours.",
      },
      {
        type: 'quote',
        text: "Voyager, c'est accepter d'être surpris. Les meilleurs moments ne sont jamais dans les guides.",
      },
      {
        type: 'gallery',
        images: [
          '/blog/ha-noi-11.jpg',
        ],
      },
      {
        type: 'heading',
        text: "Tam Dao : quand Ha Noi disparaît dans le brouillard",
      },
      {
        type: 'paragraph',
        text: "À 85 km au nord-ouest de Ha Noi, Tam Dao est une station de montagne perchée à 900 mètres d'altitude. Les Français en ont fait une villégiature coloniale au début du XXème siècle. Aujourd'hui, les Hanoïens y viennent fuir la chaleur et le bruit de la capitale.",
      },
      {
        type: 'paragraph',
        text: "Quand on y arrive, on comprend vite pourquoi. Le brouillard est presque permanent. Il enveloppe les arbres, avale les routes, transforme le moindre sentier en décor de film fantastique.",
      },
      {
        type: 'gallery',
        images: [
          '/blog/tam-dao-02.jpg',
          '/blog/tam-dao-03.jpg',
        ],
      },
      {
        type: 'heading',
        text: "Les cascades dans la brume",
      },
      {
        type: 'paragraph',
        text: "On a randonné jusqu'à une cascade au milieu des fougères et des arbres couverts de mousse. Le chemin était glissant, l'air froid et humide — et le spectacle au bout valait chaque foulée.",
      },
      {
        type: 'paragraph',
        text: "Ce qui est dingue avec Tam Dao, c'est que la brume ne gâche rien. Elle amplifie tout. La cascade disparaît à moitié dans les nuages, la végétation tropicale prend une couleur presque irréelle.",
      },
      {
        type: 'gallery',
        images: [
          '/blog/tam-dao-01.jpg',
          '/blog/tam-dao-04.jpg',
        ],
      },
      {
        type: 'heading',
        text: "Le bonus : un point de vue sur les nuages",
      },
      {
        type: 'paragraph',
        text: "Tout en haut du bourg, il y a un belvédère avec une arche en forme de cœur. On ne voit pas grand-chose depuis là — juste de la brume à perte de vue. Mais c'est exactement ça le charme.",
      },
      {
        type: 'gallery',
        images: [
          '/blog/tam-dao-05.jpg',
        ],
      },
      {
        type: 'quote',
        text: "Ha Noi t'apprend à aimer le chaos. Tam Dao te rappelle que le calme existe, juste à côté.",
      },
      {
        type: 'paragraph',
        text: "Si tu passes par le nord du Vietnam, ne saute pas Ha Noi trop vite. Et si tu veux souffler, réserve une nuit à Tam Dao. C'est à deux heures de route — et à des années-lumière de l'agitation de la capitale.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "Ha Noi is the kind of city that assaults and seduces you at the same time. The honking, the scooter fumes, the alleyways of the Old Quarter overflowing with life — it's intense, it's loud, it's beautiful.",
      },
      {
        type: 'paragraph',
        text: "I arrived without knowing quite what to expect. I left convinced it's one of the most alive cities I've ever passed through.",
      },
      {
        type: 'gallery',
        images: [
          '/blog/ha-noi-01.jpg',
          '/blog/ha-noi-02.jpg',
        ],
      },
      {
        type: 'heading',
        text: "The Old Quarter: the beating heart of the city",
      },
      {
        type: 'paragraph',
        text: "Ha Noi's Old Quarter is a labyrinth. Each street is named after a trade — the silk merchants' street, the herbalists', the paper sellers'. A centuries-old heritage that still resists modernisation.",
      },
      {
        type: 'paragraph',
        text: "I got deliberately lost in it. It's the best way to find the real spots: tiny restaurants with no English menu, cafés hidden on the third floor, alleys where kids play football between scooters.",
      },
      {
        type: 'gallery',
        images: [
          '/blog/ha-noi-07.jpg',
          '/blog/ha-noi-04.jpg',
        ],
      },
      {
        type: 'heading',
        text: "Eating in Ha Noi: a religion",
      },
      {
        type: 'paragraph',
        text: "Hanoians eat at all hours, everywhere, on little plastic stools set right on the pavement. And it's absolutely delicious.",
      },
      {
        type: 'list',
        items: [
          'Bún Chả — the capital\'s cult dish: rice noodles, grilled pork, sweet-sour dipping sauce and fresh herbs',
          'Bánh Tráng Nướng — the crispy, generous Vietnamese street "pizza"',
          'Phở Bò — the classic, better here than anywhere else according to locals',
          'Cà Phê Trứng — egg coffee, a unique Ha Noi specialty',
        ],
      },
      {
        type: 'gallery',
        images: [
          '/blog/ha-noi-03.jpg',
        ],
      },
      {
        type: 'heading',
        text: "The lakes: islands of calm in the middle of the chaos",
      },
      {
        type: 'paragraph',
        text: "Ha Noi is a city of lakes. The most famous, Hoan Kiem, sits at the centre of everything. In the morning, locals practise tai chi on its banks. In the evening, families stroll around it.",
      },
      {
        type: 'paragraph',
        text: "Further north, West Lake (Hồ Tây) is enormous. I spent a whole afternoon there, watching time pass. The light of the sunset on the water — one of those moments you don't forget.",
      },
      {
        type: 'gallery',
        images: [
          '/blog/ha-noi-05.jpg',
          '/blog/ha-noi-06.jpg',
        ],
      },
      {
        type: 'heading',
        text: "The Ethnology Museum: a living history lesson",
      },
      {
        type: 'paragraph',
        text: "I'm not usually a big museum person. But this one surprised me. The Vietnam Museum of Ethnology traces the lives of the country's 54 ethnic groups with rare precision and sensitivity.",
      },
      {
        type: 'paragraph',
        text: "Inside: reconstructed traditional houses, everyday tools, costumes, ritual objects. A dive into a rural, ancestral Vietnam — a world away from the tourist crowds of the Old Quarter.",
      },
      {
        type: 'gallery',
        images: [
          '/blog/ha-noi-09.jpg',
          '/blog/ha-noi-10.jpg',
        ],
      },
      {
        type: 'heading',
        text: "The real encounter: dinner at a local's home",
      },
      {
        type: 'paragraph',
        text: "My best memory from Ha Noi isn't a monument. It's an evening at local friends' place — an improvised meal, laughter that needs no translation, the warmth of a family welcoming you as if you'd always been there.",
      },
      {
        type: 'quote',
        text: "Travel is about accepting to be surprised. The best moments are never in the guidebooks.",
      },
      {
        type: 'gallery',
        images: [
          '/blog/ha-noi-11.jpg',
        ],
      },
      {
        type: 'heading',
        text: "Tam Dao: when Ha Noi disappears into the fog",
      },
      {
        type: 'paragraph',
        text: "85 km north-west of Ha Noi, Tam Dao is a mountain town perched at 900 metres altitude. The French turned it into a colonial resort in the early 20th century. Today, Hanoians come here to escape the capital's heat and noise.",
      },
      {
        type: 'paragraph',
        text: "When you arrive, you quickly understand why. The fog is almost permanent. It wraps around the trees, swallows the roads, turns every path into a scene from a fantasy film.",
      },
      {
        type: 'gallery',
        images: [
          '/blog/tam-dao-02.jpg',
          '/blog/tam-dao-03.jpg',
        ],
      },
      {
        type: 'heading',
        text: "Waterfalls in the mist",
      },
      {
        type: 'paragraph',
        text: "We hiked to a waterfall through ferns and moss-covered trees. The path was slippery, the air cold and damp — and the sight at the end was worth every step.",
      },
      {
        type: 'paragraph',
        text: "What's incredible about Tam Dao is that the mist doesn't ruin anything. It amplifies everything. The waterfall half-disappears into the clouds, the tropical vegetation takes on an almost unreal colour.",
      },
      {
        type: 'gallery',
        images: [
          '/blog/tam-dao-01.jpg',
          '/blog/tam-dao-04.jpg',
        ],
      },
      {
        type: 'heading',
        text: "The bonus: a viewpoint above the clouds",
      },
      {
        type: 'paragraph',
        text: "At the top of the town, there's a viewpoint with a heart-shaped arch. You can't see much from there — just fog as far as the eye can see. But that's exactly the charm.",
      },
      {
        type: 'gallery',
        images: [
          '/blog/tam-dao-05.jpg',
        ],
      },
      {
        type: 'quote',
        text: "Ha Noi teaches you to love chaos. Tam Dao reminds you that calm exists, just around the corner.",
      },
      {
        type: 'paragraph',
        text: "If you're passing through northern Vietnam, don't rush through Ha Noi. And if you need to breathe, book a night in Tam Dao. It's two hours away by road — and light years from the capital's hustle.",
      },
    ],
  },
  {
    slug: 'con-dao-paradis-cache-vietnam',
    title: "Con Dao — Le paradis caché que peu de voyageurs connaissent",
    titleEn: "Con Dao — The Hidden Paradise Few Travellers Know About",
    excerpt: "Loin de l'agitation du sud du Vietnam, Con Dao cache des plages quasi désertes, une jungle intacte et un passé historique intense. Une île qui te marque.",
    excerptEn: "Far from the bustle of southern Vietnam, Con Dao hides near-deserted beaches, untouched jungle and an intense historical past. An island that stays with you.",
    date: '2026-04-09',
    readTime: 6,
    category: 'Voyages',
    categoryEn: 'Travels',
    thumbnail: '/blog/con-dao-01.jpg',
    content: [
      {
        type: 'paragraph',
        text: "Située au large du sud du Vietnam, l'archipel de Côn Đảo est l'une des destinations les plus fascinantes — et encore relativement secrètes — du pays. Peu de gens en parlent. Encore moins y vont.",
      },
      {
        type: 'paragraph',
        text: "Loin de l'agitation de Ho Chi Minh City, Con Dao offre une expérience unique : un mélange rare de plages paradisiaques, de jungle intacte et d'une histoire qui pèse.",
      },
      {
        type: 'heading',
        text: "Arriver sur l'île : déjà une aventure",
      },
      {
        type: 'paragraph',
        text: "On y accède en avion depuis Ho Chi Minh City — une quarantaine de minutes sur un petit ATR de la compagnie VASCO. L'atterrissage sur cette minuscule piste entourée de mer et de montagnes donne déjà le ton.",
      },
      {
        type: 'gallery',
        images: ['/blog/con-dao-05.jpg'],
      },
      {
        type: 'paragraph',
        text: "Dès ton arrivée, tu comprends que Con Dao est différent. Pas de tourisme de masse. Pas de buildings. Pas de bruit. Seulement une mer turquoise cristalline, des plages quasi désertes et une nature encore sauvage.",
      },
      {
        type: 'heading',
        text: "Un décor digne d'une carte postale",
      },
      {
        type: 'paragraph',
        text: "L'île est cernée de montagnes couvertes de jungle, avec des lagunes nichées entre les reliefs. Vue depuis les hauteurs, le panorama est à couper le souffle — on a du mal à croire qu'on est encore au Vietnam.",
      },
      {
        type: 'gallery',
        images: ['/blog/con-dao-02.jpg'],
      },
      {
        type: 'paragraph',
        text: "Le meilleur moyen de découvrir Con Dao, c'est le scooter. Les routes côtières longent la mer turquoise, les montagnes en toile de fond, presque sans circulation. C'est l'une de ces balades dont tu te souviens longtemps.",
      },
      {
        type: 'gallery',
        images: ['/blog/con-dao-03.jpg'],
      },
      {
        type: 'list',
        items: [
          'An Hai Beach — la plus accessible, idéale pour se poser',
          'Dam Trau Beach — parfaite pour admirer les avions atterrir',
          'Bai Nhat — accessible à marée basse, quasi déserte',
        ],
      },
      {
        type: 'heading',
        text: "Un passé chargé d'histoire",
      },
      {
        type: 'paragraph',
        text: "Con Dao n'est pas seulement un paradis naturel. C'est aussi un lieu profondément marqué par l'histoire du Vietnam.",
      },
      {
        type: 'paragraph',
        text: "Pendant la colonisation française puis la guerre du Vietnam, l'île abritait des prisons tristement célèbres — notamment les \"cages à tigres\", de minuscules cellules où des milliers de prisonniers politiques ont souffert.",
      },
      {
        type: 'list',
        items: [
          'La prison de Phu Hai — la plus grande et la plus ancienne',
          'Le Musée de Con Dao — pour comprendre l\'histoire complète',
          'Le cimetière de Hang Duong — lieu de recueillement important',
        ],
      },
      {
        type: 'quote',
        text: "C'est une visite forte, parfois difficile, mais essentielle pour comprendre ce qu'a traversé le peuple vietnamien.",
      },
      {
        type: 'heading',
        text: "Une nature protégée exceptionnelle",
      },
      {
        type: 'paragraph',
        text: "Une grande partie de l'archipel est classée parc national. Le Côn Đảo National Park est un véritable trésor pour les amoureux de nature.",
      },
      {
        type: 'list',
        items: [
          'Randonnées dans la jungle avec une faune locale riche — singes, oiseaux rares',
          'Snorkeling et plongée sur des récifs coralliens préservés',
          'Observation des tortues marines qui pondent leurs œufs (de juin à septembre)',
        ],
      },
      {
        type: 'paragraph',
        text: "Con Dao est l'un des rares endroits au Vietnam où les tortues marines viennent encore nicher. Un spectacle naturel rare et bouleversant.",
      },
      {
        type: 'heading',
        text: "L'ambiance le soir : simple et authentique",
      },
      {
        type: 'paragraph',
        text: "La nuit, Con Dao s'anime doucement. Pas de clubs ni de bars bondés — juste des rues éclairées de lampions, des familles qui se promènent, et parfois des fêtes locales qui transforment la place principale en quelque chose de magique.",
      },
      {
        type: 'gallery',
        images: ['/blog/con-dao-04.jpg'],
      },
      {
        type: 'heading',
        text: "Le port au coucher du soleil",
      },
      {
        type: 'paragraph',
        text: "Mon moment préféré à Con Dao : le coucher du soleil depuis les rochers du port de pêche. Les bateaux colorés au mouillage, les montagnes qui rougissent dans la lumière du soir, le calme absolu. C'est ici qu'on comprend pourquoi cette île est à part.",
      },
      {
        type: 'gallery',
        images: ['/blog/con-dao-01.jpg'],
      },
      {
        type: 'heading',
        text: "Infos pratiques",
      },
      {
        type: 'list',
        items: [
          '✈️ Comment y aller : en avion depuis Ho Chi Minh City (40 min, VASCO) ou en bateau depuis Vung Tau',
          '📅 Meilleure période : mars à septembre pour la mer calme, juin à septembre pour les tortues',
          '🛏️ Hébergement : hôtels locaux abordables, resorts avec vue sur l\'océan, homestays authentiques',
          '🛵 Transport sur place : location de scooter indispensable',
        ],
      },
      {
        type: 'quote',
        text: "Con Dao, c'est un endroit que tu ressens. Un endroit où le temps ralentit. Un endroit qui te marque.",
      },
      {
        type: 'paragraph',
        text: "Si tu cherches un Vietnam différent — plus brut, plus authentique, loin des foules — alors Con Dao est fait pour toi. Ne tarde pas trop : les secrets finissent toujours par se révéler.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "Lying off the southern coast of Vietnam, the Côn Đảo archipelago is one of the country's most fascinating — and still relatively secret — destinations. Few people talk about it. Even fewer go.",
      },
      {
        type: 'paragraph',
        text: "Far from the bustle of Ho Chi Minh City, Con Dao offers a unique experience: a rare blend of paradise beaches, untouched jungle, and history that weighs heavily.",
      },
      {
        type: 'heading',
        text: "Getting there: already an adventure",
      },
      {
        type: 'paragraph',
        text: "You reach it by plane from Ho Chi Minh City — about forty minutes on a small VASCO ATR. Landing on this tiny runway surrounded by sea and mountains sets the tone immediately.",
      },
      {
        type: 'gallery',
        images: ['/blog/con-dao-05.jpg'],
      },
      {
        type: 'paragraph',
        text: "From the moment you arrive, you understand Con Dao is different. No mass tourism. No high-rises. No noise. Just crystal-clear turquoise water, near-deserted beaches, and nature that's still wild.",
      },
      {
        type: 'heading',
        text: "Scenery straight off a postcard",
      },
      {
        type: 'paragraph',
        text: "The island is ringed by jungle-covered mountains, with lagoons nestled between the ridges. Seen from above, the panorama is breathtaking — it's hard to believe you're still in Vietnam.",
      },
      {
        type: 'gallery',
        images: ['/blog/con-dao-02.jpg'],
      },
      {
        type: 'paragraph',
        text: "The best way to explore Con Dao is by scooter. The coastal roads hug the turquoise sea with mountains as a backdrop and almost no traffic. It's one of those rides you remember for a long time.",
      },
      {
        type: 'gallery',
        images: ['/blog/con-dao-03.jpg'],
      },
      {
        type: 'list',
        items: [
          'An Hai Beach — the most accessible, perfect for chilling out',
          'Dam Trau Beach — great for watching planes land',
          'Bai Nhat — reachable at low tide, almost completely deserted',
        ],
      },
      {
        type: 'heading',
        text: "A past heavy with history",
      },
      {
        type: 'paragraph',
        text: "Con Dao is not just a natural paradise. It's also a place deeply marked by Vietnam's history.",
      },
      {
        type: 'paragraph',
        text: "During the French colonial period and the Vietnam War, the island housed notorious prisons — including the infamous \"tiger cages\", tiny cells where thousands of political prisoners suffered.",
      },
      {
        type: 'list',
        items: [
          'Phu Hai Prison — the largest and oldest on the island',
          'Con Dao Museum — for the full historical picture',
          'Hang Duong Cemetery — an important place of remembrance',
        ],
      },
      {
        type: 'quote',
        text: "It's an intense visit, sometimes difficult, but essential to understand what the Vietnamese people went through.",
      },
      {
        type: 'heading',
        text: "Exceptional protected nature",
      },
      {
        type: 'paragraph',
        text: "A large part of the archipelago is classified as a national park. Côn Đảo National Park is a true treasure for nature lovers.",
      },
      {
        type: 'list',
        items: [
          'Jungle hikes with rich local wildlife — monkeys, rare birds',
          'Snorkelling and diving on pristine coral reefs',
          'Watching sea turtles lay their eggs (June to September)',
        ],
      },
      {
        type: 'paragraph',
        text: "Con Dao is one of the rare places in Vietnam where sea turtles still come to nest. A rare and moving natural spectacle.",
      },
      {
        type: 'heading',
        text: "Evening vibes: simple and authentic",
      },
      {
        type: 'paragraph',
        text: "At night, Con Dao comes gently to life. No clubs or crowded bars — just lantern-lit streets, families strolling about, and sometimes local festivals that transform the main square into something magical.",
      },
      {
        type: 'gallery',
        images: ['/blog/con-dao-04.jpg'],
      },
      {
        type: 'heading',
        text: "The harbour at sunset",
      },
      {
        type: 'paragraph',
        text: "My favourite moment in Con Dao: sunset from the rocks of the fishing harbour. Colourful boats at anchor, mountains turning red in the evening light, absolute silence. This is where you understand why this island is in a league of its own.",
      },
      {
        type: 'gallery',
        images: ['/blog/con-dao-01.jpg'],
      },
      {
        type: 'heading',
        text: "Practical info",
      },
      {
        type: 'list',
        items: [
          '✈️ Getting there: by plane from Ho Chi Minh City (40 min, VASCO) or by boat from Vung Tau',
          '📅 Best time to visit: March to September for calm seas, June to September for turtles',
          '🛏️ Accommodation: affordable local hotels, ocean-view resorts, authentic homestays',
          '🛵 Getting around: renting a scooter is essential',
        ],
      },
      {
        type: 'quote',
        text: "Con Dao is a place you feel. A place where time slows down. A place that stays with you.",
      },
      {
        type: 'paragraph',
        text: "If you're looking for a different Vietnam — rawer, more authentic, away from the crowds — then Con Dao is made for you. Don't wait too long: secrets have a way of getting out.",
      },
    ],
  },
  {
    slug: 'planifier-voyage-avec-ia',
    title: "J'ai planifié tout mon voyage au Vietnam avec l'IA — voici comment",
    titleEn: "I Planned My Entire Vietnam Trip with AI — Here's How",
    excerpt: "Fini les heures perdues sur des forums TripAdvisor. En 20 minutes et quelques prompts bien écrits, j'avais un itinéraire complet, réaliste et personnalisé.",
    excerptEn: "No more hours lost on TripAdvisor forums. In 20 minutes and a few well-written prompts, I had a complete, realistic and personalised itinerary.",
    date: '2026-04-09',
    readTime: 6,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/ebook-ai-thumb.png',
    ebookCta: true,
    ebookType: 'ai',
    content: [
      {
        type: 'paragraph',
        text: "Avant, planifier un voyage, ça me prenait des heures. Des onglets ouverts partout. Des forums Reddit contradictoires. Des articles de blog datés de 2019. Et au final, un itinéraire bricolé à la va-vite la veille du départ.",
      },
      {
        type: 'paragraph',
        text: "Depuis que j'utilise l'IA pour ça, tout a changé. Mon dernier voyage au Vietnam — 3 semaines, 8 villes, budget serré — a été planifié en moins de 30 minutes. Et c'était le mieux organisé que j'aie jamais fait.",
      },
      {
        type: 'quote',
        text: "L'IA ne remplace pas l'expérience du voyageur. Elle remplace les 4 heures perdues à chercher des infos éparpillées partout.",
      },
      {
        type: 'heading',
        text: "Le prompt de base : donne du contexte, reçois un plan",
      },
      {
        type: 'paragraph',
        text: "La première erreur que font la plupart des gens, c'est de demander juste : \"Planifie-moi un voyage au Vietnam.\" L'IA va te sortir quelque chose de générique, bon pour tout le monde, donc parfait pour personne.",
      },
      {
        type: 'paragraph',
        text: "La bonne approche : lui donner du contexte, des contraintes, et un style de voyage. Voici le prompt que j'utilise :",
      },
      {
        type: 'quote',
        text: "Tu es un expert en voyages en Asie du Sud-Est. Je pars 3 semaines au Vietnam en solo, budget moyen (30-50$/jour tout compris). J'arrive à Hanoï et repars de Ho Chi Minh City. J'aime les lieux authentiques loin des touristes, la nature, la street food et les rencontres locales. Je ne veux pas passer plus de 2h dans les transports par étape. Propose-moi un itinéraire jour par jour réaliste avec les transports entre chaque ville.",
      },
      {
        type: 'paragraph',
        text: "Résultat : un itinéraire complet, cohérent géographiquement, avec des durées de trajet réelles et des suggestions adaptées à mon profil. En 10 secondes.",
      },
      {
        type: 'heading',
        text: "Affiner : le vrai secret du prompt engineering",
      },
      {
        type: 'paragraph',
        text: "Le premier résultat est rarement parfait. Mais c'est là que le jeu commence. Tu affines, tu poses des questions, tu corriges.",
      },
      {
        type: 'list',
        items: [
          '"Je ne veux pas aller à Hoi An, remplace par une alternative moins touristique"',
          '"Ajoute une nuit à Tam Dao entre Hanoï et Ninh Binh"',
          '"Donne-moi les 3 meilleures adresses street food à chaque étape"',
          '"Quel est le meilleur moyen de transport entre Da Nang et Hoi An ? Bus ou scooter ?"',
          '"Crée-moi un budget détaillé pour cet itinéraire"',
        ],
      },
      {
        type: 'paragraph',
        text: "C'est une conversation, pas une requête unique. Tu itères jusqu'à avoir exactement ce que tu veux.",
      },
      {
        type: 'heading',
        text: "Le prompt pour les imprévus",
      },
      {
        type: 'paragraph',
        text: "Une fois sur place, l'IA devient ton guide de poche. Quelques prompts qui m'ont sauvé la mise :",
      },
      {
        type: 'list',
        items: [
          '"Je suis à Con Dao, il pleut, que faire en intérieur ?"',
          '"J\'ai raté mon bus pour Hue. Quelles alternatives depuis Da Nang aujourd\'hui ?"',
          '"Traduis cette phrase en vietnamien : \'Je suis allergique aux cacahuètes\'"',
          '"Négocie en vietnamien pour moi : je veux louer un scooter pour 2 jours à Da Lat"',
        ],
      },
      {
        type: 'quote',
        text: "L'IA ne connaît pas les horaires en temps réel. Vérifie toujours les transports et les prix sur place. Mais pour le reste, elle est imbattable.",
      },
      {
        type: 'heading',
        text: "Le prompt pour le budget",
      },
      {
        type: 'paragraph',
        text: "Un truc que j'adore faire avant de partir : demander à l'IA de me générer un tableau de budget complet.",
      },
      {
        type: 'quote',
        text: "Crée-moi un tableau de budget pour 21 jours au Vietnam en voyage solo, style backpacker+. Inclus : hébergement (dortoir ou guesthouse), transports internes, nourriture (street food + un resto correct le soir), activités et visites, imprévus (10%). Budget cible : 1 200€ total. Dis-moi si c'est réaliste et où couper si nécessaire.",
      },
      {
        type: 'paragraph',
        text: "Tu récupères un budget poste par poste, avec des ajustements possibles selon tes priorités. Ça t'évite les mauvaises surprises à mi-voyage.",
      },
      {
        type: 'heading',
        text: "Ce que l'IA fait très bien — et ce qu'elle ne remplace pas",
      },
      {
        type: 'list',
        items: [
          '✅ Organiser une logistique complexe rapidement',
          '✅ Suggérer des alternatives hors des sentiers battus',
          '✅ Répondre à tes questions en temps réel depuis ton téléphone',
          '✅ T\'aider à communiquer dans la langue locale',
          '❌ Connaître les conditions actuelles (météo, fermetures, prix du moment)',
          '❌ Remplacer le ressenti humain et les recommandations de gens sur place',
        ],
      },
      {
        type: 'paragraph',
        text: "L'IA est un outil de planification surpuissant. Pas un oracle. Utilise-la pour gagner du temps, pas pour déléguer ton voyage en entier.",
      },
      {
        type: 'heading',
        text: "Par où commencer ?",
      },
      {
        type: 'paragraph',
        text: "Si tu n'as jamais utilisé l'IA pour planifier un voyage, commence simple : ouvre ChatGPT ou Claude, colle le premier prompt de cet article en remplaçant la destination et les détails par les tiens. Tu vas être surpris du résultat.",
      },
      {
        type: 'paragraph',
        text: "Et si tu veux vraiment maîtriser l'art du prompt pour en tirer le maximum — pas juste pour les voyages, mais pour tout — j'ai écrit un guide complet là-dessus.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "Before, planning a trip used to take me hours. Tabs open everywhere. Contradictory Reddit threads. Blog posts from 2019. And in the end, a last-minute itinerary cobbled together the night before departure.",
      },
      {
        type: 'paragraph',
        text: "Since I started using AI for this, everything changed. My last Vietnam trip — 3 weeks, 8 cities, tight budget — was planned in under 30 minutes. And it was the best-organised trip I've ever done.",
      },
      {
        type: 'quote',
        text: "AI doesn't replace the traveller's experience. It replaces the 4 hours lost hunting for scattered information.",
      },
      {
        type: 'heading',
        text: "The base prompt: give context, get a plan",
      },
      {
        type: 'paragraph',
        text: "The first mistake most people make is just asking: \"Plan me a trip to Vietnam.\" AI will give you something generic, good for everyone, perfect for no one.",
      },
      {
        type: 'paragraph',
        text: "The right approach: give it context, constraints, and your travel style. Here's the prompt I use:",
      },
      {
        type: 'quote',
        text: "You are an expert in Southeast Asia travel. I'm going solo to Vietnam for 3 weeks, mid-range budget ($30-50/day all in). I arrive in Hanoi and leave from Ho Chi Minh City. I love authentic spots away from tourists, nature, street food and local encounters. I don't want more than 2 hours of transport per leg. Give me a realistic day-by-day itinerary including transport between each city.",
      },
      {
        type: 'paragraph',
        text: "Result: a complete itinerary, geographically coherent, with realistic journey times and suggestions tailored to my profile. In 10 seconds.",
      },
      {
        type: 'heading',
        text: "Refining: the real secret of prompt engineering",
      },
      {
        type: 'paragraph',
        text: "The first result is rarely perfect. But that's where the game begins. You refine, ask questions, correct.",
      },
      {
        type: 'list',
        items: [
          '"I don\'t want to go to Hoi An, replace it with a less touristy alternative"',
          '"Add a night in Tam Dao between Hanoi and Ninh Binh"',
          '"Give me the 3 best street food spots at each stop"',
          '"What\'s the best way to get from Da Nang to Hoi An? Bus or scooter?"',
          '"Build me a detailed budget for this itinerary"',
        ],
      },
      {
        type: 'paragraph',
        text: "It's a conversation, not a single request. You iterate until you have exactly what you want.",
      },
      {
        type: 'heading',
        text: "The prompt for the unexpected",
      },
      {
        type: 'paragraph',
        text: "Once you're on the ground, AI becomes your pocket guide. A few prompts that saved me:",
      },
      {
        type: 'list',
        items: [
          '"I\'m in Con Dao and it\'s raining, what can I do indoors?"',
          '"I missed my bus to Hue. What are my options from Da Nang today?"',
          '"Translate this into Vietnamese: \'I\'m allergic to peanuts\'"',
          '"Help me negotiate in Vietnamese: I want to rent a scooter in Da Lat for 2 days"',
        ],
      },
      {
        type: 'quote',
        text: "AI doesn't know real-time schedules. Always verify transport and prices on the ground. But for everything else, it's unbeatable.",
      },
      {
        type: 'heading',
        text: "The budget prompt",
      },
      {
        type: 'paragraph',
        text: "Something I love doing before any trip: asking AI to generate a complete budget breakdown.",
      },
      {
        type: 'quote',
        text: "Build me a budget breakdown for 21 days in Vietnam as a solo backpacker+. Include: accommodation (dorms or guesthouses), internal transport, food (street food + one decent restaurant per evening), activities and entry fees, contingency (10%). Target budget: $1,300 total. Tell me if it's realistic and where to cut if needed.",
      },
      {
        type: 'paragraph',
        text: "You get a line-by-line budget with adjustments possible based on your priorities. No more nasty surprises halfway through the trip.",
      },
      {
        type: 'heading',
        text: "What AI does brilliantly — and what it doesn't replace",
      },
      {
        type: 'list',
        items: [
          '✅ Organising complex logistics quickly',
          '✅ Suggesting off-the-beaten-path alternatives',
          '✅ Answering your questions in real time from your phone',
          '✅ Helping you communicate in the local language',
          '❌ Knowing current conditions (weather, closures, today\'s prices)',
          '❌ Replacing the human feel and recommendations from people on the ground',
        ],
      },
      {
        type: 'paragraph',
        text: "AI is a powerfully efficient planning tool. Not an oracle. Use it to save time, not to outsource your entire trip.",
      },
      {
        type: 'heading',
        text: "Where to start?",
      },
      {
        type: 'paragraph',
        text: "If you've never used AI to plan a trip, start simple: open ChatGPT or Claude, paste the first prompt from this article with your own destination and details. You'll be surprised by the result.",
      },
      {
        type: 'paragraph',
        text: "And if you want to truly master the art of prompting to get the most out of it — not just for travel, but for everything — I wrote a complete guide on exactly that.",
      },
    ],
  },
  {
    slug: 'premiere-bouchee-banh-mi',
    title: 'La première bouchée de bánh mì',
    titleEn: 'The First Bite of Bánh Mì',
    excerpt: 'Il y a quelque chose dans la façon dont on le tient d\'abord. Pas encore mangé, mais déjà là, dans la main — et déjà on sait que ça va être bien.',
    excerptEn: 'There is something in the way you hold it first. Not yet eaten, but already there, in your hand — and you already know it\'s going to be good.',
    date: '2026-04-09',
    readTime: 3,
    category: 'Voyages',
    categoryEn: 'Travels',
    thumbnail: '/blog/ha-noi-05.jpg',
    content: [
      {
        type: 'paragraph',
        text: "Il y a quelque chose dans la façon dont on le tient d'abord. Pas encore mangé, mais déjà là, dans la main — la baguette vietnamienne, plus légère que la française, la croûte qui chante quand on la presse légèrement. Le papier blanc qui l'enveloppe à moitié. L'odeur qui monte : la coriandre fraîche, le pâté chaud, le vinaigre doux des carottes marinées. On sait déjà que ça va être bien.",
      },
      {
        type: 'paragraph',
        text: "La vendeuse l'a assemblé devant toi, gestes sûrs et rapides. Le couteau qui fend la baguette sans jamais la séparer tout à fait. La pâte de piment étalée d'un trait. Les tranches de jambon blanc, le pâté de foie crémeux. Puis les légumes — cette explosion de couleurs, le blanc du daïkon, l'orange des carottes, le vert tendre de la coriandre. Quelques rondelles de piment vert. Tout ça dans un geste.",
      },
      {
        type: 'paragraph',
        text: "Et maintenant tu tiens le bánh mì, debout au bord du trottoir, le scooter qui passe trop près, le soleil déjà lourd à neuf heures du matin. Il fait chaud. Le bitume chauffe. Mais tu tiens ce truc dans les mains et tu n'es nulle part ailleurs.",
      },
      {
        type: 'heading',
        text: 'La première bouchée.',
      },
      {
        type: 'paragraph',
        text: "Il y a d'abord le son. Ce craquement sec, presque violent, qui te surprend à chaque fois. La croûte cède, craque, et déjà les saveurs arrivent ensemble — pas l'une après l'autre, toutes en même temps : le gras du pâté, l'acidité vive des légumes marinés, le poivré de la coriandre, la chaleur ronde du piment. Le pain lui-même, alvéolé, léger, absorbe et tient à la fois. Rien ne tombe. Tout reste.",
      },
      {
        type: 'paragraph',
        text: "On ne s'y attendait pas — à cette précision. Un bánh mì, ça a l'air simple. Un sandwich au bord d'une rue. Et puis cette première bouchée te rappelle que les meilleures choses ont souvent cet air-là.",
      },
      {
        type: 'quote',
        text: "Tu mâches lentement malgré tout. Pas parce que tu veux prolonger. Plutôt parce que quelque chose en toi résiste à aller trop vite.",
      },
      {
        type: 'paragraph',
        text: "C'est la même chose avec les couchers de soleil, avec les fins de livre, avec les bonnes conversations qui tournent en rond avant de trouver leur vraie direction.",
      },
      {
        type: 'paragraph',
        text: "Le reste du bánh mì, tu le sais, sera bon aussi. Mais pas comme ça. Jamais comme cette première seconde où tout existe encore en entier.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "There is something in the way you hold it first. Not yet eaten, but already there, in your hand — the Vietnamese baguette, lighter than the French one, the crust that sings when you press it gently. The white paper half-wrapping it. The smell rising: fresh coriander, warm pâté, the soft vinegar of pickled carrots. You already know it's going to be good.",
      },
      {
        type: 'paragraph',
        text: "The woman assembled it in front of you, gestures sure and swift. A knife splitting the baguette without ever fully separating it. A streak of chili paste. Slices of white ham, creamy liver pâté. Then the vegetables — that burst of colour, white daikon, orange carrots, the tender green of coriander. A few rounds of green chili. All of it in one motion.",
      },
      {
        type: 'paragraph',
        text: "And now you're holding the bánh mì, standing at the edge of the pavement, a scooter passing too close, the sun already heavy at nine in the morning. It's hot. The asphalt is warming. But you're holding this thing in your hands and you are nowhere else.",
      },
      {
        type: 'heading',
        text: 'The first bite.',
      },
      {
        type: 'paragraph',
        text: "First comes the sound. That sharp crack, almost violent, that surprises you every time. The crust gives, snaps, and already the flavours arrive together — not one after another, all at once: the richness of the pâté, the bright acidity of the pickled vegetables, the peppery bite of coriander, the round heat of chili. The bread itself, airy and light, absorbs and holds at the same time. Nothing falls. Everything stays.",
      },
      {
        type: 'paragraph',
        text: "You didn't expect it — that precision. A bánh mì looks simple. A sandwich by the side of a road. And then that first bite reminds you that the best things often look exactly like that.",
      },
      {
        type: 'quote',
        text: "You chew slowly despite yourself. Not because you want to stretch it out. More because something in you resists going too fast.",
      },
      {
        type: 'paragraph',
        text: "It's the same with sunsets, with the ends of books, with good conversations that circle around before finding their real direction.",
      },
      {
        type: 'paragraph',
        text: "The rest of the bánh mì, you know, will be good too. But not like this. Never like that first second when everything still exists whole.",
      },
    ],
  },
  {
    slug: 'comment-jai-code-johntran-code',
    title: 'Comment j\'ai codé johntran-code.com',
    titleEn: 'How I Built johntran-code.com',
    excerpt: 'Un site vitrine pour un coach de vie — du brief au déploiement, avec React, Tailwind et Claude Code. Voici exactement comment j\'ai travaillé.',
    excerptEn: 'A showcase website for a lifestyle coach — from brief to deployment, with React, Tailwind and Claude Code. Here\'s exactly how I worked.',
    date: '2026-04-10',
    readTime: 5,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/johntran-code.png',
    content: [
      {
        type: 'paragraph',
        text: "John Tran est coach de vie. Spécialisé en santé physique et mentale, il accompagne ses clients vers des transformations concrètes. Il avait une histoire à raconter, une offre claire — mais pas de site.",
      },
      {
        type: 'paragraph',
        text: "Il m'a contacté avec une demande simple : quelque chose de propre, de professionnel, qui inspire confiance dès la première seconde. Pas de fioriture. Pas de page inutile. Un site qui travaille pour lui.",
      },
      {
        type: 'heading',
        text: 'Le brief en 10 minutes',
      },
      {
        type: 'paragraph',
        text: "On a passé une heure ensemble. Lui m'explique qui il est, ce qu'il propose, à qui il s'adresse. Moi je prends des notes, je pose des questions sur le ton, les couleurs, les sensations qu'il veut transmettre.",
      },
      {
        type: 'paragraph',
        text: "Ce qui ressort : sobriété, force, authenticité. Pas un site \"wellness\" avec des photos de coucher de soleil et des citations en italique. Un site d'un professionnel sérieux.",
      },
      {
        type: 'quote',
        text: "Je veux que les gens comprennent en 5 secondes ce que je fais et pourquoi ça peut les aider.",
      },
      {
        type: 'paragraph',
        text: "C'est la meilleure façon de démarrer un projet. Un objectif clair, une contrainte simple. Le reste découle naturellement.",
      },
      {
        type: 'heading',
        text: 'Le stack : React, Tailwind, Vite',
      },
      {
        type: 'paragraph',
        text: "Pour un site vitrine de cette nature, le choix du stack est vite fait. Pas besoin d'un CMS lourd, pas besoin d'une base de données. Juste du HTML rendu côté client, rapide, déployable partout.",
      },
      {
        type: 'list',
        items: [
          'React — pour la structure des composants et la réutilisabilité',
          'Tailwind CSS — pour le design rapide et cohérent sans écrire de CSS custom',
          'Vite — pour le dev server instantané et le build optimisé',
          'Claude Code — pour accélérer la génération de code répétitif',
        ],
      },
      {
        type: 'paragraph',
        text: "Ce combo, je le connais bien. Je l'utilise sur tous mes projets récents. La vitesse d'itération est incomparable.",
      },
      {
        type: 'heading',
        text: 'Claude Code dans le workflow',
      },
      {
        type: 'paragraph',
        text: "Sur ce projet, j'ai utilisé Claude Code différemment qu'un simple assistant. Je lui ai décrit l'architecture complète du site au départ — les sections, le style visuel, les composants attendus — et on a construit ensemble, section par section.",
      },
      {
        type: 'paragraph',
        text: "La hero section ? Décrite en deux phrases, générée en 30 secondes, ajustée en 5 minutes. Les cards d'offres ? Idem. Ce qui aurait pris une heure à coder manuellement a pris 10 minutes.",
      },
      {
        type: 'paragraph',
        text: "Mais l'IA ne remplace pas le goût. C'est moi qui décide si la typographie est juste, si les espacements respirent bien, si le ton visuel colle avec ce que John m'a décrit.",
      },
      {
        type: 'quote',
        text: "L'IA génère. Toi tu juges, tu ajustes, tu livres. La vitesse est dans la génération. La qualité est dans le regard.",
      },
      {
        type: 'heading',
        text: 'Les décisions de design',
      },
      {
        type: 'paragraph',
        text: "Palette sobre : noir, blanc, une couleur d'accent chaude pour les call-to-actions. Police sans serif, lisible, moderne sans être froide.",
      },
      {
        type: 'paragraph',
        text: "La structure du site suit une logique narrative : qui est John → ce qu'il propose → pourquoi lui → comment le contacter. Chaque section répond à une question implicite du visiteur.",
      },
      {
        type: 'list',
        items: [
          'Hero — accroche immédiate, proposition de valeur en une ligne',
          'À propos — histoire personnelle, crédibilité, humanité',
          'Offres — ce que tu peux obtenir concrètement',
          'Témoignages — preuve sociale',
          'Contact — friction minimale, action claire',
        ],
      },
      {
        type: 'paragraph',
        text: "Rien d'original dans cette structure. Mais elle fonctionne parce qu'elle est pensée du point de vue du visiteur, pas du client.",
      },
      {
        type: 'heading',
        text: 'Du code au déploiement',
      },
      {
        type: 'paragraph',
        text: "Une fois le site validé visuellement, le déploiement est quasi instantané. Build Vite, upload sur le serveur, configuration du domaine. Moins d'une heure.",
      },
      {
        type: 'paragraph',
        text: "Le résultat : un site performant, léger, avec un score Lighthouse proche de 100. Pas parce que j'ai passé des heures à optimiser — mais parce que le stack choisi est naturellement efficace.",
      },
      {
        type: 'paragraph',
        text: "John a eu son site en quelques jours. Pas des semaines. C'est ça, travailler avec les bons outils.",
      },
      {
        type: 'heading',
        text: 'Ce que ce projet m\'a confirmé',
      },
      {
        type: 'paragraph',
        text: "Les meilleurs sites vitrines ne sont pas les plus complexes. Ils sont les plus clairs. Une belle typographie, un message fort, une structure logique — et tout le reste s'efface.",
      },
      {
        type: 'paragraph',
        text: "Et avec Claude Code dans le workflow, ce genre de projet devient fluide. Moins de friction technique, plus de temps pour les vraies décisions — le design, le message, l'expérience utilisateur.",
      },
      {
        type: 'paragraph',
        text: "Tu veux voir le résultat ? johntran-code.com",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "John Tran is a lifestyle coach. Specialised in physical and mental health, he helps his clients achieve real transformations. He had a story to tell, a clear offer — but no website.",
      },
      {
        type: 'paragraph',
        text: "He reached out with a simple request: something clean, professional, that builds trust from the first second. No fluff. No unnecessary pages. A site that works for him.",
      },
      {
        type: 'heading',
        text: 'The brief in 10 minutes',
      },
      {
        type: 'paragraph',
        text: "We spent an hour together. He explained who he is, what he offers, who he works with. I took notes and asked questions about tone, colours, and the feeling he wanted to convey.",
      },
      {
        type: 'paragraph',
        text: "What came through: sobriety, strength, authenticity. Not a wellness site with sunset photos and italic quotes. A serious professional's site.",
      },
      {
        type: 'quote',
        text: "I want people to understand in 5 seconds what I do and why it could help them.",
      },
      {
        type: 'paragraph',
        text: "That's the best way to start a project. A clear goal, a simple constraint. Everything else follows naturally.",
      },
      {
        type: 'heading',
        text: 'The stack: React, Tailwind, Vite',
      },
      {
        type: 'paragraph',
        text: "For a showcase site like this, the stack choice is straightforward. No need for a heavy CMS, no need for a database. Just client-side rendered HTML, fast, deployable anywhere.",
      },
      {
        type: 'list',
        items: [
          'React — for component structure and reusability',
          'Tailwind CSS — for fast, consistent design without writing custom CSS',
          'Vite — for an instant dev server and optimised build',
          'Claude Code — to accelerate repetitive code generation',
        ],
      },
      {
        type: 'paragraph',
        text: "I know this stack well. I use it on all my recent projects. The iteration speed is unmatched.",
      },
      {
        type: 'heading',
        text: 'Claude Code in the workflow',
      },
      {
        type: 'paragraph',
        text: "On this project, I used Claude Code differently from a simple assistant. I described the full site architecture upfront — the sections, visual style, expected components — and we built together, section by section.",
      },
      {
        type: 'paragraph',
        text: "The hero section? Described in two sentences, generated in 30 seconds, adjusted in 5 minutes. The offer cards? Same. What would have taken an hour to code manually took 10 minutes.",
      },
      {
        type: 'paragraph',
        text: "But AI doesn't replace taste. I'm the one who decides whether the typography is right, whether the spacing breathes well, whether the visual tone matches what John described.",
      },
      {
        type: 'quote',
        text: "AI generates. You judge, adjust, and deliver. Speed is in the generation. Quality is in the eye.",
      },
      {
        type: 'heading',
        text: 'Design decisions',
      },
      {
        type: 'paragraph',
        text: "Sober palette: black, white, a warm accent colour for call-to-actions. Sans-serif font, readable, modern without being cold.",
      },
      {
        type: 'paragraph',
        text: "The site structure follows a narrative logic: who John is → what he offers → why him → how to reach him. Each section answers an implicit visitor question.",
      },
      {
        type: 'list',
        items: [
          'Hero — immediate hook, value proposition in one line',
          'About — personal story, credibility, humanity',
          'Offers — what you can concretely get',
          'Testimonials — social proof',
          'Contact — minimal friction, clear action',
        ],
      },
      {
        type: 'paragraph',
        text: "Nothing original in this structure. But it works because it's designed from the visitor's perspective, not the client's.",
      },
      {
        type: 'heading',
        text: 'From code to deployment',
      },
      {
        type: 'paragraph',
        text: "Once the site was visually validated, deployment was almost instant. Vite build, upload to server, domain configuration. Under an hour.",
      },
      {
        type: 'paragraph',
        text: "The result: a fast, lightweight site with a Lighthouse score close to 100. Not because I spent hours optimising — but because the chosen stack is naturally efficient.",
      },
      {
        type: 'paragraph',
        text: "John had his site in a few days. Not weeks. That's what working with the right tools looks like.",
      },
      {
        type: 'heading',
        text: 'What this project confirmed',
      },
      {
        type: 'paragraph',
        text: "The best showcase sites aren't the most complex. They're the clearest. Good typography, a strong message, a logical structure — and everything else fades away.",
      },
      {
        type: 'paragraph',
        text: "And with Claude Code in the workflow, this kind of project becomes fluid. Less technical friction, more time for the real decisions — design, messaging, user experience.",
      },
      {
        type: 'paragraph',
        text: "Want to see the result? johntran-code.com",
      },
    ],
  },
  {
    slug: 'budget-automatique-notion-no-code',
    title: 'Mettre en place un budget automatique avec Notion + des intégrations no-code',
    titleEn: 'Building an Automatic Budget with Notion + No-Code Integrations',
    excerpt: "J'ai arrêté de tracker mes dépenses à la main. Voici comment j'ai branché Notion, Make et quelques automatisations pour que mon budget se mette à jour tout seul.",
    excerptEn: "I stopped tracking expenses by hand. Here's how I connected Notion, Make and a few automations so my budget updates itself.",
    date: '2026-04-10',
    readTime: 7,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/budget-notion.png',
    content: [
      {
        type: 'paragraph',
        text: "Pendant des années, j'ai tenu un budget. Enfin, j'essayais. Un tableau Excel ouvert le premier du mois, quelques lignes renseignées, puis plus rien. La friction de devoir saisir chaque dépense à la main avait raison de ma motivation en moins de deux semaines.",
      },
      {
        type: 'paragraph',
        text: "Le problème n'était pas la discipline. C'était le système. Un système manuel, c'est un système qui meurt.",
      },
      {
        type: 'paragraph',
        text: "Alors j'ai cherché une autre approche. Pas une app toute faite — je voulais comprendre ce qui rentrait et sortait, avoir le contrôle sur les catégories, voir les tendances mois par mois. J'ai fini par construire quelque chose avec Notion et Make. Et maintenant, mon budget se met à jour tout seul.",
      },
      {
        type: 'heading',
        text: "Pourquoi Notion plutôt qu'une app dédiée",
      },
      {
        type: 'paragraph',
        text: "Il existe des dizaines d'apps de budget. YNAB, Bankin', Linxo, Copilot. Elles font le travail, mais elles t'enferment dans leur interface, leur logique, leurs catégories prédéfinies.",
      },
      {
        type: 'paragraph',
        text: "Notion, c'est une base de données flexible. Tu décides de la structure. Tu décides des vues. Tu peux croiser tes dépenses avec d'autres données — projets, abonnements, objectifs d'épargne — sans changer d'outil.",
      },
      {
        type: 'quote',
        text: "Un bon système de budget, c'est celui que tu comprends assez pour le modifier. Sinon tu l'abandonnes dès que la réalité dépasse les cases prévues.",
      },
      {
        type: 'paragraph',
        text: "Et Notion, avec ses propriétés personnalisées, ses filtres, ses formules — c'est exactement ça.",
      },
      {
        type: 'heading',
        text: 'La structure Notion : deux bases de données',
      },
      {
        type: 'paragraph',
        text: "Le setup repose sur deux bases de données liées entre elles.",
      },
      {
        type: 'list',
        items: [
          "Transactions — chaque entrée ou sortie d'argent avec sa date, son montant, sa catégorie et son compte",
          'Catégories — les enveloppes budgétaires (loyer, courses, transport, loisirs...) avec un budget mensuel alloué',
        ],
      },
      {
        type: 'paragraph',
        text: "Chaque transaction est reliée à une catégorie. Notion fait la somme automatiquement via une propriété de formule. Tu vois en temps réel combien il reste dans chaque enveloppe.",
      },
      {
        type: 'paragraph',
        text: "La vue par défaut : un tableau filtré sur le mois en cours. Une deuxième vue en galerie pour voir les catégories et leur avancement. C'est tout. Simple, lisible, exploitable.",
      },
      {
        type: 'heading',
        text: "Make : le chef d'orchestre des automatisations",
      },
      {
        type: 'paragraph',
        text: "Make (anciennement Integromat) est l'outil no-code qui connecte tout. Pense à lui comme un tuyau intelligent entre tes applications.",
      },
      {
        type: 'paragraph',
        text: "Le scénario principal que j'ai mis en place : chaque fois que je reçois un e-mail de notification de ma banque — virement reçu, paiement par carte, prélèvement — Make intercepte ce mail, en extrait les informations clés et crée automatiquement une entrée dans ma base Notion.",
      },
      {
        type: 'list',
        items: [
          "Déclencheur — Gmail : nouveau mail de l'adresse de la banque",
          'Étape 2 — Parsing du texte avec une regex pour extraire montant, marchand, date',
          'Étape 3 — Notion : créer une nouvelle transaction avec les données extraites',
          'Étape 4 — Catégorisation automatique selon le nom du marchand (Amazon → Loisirs, Franprix → Courses...)',
        ],
      },
      {
        type: 'paragraph',
        text: "Le scénario tourne en arrière-plan. Je reçois une notification de ma banque, et trente secondes plus tard, la dépense est dans Notion. Je n'ai rien touché.",
      },
      {
        type: 'heading',
        text: 'La catégorisation automatique : le vrai gain de temps',
      },
      {
        type: 'paragraph',
        text: "Le moment où j'ai réalisé que le système fonctionnait vraiment, c'est quand j'ai configuré la catégorisation automatique par nom de marchand.",
      },
      {
        type: 'paragraph',
        text: 'Dans Make, j\'ai créé un module de routage avec des conditions : si le champ "marchand" contient "Netflix" ou "Spotify", catégorie = Abonnements. Si ça contient "SNCF" ou "Navigo", catégorie = Transport.',
      },
      {
        type: 'quote',
        text: "La règle de Pareto s'applique ici : 20% des marchands représentent 80% de tes dépenses récurrentes. Automatise ces 20%, et le reste tu le classes à la main en deux minutes.",
      },
      {
        type: 'paragraph',
        text: "Résultat : 85% de mes transactions arrivent déjà catégorisées dans Notion. Je passe 5 minutes par semaine à vérifier et corriger les 15% restants.",
      },
      {
        type: 'heading',
        text: 'Le résumé mensuel automatique',
      },
      {
        type: 'paragraph',
        text: "Le deuxième scénario Make tourne le premier de chaque mois. Il compile les totaux par catégorie du mois écoulé et m'envoie un récapitulatif par mail : combien j'ai dépensé, par rapport au budget alloué, et les 3 catégories où j'ai le plus dérapé.",
      },
      {
        type: 'paragraph',
        text: "C'est simple mais efficace. Je n'ai pas besoin d'ouvrir Notion pour savoir si le mois s'est bien passé. Le résumé arrive, je le lis en 30 secondes, je retourne à ma vie.",
      },
      {
        type: 'heading',
        text: 'Ce qu\'il faut pour démarrer',
      },
      {
        type: 'list',
        items: [
          'Un compte Notion gratuit suffit pour commencer',
          "Un compte Make — le plan gratuit offre 1000 opérations/mois, amplement suffisant",
          'Une banque qui envoie des notifications e-mail détaillées (la plupart le font)',
          'Une heure pour configurer le premier scénario',
        ],
      },
      {
        type: 'paragraph',
        text: "Si ta banque n'envoie pas de mails de notification, il existe une alternative : exporter tes relevés en CSV chaque semaine et créer un scénario Make qui lit ce fichier et importe les nouvelles lignes dans Notion. Moins élégant, mais ça fonctionne.",
      },
      {
        type: 'heading',
        text: 'Ce que ça a changé concrètement',
      },
      {
        type: 'paragraph',
        text: "Six mois après avoir mis en place ce système, j'ai une vision claire de mes finances pour la première fois de ma vie. Pas parce que je suis devenu plus discipliné — mais parce que le système ne dépend plus de ma discipline.",
      },
      {
        type: 'paragraph',
        text: "J'ai identifié 140€ d'abonnements que j'avais oubliés. J'ai ajusté mon budget loisirs après avoir réalisé que je le dépassais systématiquement de 30%. J'ai commencé à mettre de côté un montant fixe chaque mois parce que je savais enfin ce qu'il me restait.",
      },
      {
        type: 'quote',
        text: "Automatiser son budget, ce n'est pas être obsédé par l'argent. C'est arrêter de l'ignorer.",
      },
      {
        type: 'paragraph',
        text: "Le meilleur système de budget, c'est celui qui tourne sans toi. Notion + Make, c'est exactement ça.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "For years, I kept a budget. Or tried to. A spreadsheet opened on the first of the month, a few rows filled in, then nothing. The friction of entering every expense by hand killed my motivation in under two weeks.",
      },
      {
        type: 'paragraph',
        text: "The problem wasn't discipline. It was the system. A manual system is a system that dies.",
      },
      {
        type: 'paragraph',
        text: "So I looked for a different approach. Not a ready-made app — I wanted to understand what was coming in and going out, have control over categories, see trends month by month. I ended up building something with Notion and Make. Now my budget updates itself.",
      },
      {
        type: 'heading',
        text: 'Why Notion instead of a dedicated app',
      },
      {
        type: 'paragraph',
        text: "There are dozens of budgeting apps. YNAB, Copilot, Monarch, Emma. They do the job, but they lock you into their interface, their logic, their predefined categories.",
      },
      {
        type: 'paragraph',
        text: "Notion is a flexible database. You decide the structure. You decide the views. You can cross-reference your spending with other data — projects, subscriptions, savings goals — without switching tools.",
      },
      {
        type: 'quote',
        text: "A good budget system is one you understand well enough to modify. Otherwise you abandon it the moment reality doesn't fit the preset boxes.",
      },
      {
        type: 'paragraph',
        text: "And Notion, with its custom properties, filters, and formulas — that's exactly what it is.",
      },
      {
        type: 'heading',
        text: 'The Notion structure: two databases',
      },
      {
        type: 'paragraph',
        text: "The setup is built on two linked databases.",
      },
      {
        type: 'list',
        items: [
          'Transactions — each income or expense with its date, amount, category and account',
          'Categories — budget envelopes (rent, groceries, transport, leisure...) with a monthly allocation',
        ],
      },
      {
        type: 'paragraph',
        text: "Each transaction is linked to a category. Notion tallies them automatically via a formula property. You see in real time how much is left in each envelope.",
      },
      {
        type: 'paragraph',
        text: "The default view: a table filtered to the current month. A second gallery view to see categories and their progress. That's it. Simple, readable, actionable.",
      },
      {
        type: 'heading',
        text: 'Make: the automation conductor',
      },
      {
        type: 'paragraph',
        text: "Make (formerly Integromat) is the no-code tool that connects everything. Think of it as an intelligent pipe between your apps.",
      },
      {
        type: 'paragraph',
        text: "The main scenario I set up: whenever I receive a notification email from my bank — incoming transfer, card payment, direct debit — Make intercepts the email, extracts the key information, and automatically creates an entry in my Notion database.",
      },
      {
        type: 'list',
        items: [
          "Trigger — Gmail: new email from the bank's address",
          'Step 2 — Text parsing with a regex to extract amount, merchant, date',
          'Step 3 — Notion: create a new transaction with the extracted data',
          'Step 4 — Auto-categorisation based on merchant name (Amazon → Leisure, Whole Foods → Groceries...)',
        ],
      },
      {
        type: 'paragraph',
        text: "The scenario runs in the background. I get a bank notification, and thirty seconds later the expense is in Notion. I haven't touched a thing.",
      },
      {
        type: 'heading',
        text: 'Automatic categorisation: the real time-saver',
      },
      {
        type: 'paragraph',
        text: "The moment I realised the system was genuinely working was when I set up automatic categorisation by merchant name.",
      },
      {
        type: 'paragraph',
        text: 'In Make, I built a routing module with conditions: if the merchant field contains "Netflix" or "Spotify", category = Subscriptions. If it contains a train operator or transit authority, category = Transport.',
      },
      {
        type: 'quote',
        text: "Pareto's rule applies here: 20% of merchants account for 80% of your recurring spending. Automate those 20%, and you can sort the rest by hand in two minutes.",
      },
      {
        type: 'paragraph',
        text: "Result: 85% of my transactions arrive already categorised in Notion. I spend 5 minutes a week reviewing and correcting the remaining 15%.",
      },
      {
        type: 'heading',
        text: 'The automatic monthly summary',
      },
      {
        type: 'paragraph',
        text: "The second Make scenario runs on the first of every month. It compiles totals by category for the previous month and sends me a summary email: how much I spent, compared to my allocated budget, and the 3 categories where I went the most over.",
      },
      {
        type: 'paragraph',
        text: "It's simple but effective. I don't need to open Notion to know how the month went. The summary arrives, I read it in 30 seconds, I get on with my life.",
      },
      {
        type: 'heading',
        text: 'What you need to get started',
      },
      {
        type: 'list',
        items: [
          'A free Notion account is enough to start',
          'A Make account — the free plan offers 1,000 operations/month, more than enough',
          'A bank that sends detailed email notifications (most do)',
          'One hour to configure the first scenario',
        ],
      },
      {
        type: 'paragraph',
        text: "If your bank doesn't send notification emails, there's an alternative: export your statements as CSV each week and create a Make scenario that reads the file and imports new rows into Notion. Less elegant, but it works.",
      },
      {
        type: 'heading',
        text: 'What it actually changed',
      },
      {
        type: 'paragraph',
        text: "Six months after setting up this system, I have a clear picture of my finances for the first time in my life. Not because I became more disciplined — but because the system no longer depends on my discipline.",
      },
      {
        type: 'paragraph',
        text: "I identified €140 in forgotten subscriptions. I adjusted my leisure budget after realising I was consistently 30% over. I started setting aside a fixed amount each month because I finally knew what was left.",
      },
      {
        type: 'quote',
        text: "Automating your budget isn't being obsessed with money. It's stopping yourself from ignoring it.",
      },
      {
        type: 'paragraph',
        text: "The best budgeting system is one that runs without you. Notion + Make is exactly that.",
      },
    ],
  },
  {
    slug: 'da-nang-2026',
    title: 'Da Nang 2026 : la ville qui m\'a surpris',
    titleEn: 'Da Nang 2026: the city that surprised me',
    excerpt: "Plage à perte de vue, nuits animées et restos qui déchirent — Da Nang en 2026, c'est la destination Vietnam que personne ne voit venir.",
    excerptEn: "Endless beach, wild nights and incredible food — Da Nang in 2026 is the Vietnam destination nobody sees coming.",
    date: '2026-04-15',
    readTime: 6,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/da-nang-2026.png',
    ebookCta: true,
    ebookType: 'vietnam',
    content: [
      {
        type: 'paragraph',
        text: "Da Nang n'est pas Hoi An — trop pittoresque et touristique. Ce n'est pas Hanoï — trop dense et chaotique. C'est quelque chose entre les deux : une ville moderne, détendue, avec une plage immense et une énergie nocturne qui démarre vraiment tard.",
      },
      {
        type: 'quote',
        text: "Da Nang, c'est la ville où tu pars une semaine et tu cherches un appart au bout de trois jours.",
      },
      {
        type: 'heading',
        text: "La plage : 8 km chaque matin",
      },
      {
        type: 'paragraph',
        text: "My Khe Beach est l'une des plus longues plages urbaines d'Asie du Sud-Est. 8 kilomètres de sable blanc, presque vide en début de matinée. J'ai pris l'habitude de marcher toute sa longueur dès 6h30.",
      },
      {
        type: 'paragraph',
        text: "À cette heure-là, la plage appartient aux locaux. Des groupes de Vietnamiens font du sport, des femmes âgées ramassent des coquillages, quelques pêcheurs rentrent avec leurs filets. Le soleil sort de l'eau juste en face. C'est probablement la meilleure heure de la journée.",
      },
      {
        type: 'list',
        items: [
          "Lever du soleil sur la mer — directement depuis la plage, pas besoin de se lever à 4h",
          "Eau chaude toute l'année, peu de vagues — idéal pour nager tranquillement",
          "Douches et vestiaires publics gratuits le long du front de mer",
          "Boulevard côtier propre et bien entretenu — parfait pour courir ou faire du vélo",
        ],
      },
      {
        type: 'paragraph',
        text: "Le soir c'est une autre plage. Les restos de fruits de mer s'allument, des enceintes sortent de nulle part, les locaux arrivent en scooter avec leurs hamacs. L'ambiance est totalement différente — plus festive, plus bruyante, mais toujours accessible.",
      },
      {
        type: 'heading',
        text: "La nuit : karaoké, bars et Malibu Club",
      },
      {
        type: 'paragraph',
        text: "Da Nang la nuit, c'est un vrai sujet. La ville n'essaie pas de copier Bangkok ou Saigon. Elle a son propre truc — moins underground, plus assumé, avec une clientèle mélangée d'expats, de voyageurs et de locaux qui connaissent bien leur ville.",
      },
      {
        type: 'paragraph',
        text: "Le karaoké d'abord. Au Vietnam, c'est une institution sociale, pas un truc honteux qu'on fait après deux verres de trop. Des salles privées, des écrans géants, des cocktails à volonté. J'y suis allé trois fois en une semaine. On ne repart jamais avant 2h du matin.",
      },
      {
        type: 'list',
        items: [
          "Karaoké : salles privées à partir de 5$/h — réserver à l'avance le week-end",
          "Bars sur An Thượng — le quartier expat, ambiance décontractée, bières à 1$",
          "Malibu Club — le club référence de Da Nang, musique électro, terrasse avec vue sur la rivière Han, soirées qui commencent vraiment après minuit",
          "Sky 36 — rooftop au 36e étage du Novotel, pour les couchers de soleil et les premiers verres",
        ],
      },
      {
        type: 'paragraph',
        text: "Le Malibu Club mérite mention spéciale. Grande terrasse, son impeccable, mix local/international dans la clientèle. C'est là où tu rencontres des gens qui habitent la ville depuis des années et qui peuvent te donner les vraies bonnes adresses.",
      },
      {
        type: 'quote',
        text: "Les meilleures adresses ne sont pas sur Google. Elles sont dans la conversation que tu as au bar à 1h du matin.",
      },
      {
        type: 'heading',
        text: "La bouffe : le vrai niveau",
      },
      {
        type: 'paragraph',
        text: "Da Nang est une ville de cuisine. Pas juste \"bonne pour l'Asie du Sud-Est\" — vraiment bonne. La région Centre a ses propres spécialités que tu ne trouves pas à Hanoï ni à Saigon.",
      },
      {
        type: 'list',
        items: [
          "Mì Quảng — les nouilles jaunes de Da Nang, avec du porc, des crevettes et des cacahuètes grillées. À commander partout, à 1,50$ le bol",
          "Bánh xèo — la crêpe croustillante aux crevettes et germes de soja. La meilleure que j'ai mangée était dans un boui-boui sans nom avec trois tables en plastique",
          "Fruits de mer grillés sur la plage — homards, crevettes, palourdes. Le soir, les vendeurs installent leurs braises directement sur le sable",
          "Nem lụi — brochettes de viande hachée grillées sur des bâtons de citronnelle, servies avec une sauce d'arachide",
        ],
      },
      {
        type: 'paragraph',
        text: "Pour les restos avec table et menu, le quartier Hải Châu concentre les meilleures adresses locales. Évite les endroits avec menu en photo plastifiée à l'entrée et photos de tour Eiffel sur les murs — pas pour le Vietnam.",
      },
      {
        type: 'heading',
        text: "Ce que Da Nang a de différent",
      },
      {
        type: 'paragraph',
        text: "Il y a quelque chose dans Da Nang que je n'arrive pas vraiment à définir. La ville est propre — ce qui est rare au Vietnam. Les habitants sont détendus — moins de vendeurs insistants, moins de klaxons permanents. Le rythme est différent.",
      },
      {
        type: 'paragraph',
        text: "C'est aussi une ville qui se transforme vite. Des hôtels neufs, des cafés design, des co-workings avec terrasse sur la rivière. Dans cinq ans, Da Nang sera probablement beaucoup plus chère et beaucoup plus touristique. C'est maintenant qu'il faut y aller.",
      },
      {
        type: 'list',
        items: [
          "Facilité de déplacement : tout est à scooter ou Grab, rien n'est loin",
          "Coût de la vie : budget 40-60$/jour incluant hébergement correct, restos et sorties",
          "Anglais : mieux parlé qu'ailleurs au Vietnam, surtout dans la zone beachfront",
          "Climat : éviter septembre-novembre (typhons). Meilleure période : février à août",
        ],
      },
      {
        type: 'quote',
        text: "Da Nang en 2026, c'est ce que Bali était en 2010. Profites-en maintenant.",
      },
      {
        type: 'heading',
        text: "Pratique : comment organiser ton séjour",
      },
      {
        type: 'paragraph',
        text: "Da Nang s'use bien sur une semaine, idéalement deux. En dessous de cinq jours, tu vas rater quelque chose. L'aéroport est en pleine ville — 10 minutes en Grab depuis le centre, 4$ maximum.",
      },
      {
        type: 'paragraph',
        text: "Pour dormir, le front de mer est la zone évidente — tu te réveilles à 200m de la plage. Mais le quartier An Thượng, un peu en retrait, est souvent moins cher et plus vivant le soir. Pour une semaine ou plus, les locations d'appartement sur Airbnb ou Booking sont imbattables en rapport qualité-prix.",
      },
      {
        type: 'paragraph',
        text: "L'excursion incontournable : Hoi An à 30km. Une heure de Grab, une vieille ville classée UNESCO, les meilleurs tailleurs du monde. Pars tôt le matin, reviens le soir — ou reste dormir sur place si tu as le temps.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "I didn't have much in mind when I booked Da Nang. A cheap flight, a free week, and the urge to get away. What I found there was a city that gets it right.",
      },
      {
        type: 'paragraph',
        text: "Da Nang is not Hoi An — too picturesque and touristy. It's not Hanoi — too dense and chaotic. It's something in between: a modern, laid-back city with an enormous beach and a nightlife scene that doesn't start until late.",
      },
      {
        type: 'quote',
        text: "Da Nang is the city you visit for a week and start looking for an apartment by day three.",
      },
      {
        type: 'heading',
        text: "The beach: 8 km every morning",
      },
      {
        type: 'paragraph',
        text: "My Khe Beach is one of the longest urban beaches in Southeast Asia. 8 kilometres of white sand, nearly empty in the early morning. I got into the habit of walking the full length from 6:30am.",
      },
      {
        type: 'paragraph',
        text: "At that hour the beach belongs to the locals. Groups of Vietnamese doing exercise, elderly women collecting shells, a few fishermen heading back with their nets. The sun rises directly from the sea. It's probably the best hour of the day.",
      },
      {
        type: 'list',
        items: [
          "Sunrise over the sea — straight from the beach, no 4am alarm needed",
          "Warm water year-round, gentle waves — ideal for a relaxed swim",
          "Free public showers and changing rooms along the seafront",
          "Clean, well-maintained coastal boulevard — perfect for running or cycling",
        ],
      },
      {
        type: 'paragraph',
        text: "In the evening it's a different beach altogether. Seafood restaurants light up, speakers appear from nowhere, locals arrive on scooters with their hammocks. The vibe is totally different — more festive, louder, but still accessible.",
      },
      {
        type: 'heading',
        text: "The night: karaoke, bars, and Malibu Club",
      },
      {
        type: 'paragraph',
        text: "Da Nang at night is worth talking about. The city doesn't try to copy Bangkok or Saigon. It has its own thing — less underground, more unapologetic, with a mixed crowd of expats, travellers, and locals who know their city well.",
      },
      {
        type: 'paragraph',
        text: "Karaoke first. In Vietnam it's a social institution, not something you do after two too many drinks. Private rooms, huge screens, unlimited cocktails. I went three times in one week. Nobody leaves before 2am.",
      },
      {
        type: 'list',
        items: [
          "Karaoke: private rooms from $5/hour — book ahead on weekends",
          "Bars on An Thượng street — the expat district, relaxed vibe, beers from $1",
          "Malibu Club — Da Nang's reference club, electronic music, terrace overlooking the Han river, nights that only get going after midnight",
          "Sky 36 — rooftop on the 36th floor of the Novotel, ideal for sunset and first drinks",
        ],
      },
      {
        type: 'paragraph',
        text: "Malibu Club deserves a special mention. Large terrace, great sound, a genuine mix of local and international crowd. It's where you meet people who've lived in the city for years and can point you to the real good spots.",
      },
      {
        type: 'quote',
        text: "The best addresses aren't on Google. They're in the conversation you have at the bar at 1am.",
      },
      {
        type: 'heading',
        text: "The food: genuinely impressive",
      },
      {
        type: 'paragraph',
        text: "Da Nang is a food city. Not just \"good for Southeast Asia\" — genuinely good. Central Vietnam has its own specialities you won't find in Hanoi or Saigon.",
      },
      {
        type: 'list',
        items: [
          "Mì Quảng — Da Nang's yellow noodles, with pork, shrimp and toasted peanuts. Order it everywhere, $1.50 a bowl",
          "Bánh xèo — crispy shrimp and bean sprout crepe. The best I had was in a nameless hole-in-the-wall with three plastic tables",
          "Grilled seafood on the beach — lobsters, prawns, clams. In the evenings, vendors set up their grills directly on the sand",
          "Nem lụi — minced meat skewers grilled on lemongrass sticks, served with peanut sauce",
        ],
      },
      {
        type: 'paragraph',
        text: "For sit-down restaurants, the Hải Châu district has the best local spots. Avoid places with laminated photo menus at the entrance and pictures of the Eiffel Tower on the walls.",
      },
      {
        type: 'heading',
        text: "What makes Da Nang different",
      },
      {
        type: 'paragraph',
        text: "There's something about Da Nang I can't quite define. The city is clean — rare in Vietnam. The locals are relaxed — fewer pushy vendors, less constant honking. The pace is different.",
      },
      {
        type: 'paragraph',
        text: "It's also a city transforming fast. New hotels, design cafés, co-working spaces with river terraces. In five years Da Nang will probably be much more expensive and much more touristy. Now is the time to go.",
      },
      {
        type: 'list',
        items: [
          "Easy to get around: everything is by scooter or Grab, nothing is far",
          "Cost of living: budget $40–60/day including decent accommodation, restaurants and nights out",
          "English: better spoken than elsewhere in Vietnam, especially in the beachfront area",
          "Climate: avoid September–November (typhoons). Best period: February to August",
        ],
      },
      {
        type: 'quote',
        text: "Da Nang in 2026 is what Bali was in 2010. Get there now.",
      },
      {
        type: 'heading',
        text: "Practical: how to plan your trip",
      },
      {
        type: 'paragraph',
        text: "Da Nang works well over a week, ideally two. Under five days and you'll miss something. The airport is right in the city — 10 minutes by Grab from the centre, $4 max.",
      },
      {
        type: 'paragraph',
        text: "For accommodation, the seafront is the obvious choice — you wake up 200m from the beach. But the An Thượng neighbourhood, slightly set back, is often cheaper and more lively at night. For a week or more, apartment rentals on Airbnb or Booking are unbeatable value.",
      },
      {
        type: 'paragraph',
        text: "The unmissable day trip: Hoi An, 30km away. One hour by Grab, a UNESCO-listed old town, the best tailors in the world. Go early, come back in the evening — or stay overnight if you have the time.",
      },
    ],
  },
];

export default posts;
