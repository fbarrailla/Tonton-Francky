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
  {
    slug: 'setup-dev-nomade-2026',
    title: 'Mon setup de dev nomade en 2026 : rien de superflu',
    titleEn: 'My nomad dev setup in 2026: nothing unnecessary',
    excerpt: "MacBook, batterie externe, Claude Code et une SIM locale — voilà tout ce qu'il me faut pour bosser depuis un café de Saigon ou un coworking à Da Nang. Le minimalisme appliqué au travail de développeur.",
    excerptEn: "MacBook, power bank, Claude Code and a local SIM — that's all I need to work from a Saigon café or a Da Nang coworking. Minimalism applied to developer work.",
    date: '2026-04-15',
    readTime: 5,
    category: 'Dev',
    categoryEn: 'Dev',
    thumbnail: '/blog/setup-nomade.png',
    ebookCta: true,
    ebookType: 'claude',
    content: [
      {
        type: 'paragraph',
        text: "La question qu'on me pose le plus souvent quand les gens apprennent que je bosse en voyage : \"Mais t'as pas besoin d'un écran externe ? D'un bureau fixe ? D'un setup digne de ce nom ?\" Non. Vraiment non. Après deux ans à bosser depuis des cafés, des coworkings et des appartements loués au mois au Vietnam, j'ai compris une chose : le mieux ennemi du bien s'applique aussi au matériel.",
      },
      {
        type: 'quote',
        text: "Le meilleur setup, c'est celui que tu transportes sans y penser.",
      },
      {
        type: 'heading',
        text: "Le matériel : MacBook et rien de plus",
      },
      {
        type: 'paragraph',
        text: "Mon ordi de travail, c'est un MacBook. C'est tout. Pas d'écran externe, pas de clavier mécanique, pas de dock. La philosophie KISS — Keep It Simple — appliquée au hardware. Chaque accessoire supplémentaire, c'est du poids dans le sac, un câble de plus à chercher, une raison de ne pas s'installer quelque part.",
      },
      {
        type: 'paragraph',
        text: "L'écran du MacBook est suffisant pour coder. Si tu n'es pas convaincu, c'est probablement que tu n'as pas encore essayé vraiment. On s'y habitue en une semaine, et après on arrête d'y penser.",
      },
      {
        type: 'list',
        items: [
          "MacBook — l'autonomie tient une journée de boulot, la puissance est largement suffisante pour du dev web",
          "Batterie externe — pour les longues sessions en café sans prise accessible ou les journées en déplacement",
          "Câble USB-C MacBook, câble iPhone, câble Apple Watch — trois câbles, tout est chargé",
          "Total dans le sac : moins de 2 kg. Tu l'oublies sur l'épaule.",
        ],
      },
      {
        type: 'paragraph',
        text: "La batterie externe, c'est la vraie liberté. Elle me permet de m'installer n'importe où sans chercher une prise — un banc dans un parc, une terrasse en plein air, un train. Je la recharge la nuit et je ne me pose plus la question en journée.",
      },
      {
        type: 'heading',
        text: "Les outils de dev : simple et efficace",
      },
      {
        type: 'paragraph',
        text: "Côté logiciels, même philosophie. Pas de stack exotique, pas d'outils à la mode changés tous les six mois. Des valeurs sûres qui fonctionnent partout et que je n'ai jamais à réapprendre.",
      },
      {
        type: 'list',
        items: [
          "VS Code — léger, extensible, universel. Le standard de facto du dev web en 2026, et pour de bonnes raisons",
          "Terminal natif macOS + Git — rien à installer, tout est là. Pour le versioning, GitHub en remote",
          "Claude Code — mon outil IA principal. Directement dans le terminal, intégré au projet, beaucoup plus pertinent qu'un assistant généraliste pour du vrai travail de dev",
          "ChatGPT — en complément, pour les questions rapides, les recherches et les premiers jets de rédaction",
        ],
      },
      {
        type: 'paragraph',
        text: "Claude Code mérite une mention spéciale. Ce n'est pas un simple autocomplétion — c'est un agent qui comprend le contexte de ton projet, lit tes fichiers, propose des modifications cohérentes et t'explique ses choix. Pour un nomade qui bosse seul sur ses projets, c'est comme avoir un second développeur disponible à toute heure.",
      },
      {
        type: 'heading',
        text: "Communication et organisation : le strict minimum",
      },
      {
        type: 'paragraph',
        text: "Pour les calls clients, Google Meet ou Zoom selon ce que le client préfère. Je ne m'impose pas. Une bonne connexion, des écouteurs corrects, et ça se passe bien depuis n'importe quel coworking du monde.",
      },
      {
        type: 'list',
        items: [
          "Google Meet / Zoom — pas de préférence, je m'adapte au client",
          "Trello — gestion de projet. Boards simples, cartes, deadlines. Pas besoin de plus pour des projets en solo ou en petite équipe",
          "Notes Apple — pour tout ce qui est éphémère : idées, listes de courses, trucs à ne pas oublier. Synchronisé sur tous mes appareils automatiquement",
          "Email et messagerie : le standard suffit. Pas d'outil de productivité supplémentaire",
        ],
      },
      {
        type: 'paragraph',
        text: "Trello reste mon outil de gestion de projet depuis des années. Je sais que Linear, Notion et une dizaine d'autres existent. Mais Trello fait exactement ce dont j'ai besoin, je le connais par cœur, et je n'ai pas envie de passer une journée à migrer mes boards pour gagner une feature que j'utiliserai deux fois.",
      },
      {
        type: 'heading',
        text: "La connexion : SIM locale, point final",
      },
      {
        type: 'paragraph',
        text: "La connexion internet, c'est le seul point non négociable du setup nomade. Et la solution est ridiculement simple : acheter une SIM locale à l'arrivée dans chaque pays.",
      },
      {
        type: 'paragraph',
        text: "Au Vietnam, une SIM Viettel ou Vietnamobile avec 60 Go de data coûte environ 5$. Le réseau 4G/5G est excellent dans toutes les grandes villes. Je l'utilise en hotspot sur le MacBook quand le wifi du café est mauvais. Le problème de connexion n'existe quasiment pas.",
      },
      {
        type: 'list',
        items: [
          "SIM locale à chaque pays — 3 à 7$ pour un forfait data large, sans comparaison avec le roaming",
          "Hotspot iPhone → MacBook — la solution de secours qui fonctionne à tous les coups",
          "Pas de VPN au quotidien — je l'active uniquement si le réseau d'un café semble peu sécurisé",
          "Tester la connexion avant de s'installer — 30 secondes pour éviter une heure de frustration",
        ],
      },
      {
        type: 'heading',
        text: "Où bosser : café, coworking ou appart selon le jour",
      },
      {
        type: 'paragraph',
        text: "Je ne travaille pas au même endroit tous les jours, et c'est voulu. La variation des environnements de travail change le type de concentration qu'on a. Un café bruyant est parfait pour écrire ou répondre à des mails. Un coworking calme est meilleur pour du code qui demande de la profondeur. L'appartement est idéal pour les calls ou les journées très longues.",
      },
      {
        type: 'list',
        items: [
          "Café local — ambiance, bruit de fond utile, café à 30 000 VND, idéal pour les tâches légères",
          "Coworking — bureau fixe, silence quand nécessaire, networking possible, 5 à 15$/jour",
          "Appartement — pour les calls clients, les journées de focus intense ou quand il fait trop chaud dehors",
        ],
      },
      {
        type: 'quote',
        text: "Les heures libres ne veulent pas dire travailler moins. Elles veulent dire travailler quand tu es au meilleur de ta concentration.",
      },
      {
        type: 'paragraph',
        text: "Je n'ai pas d'horaires fixes. Certains jours je commence à 7h après Dam Sen Park et je finis à 14h. D'autres jours je commence à 10h et je travaille jusqu'à 20h. Ce qui compte, c'est ce qui est livré — pas le nombre d'heures passées assis devant un écran.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "The question I get asked most when people find out I work while travelling: \"But don't you need an external monitor? A proper desk? A real setup?\" No. Really, no. After two years working from cafés, coworking spaces and month-to-month apartments in Vietnam, I've understood one thing: less is more applies to hardware too.",
      },
      {
        type: 'quote',
        text: "The best setup is the one you carry without thinking about it.",
      },
      {
        type: 'heading',
        text: "Hardware: MacBook and nothing else",
      },
      {
        type: 'paragraph',
        text: "My work computer is a MacBook. That's it. No external monitor, no mechanical keyboard, no dock. The KISS philosophy — Keep It Simple — applied to hardware. Every extra accessory is more weight in the bag, one more cable to find, one more reason not to set up somewhere.",
      },
      {
        type: 'paragraph',
        text: "The MacBook screen is enough to code on. If you're not convinced, you probably haven't really tried. You adjust within a week and then stop thinking about it.",
      },
      {
        type: 'list',
        items: [
          "MacBook — battery lasts a full working day, more than enough power for web dev",
          "Power bank — for long café sessions without an accessible plug, or full days on the move",
          "USB-C MacBook cable, iPhone cable, Apple Watch cable — three cables, everything charged",
          "Total bag weight: under 2 kg. You forget it's on your shoulder.",
        ],
      },
      {
        type: 'paragraph',
        text: "The power bank is real freedom. It means I can sit anywhere without hunting for a plug — a park bench, an open-air terrace, a train. I charge it overnight and never think about it during the day.",
      },
      {
        type: 'heading',
        text: "Dev tools: simple and effective",
      },
      {
        type: 'paragraph',
        text: "Same philosophy on the software side. No exotic stack, no trendy tools swapped out every six months. Reliable standards that work everywhere and that I never have to relearn.",
      },
      {
        type: 'list',
        items: [
          "VS Code — lightweight, extensible, universal. The de facto standard for web dev in 2026, for good reason",
          "Native macOS Terminal + Git — nothing to install, everything's there. GitHub for remote versioning",
          "Claude Code — my main AI tool. Directly in the terminal, integrated with the project, far more relevant than a general assistant for real dev work",
          "ChatGPT — as a complement, for quick questions, research and first drafts",
        ],
      },
      {
        type: 'paragraph',
        text: "Claude Code deserves a special mention. It's not just autocomplete — it's an agent that understands your project's context, reads your files, proposes coherent changes and explains its choices. For a nomad working solo on their projects, it's like having a second developer available at any hour.",
      },
      {
        type: 'heading',
        text: "Communication and organisation: the bare minimum",
      },
      {
        type: 'paragraph',
        text: "For client calls, Google Meet or Zoom depending on what the client prefers. I don't impose. Good connection, decent earphones, and it works fine from any coworking in the world.",
      },
      {
        type: 'list',
        items: [
          "Google Meet / Zoom — no preference, I adapt to the client",
          "Trello — project management. Simple boards, cards, deadlines. Nothing more needed for solo or small-team projects",
          "Apple Notes — for everything ephemeral: ideas, shopping lists, things not to forget. Synced across all devices automatically",
          "Email and messaging: standard tools are enough. No extra productivity layer needed",
        ],
      },
      {
        type: 'paragraph',
        text: "Trello has been my project management tool for years. I know Linear, Notion and a dozen others exist. But Trello does exactly what I need, I know it inside out, and I have no interest in spending a day migrating my boards to gain a feature I'll use twice.",
      },
      {
        type: 'heading',
        text: "Connectivity: local SIM, full stop",
      },
      {
        type: 'paragraph',
        text: "Internet connection is the only non-negotiable in a nomad setup. And the solution is ridiculously simple: buy a local SIM on arrival in each country.",
      },
      {
        type: 'paragraph',
        text: "In Vietnam, a Viettel or Vietnamobile SIM with 60 GB of data costs around $5. The 4G/5G network is excellent in all major cities. I use it as a hotspot on the MacBook when the café wifi is poor. The connection problem barely exists.",
      },
      {
        type: 'list',
        items: [
          "Local SIM in each country — $3 to $7 for a large data plan, no comparison with roaming",
          "iPhone hotspot → MacBook — the backup solution that always works",
          "No daily VPN — I turn it on only if a café network seems insecure",
          "Test the connection before settling in — 30 seconds to avoid an hour of frustration",
        ],
      },
      {
        type: 'heading',
        text: "Where to work: café, coworking or apartment depending on the day",
      },
      {
        type: 'paragraph',
        text: "I don't work in the same place every day, and that's intentional. Varying work environments changes the type of focus you have. A busy café is perfect for writing or answering emails. A quiet coworking is better for code that requires depth. The apartment is ideal for calls or very long days.",
      },
      {
        type: 'list',
        items: [
          "Local café — atmosphere, useful background noise, coffee at 30,000 VND, ideal for lighter tasks",
          "Coworking — fixed desk, silence when needed, possible networking, $5 to $15/day",
          "Apartment — for client calls, intense focus days or when it's too hot outside",
        ],
      },
      {
        type: 'quote',
        text: "Flexible hours don't mean working less. They mean working when you're at your sharpest.",
      },
      {
        type: 'paragraph',
        text: "I have no fixed hours. Some days I start at 7am after Dam Sen Park and finish at 2pm. Other days I start at 10am and work until 8pm. What matters is what gets delivered — not the number of hours spent sitting in front of a screen.",
      },
    ],
  },
  {
    slug: 'vivre-a-saigon-district-11',
    title: 'Vivre à Saigon : ma vie dans le district 11',
    titleEn: 'Living in Saigon: my life in District 11',
    excerpt: "Marche matinale à Dam Sen Park, jus d'orange en bas de chez moi, coworkings et coffee shops pour bosser, nuits qui commencent tard et finissent encore plus tard — Saigon en tant que résident, c'est autre chose qu'en tant que touriste.",
    excerptEn: "Morning walk at Dam Sen Park, fresh orange juice downstairs, coworking spaces and coffee shops to work from, nights that start late and end even later — Saigon as a resident is something else entirely.",
    date: '2026-04-15',
    readTime: 7,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/saigon-district-11.png',
    ebookCta: true,
    ebookType: 'vietnam',
    content: [
      {
        type: 'paragraph',
        text: "Il y a une différence fondamentale entre visiter Saigon et y vivre. En tant que touriste, tu vois la ville en surface — le bruit, la densité, l'énergie. En tant que résident, tu comprends comment elle fonctionne. Tu trouves tes rituels, tes adresses, tes raccourcis. Tu arrêtes de regarder une carte à chaque fois que tu sors.",
      },
      {
        type: 'paragraph',
        text: "J'habite dans le district 11. Pas le plus glamour, pas le plus photogénié, mais peut-être le plus honnête. Pas de bar à cocktails de luxe au coin de la rue, pas d'expat café avec des pancakes à 8$. Juste une vie de quartier vietnamienne dense, accessible, et étrangement reposante.",
      },
      {
        type: 'quote',
        text: "Saigon te prend deux semaines à apprivoiser. Après ça, tu ne veux plus partir.",
      },
      {
        type: 'heading',
        text: "La routine du matin : Dam Sen Park et jus d'orange",
      },
      {
        type: 'paragraph',
        text: "Chaque matin, je marche jusqu'à Dam Sen Park. Le parc est à cinq minutes à pied, et il fait environ 3 kilomètres de tour complet. À 6h30, le parc appartient aux locaux — des groupes de seniors qui font de la gym en musique, des femmes qui pratiquent le tai-chi en bordure du lac, des couples qui marchent en silence. Personne ne te regarde. Tu fais partie du décor.",
      },
      {
        type: 'paragraph',
        text: "Le lac central, les bancs sous les arbres, les vieux qui jouent aux échecs dès l'aube — il y a dans Dam Sen quelque chose de profondément calme qui contraste totalement avec le chaos qui l'entoure. C'est mon reset quotidien. Sans ça, Saigon peut devenir écrasante.",
      },
      {
        type: 'list',
        items: [
          "Dam Sen Park — entrée à 6 000 VND, ouvert dès 5h30, plein de Saigonnais avant 8h",
          "Tour complet du lac : ~3 km, parfait pour marcher ou courir",
          "Le matin, évite le parc d'attractions adjacent qui ouvre plus tard et attire les touristes",
          "En rentrant : un jus d'orange fraîchement pressé au stand en bas de l'immeuble — 15 000 VND",
        ],
      },
      {
        type: 'paragraph',
        text: "Ce jus d'orange, c'est un détail qui ne l'est pas. La dame qui le prépare est là tous les matins à 7h. Elle me voit arriver en sueur, elle commence à presser sans que je le demande. Ces petits rituels avec les gens du quartier, c'est ce qui transforme un séjour en quelque chose qui ressemble à une vie.",
      },
      {
        type: 'heading',
        text: "Travailler depuis Saigon : le paradis des nomades digitaux",
      },
      {
        type: 'paragraph',
        text: "Saigon est l'une des meilleures villes du monde pour travailler à distance. Combinaison imbattable : internet ultra-rapide partout, coffee shops ouverts jusqu'à minuit, coworkings bien équipés, et un coût de la vie qui fait qu'on ne stresse pas pour sa trésorerie.",
      },
      {
        type: 'paragraph',
        text: "Les coffee shops vietnamiens sont dans une catégorie à part. Ils ne sont pas juste des endroits où on boit du café — ce sont des espaces de travail assumés. Prises électriques à chaque table, wifi affiché à l'entrée, personnel qui ne te regarde pas de travers si tu restes trois heures avec une seule commande. Un café cà phê trứng ou un bạc xỉu glacé à 30 000 VND, et tu travailles aussi bien que dans un coworking à 20$/jour.",
      },
      {
        type: 'list',
        items: [
          "Coworkings : Toong, Dreamplex, Base Workspace — de 5$/jour à 80$/mois",
          "Coffee shops : Katinat, The Workshop, Shin Coffee — wifi fiable, ambiance studieuse",
          "Café local dans le district 11 : 20 000–30 000 VND la commande, personne ne te presse",
          "Connexion : fibre disponible dans la plupart des appartements, 4G omniprésent en backup",
        ],
      },
      {
        type: 'paragraph',
        text: "Pour les développeurs en particulier, Saigon a une communauté tech active. Des meetups réguliers, des événements dans les coworkings, des groupes Telegram qui partagent les bonnes adresses. Ce n'est pas Berlin ou Lisbonne, mais c'est une vraie scène — et elle est en train de grandir vite.",
      },
      {
        type: 'heading',
        text: "La nuit à Saigon : du café des stagiaires aux rooftops",
      },
      {
        type: 'paragraph',
        text: "La vie nocturne de Saigon est stratifiée. Il y a plusieurs niveaux, plusieurs ambiances, et chaque quartier a ses codes. Ce n'est pas une ville avec un seul endroit où ça se passe — c'est une ville où ça se passe partout, différemment.",
      },
      {
        type: 'paragraph',
        text: "Le café des stagiaires — surnom donné par les expats francophones à certains cafés du district 1 où se retrouvent les jeunes Vietnamiens qui ont fait leurs études à l'étranger. Ambiance décontractée, musique lo-fi, conversations mélangées français-anglais-vietnamien. Un endroit où tu rencontres des gens en cinq minutes.",
      },
      {
        type: 'list',
        items: [
          "Bars à cocktails du district 1 — Pasteur Street, The Gin House, Observatory : ambiance craft, clientèle mélangée",
          "Bui Vien Street — la rue des backpackers, décomplexée, bruyante, idéale pour une première nuit",
          "Rooftops : EON Heli Bar (tour Bitexco), Chill Sky Bar, Saigon Saigon — vues sur la ville, cocktails à 5$",
          "District 2 : bars de quartier plus calmes, clientèle expat installée, ambiance lounge",
        ],
      },
      {
        type: 'paragraph',
        text: "Ce que j'aime dans les nuits saigonnaises, c'est qu'elles commencent tard et finissent quand tout le monde est prêt. On dîne à 19h, on prend un verre à 21h, on finit sur un rooftop à 23h, et si l'envie est là, on continue. Personne ne regarde sa montre.",
      },
      {
        type: 'quote',
        text: "À Saigon, la nuit n'a pas d'heure de fermeture. C'est à toi de décider quand ça s'arrête.",
      },
      {
        type: 'heading',
        text: "Les districts : chaque quartier est une ville dans la ville",
      },
      {
        type: 'paragraph',
        text: "Ce qui rend Saigon fascinante pour y vivre, c'est que chaque district a sa propre personnalité. Prendre un Grab d'un district à l'autre, c'est changer complètement d'atmosphère en quinze minutes.",
      },
      {
        type: 'list',
        items: [
          "District 1 — le centre historique. Touristes, expats, bars, restos internationaux, hôtels. Pratique mais cher et saturé",
          "District 2 (Thảo Điền) — l'enclave expat. Écoles internationales, cafés instagrammables, marchés fermiers. Calme, verdoyant, hors de prix",
          "District 4 — street food et authenticité à deux pas du centre. Petits restos sur trottoir, marché nocturne, sans les touristes",
          "District 5 — Chinatown (Chợ Lớn). Temples, marchés au tissu, cuisine sino-vietnamienne, une ville dans la ville",
          "District 7 — le district coréen. Centres commerciaux, restaurants coréens et japonais, familles aisées, très propre",
          "District 11 — ma base. Populaire, dense, authentique. Dam Sen Park, marchés locaux, loin du tourisme de masse",
        ],
      },
      {
        type: 'paragraph',
        text: "Habiter dans le district 11, c'est choisir de vivre comme les Saigonnais et non pas comme les visiteurs. Ça veut dire moins de confort surface, moins d'anglais autour de soi, mais plus d'immersion, des prix divisés par deux ou trois, et la sensation d'appartenir réellement à la ville.",
      },
      {
        type: 'heading',
        text: "Pourquoi Saigon pour les développeurs nomades",
      },
      {
        type: 'paragraph',
        text: "Je suis développeur. Saigon coche toutes les cases de manière presque absurde. Internet rapide partout. Électricité fiable. Coût de la vie qui permet de vivre confortablement avec 1 500$ par mois tout compris. Décalage horaire avec l'Europe gérable. Et une qualité de vie qui dépasse de loin ce qu'on peut avoir pour ce budget en France ou en Belgique.",
      },
      {
        type: 'list',
        items: [
          "Appartement en centre-ville : 400–600$/mois pour un studio correct, 600–900$ pour un T2 avec vue",
          "Repas : 2–4$ au restaurant local, 10–15$ dans un endroit plus soigné",
          "Transport : Grab moto (xe ôm) pour 1–2$ les courts trajets, Grab car pour 3–5$ en ville",
          "Visa : e-visa 90 jours renouvelable, ou visa run en Thaïlande ou Cambodge pour les longs séjours",
        ],
      },
      {
        type: 'paragraph',
        text: "Saigon n'est pas parfaite. La pollution de l'air est réelle. La chaleur est permanente. La circulation en heure de pointe est éprouvante. Mais une fois qu'on a trouvé son quartier, ses rituels et ses adresses, c'est une des villes les plus agréables du monde pour travailler et vivre en même temps.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "There's a fundamental difference between visiting Saigon and living there. As a tourist, you see the city on the surface — the noise, the density, the energy. As a resident, you understand how it works. You find your rituals, your spots, your shortcuts. You stop looking at a map every time you go out.",
      },
      {
        type: 'paragraph',
        text: "I live in District 11. Not the most glamorous, not the most photogenic, but maybe the most honest. No upscale cocktail bar on the corner, no expat café serving $8 pancakes. Just a dense, accessible Vietnamese neighbourhood life that's strangely restful.",
      },
      {
        type: 'quote',
        text: "Saigon takes two weeks to get your head around. After that, you don't want to leave.",
      },
      {
        type: 'heading',
        text: "Morning routine: Dam Sen Park and orange juice",
      },
      {
        type: 'paragraph',
        text: "Every morning I walk to Dam Sen Park. The park is five minutes on foot, and a full lap is about 3 kilometres. At 6:30am the park belongs to locals — groups of seniors doing group exercises to music, women practising tai chi by the lake, couples walking in silence. Nobody looks at you. You're part of the scenery.",
      },
      {
        type: 'paragraph',
        text: "The central lake, benches under the trees, old men playing chess at dawn — Dam Sen has a deep calm that contrasts completely with the chaos surrounding it. It's my daily reset. Without it, Saigon can become overwhelming.",
      },
      {
        type: 'list',
        items: [
          "Dam Sen Park — entry 6,000 VND, open from 5:30am, packed with locals before 8am",
          "Full lap around the lake: ~3 km, perfect for walking or running",
          "In the morning, avoid the adjacent amusement park which opens later and draws tourists",
          "On the way back: a freshly squeezed orange juice from the stand downstairs — 15,000 VND",
        ],
      },
      {
        type: 'paragraph',
        text: "That orange juice is a detail that isn't. The woman who makes it is there every morning at 7am. She sees me arrive sweaty and starts pressing before I even ask. These small rituals with neighbourhood people are what turn a stay into something that feels like a life.",
      },
      {
        type: 'heading',
        text: "Working from Saigon: a digital nomad's paradise",
      },
      {
        type: 'paragraph',
        text: "Saigon is one of the best cities in the world to work remotely. An unbeatable combination: ultra-fast internet everywhere, coffee shops open until midnight, well-equipped coworking spaces, and a cost of living that means you're not stressed about cash flow.",
      },
      {
        type: 'paragraph',
        text: "Vietnamese coffee shops are in a category of their own. They're not just places to drink coffee — they're unapologetic workspaces. Power outlets at every table, wifi posted at the entrance, staff who don't give you the side-eye if you sit for three hours on one order. An egg coffee or iced bạc xỉu at 30,000 VND, and you work just as well as in a $20/day coworking.",
      },
      {
        type: 'list',
        items: [
          "Coworkings: Toong, Dreamplex, Base Workspace — from $5/day to $80/month",
          "Coffee shops: Katinat, The Workshop, Shin Coffee — reliable wifi, studious atmosphere",
          "Local café in District 11: 20,000–30,000 VND per order, nobody rushes you",
          "Connectivity: fibre in most apartments, 4G everywhere as backup",
        ],
      },
      {
        type: 'paragraph',
        text: "For developers specifically, Saigon has an active tech community. Regular meetups, coworking events, Telegram groups sharing good spots. It's not Berlin or Lisbon, but it's a real scene — and it's growing fast.",
      },
      {
        type: 'heading',
        text: "Saigon at night: from intern cafés to rooftops",
      },
      {
        type: 'paragraph',
        text: "Saigon's nightlife is layered. Multiple levels, multiple atmospheres, each district with its own codes. It's not a city with one place where things happen — it's a city where things happen everywhere, differently.",
      },
      {
        type: 'paragraph',
        text: "The \"intern café\" — a nickname used by French-speaking expats for certain District 1 cafés where young Vietnamese who studied abroad hang out. Relaxed atmosphere, lo-fi music, conversations mixing French, English and Vietnamese. A place where you meet people in five minutes.",
      },
      {
        type: 'list',
        items: [
          "Cocktail bars in District 1 — Pasteur Street, The Gin House, Observatory: craft vibes, mixed crowd",
          "Bui Vien Street — the backpacker strip, unpretentious, loud, great for a first night out",
          "Rooftops: EON Heli Bar (Bitexco tower), Chill Sky Bar, Saigon Saigon — city views, $5 cocktails",
          "District 2: quieter neighbourhood bars, settled expat crowd, lounge atmosphere",
        ],
      },
      {
        type: 'paragraph',
        text: "What I love about Saigon nights is that they start late and end when everyone's ready. Dinner at 7pm, drinks at 9pm, rooftop at 11pm, and if the mood is there, you keep going. Nobody checks the time.",
      },
      {
        type: 'quote',
        text: "In Saigon, the night has no closing time. It's up to you to decide when it stops.",
      },
      {
        type: 'heading',
        text: "The districts: each neighbourhood is a city within a city",
      },
      {
        type: 'paragraph',
        text: "What makes Saigon fascinating to live in is that each district has its own personality. Taking a Grab from one district to another means completely changing atmosphere in fifteen minutes.",
      },
      {
        type: 'list',
        items: [
          "District 1 — the historic centre. Tourists, expats, bars, international restaurants, hotels. Convenient but expensive and saturated",
          "District 2 (Thảo Điền) — the expat enclave. International schools, instagrammable cafés, farmers' markets. Calm, green, pricey",
          "District 4 — street food and authenticity minutes from the centre. Pavement restaurants, night market, no tourists",
          "District 5 — Chinatown (Chợ Lớn). Temples, fabric markets, Sino-Vietnamese cuisine, a city within the city",
          "District 7 — the Korean district. Shopping centres, Korean and Japanese restaurants, wealthy families, very clean",
          "District 11 — my base. Working-class, dense, authentic. Dam Sen Park, local markets, far from mass tourism",
        ],
      },
      {
        type: 'paragraph',
        text: "Living in District 11 means choosing to live like Saigonese people rather than like visitors. That means less surface comfort, less English around you, but more immersion, prices two or three times lower, and the genuine feeling of belonging to the city.",
      },
      {
        type: 'heading',
        text: "Why Saigon for digital nomad developers",
      },
      {
        type: 'paragraph',
        text: "I'm a developer. Saigon ticks every box almost absurdly well. Fast internet everywhere. Reliable electricity. A cost of living that lets you live comfortably on $1,500/month all in. A time difference from Europe that's manageable. And a quality of life that far exceeds what you'd get for that budget in France or Belgium.",
      },
      {
        type: 'list',
        items: [
          "City centre apartment: $400–600/month for a decent studio, $600–900 for a 1-bed with a view",
          "Meals: $2–4 at a local restaurant, $10–15 somewhere nicer",
          "Transport: Grab moto for $1–2 for short trips, Grab car $3–5 across the city",
          "Visa: 90-day e-visa renewable, or visa run to Thailand or Cambodia for long stays",
        ],
      },
      {
        type: 'paragraph',
        text: "Saigon isn't perfect. The air pollution is real. The heat is constant. Rush-hour traffic is gruelling. But once you've found your neighbourhood, your rituals and your spots, it's one of the most enjoyable cities in the world to work and live at the same time.",
      },
    ],
  },
  {
    slug: 'phu-quoc-ile',
    title: 'Phu Quoc : l\'île qui fait tout en grand',
    titleEn: 'Phu Quoc: the island that does everything big',
    excerpt: "Grand World dans le nord, Sunny World dans le sud, appartement au centre — Phu Quoc est une île qui ne ressemble à rien d'autre au Vietnam. Une destination qui divise, et c'est précisément pour ça qu'elle vaut le détour.",
    excerptEn: "Grand World in the north, Sunny World in the south, apartment in the centre — Phu Quoc is an island unlike anything else in Vietnam. A destination that divides opinion, and that's exactly why it's worth the trip.",
    date: '2026-04-15',
    readTime: 6,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/phu-quoc.png',
    ebookCta: true,
    ebookType: 'vietnam',
    content: [
      {
        type: 'paragraph',
        text: "Phu Quoc, c'est l'île que les puristes détestent et que les autres adorent. En dix ans, elle est passée d'un coin de pêcheurs quasi vierge à une destination de resort international avec parcs d'attractions, casino et câble car. C'est beaucoup. Mais si tu acceptes ça dès le départ, tu vas passer un séjour excellent.",
      },
      {
        type: 'quote',
        text: "Phu Quoc, c'est le Vietnam qui met le turbo. Pas pour tout le monde — mais quand ça te parle, ça te parle vraiment.",
      },
      {
        type: 'heading',
        text: "Grand World : le nord de l'île qui ne dort jamais",
      },
      {
        type: 'paragraph',
        text: "Le nord de l'île est le territoire de Vingroup, avec trois attractions majeures regroupées dans un même secteur. Grand World, c'est une ville artificielle avec des canaux, des ponts, des ruelles à l'italienne, des restaurants à la chaîne, des spectacles de rue et une ambiance de fête permanente dès la tombée de la nuit. Juste à côté, VinWonder est le parc d'attractions de Vinpearl — manèges, shows, et en son centre l'aquarium en forme de tortue géante, le plus grand d'Asie du Sud-Est. Et dans la même zone, le Safari Vinpearl : un zoo en semi-liberté où les animaux défilent autour du véhicule.",
      },
      {
        type: 'paragraph',
        text: "C'est kitsch, assumé, et franchement amusant. Les Vietnamiens adorent — les familles, les couples, les groupes d'amis. Les vendeurs ambulants, les shows de lumière, les stands de nourriture de rue réinterprétée. On n'est pas en train de chercher l'authenticité ici, et c'est libérateur.",
      },
      {
        type: 'list',
        items: [
          "Grand World — spectacles nocturnes gratuits, gondoles sur les canaux, dizaines de restaurants",
          "VinWonder — parc d'attractions avec l'aquarium tortue géante, le plus grand d'Asie du Sud-Est",
          "Safari Vinpearl — animaux en semi-liberté, à voir depuis un véhicule, expérience unique dans le nord",
          "Très animé le week-end — prévoir plus de monde, plus d'ambiance, plus de bruit",
        ],
      },
      {
        type: 'paragraph',
        text: "Grand World mérite une soirée, pas plus. Arrive vers 19h quand les lumières s'allument, mange quelque chose, fais un tour des spectacles, et rentre. Pour VinWonder et le Safari, prévois une journée entière — c'est un autre univers.",
      },
      {
        type: 'heading',
        text: "Le sud : Sun Group, Sunset Town et shows spectaculaires",
      },
      {
        type: 'paragraph',
        text: "Dans le sud de l'île, ward d'An Thới, c'est Sun Group qui a développé tout l'écosystème touristique. Le cœur du secteur, c'est la zone méditerranéenne — aussi appelée Sunset Town — une ville artificielle aux façades colorées, pensée pour le coucher de soleil et les photos. On y trouve des ruelles piétonnes, des bars en terrasse, et une atmosphère différente de Grand World : plus romantique, moins chaotique.",
      },
      {
        type: 'paragraph',
        text: "Depuis An Thới, le câble car traverse la mer jusqu'à Hòn Thơm — 8 km au-dessus de l'eau turquoise, l'une des plus longues traversées par câble au monde. Sur l'île, le Sun World Water Park propose toboggans et piscines à vagues. Mais le vrai coup de cœur du sud, c'est le soir : trois shows monumentaux sont présentés sur la plage — L'Éveil de la Mer, Le Baiser de la Mer et La Symphonie de la Mer. Ces spectacles mêlent projections lumières, eau, feu, feux d'artifice et performances de Jetski et Flyboard. Difficile d'en ressortir indifférent.",
      },
      {
        type: 'list',
        items: [
          "Sunset Town — zone méditerranéenne, idéale pour le coucher de soleil et l'apéro en terrasse",
          "Câble car An Thới–Hòn Thơm — 8 km au-dessus de la mer, l'une des plus longues du monde",
          "Sun World Water Park — toboggans et piscines à vagues sur Hòn Thơm",
          "Tours en bateau — excursions vers Hòn Móng Tay, Hòn Mây Rút et Hòn Buôm, coraux et snorkeling",
          "Khem Beach et Bãi Sao — deux des plus belles plages de l'île, sable blanc, eau cristalline",
          "Prison de Phu Quoc — site historique de la guerre du Vietnam, sobre et marquant",
          "Villages de pêcheurs côtiers — la vraie vie du sud, loin des complexes touristiques",
          "Shows nocturnes — L'Éveil de la Mer, Le Baiser de la Mer, La Symphonie de la Mer",
        ],
      },
      {
        type: 'paragraph',
        text: "Prévois deux jours pour le sud si tu veux tout faire : une journée câble car + plages + snorkeling, une soirée pour Sunset Town et un des shows. C'est un programme dense, mais chaque élément mérite le détour.",
      },
      {
        type: 'heading',
        text: "Vivre au centre : le bon compromis",
      },
      {
        type: 'paragraph',
        text: "J'ai posé mes valises dans un appartement au centre de Phu Quoc, entre les deux pôles touristiques. C'est le meilleur endroit pour être : à 20 minutes de Grand World au nord, à 25 minutes de Sunset Town et du câble car au sud, et à deux pas de Long Beach et du marché nocturne de Dương Đông.",
      },
      {
        type: 'paragraph',
        text: "Le centre de l'île, c'est aussi là où la vie locale se passe encore. Les marchés du matin, les petits restos de pho sur le trottoir, les vendeurs de fruits en scooter. Dương Đông Town a gardé une âme de ville de pêcheurs malgré le développement touristique intense des dix dernières années.",
      },
      {
        type: 'list',
        items: [
          "Long Beach (Bãi Trường) — plage principale, 20 km, accessible à pied depuis le centre",
          "Marché nocturne de Dương Đông — fruits de mer frais, souvenirs, ambiance locale",
          "Location d'appartement : bien meilleure option qu'un resort pour une semaine ou plus",
          "Scooter : indispensable pour rejoindre les deux extrémités de l'île à son rythme",
        ],
      },
      {
        type: 'quote',
        text: "Un appartement au centre de Phu Quoc, c'est avoir la mer le matin, Grand World le soir, et un marché de rue pour les repas. Le bon équilibre.",
      },
      {
        type: 'heading',
        text: "Ce que Phu Quoc n'est plus — et ce qu'elle est vraiment",
      },
      {
        type: 'paragraph',
        text: "Phu Quoc n'est plus l'île sauvage qu'elle était. Le nord est bétonné, le sud est un parc d'attractions, et Long Beach est bordée de resorts 5 étoiles. Ça peut frustrer ceux qui cherchent la nature brute.",
      },
      {
        type: 'paragraph',
        text: "Mais l'île a conservé quelque chose : une eau extraordinaire. Le bleu-vert qu'on voit depuis le câble car, c'est réel. Les plages du nord-ouest — An Thới, Bãi Sao — sont encore calmes et très belles. Et la pointe sud de l'île, hors des circuits touristiques, reste sauvage.",
      },
      {
        type: 'list',
        items: [
          "Bãi Sao : la plus belle plage de l'île, sable blanc, eau cristalline, dans le sud-est",
          "Snorkeling autour des îlots An Thới — coraux encore préservés, poissons en masse",
          "Sauce de poisson (nước mắm) de Phu Quoc — la meilleure du Vietnam, ramène-en absolument",
          "Poivre de Phu Quoc — plantations visitables, produit d'exception à rapporter",
        ],
      },
      {
        type: 'heading',
        text: "Pratique : organiser son séjour",
      },
      {
        type: 'paragraph',
        text: "Phu Quoc se rejoint en avion depuis Saigon en 50 minutes. Vol à partir de 20$ en promotion sur VietJet ou Bamboo. L'aéroport est au centre de l'île — 10 minutes en Grab de Dương Đông Town.",
      },
      {
        type: 'list',
        items: [
          "Durée idéale : 5 à 7 jours — en dessous de 4 jours tu vas rater la moitié",
          "Scooter : louer dès l'arrivée, 150 000–200 000 VND/jour, indispensable",
          "Budget : 50–80$/jour incluant hébergement, restos et activités",
          "Meilleure période : novembre à avril, saison sèche — éviter mai à octobre (mousson)",
        ],
      },
      {
        type: 'paragraph',
        text: "Phu Quoc n'est pas parfaite. Elle est construite trop vite, trop fort, et elle a perdu une partie de son charme sauvage. Mais elle offre quelque chose d'unique au Vietnam : une île avec une vraie infrastructure de loisirs, une mer splendide, et suffisamment de diversité pour qu'une semaine ne ressemble pas du tout à une autre.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "Phu Quoc is the island purists hate and everyone else loves. In ten years it went from a near-untouched fishing backwater to an international resort destination with theme parks, a casino and a cable car. That's a lot. But if you accept that upfront, you're going to have a great time.",
      },
      {
        type: 'quote',
        text: "Phu Quoc is Vietnam hitting the accelerator. Not for everyone — but when it speaks to you, it really speaks.",
      },
      {
        type: 'heading',
        text: "Grand World: the north that never sleeps",
      },
      {
        type: 'paragraph',
        text: "The north of the island is Vingroup territory, with three major attractions clustered in the same area. Grand World is an artificial town with canals, bridges, Italian-style alleyways, chain restaurants, street shows and a permanent party atmosphere from sundown. Right next door, VinWonder is Vinpearl's theme park — rides, shows, and at its heart a giant turtle-shaped aquarium, the largest in Southeast Asia. And in the same zone, Vinpearl Safari: a semi-open zoo where animals roam around your vehicle.",
      },
      {
        type: 'paragraph',
        text: "It's kitsch, unapologetic, and genuinely fun. Vietnamese people love it — families, couples, groups of friends. Street vendors, light shows, reimagined street food stalls. We're not here looking for authenticity, and there's something freeing about that.",
      },
      {
        type: 'list',
        items: [
          "Grand World — free nightly shows, canal gondolas, dozens of restaurants and bars",
          "VinWonder — theme park featuring the giant turtle aquarium, the largest in Southeast Asia",
          "Vinpearl Safari — semi-free-roaming animals viewed from a vehicle, unique experience in the north",
          "Very busy at weekends — expect more crowds, more atmosphere, more noise",
        ],
      },
      {
        type: 'paragraph',
        text: "Grand World deserves one evening, no more. Arrive around 7pm when the lights come on, eat something, catch a show, then head back. For VinWonder and the Safari, plan a full day — it's a completely different world.",
      },
      {
        type: 'heading',
        text: "The south: Sun Group, Sunset Town and spectacular shows",
      },
      {
        type: 'paragraph',
        text: "In the south of the island, in An Thoi ward, Sun Group has developed the entire tourist ecosystem. The centrepiece is the Mediterranean area — also known as Sunset Town — an artificial village of colourful facades built around the golden hour. Pedestrian alleyways, rooftop bars, and an atmosphere that feels more romantic and less hectic than Grand World.",
      },
      {
        type: 'paragraph',
        text: "From An Thoi, the cable car crosses the sea to Hòn Thơm island — 8 km over turquoise water, one of the longest cable car crossings in the world. On the island, Sun World Water Park offers slides and wave pools. But the real highlight of the south happens after dark: three spectacular shows take place on the beach — The Awakening Sea, The Kiss of the Sea, and The Symphony of the Sea. Each combines light technology, water, fire, fireworks, and Jetski or Flyboard performances. Hard to walk away unmoved.",
      },
      {
        type: 'list',
        items: [
          "Sunset Town — Mediterranean-style area, perfect for sundowners and golden-hour photos",
          "Cable car An Thoi–Hòn Thơm — 8 km over the sea, one of the world's longest",
          "Sun World Water Park — slides and wave pools on Hòn Thơm island",
          "Island boat tours — trips to Hòn Móng Tay, Hòn Mây Rút and Hòn Buôm for snorkelling and coral",
          "Khem Beach and Bãi Sao — two of the island's finest beaches, white sand, crystal water",
          "Phu Quoc Prison — Vietnam War-era historical site, sobering and worth visiting",
          "Coastal fishing villages — the real south, away from the tourist complexes",
          "Evening shows — The Awakening Sea, The Kiss of the Sea, The Symphony of the Sea",
        ],
      },
      {
        type: 'paragraph',
        text: "Allow two days for the south if you want to do it properly: one day for the cable car, beaches and snorkelling, one evening for Sunset Town and a show. It's a packed itinerary, but every piece of it earns its place.",
      },
      {
        type: 'heading',
        text: "Living in the centre: the right balance",
      },
      {
        type: 'paragraph',
        text: "I stayed in an apartment in the centre of Phu Quoc, between the two tourist poles. It's the best place to be: 20 minutes from Grand World in the north, 25 minutes from Sunset Town and the cable car in the south, and a short walk from Long Beach and Dương Đông night market.",
      },
      {
        type: 'paragraph',
        text: "The centre of the island is also where local life still happens. Morning markets, small pho restaurants on the pavement, fruit vendors on scooters. Dương Đông Town has kept a fishing village soul despite the intense tourist development of the last ten years.",
      },
      {
        type: 'list',
        items: [
          "Long Beach (Bãi Trường) — main beach, 20 km long, walkable from the centre",
          "Dương Đông night market — fresh seafood, souvenirs, local atmosphere",
          "Apartment rental: far better option than a resort for a week or more",
          "Scooter: essential for reaching both ends of the island on your own schedule",
        ],
      },
      {
        type: 'quote',
        text: "An apartment in the centre of Phu Quoc means the sea in the morning, Grand World in the evening, and a street market for meals. The right balance.",
      },
      {
        type: 'heading',
        text: "What Phu Quoc no longer is — and what it really is",
      },
      {
        type: 'paragraph',
        text: "Phu Quoc is no longer the wild island it once was. The north is heavily developed, the south is a theme park, and Long Beach is lined with 5-star resorts. That can frustrate anyone looking for raw nature.",
      },
      {
        type: 'paragraph',
        text: "But the island has kept one thing: extraordinary water. The blue-green you see from the cable car is real. The beaches on the northwest — An Thới, Bãi Sao — are still quiet and stunning. And the southern tip of the island, off the tourist circuit, remains wild.",
      },
      {
        type: 'list',
        items: [
          "Bãi Sao: the island's most beautiful beach, white sand, crystal water, in the southeast",
          "Snorkelling around An Thới islets — well-preserved coral, fish everywhere",
          "Phu Quoc fish sauce (nước mắm) — the best in Vietnam, absolutely bring some home",
          "Phu Quoc pepper — plantations open to visit, exceptional product worth bringing back",
        ],
      },
      {
        type: 'heading',
        text: "Practical: planning your stay",
      },
      {
        type: 'paragraph',
        text: "Phu Quoc is reached by plane from Saigon in 50 minutes. Flights from $20 on promotion with VietJet or Bamboo. The airport is in the centre of the island — 10 minutes by Grab from Dương Đông Town.",
      },
      {
        type: 'list',
        items: [
          "Ideal length: 5 to 7 days — under 4 days and you'll miss half of it",
          "Scooter: rent on arrival, 150,000–200,000 VND/day, non-negotiable",
          "Budget: $50–80/day including accommodation, restaurants and activities",
          "Best time: November to April, dry season — avoid May to October (monsoon)",
        ],
      },
      {
        type: 'paragraph',
        text: "Phu Quoc isn't perfect. It's been built too fast, too hard, and it has lost some of its wild charm. But it offers something unique in Vietnam: an island with real leisure infrastructure, spectacular water, and enough variety that one week looks nothing like another.",
      },
    ],
  },
  {
    slug: 'can-tho-delta',
    title: 'Can Tho : le vrai Vietnam flottant',
    titleEn: 'Can Tho: the real floating Vietnam',
    excerpt: "Marchés flottants au lever du soleil, marché aux fleurs qui s'éveille à l'aube, balade en sampan sur le Mékong — Can Tho est la capitale du Delta et la ville la plus authentique que j'ai visitée au Vietnam.",
    excerptEn: "Floating markets at sunrise, a flower market waking at dawn, a sampan ride along the Mekong — Can Tho is the Delta's capital and the most authentic city I visited in Vietnam.",
    date: '2026-04-15',
    readTime: 6,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/can-tho.jpg',
    ebookCta: true,
    ebookType: 'vietnam',
    content: [
      {
        type: 'paragraph',
        text: "Can Tho n'est pas sur l'itinéraire classique. La plupart des voyageurs font Hanoï, Hoi An, Saigon — et rentrent. Ceux qui descendent dans le Delta du Mékong voient quelque chose de complètement différent : une région où la vie se passe sur l'eau, où les marchés commencent avant l'aube, et où le rythme n'a rien à voir avec le reste du pays.",
      },
      {
        type: 'quote',
        text: "À Can Tho, les vendeurs partent travailler en barque. Le reste du monde peut attendre.",
      },
      {
        type: 'heading',
        text: "Les marchés flottants : lever à 5h, aucun regret",
      },
      {
        type: 'paragraph',
        text: "Le marché flottant de Cái Răng est le plus grand du Delta. Des dizaines de sampans chargés à ras bord — ananas, mangues, papayes, durians — qui se retrouvent au milieu de la rivière pour s'échanger de la marchandise. Ça ressemble à ce qu'on voit sur les photos, mais en vrai c'est bruyant, ça sent fort, et c'est surtout un vrai marché de gros où les locaux font leurs courses.",
      },
      {
        type: 'paragraph',
        text: "Il faut y aller tôt. Vraiment tôt. À 6h le marché est en pleine activité. À 9h il se vide. Les guides qui te proposent d'y aller à 8h pour éviter le lever matinal te font rater l'essentiel. Prends un bateau depuis l'embarcadère de Ninh Kiều à 5h30, ramène un café vietnamien à emporter, et regarde le soleil se lever sur le Mékong depuis le pont d'une barque en bois.",
      },
      {
        type: 'list',
        items: [
          "Marché flottant de Cái Răng — 6 km du centre, 30 min en bateau depuis Ninh Kiều",
          "Meilleure heure : 5h30–7h30, avant que les bateaux touristes n'arrivent en nombre",
          "Prix bateau : 100 000–150 000 VND pour 2h, marchandage possible",
          "Bonus : le petit-déjeuner sur l'eau — des barques vendent bún bò, cháo et café dès l'aube",
        ],
      },
      {
        type: 'paragraph',
        text: "Le marché de Phong Điền, un peu plus loin, est encore moins touristique et plus authentique. Moins de bateaux, plus de locaux. Si tu as le temps, c'est celui-là qu'il faut privilégier.",
      },
      {
        type: 'heading',
        text: "Le marché aux fleurs : Hoa Ninh Kiều",
      },
      {
        type: 'paragraph',
        text: "Le long du quai Ninh Kiều, chaque matin avant l'aube, les barques chargées de fleurs s'amarrent les unes après les autres. Lotus, orchidées, anthuriums, tournesols — tout ce que le Delta cultive arrive ici avant d'être redistribué dans les marchés de la ville et des environs.",
      },
      {
        type: 'paragraph',
        text: "Ce n'est pas un marché touristique. Les vendeuses ne s'intéressent pas à toi, elles déchargent leurs bateaux depuis 4h du matin et négocient leurs lots à la criée. Mais c'est précisément pour ça que c'est beau — un monde à part, coloré, bruyant, qui ne joue pas pour les appareils photo.",
      },
      {
        type: 'list',
        items: [
          "Quai Ninh Kiều — directement en bord de rivière, à pied du centre-ville",
          "Horaire : 4h–7h, le mieux c'est d'y être avant le lever du soleil",
          "Lotus : fleur emblématique du Delta, vendue en bouquet pour quelques milliers de dongs",
          "Ambiance unique : odeur de fleurs mêlée au diesel des moteurs de bateaux",
        ],
      },
      {
        type: 'heading',
        text: "Balade en bord de rivière : le quai Ninh Kiều",
      },
      {
        type: 'paragraph',
        text: "Le soir, le quai Ninh Kiều se transforme. Les vendeurs de fleurs ont laissé la place aux familles, aux couples, aux gamins qui font du vélo. Des stands de rue s'installent en bordure du trottoir. L'air est lourd, chaud, et il y a quelque chose de profondément reposant à regarder les bateaux passer sur le fleuve.",
      },
      {
        type: 'paragraph',
        text: "Prendre un bateau en soirée sur les canaux secondaires du Delta, c'est une autre expérience. Loin du Mékong principal, on glisse entre des cocotiers, des jardins flottants, des maisons sur pilotis. Le bruit de la ville disparaît complètement. Certains bateliers proposent des circuits de 2 à 3 heures qui s'enfoncent profondément dans les canaux secondaires — c'est là que tu vois comment les gens vivent vraiment ici.",
      },
      {
        type: 'list',
        items: [
          "Balade en sampan dans les canaux secondaires — prévoir 2h minimum",
          "Jardins flottants : cultures de légumes sur des îles artificielles de jacinthes d'eau",
          "Coucher de soleil depuis le pont sur le Mékong — un classique, mais il mérite sa réputation",
          "Restaurants en bord de rivière sur le quai : com tấm, lẩu mắm, poisson grillé à la citronnelle",
        ],
      },
      {
        type: 'quote',
        text: "Sur les canaux du Delta, personne n'est pressé. Et après deux heures en barque, tu ne l'es plus non plus.",
      },
      {
        type: 'heading',
        text: "La bouffe du Delta : une cuisine à part",
      },
      {
        type: 'paragraph',
        text: "Le Delta du Mékong a sa propre cuisine, influencée par les Khmers et la proximité du Cambodge. Plus de poisson d'eau douce, plus de cocotier dans les recettes, des saveurs différentes de celles qu'on trouve dans le Centre ou le Nord.",
      },
      {
        type: 'list',
        items: [
          "Lẩu mắm — fondue au mắm (pâte de poisson fermenté), le plat emblématique du Delta. Fort en goût, inoubliable",
          "Cá lóc nướng trui — poisson serpent grillé directement sur la braise, servi entier avec des herbes fraîches",
          "Bánh cống — beignets croustillants aux crevettes et haricots mungo, à grignoter en marchant",
          "Hủ tiếu Nam Vang — soupe de nouilles influence cambodgienne, bouillon clair et garniture généreuse",
        ],
      },
      {
        type: 'paragraph',
        text: "Le marché de Cái Răng, une fois les bateaux repartis, laisse place à une rangée de gargotes où les locaux viennent déjeuner. C'est là que j'ai mangé les meilleurs beignets de ma vie, debout au bord du fleuve, pour 20 000 dongs.",
      },
      {
        type: 'heading',
        text: "Pratique : comment organiser ton passage à Can Tho",
      },
      {
        type: 'paragraph',
        text: "Can Tho se vit bien en 2 à 3 jours. En dessous de 48h, tu vas courir. La ville elle-même n'est pas immense mais les marchés, les canaux et les excursions dans le Delta méritent qu'on prenne le temps.",
      },
      {
        type: 'list',
        items: [
          "Depuis Saigon : 3h30 en bus depuis la gare routière de Miền Tây, 150 000 VND",
          "Se loger : autour du quai Ninh Kiều pour être à pied des marchés du matin",
          "Budget : 25–40$/jour tout compris — Can Tho est moins chère que Saigon ou Da Nang",
          "Déplacement : Grab fonctionne bien en ville, bateau pour tout ce qui est sur l'eau",
        ],
      },
      {
        type: 'paragraph',
        text: "Si tu fais le Vietnam du Sud, Can Tho mérite deux nuits minimum. C'est la seule ville du pays où tu peux assister à un marché flottant au lever du soleil, te promener dans un marché aux fleurs à l'aube, et finir la journée en barque dans les canaux. Difficile de trouver mieux pour sentir que tu as vraiment quitté les sentiers battus.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "Can Tho isn't on the classic itinerary. Most travellers do Hanoi, Hoi An, Saigon — then fly home. Those who head down to the Mekong Delta see something entirely different: a region where life happens on the water, where markets start before dawn, and where the pace has nothing in common with the rest of the country.",
      },
      {
        type: 'quote',
        text: "In Can Tho, vendors go to work by boat. The rest of the world can wait.",
      },
      {
        type: 'heading',
        text: "The floating markets: up at 5am, zero regrets",
      },
      {
        type: 'paragraph',
        text: "Cái Răng floating market is the largest in the Delta. Dozens of sampans loaded to the brim — pineapples, mangoes, papayas, durians — gathering in the middle of the river to trade wholesale. It looks like the photos, but in person it's loud, it smells intense, and it's above all a real wholesale market where locals do their shopping.",
      },
      {
        type: 'paragraph',
        text: "You have to go early. Really early. By 6am the market is in full swing. By 9am it's emptying out. Any guide who suggests going at 8am to avoid the early start is making you miss the whole point. Take a boat from Ninh Kiều wharf at 5:30am, grab a Vietnamese coffee to go, and watch the sun rise over the Mekong from the deck of a wooden boat.",
      },
      {
        type: 'list',
        items: [
          "Cái Răng floating market — 6 km from the centre, 30 min by boat from Ninh Kiều",
          "Best time: 5:30–7:30am, before the tourist boats arrive in numbers",
          "Boat price: 100,000–150,000 VND for 2 hours, negotiable",
          "Bonus: breakfast on the water — boats sell bún bò, cháo and coffee from dawn",
        ],
      },
      {
        type: 'paragraph',
        text: "Phong Điền market, a little further out, is even less touristy and more authentic. Fewer boats, more locals. If you have the time, this is the one to prioritise.",
      },
      {
        type: 'heading',
        text: "The flower market: Hoa Ninh Kiều",
      },
      {
        type: 'paragraph',
        text: "Along the Ninh Kiều quay, every morning before dawn, flower-laden boats moor one after another. Lotus, orchids, anthuriums, sunflowers — everything the Delta grows arrives here before being distributed to markets across the city and surrounding area.",
      },
      {
        type: 'paragraph',
        text: "This isn't a tourist market. The vendors have no interest in you — they've been unloading their boats since 4am and negotiating lots by the crate. But that's precisely what makes it beautiful: a world apart, colourful, loud, performing for no one.",
      },
      {
        type: 'list',
        items: [
          "Ninh Kiều quay — right on the riverfront, walkable from the city centre",
          "Hours: 4–7am, best to arrive before sunrise",
          "Lotus: the Delta's emblematic flower, sold in bunches for a few thousand dong",
          "Unique atmosphere: scent of flowers mixed with the diesel of boat engines",
        ],
      },
      {
        type: 'heading',
        text: "Riverside strolling: Ninh Kiều wharf",
      },
      {
        type: 'paragraph',
        text: "In the evening, Ninh Kiều wharf transforms. The flower vendors make way for families, couples, kids on bikes. Street food stalls set up along the pavement. The air is heavy and warm, and there's something deeply restful about watching boats drift past on the river.",
      },
      {
        type: 'paragraph',
        text: "Taking a boat into the secondary canals of the Delta in the evening is a different experience altogether. Away from the main Mekong, you glide between coconut palms, floating gardens and houses on stilts. The city noise disappears completely. Some boatmen offer 2–3 hour circuits that push deep into the smaller canals — that's where you see how people actually live here.",
      },
      {
        type: 'list',
        items: [
          "Sampan ride through the secondary canals — allow at least 2 hours",
          "Floating gardens: vegetable plots grown on artificial islands of water hyacinth",
          "Sunset from the Mekong bridge — a classic, but it earns its reputation",
          "Riverside restaurants on the wharf: com tấm, lẩu mắm, lemongrass grilled fish",
        ],
      },
      {
        type: 'quote',
        text: "On the Delta canals, nobody is in a hurry. And after two hours in a boat, neither are you.",
      },
      {
        type: 'heading',
        text: "Delta food: a cuisine of its own",
      },
      {
        type: 'paragraph',
        text: "The Mekong Delta has its own cuisine, shaped by Khmer influence and the proximity of Cambodia. More freshwater fish, more coconut in the recipes, flavours distinct from anything you find in Central or Northern Vietnam.",
      },
      {
        type: 'list',
        items: [
          "Lẩu mắm — fermented fish paste hotpot, the Delta's signature dish. Strong in flavour, unforgettable",
          "Cá lóc nướng trui — snakehead fish grilled directly over coals, served whole with fresh herbs",
          "Bánh cống — crispy shrimp and mung bean fritters, perfect for eating while walking",
          "Hủ tiếu Nam Vang — Cambodian-influenced noodle soup, clear broth and generous toppings",
        ],
      },
      {
        type: 'paragraph',
        text: "The Cái Răng market, once the boats have left, gives way to a row of simple eateries where locals come for lunch. That's where I had the best fritters of my life, standing at the river's edge, for 20,000 dong.",
      },
      {
        type: 'heading',
        text: "Practical: how to plan your visit to Can Tho",
      },
      {
        type: 'paragraph',
        text: "Can Tho works well over 2 to 3 days. Under 48 hours and you'll be rushing. The city itself isn't huge but the markets, canals and Delta excursions deserve time.",
      },
      {
        type: 'list',
        items: [
          "From Saigon: 3.5 hours by bus from Miền Tây bus station, 150,000 VND",
          "Where to stay: around Ninh Kiều wharf to walk to the morning markets",
          "Budget: $25–40/day all in — Can Tho is cheaper than Saigon or Da Nang",
          "Getting around: Grab works well in the city, boat for everything on the water",
        ],
      },
      {
        type: 'paragraph',
        text: "If you're doing southern Vietnam, Can Tho is worth at least two nights. It's the only city in the country where you can watch a floating market at sunrise, wander a flower market at dawn, and end the day drifting through canals by boat. Hard to beat for feeling like you've actually left the beaten track.",
      },
    ],
  },
  {
    slug: 'app-complete-claude-un-jour',
    title: "J'ai construit une app complète avec Claude en une journée — voici ce qui s'est passé",
    titleEn: "I built a complete app with Claude in one day — here's what happened",
    excerpt: "Un tracker de budget nomade, de zéro à déployé en 9 heures. Pas un prototype — une vraie app avec base de données, auth et interface mobile. Le récit honnête de ce qui a marché, ce qui a planté, et ce que ça change vraiment de coder avec l'IA.",
    excerptEn: "A nomad budget tracker, from zero to deployed in 9 hours. Not a prototype — a real app with database, auth and mobile interface. The honest story of what worked, what broke, and what it actually changes about coding with AI.",
    date: '2026-04-22',
    readTime: 7,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/ebook.png',
    ebookCta: true,
    ebookType: 'claude',
    content: [
      {
        type: 'paragraph',
        text: "Je me suis levé un mardi matin avec une idée simple : un tracker de budget pour nomades. Pas un tableur, pas Notion — une vraie app web, avec une interface propre, une base de données, et la possibilité d'ajouter des dépenses depuis son téléphone à la table d'un café à Kuala Lumpur. Le soir, l'app était en ligne.",
      },
      {
        type: 'paragraph',
        text: "Je ne dis pas ça pour impressionner. Je dis ça parce que six mois avant, le même projet m'aurait pris deux semaines — et encore, en sacrifiant des nuits. Ce qui a changé, c'est Claude Code. Et ce que j'ai appris ce jour-là sur la façon de travailler avec l'IA mérite d'être raconté correctement.",
      },
      {
        type: 'quote',
        text: "Je ne suis pas devenu meilleur développeur en un jour. J'ai appris à diriger quelqu'un de beaucoup plus rapide que moi.",
      },
      {
        type: 'heading',
        text: "L'idée : simple sur le papier, pas si simple à construire",
      },
      {
        type: 'paragraph',
        text: "Le brief que je me suis donné : une app pour tracker mes dépenses par pays, avec des catégories (logement, bouffe, transport, divertissement), un résumé mensuel, et une interface qui s'utilise bien sur mobile. Rien de révolutionnaire. Mais dès qu'on sort du prototype statique, ça implique une base de données, une authentification, une API, et un front qui communique avec tout ça.",
      },
      {
        type: 'paragraph',
        text: "En d'autres termes : une vraie stack. Pas un exercice de style.",
      },
      {
        type: 'list',
        items: [
          "Frontend React + Tailwind — interface mobile-first",
          "Supabase — base de données PostgreSQL + authentification",
          "Vercel — déploiement continu depuis GitHub",
          "Zéro backend custom — tout passe par l'API Supabase directement",
        ],
      },
      {
        type: 'heading',
        text: "Les 3 premières heures : aller vite et ne pas réfléchir",
      },
      {
        type: 'paragraph',
        text: "La première chose que j'ai apprise : ne pas micro-manager Claude au début. Donne-lui le brief complet, laisse-le proposer une architecture, commente — mais ne l'interromps pas toutes les cinq lignes. Les trois premières heures, j'ai décrit ce que je voulais en détail, Claude a posé la structure du projet, créé les composants de base, branché Supabase. J'ai validé les directions, signalé les erreurs, rien de plus.",
      },
      {
        type: 'paragraph',
        text: "À midi, j'avais une app qui tournait en local avec l'ajout de dépenses fonctionnel, un formulaire propre, et les données qui s'enregistraient en base. Aucun bug visible. C'était déconcertant.",
      },
      {
        type: 'list',
        items: [
          "09h00 — Brief complet donné à Claude, architecture proposée en 10 min",
          "09h30 — Structure de projet créée, dépendances installées",
          "10h15 — Composant formulaire fonctionnel, connexion Supabase établie",
          "12h00 — CRUD complet : ajout, liste, suppression de dépenses",
        ],
      },
      {
        type: 'heading',
        text: "L'après-midi : là où ça devient intéressant (et parfois pénible)",
      },
      {
        type: 'paragraph',
        text: "L'après-midi a été plus chaotique. L'authentification Supabase a pris une heure de trop parce que j'avais mal configuré les Row Level Security policies — Claude avait généré le code correct, mais j'avais oublié d'activer RLS sur la table dans l'interface Supabase. Erreur humaine, pas erreur de l'IA.",
      },
      {
        type: 'paragraph',
        text: "C'est là que j'ai compris un truc fondamental : Claude ne voit pas ton dashboard Supabase. Il ne sait pas que tu as oublié d'activer un toggle dans une interface externe. Il génère du code parfait pour une configuration qui n'existe pas encore de ton côté. La moitié des blocages de la journée venaient de ça — une config manquante dans un service tiers, pas un bug dans le code.",
      },
      {
        type: 'quote',
        text: "Claude écrit du code pour le monde qu'il t'a aidé à construire. Si ce monde n'existe pas encore côté serveur, le code ne marche pas. C'est toi le problème, pas lui.",
      },
      {
        type: 'list',
        items: [
          "13h30 — Auth Supabase implémentée, bug RLS politique bloquant",
          "14h45 — Bug résolu (config manquante de mon côté, pas dans le code)",
          "15h30 — Dashboard avec graphiques par catégorie et résumé mensuel",
          "17h00 — Mode responsive mobile testé et corrigé",
          "18h30 — Déploiement Vercel, app en ligne",
        ],
      },
      {
        type: 'heading',
        text: "Ce que Claude fait exceptionnellement bien",
      },
      {
        type: 'paragraph',
        text: "Les composants répétitifs. Les formulaires avec validation. La logique de filtrage et de tri. La gestion des états de chargement et d'erreur. Tout ce qui est \"je sais exactement ce que je veux, je n'ai juste pas envie d'écrire les 80 lignes\" — Claude le fait en 30 secondes et c'est propre.",
      },
      {
        type: 'paragraph',
        text: "Il est aussi excellent pour débugger quand tu lui donnes le bon contexte. Pas \"ça marche pas\" — ça, c'est inutile. Mais \"voici l'erreur, voici le code concerné, voici ce que j'ai déjà essayé\" — là il trouve le problème en général au premier coup.",
      },
      {
        type: 'list',
        items: [
          "Boilerplate et structure initiale — ce qui prendrait 2h se fait en 20 min",
          "Composants UI complexes — graphiques, tableaux, formulaires multi-étapes",
          "Refactoring — réorganiser du code existant sans casser ce qui fonctionne",
          "Debugging avec contexte — donne-lui l'erreur + le code + ce que tu as essayé",
          "Documentation et types TypeScript — il commente et type correctement par défaut",
        ],
      },
      {
        type: 'heading',
        text: "Ce que Claude fait moins bien (soyons honnêtes)",
      },
      {
        type: 'paragraph',
        text: "Il ne voit pas l'état global de ton projet si tu ne le lui montres pas. Dans une longue session, il peut perdre le fil de l'architecture décidée deux heures avant et proposer quelque chose qui entre en conflit avec une décision existante. Il faut le recadrer régulièrement — lui rappeler les conventions du projet, lui montrer le code existant avant de lui demander d'ajouter quelque chose.",
      },
      {
        type: 'paragraph',
        text: "Il peut aussi sur-ingénier. Demande-lui quelque chose de simple et il va parfois proposer une solution générique configurable pour dix cas d'usage que tu n'auras jamais. Il faut être explicite : \"garde ça simple, je n'ai besoin que de ce cas précis\".",
      },
      {
        type: 'list',
        items: [
          "Perd le fil sur les longues sessions — montre-lui régulièrement le contexte existant",
          "Tend à sur-ingénier — précise explicitement quand tu veux quelque chose de simple",
          "Ne voit pas les services externes (Supabase, Vercel, DNS) — tu dois gérer ça toi-même",
          "Les décisions d'architecture restent les tiennes — il exécute, il ne pilote pas",
        ],
      },
      {
        type: 'heading',
        text: "Ce que ça change vraiment",
      },
      {
        type: 'paragraph',
        text: "La vraie transformation, ce n'est pas la vitesse. C'est ce que la vitesse permet. Quand une fonctionnalité coûte 2 heures au lieu de 2 jours, tu testes des idées que tu n'aurais jamais essayées. Tu arrives à \"est-ce que ça marche vraiment ?\" avant d'avoir investi suffisamment de temps pour être incapable de l'abandonner.",
      },
      {
        type: 'paragraph',
        text: "Mon tracker de budget ? Je l'utilise tous les jours depuis. Ce n'est pas parfait — il manque des fonctionnalités que j'ajouterai. Mais il existe. Et il aurait mis deux semaines à exister sans Claude, ce qui signifie qu'il n't aurait probablement jamais existé.",
      },
      {
        type: 'quote',
        text: "L'IA ne remplace pas l'idée, le jugement ou le goût. Elle supprime le coût d'entrée. Et quand le coût d'entrée disparaît, tout ce que tu n'osais pas construire devient possible.",
      },
      {
        type: 'heading',
        text: "Le process que je referais exactement pareil",
      },
      {
        type: 'paragraph',
        text: "Si tu veux reproduire ce type de journée, voici ce qui a fonctionné pour moi :",
      },
      {
        type: 'list',
        items: [
          "Brief écrit avant de commencer — décris l'app en 10 lignes, stack incluse. Claude travaille mieux avec un contexte clair dès le départ.",
          "Une fonctionnalité à la fois — ne demande pas tout d'un coup. Fais fonctionner le formulaire avant de demander les graphiques.",
          "Teste après chaque étape — ne laisse pas s'accumuler 3h de code non testé. Les bugs se multiplient en silence.",
          "Montre le code existant avant chaque nouvelle demande — \"voici ce qu'on a, j'ai besoin d'ajouter X\".",
          "Dis-lui quand c'est trop complexe — \"simplifie, je n'ai besoin que de ce cas\" est une instruction valide.",
          "Les erreurs côté services externes, c'est toi — vérifie ta config Supabase, tes variables d'environnement, tes permissions avant de blâmer le code.",
        ],
      },
      {
        type: 'paragraph',
        text: "Neuf heures. Une app qui tourne. Un apprentissage que deux semaines de tuto n'auraient pas donné. Si tu n'as pas encore essayé de construire quelque chose de concret avec Claude Code, c'est le bon moment.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "I woke up on a Tuesday morning with a simple idea: a budget tracker for nomads. Not a spreadsheet, not Notion — a real web app, with a clean interface, a database, and the ability to add expenses from your phone at a café table in Kuala Lumpur. By evening, the app was live.",
      },
      {
        type: 'paragraph',
        text: "I'm not saying this to impress anyone. I'm saying it because six months earlier, the same project would have taken two weeks — and even then, sacrificing nights. What changed is Claude Code. And what I learned that day about how to work with AI is worth telling properly.",
      },
      {
        type: 'quote',
        text: "I didn't become a better developer in one day. I learned how to direct someone much faster than me.",
      },
      {
        type: 'heading',
        text: "The idea: simple on paper, not so simple to build",
      },
      {
        type: 'paragraph',
        text: "The brief I gave myself: an app to track expenses by country, with categories (accommodation, food, transport, entertainment), a monthly summary, and an interface that works well on mobile. Nothing revolutionary. But the moment you go beyond a static prototype, it requires a database, authentication, an API, and a frontend that talks to all of it.",
      },
      {
        type: 'paragraph',
        text: "In other words: a real stack. Not a style exercise.",
      },
      {
        type: 'list',
        items: [
          "React + Tailwind frontend — mobile-first interface",
          "Supabase — PostgreSQL database + authentication",
          "Vercel — continuous deployment from GitHub",
          "Zero custom backend — everything goes through the Supabase API directly",
        ],
      },
      {
        type: 'heading',
        text: "The first 3 hours: move fast and don't overthink",
      },
      {
        type: 'paragraph',
        text: "The first thing I learned: don't micro-manage Claude at the start. Give it the full brief, let it propose an architecture, comment on it — but don't interrupt every five lines. For the first three hours, I described what I wanted in detail, Claude laid out the project structure, created the base components, connected Supabase. I validated directions, flagged errors, nothing more.",
      },
      {
        type: 'paragraph',
        text: "By noon, I had an app running locally with working expense entry, a clean form, and data saving to the database. No visible bugs. It was unsettling.",
      },
      {
        type: 'list',
        items: [
          "9:00am — Full brief given to Claude, architecture proposed in 10 min",
          "9:30am — Project structure created, dependencies installed",
          "10:15am — Working form component, Supabase connection established",
          "12:00pm — Full CRUD: add, list, delete expenses",
        ],
      },
      {
        type: 'heading',
        text: "The afternoon: where it gets interesting (and sometimes painful)",
      },
      {
        type: 'paragraph',
        text: "The afternoon was more chaotic. Supabase authentication took an hour longer than it should have because I'd misconfigured the Row Level Security policies — Claude had generated correct code, but I'd forgotten to enable RLS on the table in the Supabase dashboard. Human error, not AI error.",
      },
      {
        type: 'paragraph',
        text: "That's when I understood something fundamental: Claude can't see your Supabase dashboard. It doesn't know you forgot to flip a toggle in an external interface. It generates perfect code for a configuration that doesn't exist yet on your end. Half the blockers of the day came from this — a missing config in a third-party service, not a bug in the code.",
      },
      {
        type: 'quote',
        text: "Claude writes code for the world it helped you build. If that world doesn't exist yet server-side, the code won't work. You're the problem, not it.",
      },
      {
        type: 'list',
        items: [
          "1:30pm — Supabase auth implemented, RLS policy bug blocking",
          "2:45pm — Bug resolved (missing config on my end, not in the code)",
          "3:30pm — Dashboard with category charts and monthly summary",
          "5:00pm — Mobile responsive tested and fixed",
          "6:30pm — Vercel deployment, app live",
        ],
      },
      {
        type: 'heading',
        text: "What Claude does exceptionally well",
      },
      {
        type: 'paragraph',
        text: "Repetitive components. Forms with validation. Filtering and sorting logic. Loading and error state handling. Everything that falls under 'I know exactly what I want, I just don't want to write the 80 lines' — Claude does it in 30 seconds and it's clean.",
      },
      {
        type: 'paragraph',
        text: "It's also excellent at debugging when you give it the right context. Not 'it doesn't work' — that's useless. But 'here's the error, here's the code, here's what I've already tried' — then it finds the problem on the first go, usually.",
      },
      {
        type: 'list',
        items: [
          "Boilerplate and initial structure — what would take 2 hours takes 20 minutes",
          "Complex UI components — charts, tables, multi-step forms",
          "Refactoring — reorganising existing code without breaking what works",
          "Debugging with context — give it the error + the code + what you've tried",
          "Documentation and TypeScript types — it annotates and types correctly by default",
        ],
      },
      {
        type: 'heading',
        text: "What Claude does less well (let's be honest)",
      },
      {
        type: 'paragraph',
        text: "It doesn't see the global state of your project unless you show it. In a long session, it can lose track of the architecture decided two hours earlier and propose something that conflicts with an existing decision. You need to recalibrate regularly — remind it of the project conventions, show it the existing code before asking it to add something.",
      },
      {
        type: 'paragraph',
        text: "It can also over-engineer. Ask it for something simple and it'll sometimes propose a generic solution configurable for ten use cases you'll never have. You need to be explicit: 'keep it simple, I only need this specific case'.",
      },
      {
        type: 'list',
        items: [
          "Loses context on long sessions — regularly show it what already exists",
          "Tends to over-engineer — explicitly say when you want something simple",
          "Can't see external services (Supabase, Vercel, DNS) — you manage that yourself",
          "Architecture decisions remain yours — it executes, it doesn't steer",
        ],
      },
      {
        type: 'heading',
        text: "What it actually changes",
      },
      {
        type: 'paragraph',
        text: "The real transformation isn't speed. It's what speed enables. When a feature costs 2 hours instead of 2 days, you test ideas you'd never have tried. You get to 'does this actually work?' before you've invested enough time to be incapable of abandoning it.",
      },
      {
        type: 'paragraph',
        text: "My budget tracker? I use it every day now. It's not perfect — there are features I'll add. But it exists. And it would have taken two weeks to exist without Claude, which means it probably would never have existed at all.",
      },
      {
        type: 'quote',
        text: "AI doesn't replace the idea, the judgment or the taste. It removes the entry cost. And when the entry cost disappears, everything you didn't dare build becomes possible.",
      },
      {
        type: 'heading',
        text: "The process I'd follow exactly the same way again",
      },
      {
        type: 'paragraph',
        text: "If you want to replicate this kind of day, here's what worked for me:",
      },
      {
        type: 'list',
        items: [
          "Write the brief before you start — describe the app in 10 lines, stack included. Claude works better with clear context from the start.",
          "One feature at a time — don't ask for everything at once. Get the form working before asking for charts.",
          "Test after every step — don't let 3 hours of untested code pile up. Bugs multiply in silence.",
          "Show existing code before each new request — 'here's what we have, I need to add X'.",
          "Tell it when it's too complex — 'simplify, I only need this case' is a valid instruction.",
          "Errors on external services are on you — check your Supabase config, env variables and permissions before blaming the code.",
        ],
      },
      {
        type: 'paragraph',
        text: "Nine hours. A working app. Learning that two weeks of tutorials wouldn't have given. If you haven't tried building something concrete with Claude Code yet, now is a good time.",
      },
    ],
  },
  {
    slug: 'kuala-lumpur-2026',
    title: 'Kuala Lumpur 2026 : temples, tours et nuits de jungle urbaine',
    titleEn: 'Kuala Lumpur 2026: temples, towers and urban jungle nights',
    excerpt: "Petronas au lever du soleil, grottes sacrées à 30 minutes du centre, jardins botaniques perdus dans la chaleur moite, et une bibliothèque qui fait honte à la plupart des musées. KL est la ville qui m'a le plus surpris en Asie du Sud-Est.",
    excerptEn: "Petronas at sunrise, sacred caves 30 minutes from the centre, botanical gardens lost in humid heat, and a library that puts most museums to shame. KL is the city that surprised me most in Southeast Asia.",
    date: '2026-04-22',
    readTime: 8,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/kuala-lumpur.jpg',
    ebookCta: true,
    ebookType: 'vietnam',
    content: [
      {
        type: 'paragraph',
        text: "Kuala Lumpur est une ville que les gens sous-estiment. On la survole pour aller en Thaïlande, on y passe une nuit de transit, on voit les Petronas depuis un taxi et on repart. C'est une erreur. KL mérite au minimum quatre jours — et si tu as le temps, une semaine passe vite.",
      },
      {
        type: 'paragraph',
        text: "La ville est dense, chaotique, multiculturelle jusqu'au vertige — malaise, chinois, tamoul, tout ça dans le même quartier, parfois dans la même rue. Elle est moderne et ancienne en même temps. Et contrairement à Bangkok ou Singapour, elle n'est pas encore envahie par les groupes de touristes organisés.",
      },
      {
        type: 'quote',
        text: "KL n'essaie pas d'être Singapour. Et c'est exactement pour ça qu'elle est plus intéressante.",
      },
      {
        type: 'heading',
        text: "Les Tours Petronas : arriver à l'aube, pas au coucher du soleil",
      },
      {
        type: 'paragraph',
        text: "Tout le monde te dira d'y aller au coucher du soleil. Ignore ce conseil. Arrive à 7h du matin, quand le KLCC Park est encore quasi vide et que la brume matinale accroche encore les tours. La lumière est différente, les reflets dans le bassin sont nets, et tu peux prendre cent photos sans que personne ne marche dans le cadre.",
      },
      {
        type: 'paragraph',
        text: "Les billets pour la Skybridge (passerelle entre les deux tours au 41ème étage) et l'Observation Deck (86ème) se réservent à l'avance sur le site officiel. Les sessions du matin partent en quelques jours. Depuis la passerelle, la vue sur la ville est différente de toutes les autres tours d'observation que j'ai vues — on est au cœur de deux structures identiques, suspendus entre elles. C'est vertigineux dans le bon sens du terme.",
      },
      {
        type: 'list',
        items: [
          "KLCC Park — accès libre 24h/24, vue sur les tours depuis le bassin",
          "Skybridge (niveau 41) + Observation Deck (niveau 86) — 85 MYR, réservation en ligne obligatoire",
          "Meilleure heure photo extérieure : 6h30–8h ou après 22h pour les tours illuminées",
          "Centre commercial Suria KLCC en bas — gastronomie locale au food court du sous-sol",
        ],
      },
      {
        type: 'heading',
        text: "Batu Caves : 272 marches et une divinité dorée",
      },
      {
        type: 'paragraph',
        text: "À 13 kilomètres du centre, les grottes de Batu sont l'un des sites hindous les plus importants hors d'Inde. La statue de Murugan à l'entrée fait 42 mètres de haut — elle est dorée, monumentale, et elle écrase tout ce qui l'entoure. Les 272 marches peintes en arc-en-ciel mènent à une cathédrale naturelle creusée dans la roche calcaire, habitée par des autels, des singes et une lumière qui tombe depuis des ouvertures naturelles dans le plafond.",
      },
      {
        type: 'paragraph',
        text: "Le temple principal dans la grotte est actif. Des familles viennent prier, des prêtres officiaient, de l'encens brûle en permanence. Ce n'est pas un site pour touristes, c'est un lieu de culte où les touristes sont acceptés. Tiens-toi en conséquence : bras couverts, chaussures enlevées à l'entrée du temple, volume de voix adapté.",
      },
      {
        type: 'list',
        items: [
          "Accès : KTM Komuter depuis KL Sentral, station Batu Caves — 30 min, 3 MYR",
          "Entrée gratuite — contribution libre pour entrer dans les temples",
          "Attention aux macaques : ils volent les sacs, les lunettes, les bouteilles ouvertes",
          "Meilleure heure : 7h–9h avant la chaleur et les cars de touristes",
          "Grotte de l'Art (Dark Cave) — parcours spéléo avec guide, à réserver sur place",
        ],
      },
      {
        type: 'quote',
        text: "Quand tu montes les 272 marches et que tu vois la lumière entrer dans la voûte calcaire, tu comprends pourquoi des gens font des centaines de kilomètres pour venir ici.",
      },
      {
        type: 'heading',
        text: "Jardins Botaniques de Perdana : l'oasis oubliée",
      },
      {
        type: 'paragraph',
        text: "Les Perdana Botanical Gardens sont au bord du lac Perdana, à dix minutes du centre historique. Ils couvrent 91 hectares et la plupart des touristes les ignorent complètement — ce qui en fait l'endroit idéal pour souffler après deux jours à courir dans la ville.",
      },
      {
        type: 'paragraph',
        text: "Il y a un jardin des orchidées, un jardin des hibiscus (fleur nationale de Malaisie), des allées de dipterocarpacées géantes et un lac où des varans d'eau se prélassent au soleil sans que personne ne s'en préoccupe. Les varans de KL sont grands — parfois plus d'un mètre cinquante — et complètement indifférents aux humains. C'est étrange et fascinant en même temps.",
      },
      {
        type: 'list',
        items: [
          "Jardins ouverts 7h–20h, entrée libre",
          "Jardin des Orchidées et Jardin des Hibiscus — accès payant, quelques MYR",
          "Varans d'eau (biawak) — présents en permanence autour du lac, ne pas nourrir",
          "Musée des Cerfs-Volants (Layang-Layang) à l'intérieur des jardins — curiosité locale",
          "Café au bord du lac — idéal pour une pause déjeuner à l'ombre",
        ],
      },
      {
        type: 'heading',
        text: "Le Musée National et le Musée des Arts Islamiques",
      },
      {
        type: 'paragraph',
        text: "Le Muzium Negara (Musée National) retrace l'histoire de la Malaisie depuis les royaumes de Srivijaya jusqu'à l'indépendance de 1957. La scénographie est un peu datée mais le contenu est solide — on comprend comment trois grandes civilisations (malaise, chinoise, indienne) se sont retrouvées dans le même pays et ont cohabité sans se diluer complètement.",
      },
      {
        type: 'paragraph',
        text: "Juste à côté, le Musée des Arts Islamiques est une autre catégorie. C'est l'un des plus beaux musées de la région — architecture intérieure majestueuse, collections de céramiques, de textiles et de manuscrits du monde islamique, maquettes détaillées des grandes mosquées. Même si tu n'es pas particulièrement intéressé par l'islam, tu sors de là avec une image beaucoup plus nuancée de ce que représente cette civilisation.",
      },
      {
        type: 'list',
        items: [
          "Muzium Negara — ouvert 9h–18h, entrée 5 MYR",
          "Islamic Arts Museum — ouvert 10h–18h, entrée 20 MYR (ça vaut chaque ringgit)",
          "Les deux sont à 5 min à pied l'un de l'autre, près des jardins de Perdana",
          "Café au rez-de-chaussée du musée islamique — bon café, architecture sublime",
        ],
      },
      {
        type: 'heading',
        text: "Putrajaya : la ville-gouvernement venue du futur",
      },
      {
        type: 'paragraph',
        text: "Putrajaya a été construite de zéro à partir de 1995 pour devenir la nouvelle capitale administrative de la Malaisie. Ce n'est pas une ville organique — c'est une ville planifiée, avec des avenues de 8 voies, des ministères qui ressemblent à des palais, et une mosquée rose construite sur l'eau. C'est étrange, un peu surréaliste, et fascinant à voir.",
      },
      {
        type: 'paragraph',
        text: "La Mosquée de Putra (Masjid Putra) est le point fort. En marbre rose importé du Moyen-Orient, elle peut accueillir 15 000 fidèles et sa réflexion dans le lac artificiel est l'une des images iconiques de la Malaisie moderne. Autour, le Palais de Justice, le Palais du Premier Ministre et les différents ministères forment une succession d'architectures qui mélangent le style islamique et le modernisme — le résultat est déconcertant mais cohérent.",
      },
      {
        type: 'list',
        items: [
          "Accès depuis KL : KLIA Transit jusqu'à Putrajaya Sentral — 25 min, 12 MYR",
          "Mosquée de Putra — entrée libre hors horaires de prière, abaya fournie à l'entrée pour les femmes",
          "Location de vélo ou trottinette — la ville est conçue pour ça, pas pour les piétons",
          "Croisière sur le lac — 10 MYR, permet de voir l'ensemble des bâtiments depuis l'eau",
          "Presque aucun touriste occidental — tu seras souvent le seul étranger sur place",
        ],
      },
      {
        type: 'heading',
        text: "La Bibliothèque Nationale : le secret le mieux gardé de KL",
      },
      {
        type: 'paragraph',
        text: "La Perpustakaan Negara Malaysia — la Bibliothèque Nationale — est un bâtiment extraordinaire. Construit dans les années 80 dans un style postmoderne inspiré du songkok (coiffure traditionnelle malaise), il trône sur une colline près du centre historique et la plupart des guidebooks n'en parlent pas. C'est une erreur.",
      },
      {
        type: 'paragraph',
        text: "L'intérieur est frais, silencieux et immense. Des espaces de lecture qui s'étagent sur plusieurs niveaux, des collections de manuscrits anciens, et une architecture intérieure qui joue avec la lumière naturelle d'une façon que je n'avais jamais vue dans une bibliothèque. C'est l'endroit où j'ai passé le plus de temps à KL — assis dans un fauteuil, à regarder les gens travailler et à sentir la ville ralentir autour de moi.",
      },
      {
        type: 'list',
        items: [
          "Ouvert lun–sam 10h–19h, fermé dimanche et jours fériés",
          "Accès libre — inscription gratuite pour accéder aux collections",
          "Architecture extérieure à voir absolument, même si tu n'entres pas",
          "À 15 min à pied du Muzium Negara, en haut de la colline Bukit Petaling",
        ],
      },
      {
        type: 'heading',
        text: "Millenium Club : KL la nuit, version locale",
      },
      {
        type: 'paragraph',
        text: "KL a une vraie vie nocturne et le Millenium Club est l'un des endroits où elle s'exprime le mieux. Pas un club pour touristes — une clientèle majoritairement locale, une programmation qui mélange hip-hop, R&B et EDM selon les soirs, et une ambiance qui rappelle que Kuala Lumpur est une ville de 8 millions d'habitants qui sort.",
      },
      {
        type: 'paragraph',
        text: "La zone de Jalan P. Ramlee, où il se trouve, concentre la plupart des bars et clubs du centre. Le code vestimentaire est respecté — pas de tongs, pas de shorts. Le prix des boissons est dans la moyenne KL : élevé par rapport au reste de l'Asie du Sud-Est, mais rien de comparable aux tarifs de Singapour. La clientèle mixte (malaise, chinoise, expats) donne à ces soirées une texture qu'on ne trouve pas dans d'autres villes de la région.",
      },
      {
        type: 'list',
        items: [
          "Zone Jalan P. Ramlee / KLCC — cœur de la vie nocturne de KL",
          "Dress code : tenue correcte exigée dans la plupart des clubs",
          "Entrée variable selon les soirs — souvent gratuite avant 23h avec consommation",
          "Bars rooftop avec vue sur les Petronas : Heli Lounge Bar, Sky Bar au Traders Hotel",
          "Happy hours en ville : 17h–20h dans la plupart des bars de Changkat Bukit Bintang",
        ],
      },
      {
        type: 'heading',
        text: "L'Aéroport KLIA : le meilleur hub d'Asie du Sud-Est",
      },
      {
        type: 'paragraph',
        text: "Le KLIA (Kuala Lumpur International Airport) mérite une mention à part. Ce n'est pas juste un aéroport — c'est un hub régional qui dessert plus de 60 compagnies, dont AirAsia dont le siège est ici. Si tu fais de l'Asie du Sud-Est, tu y passeras forcément.",
      },
      {
        type: 'paragraph',
        text: "Le terminal principal est l'un des plus beaux de la région — une forêt tropicale intérieure sous une verrière géante, une architecture qui joue avec la lumière et la végétation. Le KLIA2, terminal low-cost adjacent, est moins spectaculaire mais hyper fonctionnel. La connexion entre les deux terminaux et le centre-ville (KL Sentral) se fait par le KLIA Ekspres — 28 minutes, 55 MYR. Pas de bouchons, pas d'anxiété.",
      },
      {
        type: 'list',
        items: [
          "KLIA Ekspres — KL Sentral à l'aéroport en 28 min, départ toutes les 15-20 min",
          "KLIA2 — terminal AirAsia, liaisons budget vers tout le Sud-Est asiatique",
          "Salons Plaza Premium Lounge — accessibles à l'achat sans être en Business",
          "Sleeping pods après la sécurité — solution économique pour les transits longs",
          "Duty free : alcool et chocolats malaisiens parmi les moins chers de la région",
        ],
      },
      {
        type: 'quote',
        text: "Si tu dois choisir un hub pour traverser l'Asie du Sud-Est, prends KL. L'aéroport est beau, les connexions sont parfaites, et tu as une vraie ville à explorer entre deux vols.",
      },
      {
        type: 'heading',
        text: "Pratique : organiser son séjour à KL",
      },
      {
        type: 'paragraph',
        text: "KL est abordable, bien connectée et relativement facile à naviguer une fois qu'on a compris que la marche à pied n'est pas toujours la meilleure option. La chaleur (35°C en permanence) et l'absence de trottoirs dans certains quartiers rendent les transports en commun et les Grab incontournables.",
      },
      {
        type: 'list',
        items: [
          "Se loger : KLCC pour la localisation idéale, Bukit Bintang pour la vie de quartier",
          "Transport : MyRapid (métro/bus) + Grab — éviter les taxis non-Grab",
          "Budget : 50–80€/jour en voyage confortable — moins qu'en Thaïlande touristique",
          "Monnaie : Ringgit malaisien (MYR) — 1€ ≈ 4,8 MYR en 2026",
          "Meilleure période : février–avril (moins de pluie) — à éviter pendant Thaipusam si foules = problème",
          "4 jours minimum recommandés pour couvrir l'essentiel sans courir",
        ],
      },
      {
        type: 'paragraph',
        text: "KL ne ressemble à aucune autre ville d'Asie du Sud-Est. Elle n'a pas la magie de Hanoï ni la folie de Bangkok, mais elle a une identité propre — moderne sans être stérile, traditionnelle sans être figée. C'est une ville qui mérite mieux qu'une nuit de transit.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "Kuala Lumpur is a city people underestimate. They fly over it on the way to Thailand, spend one transit night, glimpse the Petronas from a taxi and leave. That's a mistake. KL deserves at least four days — and if you have the time, a week goes fast.",
      },
      {
        type: 'paragraph',
        text: "The city is dense, chaotic, multicultural to the point of vertigo — Malay, Chinese, Tamil, all in the same neighbourhood, sometimes on the same street. It's modern and ancient at the same time. And unlike Bangkok or Singapore, it hasn't yet been swamped by organised tour groups.",
      },
      {
        type: 'quote',
        text: "KL isn't trying to be Singapore. And that's exactly why it's more interesting.",
      },
      {
        type: 'heading',
        text: "Petronas Towers: come at dawn, not sunset",
      },
      {
        type: 'paragraph',
        text: "Everyone will tell you to go at sunset. Ignore that advice. Arrive at 7am when KLCC Park is nearly empty and the morning mist still clings to the towers. The light is different, the reflections in the pool are sharp, and you can take a hundred photos without anyone walking into the frame.",
      },
      {
        type: 'paragraph',
        text: "Tickets for the Skybridge (the walkway between the towers on the 41st floor) and the Observation Deck (86th floor) must be booked online in advance. Morning sessions sell out within days. From the bridge, the view over the city is unlike any other observation tower I've visited — you're at the heart of two identical structures, suspended between them. Vertiginous in the best possible way.",
      },
      {
        type: 'list',
        items: [
          "KLCC Park — free access 24/7, tower views from the reflecting pool",
          "Skybridge (level 41) + Observation Deck (level 86) — 85 MYR, online booking required",
          "Best outdoor photo time: 6:30–8am or after 10pm for illuminated towers",
          "Suria KLCC mall below — local food at the basement food court",
        ],
      },
      {
        type: 'heading',
        text: "Batu Caves: 272 steps and a golden deity",
      },
      {
        type: 'paragraph',
        text: "Thirteen kilometres from the centre, the Batu Caves are one of the most important Hindu sites outside India. The Murugan statue at the entrance stands 42 metres tall — golden, monumental, dwarfing everything around it. The 272 rainbow-painted steps lead up to a natural cathedral carved into limestone, filled with shrines, monkeys and light that falls through natural openings in the ceiling.",
      },
      {
        type: 'paragraph',
        text: "The main temple inside the cave is active. Families come to pray, priests officiate, incense burns constantly. This isn't a tourist site — it's a place of worship where tourists are welcomed. Act accordingly: arms covered, shoes removed at the temple entrance, voices kept low.",
      },
      {
        type: 'list',
        items: [
          "Access: KTM Komuter from KL Sentral to Batu Caves station — 30 min, 3 MYR",
          "Free entry — voluntary donations to enter the temples",
          "Watch the macaques: they steal bags, glasses and open bottles",
          "Best time: 7–9am before the heat and tour buses arrive",
          "Dark Cave — guided spelunking tour, book on-site",
        ],
      },
      {
        type: 'quote',
        text: "When you climb those 272 steps and see the light pouring into the limestone vault, you understand why people travel hundreds of kilometres to come here.",
      },
      {
        type: 'heading',
        text: "Perdana Botanical Gardens: the forgotten oasis",
      },
      {
        type: 'paragraph',
        text: "The Perdana Botanical Gardens sit beside Lake Perdana, ten minutes from the historic centre. They cover 91 hectares and most tourists skip them entirely — which makes them the perfect place to breathe after two days of running around the city.",
      },
      {
        type: 'paragraph',
        text: "There's an orchid garden, a hibiscus garden (Malaysia's national flower), avenues of towering dipterocarps and a lake where water monitors sun themselves without anyone batting an eye. KL's monitors are large — sometimes over a metre and a half — and completely indifferent to humans. It's strange and fascinating at the same time.",
      },
      {
        type: 'list',
        items: [
          "Gardens open 7am–8pm, free entry",
          "Orchid and Hibiscus Gardens — small entry fee, a few MYR",
          "Water monitors (biawak) — permanent residents around the lake, don't feed them",
          "Kite Museum (Layang-Layang) inside the gardens — local curiosity",
          "Lakeside café — ideal shaded lunch spot",
        ],
      },
      {
        type: 'heading',
        text: "National Museum and Islamic Arts Museum",
      },
      {
        type: 'paragraph',
        text: "The Muzium Negara traces Malaysia's history from the Srivijaya kingdom to independence in 1957. The presentation is a little dated but the content is solid — you come away understanding how three great civilisations (Malay, Chinese, Indian) ended up in the same country and coexisted without fully merging.",
      },
      {
        type: 'paragraph',
        text: "Right next door, the Islamic Arts Museum is a different league entirely. It's one of the most beautiful museums in the region — a majestic interior, collections of ceramics, textiles and manuscripts from across the Islamic world, detailed scale models of the great mosques. Even if you have no particular interest in Islam, you leave with a far richer picture of what that civilisation represents.",
      },
      {
        type: 'list',
        items: [
          "Muzium Negara — open 9am–6pm, entry 5 MYR",
          "Islamic Arts Museum — open 10am–6pm, entry 20 MYR (worth every ringgit)",
          "Both are 5 minutes' walk from each other, near Perdana Gardens",
          "Café on the ground floor of the Islamic museum — great coffee, stunning architecture",
        ],
      },
      {
        type: 'heading',
        text: "Putrajaya: the government city from the future",
      },
      {
        type: 'paragraph',
        text: "Putrajaya was built from scratch starting in 1995 to become Malaysia's new administrative capital. It's not an organic city — it's a planned one, with eight-lane boulevards, ministries that look like palaces, and a pink mosque built over water. It's strange, a little surreal, and fascinating to see.",
      },
      {
        type: 'paragraph',
        text: "Putra Mosque (Masjid Putra) is the highlight. Built from pink granite imported from the Middle East, it holds 15,000 worshippers and its reflection in the artificial lake is one of the iconic images of modern Malaysia. Around it, the Palace of Justice, the Prime Minister's Office and the various ministries form a succession of buildings mixing Islamic style with modernism — the result is disconcerting but coherent.",
      },
      {
        type: 'list',
        items: [
          "Access from KL: KLIA Transit to Putrajaya Sentral — 25 min, 12 MYR",
          "Putra Mosque — free entry outside prayer times, abayas provided at entrance for women",
          "Bike or scooter rental — the city is built for them, not pedestrians",
          "Lake cruise — 10 MYR, lets you see all the buildings from the water",
          "Almost no Western tourists — you'll often be the only foreigner around",
        ],
      },
      {
        type: 'heading',
        text: "The National Library: KL's best-kept secret",
      },
      {
        type: 'paragraph',
        text: "The Perpustakaan Negara Malaysia — the National Library — is an extraordinary building. Built in the 1980s in a postmodern style inspired by the songkok (traditional Malay headwear), it sits on a hill near the historic centre and most guidebooks don't mention it. That's a mistake.",
      },
      {
        type: 'paragraph',
        text: "Inside it's cool, quiet and vast. Reading spaces spread across multiple levels, collections of ancient manuscripts, and an interior architecture that plays with natural light in a way I'd never seen in a library. It's where I spent the most time in KL — sitting in a chair, watching people work and feeling the city slow down around me.",
      },
      {
        type: 'list',
        items: [
          "Open Mon–Sat 10am–7pm, closed Sundays and public holidays",
          "Free entry — free registration to access collections",
          "The exterior architecture alone is worth seeing, even if you don't go in",
          "15 minutes' walk from Muzium Negara, up Bukit Petaling hill",
        ],
      },
      {
        type: 'heading',
        text: "Millenium Club: KL at night, local edition",
      },
      {
        type: 'paragraph',
        text: "KL has a real nightlife and the Millenium Club is one of the places where it shows. Not a tourist club — mostly local crowd, a programme that mixes hip-hop, R&B and EDM depending on the night, and an atmosphere that reminds you Kuala Lumpur is a city of 8 million people that goes out.",
      },
      {
        type: 'paragraph',
        text: "The Jalan P. Ramlee area, where it's located, concentrates most of the city centre's bars and clubs. Dress code is enforced — no flip-flops, no shorts. Drinks prices are mid-range for KL: higher than the rest of Southeast Asia, but nothing like Singapore. The mixed crowd (Malay, Chinese, expats) gives these nights a texture you don't find in other cities in the region.",
      },
      {
        type: 'list',
        items: [
          "Jalan P. Ramlee / KLCC area — heart of KL nightlife",
          "Dress code: smart casual enforced at most clubs",
          "Entry varies by night — often free before 11pm with a drink",
          "Rooftop bars with Petronas views: Heli Lounge Bar, Sky Bar at Traders Hotel",
          "Happy hours: 5–8pm at most bars on Changkat Bukit Bintang",
        ],
      },
      {
        type: 'heading',
        text: "KLIA Airport: the best hub in Southeast Asia",
      },
      {
        type: 'paragraph',
        text: "Kuala Lumpur International Airport deserves a special mention. It's not just an airport — it's a regional hub serving over 60 airlines, including AirAsia which is headquartered here. If you're travelling around Southeast Asia, you'll pass through it.",
      },
      {
        type: 'paragraph',
        text: "The main terminal is one of the most beautiful in the region — a tropical rainforest under a giant glass roof, an architecture that plays with light and vegetation. The KLIA2 low-cost terminal next door is less spectacular but hyper-functional. The connection between both terminals and the city centre (KL Sentral) runs on the KLIA Ekspres — 28 minutes, 55 MYR. No traffic, no stress.",
      },
      {
        type: 'list',
        items: [
          "KLIA Ekspres — KL Sentral to airport in 28 min, every 15–20 minutes",
          "KLIA2 — AirAsia terminal, budget connections across all of Southeast Asia",
          "Plaza Premium Lounge — accessible for purchase without Business class ticket",
          "Sleeping pods airside — cost-effective solution for long layovers",
          "Duty free: alcohol and Malaysian chocolates among the cheapest in the region",
        ],
      },
      {
        type: 'quote',
        text: "If you need to pick one hub to travel Southeast Asia, choose KL. Beautiful airport, perfect connections, and a real city to explore between flights.",
      },
      {
        type: 'heading',
        text: "Practical: planning your KL trip",
      },
      {
        type: 'paragraph',
        text: "KL is affordable, well-connected and relatively easy to navigate once you understand that walking isn't always the best option. The heat (35°C constantly) and the absence of pavements in some areas make public transport and Grab essential.",
      },
      {
        type: 'list',
        items: [
          "Where to stay: KLCC for ideal location, Bukit Bintang for neighbourhood life",
          "Transport: MyRapid (metro/bus) + Grab — avoid non-Grab taxis",
          "Budget: €50–80/day travelling comfortably — less than touristy Thailand",
          "Currency: Malaysian Ringgit (MYR) — €1 ≈ 4.8 MYR in 2026",
          "Best time: February–April (less rain) — avoid Thaipusam if crowds are a problem",
          "Minimum 4 days recommended to cover the essentials without rushing",
        ],
      },
      {
        type: 'paragraph',
        text: "KL doesn't look like any other city in Southeast Asia. It doesn't have Hanoi's magic or Bangkok's madness, but it has its own identity — modern without being sterile, traditional without being frozen in time. It deserves better than one transit night.",
      },
    ],
  },
  {
    slug: 'my-trip-my-adventure',
    title: 'Mon Voyage, Mon Aventure',
    titleEn: 'My Trip, My Adventure',
    excerpt: "Randonner en montagne avec des amis, c'est bien plus qu'une marche. C'est une aventure qui met à l'épreuve, qui émerveille, et dont on revient changé.",
    excerptEn: "Hiking in the mountains with friends is far more than just a walk. It's an adventure that challenges you, fills you with wonder, and changes you on the way back.",
    date: '2026-04-25',
    readTime: 4,
    category: 'Voyages',
    categoryEn: 'Travels',
    thumbnail: '/blog/tam-dao-01.jpg',
    content: [
      {
        type: 'paragraph',
        text: "Voyager est l'une des expériences les plus enrichissantes qui soit. Cela nous permet de découvrir de nouveaux endroits, de rencontrer des personnes différentes et de créer des souvenirs inoubliables. L'un des voyages les plus mémorables que j'aie jamais faits était ma randonnée en montagne avec mes amis. Une véritable aventure, riche en fun, en défis et en moments magnifiques.",
      },
      {
        type: 'paragraph',
        text: "Nous avons pris la route tôt le matin. L'air était frais, et tout le monde débordait d'énergie. Nous avions rempli nos sacs de nourriture, d'eau, de vêtements chauds et de matériel de camping. Le trajet jusqu'à la montagne a pris plusieurs heures, mais nous avons profité de chaque instant en chantant et en partageant des histoires dans la voiture.",
      },
      {
        type: 'paragraph',
        text: "À l'arrivée au pied de la montagne, la véritable aventure a commencé. Nous avons entamé la montée par un sentier forestier. Le chemin était raide et rocailleux, mais les paysages étaient à couper le souffle. Des arbres immenses, des fleurs colorées, le chant des oiseaux. Parfois, nous faisions une pause pour reprendre notre souffle et capturer la beauté du panorama en photo.",
      },
      {
        type: 'quote',
        text: "Les meilleurs souvenirs ne se trouvent pas au départ. Ils se construisent pas à pas, dans l'effort et le partage.",
      },
      {
        type: 'paragraph',
        text: "Après plusieurs heures de montée, nous avons enfin atteint le sommet. La vue était époustouflante — une mer de montagnes vertes à perte de vue, avec des nuages qui dérivaient juste en dessous de nous. La fatigue s'était volatilisée. Debout là-haut avec mes amis, à rire, à prendre des photos et simplement à respirer l'air frais de la montagne — c'était l'un de ces rares instants de perfection absolue.",
      },
      {
        type: 'paragraph',
        text: "Nous avons installé notre camp près du sommet et passé la nuit sous un ciel étoilé. Autour du feu, nous avons partagé des repas, raconté des histoires et forgé des souvenirs qui dureront toute une vie. Le froid n'avait plus d'importance. Les courbatures non plus. Seul comptait le fait d'être là, ensemble.",
      },
      {
        type: 'paragraph',
        text: "Le lendemain matin, nous avons entamé la descente. En regardant la montagne une dernière fois, j'ai ressenti une profonde gratitude — pour l'aventure, pour le défi relevé, et pour les amis qui l'avaient rendu inoubliable.",
      },
      {
        type: 'heading',
        text: "Ce que la montagne m'a appris",
      },
      {
        type: 'paragraph',
        text: "Ce voyage m'a rappelé que les meilleures expériences de la vie ne sont jamais faciles. Elles demandent de l'effort, de la patience et la volonté de sortir de sa zone de confort. Mais quand on y arrive, ça vaut toujours le coup.",
      },
      {
        type: 'list',
        items: [
          "Partir tôt — la fraîcheur du matin rend la montée bien plus agréable",
          "Ne pas sous-estimer le matériel — vêtements chauds et bonnes chaussures sont essentiels",
          "Profiter du chemin, pas seulement de l'arrivée",
          "Voyager avec les bonnes personnes change tout",
        ],
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "Traveling is one of the most exciting experiences in life. It allows us to explore new places, meet different people, and create unforgettable memories. One of the most memorable journeys I ever had was my trip to the mountains with my friends. It was truly an adventure full of fun, challenges, and beautiful moments.",
      },
      {
        type: 'paragraph',
        text: "We started our trip early in the morning. The air was fresh, and everyone was full of energy. We packed our bags with food, water, warm clothes, and camping equipment. The journey to the mountain took several hours, but we enjoyed every moment by singing songs and sharing stories in the car.",
      },
      {
        type: 'paragraph',
        text: "When we arrived at the foot of the mountain, the real adventure began. We started hiking through the forest path. The road was steep and rocky, but the scenery was amazing. We saw tall trees, colorful flowers, and heard the sound of birds singing. Sometimes we stopped to rest and take pictures of the beautiful landscape.",
      },
      {
        type: 'quote',
        text: "The best memories aren't found at the starting line. They're built step by step, through effort and shared moments.",
      },
      {
        type: 'paragraph',
        text: "After several hours of climbing, we finally reached the summit. The view from the top was breathtaking — a sea of green mountains stretching endlessly in every direction, with clouds drifting just below us. The exhaustion disappeared completely. Standing there with my friends, laughing, taking photos, and simply breathing in the cool mountain air — it was one of those rare, perfect moments.",
      },
      {
        type: 'paragraph',
        text: "We set up camp near the summit and spent the night under a sky full of stars. Around the fire, we shared meals, told stories, and made memories that will last a lifetime. The cold didn't matter. The soreness in our legs didn't matter. All that mattered was that we were there, together.",
      },
      {
        type: 'paragraph',
        text: "The next morning, we began our descent. Looking back at the mountain one last time, I felt grateful — grateful for the adventure, for the challenge, and for the friends who made it unforgettable.",
      },
      {
        type: 'heading',
        text: "What the mountain taught me",
      },
      {
        type: 'paragraph',
        text: "This trip reminded me that the best experiences in life don't come easy. They require effort, patience, and a willingness to step out of your comfort zone. But when you get there, it's always worth it.",
      },
      {
        type: 'list',
        items: [
          "Start early — the cool morning air makes the climb far more enjoyable",
          "Don't underestimate your gear — warm clothes and good shoes are non-negotiable",
          "Enjoy the journey, not just the destination",
          "Traveling with the right people changes everything",
        ],
      },
    ],
  },
  {
    slug: 'newsletter-automatique-claude-n8n',
    title: 'Créer une newsletter automatique avec Claude + n8n',
    titleEn: 'Build an Automated Newsletter with Claude + n8n',
    excerpt: "Écrire une newsletter prend du temps. La faire écrire par Claude et l'envoyer via n8n sans toucher au clavier, ça prend une après-midi à mettre en place — et ça tourne tout seul ensuite.",
    excerptEn: "Writing a newsletter takes time. Having Claude write it and sending it via n8n without touching the keyboard takes an afternoon to set up — and then it runs on its own.",
    date: '2026-04-25',
    readTime: 7,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/blog/setup-nomade.png',
    content: [
      {
        type: 'paragraph',
        text: "J'envoyais ma newsletter à la main. Chaque semaine, je rassemblais des liens, je rédigeais une intro, je formatais dans Mailchimp, je cliquais sur envoyer. Une heure, parfois plus. Et souvent, je la sautais parce que j'avais autre chose à faire.",
      },
      {
        type: 'paragraph',
        text: "Depuis que j'ai connecté Claude et n8n, ça tourne tout seul. Je définis les sources, Claude rédige, n8n envoie. Je valide si je veux — ou pas. Voici comment ça marche.",
      },
      {
        type: 'heading',
        text: "Ce dont tu as besoin",
      },
      {
        type: 'list',
        items: [
          "n8n — self-hosted (gratuit) ou n8n Cloud (plan free suffisant pour commencer)",
          "Une clé API Claude (Anthropic) — le plan Haiku coûte presque rien à cette échelle",
          "Un service d'envoi d'email : Brevo, Resend ou Mailchimp (tous ont une API gratuite)",
          "Une ou plusieurs sources de contenu : flux RSS, Airtable, Notion, Google Sheets...",
        ],
      },
      {
        type: 'heading',
        text: "Le workflow en 5 étapes",
      },
      {
        type: 'paragraph',
        text: "L'idée est simple : un déclencheur lance le workflow (tous les lundis à 8h par exemple), n8n récupère le contenu des sources, Claude rédige la newsletter, et le résultat est envoyé à ta liste.",
      },
      {
        type: 'list',
        items: [
          "1. Trigger — Schedule node : tous les lundis à 8h00",
          "2. Fetch — HTTP Request nodes : récupère les derniers articles de tes flux RSS ou ta base Notion",
          "3. Aggregate — Code node : regroupe et nettoie les données en un seul bloc de texte",
          "4. Generate — Claude API node : envoie le prompt + les données, reçoit la newsletter rédigée",
          "5. Send — Brevo / Resend node : envoie l'email à ta liste",
        ],
      },
      {
        type: 'heading',
        text: "Le prompt qui fait tout le travail",
      },
      {
        type: 'paragraph',
        text: "C'est là que tout se joue. Un prompt vague donne une newsletter générique. Un prompt précis donne quelque chose qui ressemble vraiment à toi.",
      },
      {
        type: 'code',
        text: "Tu es moi. Tu écris ma newsletter hebdomadaire \"Tonton Weekly\".\n\nTon style : direct, sans bullshit, avec une touche d'humour. Tu tutoies. Tu ne fais pas de grandes introductions. Tu vas à l'essentiel.\n\nVoici les contenus de la semaine :\n{{articles}}\n\nStructure la newsletter ainsi :\n- Un titre accrocheur (pas clickbait, mais percutant)\n- Une intro de 2-3 phrases maximum\n- 3 à 5 sections courtes, une par sujet, avec un lien\n- Une phrase de clôture personnelle\n\nFormat HTML prêt à coller dans un emailer. Pas de markdown.",
      },
      {
        type: 'paragraph',
        text: "Le placeholder {{articles}} est rempli dynamiquement par n8n avec le contenu récupéré à l'étape précédente. Claude reçoit donc le contexte complet à chaque exécution.",
      },
      {
        type: 'heading',
        text: "Ajouter une étape de validation (optionnel)",
      },
      {
        type: 'paragraph',
        text: "Si tu ne veux pas envoyer automatiquement sans lire, insère un nœud Wait + un webhook entre la génération et l'envoi. n8n t'envoie un email avec un lien \"Valider\" et \"Rejeter\". Tu cliques, le workflow reprend ou s'arrête. Tu gardes le contrôle sans faire le travail.",
      },
      {
        type: 'quote',
        text: "L'automatisation ne remplace pas ta voix — elle te libère du temps pour que tu puisses l'utiliser là où ça compte vraiment.",
      },
      {
        type: 'heading',
        text: "Ce que ça change concrètement",
      },
      {
        type: 'paragraph',
        text: "Ma newsletter sort maintenant chaque semaine, sans exception. La régularité a fait grimper mon taux d'ouverture de 22% à 34% en deux mois. Pas parce que le contenu est meilleur — parce qu'il est là, consistant, prévisible.",
      },
      {
        type: 'list',
        items: [
          "Temps passé par newsletter : de 60 min à 5 min (relecture + validation)",
          "Fréquence : de \"quand j'y pense\" à chaque lundi sans exception",
          "Coût API Claude pour 52 newsletters/an : environ 3-4€",
          "n8n self-hosted sur un VPS à 5€/mois : zéro coût supplémentaire",
        ],
      },
      {
        type: 'paragraph',
        text: "Le workflow complet est dispo sur mon GitHub si tu veux le forker directement. Il suffit de brancher tes propres clés API et d'ajuster le prompt à ta voix.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "I used to write my newsletter by hand. Every week, gathering links, writing an intro, formatting in Mailchimp, clicking send. An hour, sometimes more. And often, I'd skip it because I had other things to do.",
      },
      {
        type: 'paragraph',
        text: "Since connecting Claude and n8n, it runs on its own. I define the sources, Claude writes, n8n sends. I approve if I want — or not. Here's how it works.",
      },
      {
        type: 'heading',
        text: "What you need",
      },
      {
        type: 'list',
        items: [
          "n8n — self-hosted (free) or n8n Cloud (free plan is enough to start)",
          "A Claude API key (Anthropic) — the Haiku plan costs almost nothing at this scale",
          "An email sending service: Brevo, Resend or Mailchimp (all have free APIs)",
          "One or more content sources: RSS feeds, Airtable, Notion, Google Sheets...",
        ],
      },
      {
        type: 'heading',
        text: "The workflow in 5 steps",
      },
      {
        type: 'paragraph',
        text: "The idea is simple: a trigger starts the workflow (every Monday at 8am for example), n8n fetches content from sources, Claude writes the newsletter, and the result is sent to your list.",
      },
      {
        type: 'list',
        items: [
          "1. Trigger — Schedule node: every Monday at 8:00am",
          "2. Fetch — HTTP Request nodes: retrieves latest articles from your RSS feeds or Notion database",
          "3. Aggregate — Code node: groups and cleans the data into a single text block",
          "4. Generate — Claude API node: sends the prompt + data, receives the drafted newsletter",
          "5. Send — Brevo / Resend node: sends the email to your list",
        ],
      },
      {
        type: 'heading',
        text: "The prompt that does all the work",
      },
      {
        type: 'paragraph',
        text: "This is where everything happens. A vague prompt produces a generic newsletter. A precise prompt produces something that actually sounds like you.",
      },
      {
        type: 'code',
        text: "You are me. You write my weekly newsletter \"Tonton Weekly\".\n\nYour style: direct, no bullshit, with a touch of humour. Informal tone. No long intros. Get to the point.\n\nHere is this week's content:\n{{articles}}\n\nStructure the newsletter as follows:\n- A catchy title (not clickbait, but punchy)\n- An intro of 2-3 sentences maximum\n- 3 to 5 short sections, one per topic, with a link\n- A personal closing line\n\nHTML format ready to paste into an emailer. No markdown.",
      },
      {
        type: 'paragraph',
        text: "The {{articles}} placeholder is filled dynamically by n8n with the content fetched in the previous step. Claude receives the full context on every run.",
      },
      {
        type: 'heading',
        text: "Adding a validation step (optional)",
      },
      {
        type: 'paragraph',
        text: "If you don't want to send automatically without reading first, insert a Wait node + a webhook between generation and sending. n8n sends you an email with an \"Approve\" and \"Reject\" link. You click, the workflow resumes or stops. You stay in control without doing the work.",
      },
      {
        type: 'quote',
        text: "Automation doesn't replace your voice — it frees up your time so you can use it where it really matters.",
      },
      {
        type: 'heading',
        text: "What it actually changes",
      },
      {
        type: 'paragraph',
        text: "My newsletter now goes out every week, without exception. The consistency pushed my open rate from 22% to 34% in two months. Not because the content is better — because it's there, consistent, predictable.",
      },
      {
        type: 'list',
        items: [
          "Time per newsletter: from 60 min to 5 min (review + approval)",
          "Frequency: from 'when I think about it' to every Monday without fail",
          "Claude API cost for 52 newsletters/year: around €3-4",
          "n8n self-hosted on a €5/month VPS: zero extra cost",
        ],
      },
      {
        type: 'paragraph',
        text: "The full workflow is available on my GitHub if you want to fork it directly. Just plug in your own API keys and adjust the prompt to your voice.",
      },
    ],
  },
  {
    slug: 'scraper-commentaires-instagram-ia',
    title: 'Comment j\'ai scrappé les commentaires Instagram avec Claude Code',
    titleEn: 'How I Scraped Instagram Comments with Claude Code',
    excerpt: "Instagram bloque tout sans connexion. Avec Claude Code, Puppeteer et un cookie de session, j'ai récupéré les 61 commentaires d'un post de concours en quelques minutes.",
    excerptEn: "Instagram blocks everything without login. With Claude Code, Puppeteer and a session cookie, I retrieved all 61 comments from a giveaway post in a few minutes.",
    date: '2026-04-25',
    readTime: 5,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/blog/scraper-commentaires-instagram.png',
    content: [
      {
        type: 'paragraph',
        text: "J'organisais un concours sur Instagram. 61 commentaires, un gagnant à tirer au sort. Le problème : Instagram n'affiche que quelques commentaires sans connexion, masque le reste derrière une popup de login, et son API officielle est morte depuis 2020.",
      },
      {
        type: 'paragraph',
        text: "Plutôt que de copier-coller à la main, j'ai demandé à Claude Code de résoudre ça. Voici exactement ce qu'on a fait — et ce que ça m'a appris sur les limites des sites modernes.",
      },
      {
        type: 'heading',
        text: "Première tentative : Puppeteer à froid",
      },
      {
        type: 'paragraph',
        text: "Claude a d'abord essayé d'ouvrir le post avec Puppeteer (un navigateur headless contrôlé par code), de fermer la popup de login et d'extraire les commentaires via JavaScript. Résultat : Instagram détecte l'automatisation, fait une redirection React interne qui détache le frame, et tout s'arrête.",
      },
      {
        type: 'paragraph',
        text: "C'est un mécanisme anti-bot classique sur les SPA (Single Page Applications) : le JavaScript du site remplace le frame de navigation, coupant la connexion avec Puppeteer avant qu'on puisse rien faire.",
      },
      {
        type: 'heading',
        text: "Deuxième tentative : injecter un cookie de session",
      },
      {
        type: 'paragraph',
        text: "La vraie solution était ailleurs. Instagram accepte les requêtes authentifiées via son API GraphQL interne — à condition d'avoir un cookie de session valide. Il suffit de :",
      },
      {
        type: 'list',
        items: [
          "Ouvrir Instagram dans son navigateur habituel (déjà connecté)",
          "Aller dans DevTools → Application → Cookies → instagram.com",
          "Copier la valeur du cookie sessionid",
          "L'injecter dans les requêtes curl ou Python",
        ],
      },
      {
        type: 'heading',
        text: "L'API GraphQL cachée d'Instagram",
      },
      {
        type: 'paragraph',
        text: "Instagram utilise en interne une API GraphQL pour charger les commentaires dans le navigateur. Elle n'est pas documentée publiquement, mais elle est accessible si on envoie les bons headers. Claude a identifié le bon endpoint et le query hash à utiliser :",
      },
      {
        type: 'code',
        text: "curl \"https://www.instagram.com/graphql/query/?query_hash=97b41c52301f77ce508f55e66d17620e&variables={\\\"shortcode\\\":\\\"XXXX\\\",\\\"first\\\":50}\" \\\\\n  -H \"Cookie: sessionid=TON_SESSION_ID; csrftoken=TON_CSRF\" \\\\\n  -H \"X-IG-App-ID: 936619743392459\"",
      },
      {
        type: 'paragraph',
        text: "La réponse est du JSON propre avec tous les commentaires, les usernames, les likes et la pagination. Pour un post avec plus de 50 commentaires, on pagine avec le curseur renvoyé dans page_info.",
      },
      {
        type: 'heading',
        text: "Le script Python final",
      },
      {
        type: 'paragraph',
        text: "Claude a écrit un script Python qui récupère toutes les pages automatiquement, déduplique par ID de commentaire (Instagram peut renvoyer des doublons en pagination), et affiche le résultat proprement :",
      },
      {
        type: 'list',
        items: [
          "50 commentaires uniques récupérés sur 61 affichés (les 11 restants sont filtrés comme spam par Instagram)",
          "Pagination automatique avec gestion du curseur",
          "Déduplication par ID pour éviter les doublons",
          "Export en CSV ou liste simple en une ligne",
        ],
      },
      {
        type: 'quote',
        text: "Les APIs non documentées sont partout. Les navigateurs envoient des requêtes réseau — il suffit de les observer pour comprendre comment le site fonctionne vraiment.",
      },
      {
        type: 'heading',
        text: "L'approche officielle : ManyChat",
      },
      {
        type: 'paragraph',
        text: "Avant d'aller chercher une solution technique, j'avais essayé ManyChat — un outil qui s'intègre officiellement avec Instagram via son API partenaire. Le principe : tu configures un trigger sur un mot-clé (ici \"WEBSITE\"), et chaque fois que quelqu'un commente ce mot, ManyChat l'enregistre automatiquement et peut lui envoyer un DM.",
      },
      {
        type: 'paragraph',
        text: "L'avantage : c'est propre, légal, et ça collecte les données en temps réel. L'inconvénient : ManyChat ne te donne pas accès aux commentaires déjà postés avant la mise en place du trigger. Pour un concours lancé avant la configuration, tu rates les premiers participants.",
      },
      {
        type: 'list',
        items: [
          "ManyChat → parfait pour collecter les participants en temps réel dès le départ",
          "GraphQL API → indispensable pour récupérer les commentaires déjà existants",
          "Les deux sont complémentaires : ManyChat pour les futurs concours, le script pour les rattrapage",
        ],
      },
      {
        type: 'paragraph',
        text: "Dans mon cas, j'avais lancé le concours sans ManyChat. Il fallait donc tout récupérer après coup — d'où la session Claude Code.",
      },
      {
        type: 'heading',
        text: "Ce que ça change pour les concours Instagram",
      },
      {
        type: 'paragraph',
        text: "Le script tourne en quelques secondes. Tu récupères la liste complète des participants en CSV, tu peux l'importer dans un outil de tirage au sort, vérifier les doublons (certains commentent plusieurs fois), et automatiser l'annonce du gagnant. Ce qui prenait 30 minutes de copier-coller manuel prend maintenant 30 secondes.",
      },
      {
        type: 'paragraph',
        text: "Le replay complet de la session est disponible sur YouTube — on voit Claude Code construire la solution en direct, avec tous les faux départs et ajustements.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "I was running an Instagram giveaway. 61 comments, one winner to draw. The problem: Instagram only shows a few comments without login, hides the rest behind a signup popup, and its official API has been dead since 2020.",
      },
      {
        type: 'paragraph',
        text: "Rather than copy-pasting by hand, I asked Claude Code to solve it. Here's exactly what we did — and what it taught me about the limitations of modern websites.",
      },
      {
        type: 'heading',
        text: "First attempt: cold Puppeteer",
      },
      {
        type: 'paragraph',
        text: "Claude first tried opening the post with Puppeteer (a headless browser controlled by code), closing the login popup and extracting comments via JavaScript. Result: Instagram detects automation, triggers an internal React redirect that detaches the frame, and everything stops.",
      },
      {
        type: 'paragraph',
        text: "This is a classic anti-bot mechanism on SPAs (Single Page Applications): the site's JavaScript replaces the navigation frame, cutting the Puppeteer connection before anything can be done.",
      },
      {
        type: 'heading',
        text: "Second attempt: injecting a session cookie",
      },
      {
        type: 'paragraph',
        text: "The real solution was elsewhere. Instagram accepts authenticated requests via its internal GraphQL API — as long as you have a valid session cookie. You just need to:",
      },
      {
        type: 'list',
        items: [
          "Open Instagram in your regular browser (already logged in)",
          "Go to DevTools → Application → Cookies → instagram.com",
          "Copy the value of the sessionid cookie",
          "Inject it into curl or Python requests",
        ],
      },
      {
        type: 'heading',
        text: "Instagram's hidden GraphQL API",
      },
      {
        type: 'paragraph',
        text: "Instagram uses an internal GraphQL API to load comments in the browser. It's not publicly documented, but it's accessible if you send the right headers. Claude identified the correct endpoint and query hash:",
      },
      {
        type: 'code',
        text: `curl "https://www.instagram.com/graphql/query/?query_hash=97b41c52301f77ce508f55e66d17620e&variables={\"shortcode\":\"XXXX\",\"first\":50}" \\
  -H "Cookie: sessionid=YOUR_SESSION_ID; csrftoken=YOUR_CSRF" \\
  -H "X-IG-App-ID: 936619743392459"`,
      },
      {
        type: 'paragraph',
        text: "The response is clean JSON with all comments, usernames, likes and pagination. For posts with more than 50 comments, paginate using the cursor returned in page_info.",
      },
      {
        type: 'heading',
        text: "The final Python script",
      },
      {
        type: 'paragraph',
        text: "Claude wrote a Python script that automatically fetches all pages, deduplicates by comment ID (Instagram can return duplicates in pagination), and displays the result cleanly:",
      },
      {
        type: 'list',
        items: [
          "50 unique comments retrieved out of 61 displayed (the 11 remaining are filtered as spam by Instagram)",
          "Automatic pagination with cursor handling",
          "Deduplication by ID to avoid duplicates",
          "Export to CSV or simple list in one line",
        ],
      },
      {
        type: 'quote',
        text: "Undocumented APIs are everywhere. Browsers send network requests — you just need to observe them to understand how the site really works.",
      },
      {
        type: 'heading',
        text: "The official approach: ManyChat",
      },
      {
        type: 'paragraph',
        text: "Before going the technical route, I had tried ManyChat — a tool that integrates officially with Instagram via its partner API. The idea: you set up a keyword trigger (here \"WEBSITE\"), and every time someone comments that word, ManyChat automatically logs it and can send them a DM.",
      },
      {
        type: 'paragraph',
        text: "The advantage: it's clean, legitimate, and collects data in real time. The downside: ManyChat doesn't give you access to comments posted before the trigger was set up. If you launch a giveaway before configuring it, you miss the early participants.",
      },
      {
        type: 'list',
        items: [
          "ManyChat → perfect for collecting participants in real time from the start",
          "GraphQL API → essential for retrieving comments that already exist",
          "Both are complementary: ManyChat for future giveaways, the script for catching up",
        ],
      },
      {
        type: 'paragraph',
        text: "In my case, I had launched the giveaway without ManyChat. So everything had to be retrieved after the fact — hence the Claude Code session.",
      },
      {
        type: 'heading',
        text: "What this changes for Instagram giveaways",
      },
      {
        type: 'paragraph',
        text: "The script runs in seconds. You get the full list of participants as CSV, can import it into a draw tool, check for duplicates (some people comment multiple times), and automate the winner announcement. What used to take 30 minutes of manual copy-pasting now takes 30 seconds.",
      },
      {
        type: 'paragraph',
        text: "The full session replay is available on YouTube — you can watch Claude Code build the solution live, including all the false starts and adjustments.",
      },
    ],
  },
  {
    slug: 'chatbot-instagram-manychat-claude',
    title: 'Construire un chatbot Instagram avec ManyChat + Claude',
    titleEn: 'Build an Instagram Chatbot with ManyChat + Claude',
    excerpt: "ManyChat gère le déclenchement, Claude rédige les réponses. Ensemble, ils créent un chatbot Instagram qui parle vraiment comme toi — sans que tu touches à rien.",
    excerptEn: "ManyChat handles the triggering, Claude writes the responses. Together they build an Instagram chatbot that actually sounds like you — without you touching a thing.",
    date: '2026-04-25',
    readTime: 6,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/blog/chatbot-instagram-manychat-claude.png',
    content: [
      {
        type: 'paragraph',
        text: "Tu reçois des DMs Instagram tous les jours. Toujours les mêmes questions : \"C'est combien ?\", \"Tu fais des sites pour les restaurants ?\", \"Comment tu travailles ?\". Tu réponds à la main, un par un, souvent avec des heures de retard.",
      },
      {
        type: 'paragraph',
        text: "Avec ManyChat + Claude, ces réponses partent en quelques secondes, dans ton style, avec les bonnes infos. Et toi tu n'interviens que quand c'est un vrai prospect chaud.",
      },
      {
        type: 'heading',
        text: "Pourquoi ManyChat et pas directement l'API Instagram ?",
      },
      {
        type: 'paragraph',
        text: "Instagram ne laisse pas n'importe qui envoyer des DMs via API. Il faut être partenaire officiel Meta — ce que ManyChat est. ManyChat sert de pont : il reçoit les messages de tes abonnés via l'API officielle, et toi tu définis ce qui se passe ensuite. Sans ManyChat (ou un outil équivalent), impossible d'automatiser légalement.",
      },
      {
        type: 'heading',
        text: "Le rôle de Claude dans l'architecture",
      },
      {
        type: 'paragraph',
        text: "ManyChat est puissant pour les flows simples (if/else, boutons, menus). Mais dès qu'un message est ouvert, nuancé ou inattendu, il répond à côté. C'est là que Claude entre en jeu : ManyChat envoie le message reçu à un webhook, le webhook appelle l'API Claude, Claude génère une réponse contextuelle, et ManyChat l'envoie à l'utilisateur.",
      },
      {
        type: 'list',
        items: [
          "ManyChat — reçoit les DMs, gère les triggers, envoie les réponses",
          "Webhook (n8n ou Make) — reçoit le message depuis ManyChat, appelle Claude",
          "Claude API — génère la réponse dans ton style avec le bon contexte",
          "Durée totale bout en bout : 2 à 4 secondes",
        ],
      },
      {
        type: 'heading',
        text: "Mise en place étape par étape",
      },
      {
        type: 'paragraph',
        text: "Dans ManyChat, crée un flow déclenché par \"Default Reply\" — c'est-à-dire tout message qui ne correspond à aucun autre trigger. C'est ce flow qui attrape les questions ouvertes et les envoie à Claude.",
      },
      {
        type: 'list',
        items: [
          "1. Dans ManyChat : crée un flow \"Default Reply\" → ajoute une action \"Send to External URL\" avec l'URL de ton webhook",
          "2. Dans n8n : crée un workflow Webhook → HTTP Request vers l'API Claude → réponse renvoyée à ManyChat via son API Send Message",
          "3. Dans le prompt Claude : injecte le contexte (qui tu es, ce que tu fais, ton style) + le message reçu",
          "4. Teste avec une dizaine de messages types avant de mettre en production",
        ],
      },
      {
        type: 'heading',
        text: "Le prompt qui définit ta personnalité",
      },
      {
        type: 'paragraph',
        text: "C'est la clé. Plus le prompt est précis, plus le chatbot te ressemble. Voici la structure que j'utilise :",
      },
      {
        type: 'code',
        text: "Tu es l'assistant Instagram de Tonton Francky, créateur de sites web et développeur freelance basé en Asie du Sud-Est.\n\nTon style : chaleureux, direct, sans jargon. Tu tutoies. Tes réponses font 2-4 phrases max.\n\nCe que tu proposes :\n- Création de sites web (vitrine, e-commerce, blog)\n- Tarifs : à partir de 500€ selon le projet\n- Délai moyen : 2 à 4 semaines\n\nSi quelqu'un est intéressé par un projet, invite-le à répondre \"DEVIS\" pour recevoir un formulaire.\nSi la question dépasse tes connaissances, dis-le honnêtement et propose de continuer en vocal.\n\nMessage reçu : {{message}}",
      },
      {
        type: 'heading',
        text: "Cas d'usage concrets",
      },
      {
        type: 'list',
        items: [
          "FAQ automatique — prix, délais, process : Claude répond instantanément avec les bonnes infos",
          "Qualification de leads — Claude identifie les vrais projets et redirige vers un formulaire ou un lien Calendly",
          "Suivi de concours — après un giveaway, répond automatiquement à chaque commentaire \"Website\" reçu en DM",
          "Support client léger — questions sur une commande, un e-book, un accès : Claude gère sans toi",
        ],
      },
      {
        type: 'quote',
        text: "Un bon chatbot ne remplace pas ta présence — il la démultiplie. Tu réponds à 100 personnes pendant que tu travailles sur la 101ème.",
      },
      {
        type: 'heading',
        text: "Les limites à connaître",
      },
      {
        type: 'paragraph',
        text: "ManyChat facture au nombre de contacts actifs — le plan gratuit couvre 1 000 contacts, suffisant pour démarrer. Au-delà, compte environ 15€/mois. L'API Claude a un coût marginal (quelques centimes pour 1 000 messages avec Haiku). Et Instagram limite le nombre de DMs automatiques : ne bombarde pas tes abonnés sous peine de restriction de compte.",
      },
      {
        type: 'paragraph',
        text: "Mis en place correctement, ce système tourne en autonomie complète. J'interviens désormais uniquement quand Claude me signale un message marqué \"DEVIS\" — soit environ 5% des conversations, les seules qui comptent vraiment.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "You get Instagram DMs every day. Always the same questions: \"How much does it cost?\", \"Do you build sites for restaurants?\", \"How do you work?\". You reply by hand, one by one, often hours late.",
      },
      {
        type: 'paragraph',
        text: "With ManyChat + Claude, those responses go out within seconds, in your style, with the right info. And you only step in when it's a genuinely hot lead.",
      },
      {
        type: 'heading',
        text: "Why ManyChat and not the Instagram API directly?",
      },
      {
        type: 'paragraph',
        text: "Instagram doesn't let just anyone send DMs via API. You need to be an official Meta partner — which ManyChat is. ManyChat acts as the bridge: it receives messages from your followers via the official API, and you define what happens next. Without ManyChat (or an equivalent tool), legal automation is impossible.",
      },
      {
        type: 'heading',
        text: "Claude's role in the architecture",
      },
      {
        type: 'paragraph',
        text: "ManyChat is powerful for simple flows (if/else, buttons, menus). But the moment a message is open-ended, nuanced or unexpected, it misses the mark. That's where Claude comes in: ManyChat sends the received message to a webhook, the webhook calls the Claude API, Claude generates a contextual response, and ManyChat delivers it to the user.",
      },
      {
        type: 'list',
        items: [
          "ManyChat — receives DMs, manages triggers, sends responses",
          "Webhook (n8n or Make) — receives the message from ManyChat, calls Claude",
          "Claude API — generates a response in your style with the right context",
          "Total end-to-end time: 2 to 4 seconds",
        ],
      },
      {
        type: 'heading',
        text: "Step-by-step setup",
      },
      {
        type: 'paragraph',
        text: "In ManyChat, create a flow triggered by \"Default Reply\" — meaning any message that doesn't match any other trigger. This flow catches open questions and routes them to Claude.",
      },
      {
        type: 'list',
        items: [
          "1. In ManyChat: create a \"Default Reply\" flow → add a \"Send to External URL\" action with your webhook URL",
          "2. In n8n: create a Webhook workflow → HTTP Request to the Claude API → response sent back to ManyChat via its Send Message API",
          "3. In the Claude prompt: inject context (who you are, what you do, your style) + the received message",
          "4. Test with a dozen typical messages before going live",
        ],
      },
      {
        type: 'heading',
        text: "The prompt that defines your personality",
      },
      {
        type: 'paragraph',
        text: "This is the key. The more precise the prompt, the more the chatbot sounds like you. Here's the structure I use:",
      },
      {
        type: 'code',
        text: "You are the Instagram assistant of Tonton Francky, a web developer and freelancer based in Southeast Asia.\n\nYour style: warm, direct, no jargon. Informal tone. Keep responses to 2-4 sentences max.\n\nWhat you offer:\n- Website creation (showcase, e-commerce, blog)\n- Pricing: from €500 depending on the project\n- Average timeline: 2 to 4 weeks\n\nIf someone is interested in a project, invite them to reply \"QUOTE\" to receive a form.\nIf the question is beyond your knowledge, say so honestly and suggest continuing on a call.\n\nMessage received: {{message}}",
      },
      {
        type: 'heading',
        text: "Concrete use cases",
      },
      {
        type: 'list',
        items: [
          "Automatic FAQ — pricing, timelines, process: Claude responds instantly with the right info",
          "Lead qualification — Claude identifies real projects and redirects to a form or Calendly link",
          "Giveaway follow-up — after a contest, automatically reply to every \"Website\" comment received as a DM",
          "Light customer support — questions about an order, an e-book, an access link: Claude handles it without you",
        ],
      },
      {
        type: 'quote',
        text: "A good chatbot doesn't replace your presence — it multiplies it. You're responding to 100 people while working on the 101st.",
      },
      {
        type: 'heading',
        text: "Limits to know",
      },
      {
        type: 'paragraph',
        text: "ManyChat charges per active contact — the free plan covers 1,000 contacts, enough to start. Beyond that, expect around €15/month. The Claude API has a marginal cost (a few cents per 1,000 messages with Haiku). And Instagram limits the number of automated DMs: don't flood your followers or risk account restrictions.",
      },
      {
        type: 'paragraph',
        text: "Set up correctly, this system runs fully autonomously. I now only step in when Claude flags a message marked \"QUOTE\" — about 5% of conversations, the only ones that really matter.",
      },
    ],
  },
  {
    slug: 'concours-instagram-de-a-a-z',
    title: 'Organiser un concours Instagram de A à Z',
    titleEn: 'Running an Instagram Giveaway from A to Z',
    excerpt: "De la rédaction des règles à l'annonce du gagnant, avec ManyChat pour collecter les participants en temps réel et un script pour récupérer ceux d'avant — le guide complet.",
    excerptEn: "From writing the rules to announcing the winner, with ManyChat to collect participants in real time and a script to retrieve earlier ones — the complete guide.",
    date: '2026-04-25',
    readTime: 7,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/blog/scraper-commentaires-instagram.png',
    content: [
      {
        type: 'paragraph',
        text: "Un concours Instagram bien organisé peut doubler ton engagement en 5 jours. Mais entre les règles floues, les commentaires perdus, les participants qui trichent et les annonces bâclées, la plupart ratent l'essentiel. Voici le process que j'utilise maintenant, outillé de bout en bout.",
      },
      {
        type: 'heading',
        text: "Phase 1 : définir les règles avant de poster",
      },
      {
        type: 'paragraph',
        text: "Un concours sans règles claires, c'est une source de conflits. Avant de publier quoi que ce soit, décide de trois choses : ce que les gens doivent faire pour participer, qui peut participer, et quand et comment le gagnant sera annoncé.",
      },
      {
        type: 'list',
        items: [
          "Action requise : suivre le compte + liker le post + commenter un mot-clé (ex : \"WEBSITE\")",
          "Conditions : compte public obligatoire, un seul gagnant par personne",
          "Date de clôture : annonce précise (ex : samedi 25 avril à 20h)",
          "Prix : décrit clairement — valeur, ce qui est inclus, délai de livraison",
        ],
      },
      {
        type: 'heading',
        text: "Phase 2 : configurer ManyChat avant le lancement",
      },
      {
        type: 'paragraph',
        text: "C'est l'étape que la plupart oublient — et qui coûte des participants. Configure ManyChat avant de publier le post, pas après. Dès que quelqu'un commente le mot-clé, ManyChat lui envoie automatiquement un DM de confirmation et enregistre son profil.",
      },
      {
        type: 'list',
        items: [
          "Dans ManyChat : crée un flow \"Comment Growth Tool\" → choisis le post → mot-clé déclencheur",
          "DM automatique de confirmation : \"Merci pour ta participation ! Le gagnant sera annoncé le [date]. Bonne chance 🎉\"",
          "Tag automatique : ajoute un tag \"concours-website\" à chaque participant pour les retrouver facilement",
          "Exporte la liste des tags à tout moment depuis l'onglet Contacts",
        ],
      },
      {
        type: 'heading',
        text: "Phase 3 : le post et le visuel",
      },
      {
        type: 'paragraph',
        text: "Le visuel doit communiquer le prix en moins de 2 secondes. Titre en gros, image du prix, les 3 étapes de participation numérotées, date d'annonce visible. Pas de texte en corps de post — tout doit être dans l'image ou en caption courte.",
      },
      {
        type: 'list',
        items: [
          "Caption : 3 lignes max — le prix, les étapes, la date",
          "Hashtags : 5 à 10 ciblés, pas 30 génériques",
          "Épingle le post en haut de ton profil pendant toute la durée",
          "Stories quotidiennes pour rappeler le concours et créer de l'urgence",
        ],
      },
      {
        type: 'heading',
        text: "Phase 4 : récupérer tous les commentaires",
      },
      {
        type: 'paragraph',
        text: "ManyChat collecte les participants en temps réel — mais seulement depuis sa mise en place. Si tu as publié le post avant de configurer ManyChat, ou si tu veux vérifier que personne ne manque, il faut récupérer les commentaires directement via l'API Instagram.",
      },
      {
        type: 'paragraph',
        text: "J'utilise un script Python qui appelle l'API GraphQL interne d'Instagram avec un cookie de session, récupère tous les commentaires paginés et exporte la liste en CSV. En 30 secondes, j'ai les 61 participants avec leur username, leur commentaire et le nombre de likes.",
      },
      {
        type: 'quote',
        text: "ManyChat pour le temps réel, le script pour le rattrapage. Les deux ensemble garantissent zéro participant perdu.",
      },
      {
        type: 'heading',
        text: "Phase 5 : nettoyer la liste et tirer au sort",
      },
      {
        type: 'paragraph',
        text: "Avant le tirage, nettoie la liste : supprime les doublons (certains commentent plusieurs fois), vérifie que les comptes sont publics, et retire les participants qui ne suivent pas le compte si c'était une condition.",
      },
      {
        type: 'list',
        items: [
          "Déduplique par username — garde une seule participation par personne",
          "Vérifie les conditions : compte public, abonné au compte",
          "Outil de tirage : wheelofnames.com ou random.org — simple, visuel, traçable",
          "Fais une capture d'écran ou un screen record du tirage pour prouver la transparence",
        ],
      },
      {
        type: 'heading',
        text: "Phase 6 : annoncer le gagnant",
      },
      {
        type: 'paragraph',
        text: "L'annonce est aussi importante que le concours lui-même. Une bonne annonce génère de l'engagement, renforce la confiance et donne envie de participer au prochain.",
      },
      {
        type: 'list',
        items: [
          "Post dédié avec le username du gagnant + capture du tirage",
          "Story avec compte à rebours : \"Le gagnant est...\" + reveal",
          "DM direct au gagnant via ManyChat (automatisé si tu as son tag)",
          "Délai de réponse du gagnant : 48h, sinon nouveau tirage — précise-le dans les règles",
        ],
      },
      {
        type: 'heading',
        text: "Ce que j'aurais fait différemment",
      },
      {
        type: 'paragraph',
        text: "Sur mon dernier concours, j'ai configuré ManyChat après avoir publié — ce qui m'a forcé à récupérer les premiers commentaires manuellement via script. La prochaine fois : ManyChat d'abord, post ensuite. Et je prévois le visuel d'annonce à l'avance pour le publier dans les minutes qui suivent le tirage, pas le lendemain.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "A well-run Instagram giveaway can double your engagement in 5 days. But between vague rules, lost comments, cheating participants and botched announcements, most people miss the essentials. Here's the process I now use, tooled from end to end.",
      },
      {
        type: 'heading',
        text: "Phase 1: define the rules before posting",
      },
      {
        type: 'paragraph',
        text: "A giveaway without clear rules is a source of conflict. Before publishing anything, decide three things: what people need to do to enter, who can enter, and when and how the winner will be announced.",
      },
      {
        type: 'list',
        items: [
          "Required action: follow the account + like the post + comment a keyword (e.g. \"WEBSITE\")",
          "Conditions: public account required, one winner per person",
          "Closing date: a precise announcement (e.g. Saturday April 25 at 8pm)",
          "Prize: clearly described — value, what's included, delivery timeline",
        ],
      },
      {
        type: 'heading',
        text: "Phase 2: configure ManyChat before launching",
      },
      {
        type: 'paragraph',
        text: "This is the step most people forget — and it costs them participants. Configure ManyChat before publishing the post, not after. As soon as someone comments the keyword, ManyChat automatically sends them a confirmation DM and logs their profile.",
      },
      {
        type: 'list',
        items: [
          "In ManyChat: create a \"Comment Growth Tool\" flow → select the post → trigger keyword",
          "Automatic confirmation DM: \"Thanks for entering! The winner will be announced on [date]. Good luck 🎉\"",
          "Automatic tag: add a \"giveaway-website\" tag to each participant for easy retrieval",
          "Export the tag list at any time from the Contacts tab",
        ],
      },
      {
        type: 'heading',
        text: "Phase 3: the post and visual",
      },
      {
        type: 'paragraph',
        text: "The visual needs to communicate the prize in under 2 seconds. Big title, image of the prize, the 3 entry steps numbered, visible announcement date. No body text — everything should be in the image or a short caption.",
      },
      {
        type: 'list',
        items: [
          "Caption: 3 lines max — the prize, the steps, the date",
          "Hashtags: 5 to 10 targeted ones, not 30 generic ones",
          "Pin the post to the top of your profile for the duration",
          "Daily Stories to remind people about the giveaway and create urgency",
        ],
      },
      {
        type: 'heading',
        text: "Phase 4: retrieve all comments",
      },
      {
        type: 'paragraph',
        text: "ManyChat collects participants in real time — but only from when it was set up. If you published the post before configuring ManyChat, or if you want to make sure no one is missing, you need to retrieve comments directly via the Instagram API.",
      },
      {
        type: 'paragraph',
        text: "I use a Python script that calls Instagram's internal GraphQL API with a session cookie, fetches all paginated comments and exports the list as CSV. In 30 seconds, I have all 61 participants with their username, comment and like count.",
      },
      {
        type: 'quote',
        text: "ManyChat for real time, the script for catch-up. Together they guarantee zero lost participant.",
      },
      {
        type: 'heading',
        text: "Phase 5: clean the list and draw",
      },
      {
        type: 'paragraph',
        text: "Before the draw, clean the list: remove duplicates (some people comment multiple times), verify accounts are public, and remove participants who don't follow the account if that was a condition.",
      },
      {
        type: 'list',
        items: [
          "Deduplicate by username — keep one entry per person",
          "Check conditions: public account, following the account",
          "Draw tool: wheelofnames.com or random.org — simple, visual, traceable",
          "Take a screenshot or screen recording of the draw to prove transparency",
        ],
      },
      {
        type: 'heading',
        text: "Phase 6: announce the winner",
      },
      {
        type: 'paragraph',
        text: "The announcement is as important as the giveaway itself. A good announcement generates engagement, builds trust and makes people want to enter the next one.",
      },
      {
        type: 'list',
        items: [
          "Dedicated post with the winner's username + draw screenshot",
          "Story with countdown: \"The winner is...\" + reveal",
          "Direct DM to the winner via ManyChat (automated if you have their tag)",
          "Winner response deadline: 48h, otherwise redraw — state this in the rules",
        ],
      },
      {
        type: 'heading',
        text: "What I would have done differently",
      },
      {
        type: 'paragraph',
        text: "In my last giveaway, I configured ManyChat after publishing — which forced me to retrieve the first comments manually via script. Next time: ManyChat first, post second. And I'll prepare the announcement visual in advance to publish it within minutes of the draw, not the next day.",
      },
    ],
  },
];

export default posts;
