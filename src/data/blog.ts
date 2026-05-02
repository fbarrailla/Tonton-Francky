export interface BlogSection {
  type: 'paragraph' | 'heading' | 'list' | 'quote' | 'code' | 'gallery' | 'video';
  text?: string;
  items?: string[];
  images?: string[];
  youtubeId?: string;
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
    thumbnail: '/blog/concours-instagram-de-a-a-z.png',
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
          "Fais une capture d'écran ou un screen record du tirage pour prouver la transparence",
        ],
      },
      {
        type: 'paragraph',
        text: "Pour le tirage, j'utilise ma propre roue de la fortune : fortune-wheel. Tu colles la liste des usernames, la roue tourne, le gagnant s'affiche. Simple, visuel, et parfait à filmer pour une Story Instagram.",
      },
      {
        type: 'list',
        items: [
          "👉 fbarrailla.github.io/fortune-wheel",
          "Colle la liste CSV des participants en un clic",
          "Lance la roue en direct devant tes abonnés pour un maximum de transparence",
        ],
      },
      {
        type: 'video',
        youtubeId: 'SYQK--0GlmY',
        text: 'Tirage au sort en direct — fortune-wheel',
      },
      {
        type: 'video',
        youtubeId: 'kB1rk3AlDQ8',
        text: 'Tirage au sort du concours — 25 avril 2026',
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
          "Take a screenshot or screen recording of the draw to prove transparency",
        ],
      },
      {
        type: 'paragraph',
        text: "For the draw, I use my own fortune wheel: fortune-wheel. Paste the list of usernames, spin the wheel, the winner appears. Simple, visual, and perfect to film for an Instagram Story.",
      },
      {
        type: 'list',
        items: [
          "👉 fbarrailla.github.io/fortune-wheel",
          "Paste the CSV list of participants in one click",
          "Spin the wheel live in front of your followers for maximum transparency",
        ],
      },
      {
        type: 'video',
        youtubeId: 'SYQK--0GlmY',
        text: 'Live draw — fortune-wheel',
      },
      {
        type: 'video',
        youtubeId: 'kB1rk3AlDQ8',
        text: 'Giveaway draw — April 25, 2026',
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
  {
    slug: 'bangkok-72h-nomade',
    title: 'Bangkok en 72h sans budget touristique',
    titleEn: 'Bangkok in 72h Without a Tourist Budget',
    excerpt: "Bangkok intimide par sa taille et sa réputation. Mais avec 3 jours et la bonne approche, c'est l'une des villes les plus accessibles d'Asie — à condition de savoir où ne pas aller.",
    excerptEn: "Bangkok intimidates with its size and reputation. But with 3 days and the right approach, it's one of the most accessible cities in Asia — as long as you know where not to go.",
    date: '2026-04-25',
    readTime: 6,
    category: 'Voyages',
    categoryEn: 'Travels',
    thumbnail: '/blog/bangkok-72h-nomade.png',
    content: [
      {
        type: 'paragraph',
        text: "La première fois que j'ai atterri à Bangkok, j'avais lu trop de blogs touristiques. J'avais réservé un hôtel trop cher près de Khao San Road, pris des tuk-tuks à des prix absurdes, et mangé dans des restaurants avec photos plastifiées. Trois jours perdus à faire le touriste.",
      },
      {
        type: 'paragraph',
        text: "La deuxième fois, j'avais compris le truc. Bangkok est une ville pour les gens qui y vivent — et si tu te comportes comme eux, c'est l'une des destinations les plus agréables et les moins chères d'Asie du Sud-Est.",
      },
      {
        type: 'heading',
        text: "Jour 1 : arriver et s'orienter",
      },
      {
        type: 'paragraph',
        text: "L'aéroport Suvarnabhumi est bien connecté. Prends le Airport Rail Link (45 bahts, environ 1,20€) jusqu'à Phaya Thai ou Makkasan, pas un taxi depuis le terminal — tu te ferais arnaquer. Une fois en ville, installe-toi autour de Silom, Ari ou Ekkamai plutôt que Sukhumvit centre ou Khao San. Même confort, moitié prix, plus local.",
      },
      {
        type: 'list',
        items: [
          "Transport aéroport → ville : Airport Rail Link (45 THB) + BTS/MRT",
          "Logement : guesthouse ou appart Airbnb à Silom ou Ari — 15 à 30€/nuit",
          "SIM locale : True Move ou AIS à l'aéroport — 7 jours data illimitée pour 10€",
          "Appli indispensable : Grab pour les taxis — jamais de tuk-tuk sans prix fixé à l'avance",
        ],
      },
      {
        type: 'heading',
        text: "Manger pour 2 à 4€ par repas",
      },
      {
        type: 'paragraph',
        text: "La règle d'or à Bangkok : si le resto a une carte en anglais avec photos, il est trop cher pour toi. Cherche les plastic tables sur le trottoir, les marchés de nuit, les food courts dans les centres commerciaux (pas ceux d'expats — ceux des locaux).",
      },
      {
        type: 'list',
        items: [
          "Pad thaï de rue : 60-80 THB (1,50-2€) — évite les versions \"tourist price\" à 200 THB",
          "Khao man gai (poulet riz) : 50 THB, repas complet, partout",
          "Som tam (salade de papaye) : 60 THB, frais, pimenté si tu dis \"pet nit noi\"",
          "Food court de centre commercial local (ex : MBK, Or Tor Kor Market) : 80-120 THB",
          "7-Eleven pour le petit déjeuner : triangle de riz + café glacé = 50 THB",
        ],
      },
      {
        type: 'heading',
        text: "Les 72h sans payer les prix touristes",
      },
      {
        type: 'paragraph',
        text: "Bangkok a des dizaines de temples — tu n'as pas besoin d'en faire dix. Wat Pho (200 THB) vaut le détour pour le bouddha couché. Wat Arun se visite de l'extérieur depuis le bord du fleuve, gratuitement. Le reste, c'est du remplissage.",
      },
      {
        type: 'list',
        items: [
          "Jour 1 soir — Chatuchak Weekend Market (gratuit, éviter si pas weekend) ou Talad Rot Fai Ratchada",
          "Jour 2 matin — Wat Pho + balade à pied dans Rattanakosin Island",
          "Jour 2 après-midi — quartier Ari ou Thonglor pour les cafés et le vrai Bangkok local",
          "Jour 3 — Or Tor Kor Market le matin (le meilleur marché alimentaire de Bangkok), Lumphini Park, Silom le soir",
        ],
      },
      {
        type: 'quote',
        text: "Bangkok se mérite en quittant les zones touristiques. À 500 mètres de Khao San Road, tu retrouves la ville réelle.",
      },
      {
        type: 'heading',
        text: "Se déplacer sans se ruiner",
      },
      {
        type: 'paragraph',
        text: "Le réseau BTS Skytrain et MRT couvre bien la ville. Un trajet coûte entre 16 et 44 THB selon la distance. C'est propre, climatisé et ponctuel. Pour les zones non couvertes, Grab est incontournable — affiche toujours le prix avant de confirmer, contrairement aux taxis.",
      },
      {
        type: 'list',
        items: [
          "BTS + MRT : 16-44 THB par trajet — le moyen le plus fiable",
          "Bateaux sur le Chao Phraya : 15 THB, rapide, vue magnifique",
          "Grab moto : 30-60 THB pour les courtes distances en heure de pointe",
          "Taxis : OK si tu insistes pour le compteur (\"by meter please\") — sinon ils négocient",
          "À éviter : tuk-tuks sans prix fixé, taxi depuis l'aéroport sans compteur",
        ],
      },
      {
        type: 'heading',
        text: "Travailler depuis Bangkok",
      },
      {
        type: 'paragraph',
        text: "Bangkok a une scène de cafés de travail excellente, surtout dans les quartiers Ari, Ekkamai et Thonglor. Wifi rapide, AC fort, café de spécialité à 80-120 THB. La plupart des cafés acceptent qu'on s'installe 3-4h sans consommation supplémentaire.",
      },
      {
        type: 'list',
        items: [
          "Quartiers : Ari (calme, expats créatifs), Ekkamai/Thonglor (branchés), Silom (central)",
          "Cafés recommandés : Roots Coffee, Factory Coffee, Ceresia — wifi stable, prises partout",
          "Coworking si besoin de concentration : HUBBA, The Hive — environ 300-400 THB/jour",
          "Éviter de travailler depuis le quartier touristique Sukhumvit centre — trop bruyant, trop cher",
        ],
      },
      {
        type: 'heading',
        text: "Le budget réel sur 72h",
      },
      {
        type: 'list',
        items: [
          "Logement (2 nuits) : 40-60€",
          "Nourriture (9 repas) : 20-30€",
          "Transport sur place : 5-8€",
          "Entrées (Wat Pho + 1-2 sites) : 6-8€",
          "Total : 70-100€ pour 3 jours — soit 25-35€/jour",
        ],
      },
      {
        type: 'paragraph',
        text: "C'est moins cher que Bali, moins cher que Chiang Mai en haute saison, et infiniment plus riche en expériences. Bangkok punit les touristes pressés et récompense ceux qui prennent le temps de ralentir.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "The first time I landed in Bangkok, I'd read too many tourist blogs. I'd booked an overpriced hotel near Khao San Road, taken tuk-tuks at absurd prices, and eaten at restaurants with laminated photo menus. Three days wasted playing tourist.",
      },
      {
        type: 'paragraph',
        text: "The second time, I'd figured it out. Bangkok is a city for the people who live there — and if you behave like them, it's one of the most pleasant and affordable destinations in Southeast Asia.",
      },
      {
        type: 'heading',
        text: "Day 1: arrive and get your bearings",
      },
      {
        type: 'paragraph',
        text: "Suvarnabhumi airport is well connected. Take the Airport Rail Link (45 baht, about €1.20) to Phaya Thai or Makkasan, not a taxi from the terminal — you'll get ripped off. Once in the city, stay around Silom, Ari or Ekkamai rather than central Sukhumvit or Khao San. Same comfort, half the price, more local.",
      },
      {
        type: 'list',
        items: [
          "Airport → city transport: Airport Rail Link (45 THB) + BTS/MRT",
          "Accommodation: guesthouse or Airbnb in Silom or Ari — €15 to €30/night",
          "Local SIM: True Move or AIS at the airport — 7 days unlimited data for €10",
          "Essential app: Grab for taxis — never take a tuk-tuk without agreeing on a price first",
        ],
      },
      {
        type: 'heading',
        text: "Eating for €2 to €4 per meal",
      },
      {
        type: 'paragraph',
        text: "The golden rule in Bangkok: if the restaurant has an English menu with photos, it's too expensive for you. Look for plastic tables on the pavement, night markets, food courts in shopping centres (not expat ones — local ones).",
      },
      {
        type: 'list',
        items: [
          "Street pad thai: 60-80 THB (€1.50-2) — avoid the \"tourist price\" versions at 200 THB",
          "Khao man gai (chicken rice): 50 THB, complete meal, everywhere",
          "Som tam (papaya salad): 60 THB, fresh, spicy if you say \"pet nit noi\"",
          "Local shopping centre food court (e.g. MBK, Or Tor Kor Market): 80-120 THB",
          "7-Eleven for breakfast: rice triangle + iced coffee = 50 THB",
        ],
      },
      {
        type: 'heading',
        text: "72h without paying tourist prices",
      },
      {
        type: 'paragraph',
        text: "Bangkok has dozens of temples — you don't need to do ten of them. Wat Pho (200 THB) is worth it for the reclining Buddha. Wat Arun can be visited from the outside along the river, for free. The rest is filler.",
      },
      {
        type: 'list',
        items: [
          "Day 1 evening — Chatuchak Weekend Market (free, avoid if not weekend) or Talad Rot Fai Ratchada",
          "Day 2 morning — Wat Pho + walk through Rattanakosin Island",
          "Day 2 afternoon — Ari or Thonglor neighbourhood for coffee shops and the real local Bangkok",
          "Day 3 — Or Tor Kor Market in the morning (Bangkok's best food market), Lumphini Park, Silom in the evening",
        ],
      },
      {
        type: 'quote',
        text: "Bangkok rewards you when you leave the tourist zones. 500 metres from Khao San Road, you find the real city.",
      },
      {
        type: 'heading',
        text: "Getting around without overpaying",
      },
      {
        type: 'paragraph',
        text: "The BTS Skytrain and MRT network covers the city well. A trip costs between 16 and 44 THB depending on the distance. It's clean, air-conditioned and punctual. For areas not covered, Grab is essential — it always shows the price before you confirm, unlike regular taxis.",
      },
      {
        type: 'list',
        items: [
          "BTS + MRT: 16-44 THB per trip — the most reliable option",
          "Chao Phraya river boats: 15 THB, fast, great views",
          "Grab moto: 30-60 THB for short distances during rush hour",
          "Taxis: fine if you insist on the meter (\"by meter please\") — otherwise they negotiate",
          "Avoid: tuk-tuks without an agreed price, airport taxis without a meter",
        ],
      },
      {
        type: 'heading',
        text: "Working from Bangkok",
      },
      {
        type: 'paragraph',
        text: "Bangkok has an excellent work café scene, especially in the Ari, Ekkamai and Thonglor neighbourhoods. Fast wifi, strong AC, specialty coffee at 80-120 THB. Most cafés are fine with you staying 3-4 hours without ordering again.",
      },
      {
        type: 'list',
        items: [
          "Neighbourhoods: Ari (quiet, creative expats), Ekkamai/Thonglor (trendy), Silom (central)",
          "Recommended cafés: Roots Coffee, Factory Coffee, Ceresia — stable wifi, plugs everywhere",
          "Coworking if you need focus: HUBBA, The Hive — around 300-400 THB/day",
          "Avoid working from the tourist Sukhumvit area — too noisy, too expensive",
        ],
      },
      {
        type: 'heading',
        text: "The real 72h budget",
      },
      {
        type: 'list',
        items: [
          "Accommodation (2 nights): €40-60",
          "Food (9 meals): €20-30",
          "Local transport: €5-8",
          "Entry fees (Wat Pho + 1-2 sites): €6-8",
          "Total: €70-100 for 3 days — i.e. €25-35/day",
        ],
      },
      {
        type: 'paragraph',
        text: "That's cheaper than Bali, cheaper than Chiang Mai in high season, and infinitely richer in experiences. Bangkok punishes the rushed tourist and rewards those who take the time to slow down.",
      },
    ],
  },
  {
    slug: 'tech-benefits-disadvantages-life',
    title: 'Les avantages et inconvénients de la technologie dans notre vie',
    titleEn: 'Tech Benefits and Disadvantages in Life',
    excerpt: "La technologie transforme chaque aspect de notre quotidien — mais à quel prix ? Voici un regard honnête sur les bénéfices réels et les risques souvent ignorés.",
    excerptEn: "Technology transforms every aspect of our daily lives — but at what cost? Here's an honest look at the real benefits and the often-ignored risks.",
    date: '2026-04-26',
    readTime: 7,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/blog/tech-benefits-disadvantages.png',
    content: [
      {
        type: 'paragraph',
        text: "La technologie est partout. Dans ta poche, sur ton bureau, dans ta cuisine, dans ta voiture. Elle a changé la façon dont on communique, on travaille, on apprend, on se soigne. Mais est-ce que tout ça est vraiment bien ?",
      },
      {
        type: 'paragraph',
        text: "Ce n'est pas une question naïve. C'est la question la plus importante de notre époque — et elle mérite une réponse honnête, sans technophobie ni techno-optimisme béat.",
      },
      {
        type: 'heading',
        text: "Les vrais bénéfices",
      },
      {
        type: 'heading',
        text: "1. Communication améliorée",
      },
      {
        type: 'paragraph',
        text: "Les emails, la messagerie instantanée, les appels vidéo — tout ça a rendu la communication plus rapide, moins chère, et accessible à tous. Une famille dispersée sur trois continents peut se retrouver sur un écran en quelques secondes. Une entreprise peut collaborer à distance sans perdre en efficacité.",
      },
      {
        type: 'heading',
        text: "2. Croissance économique",
      },
      {
        type: 'paragraph',
        text: "La technologie a ouvert des marchés entiers. L'e-commerce, les plateformes freelance, les SaaS — des milliers de nouveaux métiers sont apparus. Des personnes dans des pays en développement accèdent à l'économie mondiale depuis un simple smartphone.",
      },
      {
        type: 'heading',
        text: "3. Éducation accessible",
      },
      {
        type: 'paragraph',
        text: "YouTube, Coursera, Khan Academy. Des cours gratuits des meilleures universités mondiales, disponibles 24h/24. Un enfant en zone rurale peut aujourd'hui accéder aux mêmes ressources qu'un étudiant de Harvard — si tant est qu'il ait une connexion.",
      },
      {
        type: 'heading',
        text: "4. Santé améliorée",
      },
      {
        type: 'paragraph',
        text: "Les dossiers médicaux électroniques, la chirurgie robotique, la télémédecine, les montres connectées qui détectent une arythmie — la technologie sauve des vies chaque jour. Elle permet des diagnostics plus rapides, des traitements plus précis, une prévention plus efficace.",
      },
      {
        type: 'heading',
        text: "5. Productivité augmentée",
      },
      {
        type: 'paragraph',
        text: "Ce qui prenait une journée entière prend maintenant une heure. Les outils d'automatisation, les tableurs, les logiciels de gestion de projet — chaque tâche répétitive peut être déléguée à une machine. Tu peux faire plus, créer plus, penser à ce qui compte vraiment.",
      },
      {
        type: 'heading',
        text: "6. Accès à l'information",
      },
      {
        type: 'paragraph',
        text: "L'intégralité du savoir humain est (presque) accessible depuis ton téléphone. Une question ? Google. Une curiosité sur la physique quantique à 3h du matin ? Wikipedia. Une recette de cuisine dans une langue que tu ne parles pas ? Un outil de traduction en temps réel.",
      },
      {
        type: 'quote',
        text: "Pour la première fois dans l'histoire, ne pas savoir quelque chose est un choix — pas une fatalité.",
      },
      {
        type: 'heading',
        text: "Les inconvénients qu'on ignore trop souvent",
      },
      {
        type: 'heading',
        text: "1. Vie privée et sécurité",
      },
      {
        type: 'paragraph',
        text: "Chaque application collecte des données. Chaque clic est tracké. Les cyberattaques, le vol d'identité, la surveillance de masse — on a cédé une partie de notre vie privée en échange de services gratuits. Et beaucoup d'entre nous ne savent pas exactement ce qu'ils ont signé.",
      },
      {
        type: 'heading',
        text: "2. Isolement social",
      },
      {
        type: 'paragraph',
        text: "Paradoxe : on est plus connecté que jamais, et pourtant la solitude augmente. Les réseaux sociaux créent l'illusion du lien sans la profondeur. On scroll, on like, on commente — mais on parle de moins en moins vraiment.",
      },
      {
        type: 'heading',
        text: "3. Perte des compétences relationnelles",
      },
      {
        type: 'paragraph',
        text: "Quand on résout tout par message, on perd l'art de la conversation. Quand on évite les conflits par écran interposé, on perd la capacité à gérer le désaccord en face-à-face. Certaines générations grandissent sans jamais avoir vraiment appris à se regarder dans les yeux.",
      },
      {
        type: 'heading',
        text: "4. Santé mentale",
      },
      {
        type: 'paragraph',
        text: "Anxiété, dépression, FOMO, comparaison constante — les études le montrent depuis des années. L'usage intensif des réseaux sociaux, surtout chez les adolescents, est corrélé à une dégradation du bien-être mental. Les algorithmes sont conçus pour capter l'attention, pas pour nous rendre heureux.",
      },
      {
        type: 'heading',
        text: "5. Déchets électroniques",
      },
      {
        type: 'paragraph',
        text: "Le revers de l'innovation permanente : chaque nouveau modèle de téléphone génère une montagne de déchets. Les e-déchets sont la catégorie de déchets qui croît le plus vite dans le monde. Et leur traitement — souvent dans des pays pauvres — est toxique pour les populations locales.",
      },
      {
        type: 'heading',
        text: "6. Fracture numérique",
      },
      {
        type: 'paragraph',
        text: "La technologie n'est pas accessible à tous. Entre ceux qui ont un accès haut débit et les compétences pour l'utiliser, et ceux qui n'ont ni l'un ni l'autre, le fossé se creuse. Et dans un monde de plus en plus numérique, ne pas savoir utiliser un ordinateur, c'est être exclu de pans entiers de la société.",
      },
      {
        type: 'heading',
        text: "7. Destruction d'emplois",
      },
      {
        type: 'paragraph',
        text: "L'automatisation supprime des métiers entiers. Les caissiers, les comptables, les opérateurs de saisie... Et l'IA va accélérer cette tendance. On nous dit que de nouveaux métiers vont apparaître — et c'est vrai — mais pas nécessairement pour les mêmes personnes, dans les mêmes régions.",
      },
      {
        type: 'heading',
        text: "Comment trouver l'équilibre",
      },
      {
        type: 'list',
        items: [
          "Usage intentionnel : utilise la technologie pour ce qu'elle apporte vraiment, pas par réflexe. Avant d'ouvrir une app, demande-toi pourquoi.",
          "Développement éthique : soutiens les entreprises et projets qui pensent à l'impact de leur technologie avant de la déployer.",
          "Protection des données : prends le temps de lire (au moins en diagonale) les politiques de confidentialité. Utilise des outils respectueux de ta vie privée quand c'est possible.",
          "Équilibre numérique : des périodes sans écran, des conversations en vrai, des activités manuelles. Le cerveau humain a besoin d'autre chose que de stimulation digitale.",
          "Formation continue : apprends, reste curieux, adapte-toi — mais aide aussi ceux qui sont laissés pour compte à faire de même.",
        ],
      },
      {
        type: 'paragraph',
        text: "La technologie n'est ni bonne ni mauvaise en elle-même. C'est un outil. Et comme tout outil, ce qui compte c'est comment on l'utilise, pour quoi, et au bénéfice de qui.",
      },
      {
        type: 'quote',
        text: "La question n'est pas 'doit-on utiliser la technologie ?' mais 'comment l'utiliser sans se perdre — et sans perdre les autres ?'",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "Technology is everywhere. In your pocket, on your desk, in your kitchen, in your car. It has changed the way we communicate, work, learn, and receive medical care. But is all of this actually good?",
      },
      {
        type: 'paragraph',
        text: "That's not a naive question. It's the most important question of our era — and it deserves an honest answer, free from both technophobia and blind techno-optimism.",
      },
      {
        type: 'heading',
        text: "The Real Benefits",
      },
      {
        type: 'heading',
        text: "1. Improved Communication",
      },
      {
        type: 'paragraph',
        text: "Emails, instant messaging, video calls — all of this has made communication faster, cheaper, and accessible to everyone. A family spread across three continents can connect on a screen within seconds. A company can collaborate remotely without losing efficiency.",
      },
      {
        type: 'heading',
        text: "2. Economic Growth",
      },
      {
        type: 'paragraph',
        text: "Technology has opened entire new markets. E-commerce, freelance platforms, SaaS — thousands of new jobs have emerged. People in developing countries can now access the global economy from a simple smartphone.",
      },
      {
        type: 'heading',
        text: "3. Enhanced Education",
      },
      {
        type: 'paragraph',
        text: "YouTube, Coursera, Khan Academy. Free courses from the world's top universities, available 24/7. A child in a rural area can now access the same resources as a Harvard student — provided they have an internet connection.",
      },
      {
        type: 'heading',
        text: "4. Better Healthcare",
      },
      {
        type: 'paragraph',
        text: "Electronic medical records, robotic surgery, telemedicine, smartwatches that detect arrhythmia — technology saves lives every day. It enables faster diagnoses, more precise treatments, and more effective prevention.",
      },
      {
        type: 'heading',
        text: "5. Increased Productivity",
      },
      {
        type: 'paragraph',
        text: "What used to take a full day now takes an hour. Automation tools, spreadsheets, project management software — every repetitive task can be delegated to a machine. You can do more, create more, think about what truly matters.",
      },
      {
        type: 'heading',
        text: "6. Access to Information",
      },
      {
        type: 'paragraph',
        text: "Nearly all of human knowledge is accessible from your phone. A question? Google it. Curious about quantum physics at 3am? Wikipedia. A recipe in a language you don't speak? A real-time translation tool.",
      },
      {
        type: 'quote',
        text: "For the first time in history, not knowing something is a choice — not an inevitability.",
      },
      {
        type: 'heading',
        text: "The Disadvantages We Ignore Too Often",
      },
      {
        type: 'heading',
        text: "1. Privacy & Security",
      },
      {
        type: 'paragraph',
        text: "Every app collects data. Every click is tracked. Cyberattacks, identity theft, mass surveillance — we've given away part of our privacy in exchange for free services. And many of us don't know exactly what we signed up for.",
      },
      {
        type: 'heading',
        text: "2. Social Isolation",
      },
      {
        type: 'paragraph',
        text: "Paradox: we're more connected than ever, yet loneliness is on the rise. Social networks create the illusion of connection without depth. We scroll, we like, we comment — but we talk less and less meaningfully.",
      },
      {
        type: 'heading',
        text: "3. Decreased Face-to-Face Skills",
      },
      {
        type: 'paragraph',
        text: "When we resolve everything by text, we lose the art of conversation. When we avoid conflict through a screen, we lose the ability to handle disagreement face-to-face. Some generations are growing up without ever really learning to look someone in the eye.",
      },
      {
        type: 'heading',
        text: "4. Mental Health Issues",
      },
      {
        type: 'paragraph',
        text: "Anxiety, depression, FOMO, constant comparison — studies have been showing this for years. Heavy social media use, especially among teenagers, is correlated with declining mental well-being. Algorithms are designed to capture attention, not to make us happy.",
      },
      {
        type: 'heading',
        text: "5. E-Waste",
      },
      {
        type: 'paragraph',
        text: "The downside of constant innovation: every new phone model generates a mountain of waste. E-waste is the fastest-growing category of waste in the world. And its processing — often in developing countries — is toxic to local populations.",
      },
      {
        type: 'heading',
        text: "6. The Digital Divide",
      },
      {
        type: 'paragraph',
        text: "Technology isn't accessible to everyone. Between those who have high-speed internet and the skills to use it, and those who have neither, the gap is widening. And in an increasingly digital world, not being able to use a computer means being excluded from entire swaths of society.",
      },
      {
        type: 'heading',
        text: "7. Job Displacement",
      },
      {
        type: 'paragraph',
        text: "Automation is eliminating entire professions. Cashiers, accountants, data entry operators... And AI will accelerate this trend. We're told new jobs will emerge — and that's true — but not necessarily for the same people, in the same regions.",
      },
      {
        type: 'heading',
        text: "How to Find Balance",
      },
      {
        type: 'list',
        items: [
          "Mindful use: use technology for what it genuinely provides, not out of reflex. Before opening an app, ask yourself why.",
          "Ethical development: support companies and projects that think about the impact of their technology before deploying it.",
          "Data privacy: take the time to read (at least skim) privacy policies. Use privacy-respecting tools when possible.",
          "Digital balance: screen-free periods, real conversations, hands-on activities. The human brain needs more than digital stimulation.",
          "Continuous learning: stay curious, keep adapting — but also help those being left behind to do the same.",
        ],
      },
      {
        type: 'paragraph',
        text: "Technology is neither good nor bad in itself. It's a tool. And like any tool, what matters is how we use it, for what purpose, and for whose benefit.",
      },
      {
        type: 'quote',
        text: "The question isn't 'should we use technology?' but 'how do we use it without losing ourselves — and without losing others?'",
      },
    ],
  },
  {
    slug: 'vietnam-guide-voyage-complet',
    title: 'Vietnam : le guide de voyage complet par Tonton Francky',
    titleEn: 'Vietnam: The Complete Travel Guide by Tonton Francky',
    excerpt: "Géographie, climat, incontournables, cuisine, transports, budget — tout ce qu'il faut savoir avant de partir au Vietnam, vu depuis l'intérieur.",
    excerptEn: "Geography, climate, must-sees, food, transport, budget — everything you need to know before traveling to Vietnam, seen from the inside.",
    date: '2026-04-27',
    readTime: 12,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/vietnam-guide-complet.png',
    content: [
      {
        type: 'paragraph',
        text: "Je vis au Vietnam. Saigon, District 11. Depuis ici, j'ai traversé le pays de bout en bout — le Nord brumeux, le Centre royal, le Sud tropical. Ce guide est ce que j'aurais voulu lire avant d'arriver.",
      },
      {
        type: 'quote',
        text: "Le Vietnam ne se visite pas. Il se vit. Et pour le vivre vraiment, il faut comprendre comment il fonctionne.",
      },
      {
        type: 'heading',
        text: "Géographie et climat",
      },
      {
        type: 'paragraph',
        text: "Le Vietnam s'étire sur 1 650 km du nord au sud, coincé entre la Chine, le Laos, le Cambodge et la mer de Chine méridionale. Montagnes au nord, plaines côtières au centre, delta du Mékong au sud — chaque région a sa propre logique géographique et donc son propre climat.",
      },
      {
        type: 'heading',
        text: "Quand partir ?",
      },
      {
        type: 'list',
        items: [
          "Nord (Hanoï, Sapa) : printemps (février–avril) et automne (août–octobre) — températures douces, moins de pluie. Éviter l'hiver humide de décembre–janvier.",
          "Centre (Huê, Da Nang, Hoi An) : février à avril idéal. La saison des pluies arrive de septembre à décembre — des inondations sont possibles.",
          "Sud (Saigon, Mékong, Phu Quoc) : saison sèche de novembre à avril. De mai à octobre : pluies tropicales l'après-midi mais la vie continue.",
          "Règle générale : février à juin offre le meilleur compromis pour traverser tout le pays.",
        ],
      },
      {
        type: 'heading',
        text: "Les incontournables",
      },
      {
        type: 'heading',
        text: "Sites historiques",
      },
      {
        type: 'list',
        items: [
          "Tunnels de Cu Chi (près de Saigon) : réseau souterrain de la guerre du Vietnam. On peut ramper dans les tunnels, tirer avec des armes d'époque. Dérangeant et fascinant.",
          "Musée des Vestiges de la Guerre (Saigon) : le plus brutal des musées. Photos, artefacts, témoignages — l'impact de la guerre vu du côté vietnamien. Incontournable.",
          "Cité Impériale de Huê : ancienne capitale royale, classée UNESCO. Architecture impressionnante, mausolées des empereurs, cuisine royale.",
        ],
      },
      {
        type: 'heading',
        text: "Merveilles naturelles",
      },
      {
        type: 'list',
        items: [
          "Ha Long Bay : 2 000 îles de calcaire dans une mer émeraude. Croisière en jonque, kayak, grottes. Touristique mais impossible à ignorer.",
          "Ninh Binh : surnommée 'Ha Long Bay terrestre'. Rizières, montagnes karstiques, rivières. Bateau à travers Tam Coc, escalade jusqu'à la grotte de Hang Mua pour une vue à couper le souffle.",
          "Montagnes de Marbre (Da Nang) : cinq pics de calcaire avec grottes, tunnels et sanctuaires bouddhistes. Mixte nature-histoire.",
        ],
      },
      {
        type: 'heading',
        text: "Expériences culturelles",
      },
      {
        type: 'list',
        items: [
          "Vieux Quartier de Hanoï : architecture coloniale française, ruelles étroites, marchés, café à l'oeuf. Le pouls de la capitale.",
          "Hoi An : ville ancienne magiquement préservée. Bâtisses colorées, lanternes, artisanat, gastronomie. L'une des villes les plus photogéniques d'Asie.",
        ],
      },
      {
        type: 'heading',
        text: "Fêtes et festivals",
      },
      {
        type: 'paragraph',
        text: "Le Têt (Nouvel An lunaire, janvier–février) est l'événement de l'année. Retrouvailles familiales, feux d'artifice à minuit, marchés aux fleurs. La ville entière s'arrête — et repart de plus belle. D'autres festivals marquent l'année : Lim Festival dans le Nord (chants traditionnels en barque), Fête de mi-automne (pour les enfants), et des dizaines de célébrations régionales.",
      },
      {
        type: 'heading',
        text: "La cuisine vietnamienne",
      },
      {
        type: 'paragraph',
        text: "C'est probablement la meilleure cuisine de rue au monde. Et ce n'est pas moi qui le dis — c'est l'expérience de manger un phở à 6h du matin dans une ruelle de Hanoï pour 1,50€.",
      },
      {
        type: 'heading',
        text: "Par région",
      },
      {
        type: 'list',
        items: [
          "Nord : phở (soupe de nouilles de riz), bún thang, bánh cuốn (rouleaux de riz vapeur). Saveurs subtiles, équilibrées.",
          "Centre : cuisine plus relevée et épicée. Bánh khoai (galettes de Huê), porc fermenté de Thanh Hoa, bouillies d'anguille. La cuisine royale de Huê est une catégorie à part.",
          "Sud : influences du Mékong. Poisson grillé, noix de coco, légumes frais. Bún nước lèo, carpe de vase. Douceur et générosité.",
          "Street food : phở, bánh mì, bún bò Huê, cơm tấm — entre 1$ et 3$ le repas. Les vendeurs de rue se spécialisent souvent dans un seul plat, maîtrisé à la perfection.",
        ],
      },
      {
        type: 'quote',
        text: "Manger au Vietnam c'est faire confiance à un tabouret en plastique, une dame avec un wok, et l'odeur qui vient du trottoir.",
      },
      {
        type: 'heading',
        text: "Transports",
      },
      {
        type: 'list',
        items: [
          "Moto : le mode de transport roi. Louer une moto ou prendre un xe ôm (taxi moto). Toujours porter un casque. Toujours.",
          "Grab : le Uber local. Moto, voiture, même livraison de repas. Indispensable dans les grandes villes.",
          "Bus longue distance : le système Open Bus permet de voyager de ville en ville avec un seul ticket. Pratique et pas cher.",
          "Train : la ligne Réunification relie Hanoï à Saigon en 30h. Sleeper train, paysages magnifiques, expérience en soi.",
          "Avion intérieur : VietJet, Bamboo Airways, Vietnam Airlines. Souvent moins cher que le train sur les longues distances si réservé à l'avance.",
        ],
      },
      {
        type: 'heading',
        text: "Conseils pratiques",
      },
      {
        type: 'list',
        items: [
          "Budget : comptez 25–40€/jour en voyageur standard (hébergement, repas, transports). Moins en mode backpacker, plus en confort.",
          "Communication : téléchargez Grab et Google Maps hors ligne avant de partir. Gardez une carte de visite de votre hôtel avec l'adresse en vietnamien.",
          "Argent : les distributeurs sont partout. Évitez de porter trop de liquide dans les zones touristiques fréquentées.",
          "Sécurité routière : le trafic est chaotique. Traversez aux passages piétons, regardez des deux côtés plusieurs fois, et ne jamais courir.",
          "Respect culturel : couvrez-vous les épaules et les genoux dans les temples. Un sourire va loin.",
          "Environnement : refusez les plastiques à usage unique quand c'est possible. Le Vietnam commence à prendre conscience de l'impact du tourisme.",
        ],
      },
      {
        type: 'paragraph',
        text: "Le Vietnam récompense ceux qui prennent le temps de le comprendre. Pas besoin d'un budget énorme. Pas besoin d'un planning minute par minute. Juste une curiosité sincère et l'envie de manger sur un tabouret.",
      },
    ],
    contentEn: [
      {
        type: 'paragraph',
        text: "I live in Vietnam. Saigon, District 11. From here, I've crossed the country end to end — the misty North, the royal Center, the tropical South. This guide is what I wish I'd read before arriving.",
      },
      {
        type: 'quote',
        text: "Vietnam isn't visited. It's lived. And to truly live it, you need to understand how it works.",
      },
      {
        type: 'heading',
        text: "Geography and Climate",
      },
      {
        type: 'paragraph',
        text: "Vietnam stretches 1,650 km from north to south, wedged between China, Laos, Cambodia and the South China Sea. Mountains in the north, coastal plains in the center, Mekong Delta in the south — each region has its own geographical logic and therefore its own climate.",
      },
      {
        type: 'heading',
        text: "When to Go",
      },
      {
        type: 'list',
        items: [
          "North (Hanoi, Sapa): spring (Feb–Apr) and autumn (Aug–Oct) — mild temperatures, less rain. Avoid the cold, damp winter of Dec–Jan.",
          "Center (Hue, Da Nang, Hoi An): February to April is ideal. Rainy season runs September to December — flooding possible.",
          "South (Saigon, Mekong, Phu Quoc): dry season November to April. May to October: tropical afternoon showers but life goes on.",
          "General rule: February to June offers the best compromise for traveling the whole country.",
        ],
      },
      {
        type: 'heading',
        text: "Must-See Attractions",
      },
      {
        type: 'heading',
        text: "Historical Sites",
      },
      {
        type: 'list',
        items: [
          "Cu Chi Tunnels (near Saigon): underground network from the Vietnam War. You can crawl through tunnels and fire period weapons. Unsettling and fascinating.",
          "War Remnants Museum (Saigon): the most confronting museum here. Photos, artifacts, testimonies — the impact of war seen from the Vietnamese side. Essential.",
          "Hue Imperial City: former royal capital, UNESCO-listed. Impressive architecture, imperial mausoleums, royal cuisine.",
        ],
      },
      {
        type: 'heading',
        text: "Natural Wonders",
      },
      {
        type: 'list',
        items: [
          "Ha Long Bay: 2,000 limestone islands in an emerald sea. Junk cruise, kayaking, caves. Touristy but impossible to ignore.",
          "Ninh Binh: nicknamed 'Ha Long Bay on land'. Rice fields, karst mountains, rivers. Boat through Tam Coc, climb to Hang Mua Cave for a breathtaking view.",
          "Marble Mountains (Da Nang): five limestone peaks with caves, tunnels and Buddhist sanctuaries. Nature meets history.",
        ],
      },
      {
        type: 'heading',
        text: "Cultural Experiences",
      },
      {
        type: 'list',
        items: [
          "Hanoi Old Quarter: French colonial architecture, narrow streets, markets, egg coffee. The pulse of the capital.",
          "Hoi An: magically preserved ancient town. Colorful buildings, lanterns, crafts, gastronomy. One of Asia's most photogenic cities.",
        ],
      },
      {
        type: 'heading',
        text: "Festivals",
      },
      {
        type: 'paragraph',
        text: "Tet (Lunar New Year, Jan–Feb) is the event of the year. Family reunions, midnight fireworks, flower markets. The whole city stops — then restarts louder than before. Other festivals mark the year: Lim Festival in the North (traditional songs on dragon boats), Mid-Autumn Festival (for children), and dozens of regional celebrations.",
      },
      {
        type: 'heading',
        text: "Vietnamese Cuisine",
      },
      {
        type: 'paragraph',
        text: "It's probably the best street food in the world. Not just my opinion — it's the experience of eating a phở at 6am in a Hanoi alley for €1.50.",
      },
      {
        type: 'list',
        items: [
          "North: phở, bún thang, bánh cuốn (steamed rice rolls). Subtle, balanced flavors.",
          "Center: spicier, bolder cuisine. Bánh khoai (Hue pancakes), Thanh Hoa fermented pork, eel porridge. Hue's royal cuisine is a category of its own.",
          "South: Mekong influences. Grilled fish, coconut, fresh vegetables. Sweetness and generosity.",
          "Street food: phở, bánh mì, bún bò Huê, cơm tấm — $1 to $3 per meal. Street vendors often specialize in a single dish, perfected over decades.",
        ],
      },
      {
        type: 'quote',
        text: "Eating in Vietnam means trusting a plastic stool, a lady with a wok, and the smell coming from the sidewalk.",
      },
      {
        type: 'heading',
        text: "Getting Around",
      },
      {
        type: 'list',
        items: [
          "Motorbike: the king of transport. Rent one or take a xe ôm (motorbike taxi). Always wear a helmet. Always.",
          "Grab: the local Uber. Motorbike, car, even food delivery. Essential in big cities.",
          "Long-distance bus: the Open Bus system lets you travel city-to-city on a single ticket. Practical and cheap.",
          "Train: the Reunification Line connects Hanoi to Saigon in 30h. Sleeper train, stunning landscapes, an experience in itself.",
          "Domestic flights: VietJet, Bamboo Airways, Vietnam Airlines. Often cheaper than the train on long distances if booked in advance.",
        ],
      },
      {
        type: 'heading',
        text: "Practical Tips",
      },
      {
        type: 'list',
        items: [
          "Budget: count €25–40/day as a standard traveler (accommodation, meals, transport). Less in backpacker mode, more for comfort.",
          "Communication: download Grab and Google Maps offline before you go. Keep a business card from your hotel with the address in Vietnamese.",
          "Money: ATMs are everywhere. Avoid carrying too much cash in busy tourist areas.",
          "Road safety: traffic is chaotic. Cross at pedestrian crossings, look both ways several times, never run.",
          "Cultural respect: cover shoulders and knees in temples. A smile goes a long way.",
          "Environment: refuse single-use plastics when possible. Vietnam is starting to take the impact of tourism seriously.",
        ],
      },
      {
        type: 'paragraph',
        text: "Vietnam rewards those who take the time to understand it. No need for a huge budget. No need for a minute-by-minute itinerary. Just genuine curiosity and a willingness to eat on a plastic stool.",
      },
    ],
  },
  {
    slug: 'intent-based-development-ai-eating-software',
    title: "Intent-Based Development : quand l'IA dévore le code",
    titleEn: 'Intent-Based Development: When AI Eats Software',
    excerpt: "On ne code plus comment. On exprime ce qu'on veut. Bienvenue dans l'ère du développement piloté par l'intention.",
    excerptEn: "We don't code how anymore. We state what we want. Welcome to intent-driven development.",
    date: '2026-04-27',
    readTime: 6,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/blog/intent-based-development.png',
    content: [
      { type: 'paragraph', text: "Marc Andreessen disait en 2011 : 'Software is eating the world'. Quinze ans plus tard, l'IA mange le software. Et la façon dont on construit du code est en train de changer radicalement." },
      { type: 'heading', text: "Trois ères de l'UX" },
      { type: 'list', items: [
        "1960–1995 — Business Computing : tableurs, traitement de texte. Objectif : productivité.",
        "1995–2025 — Internet : engagement, scroll infini, dark patterns. Objectif : capter l'attention.",
        "2026+ — IA : augmenter l'humain. Objectif : libérer le cerveau pour ce qui compte vraiment.",
      ]},
      { type: 'heading', text: "Qu'est-ce que l'Intent-Based Development ?" },
      { type: 'paragraph', text: "Au lieu d'écrire le code, on exprime l'intention. Le 'quoi' et le 'pourquoi' avant le 'comment'. L'IA traduit ensuite l'intention en code exécutable." },
      { type: 'list', items: [
        "Intent fonctionnel : ce que le système doit faire (features, sécurité, design).",
        "Intent opérationnel : comment il doit se comporter (SLAs, performance, monitoring).",
        "Intent de raffinement : comment il doit évoluer dans le temps.",
      ]},
      { type: 'heading', text: "Les défis réels" },
      { type: 'list', items: [
        "Ambiguïté : selon Stanford, une spec d'expert contient 7,3 éléments ambigus pour 1 000 mots.",
        "Hallucinations : 12 à 18% sur des specs complexes (MIT CSAIL, 2024).",
        "Performance : le code généré par IA est 15 à 20% plus lent que celui d'experts (Google Research).",
        "Résistance culturelle : 67% des initiatives intent-engineering rencontrent une résistance interne (Prosci).",
      ]},
      { type: 'heading', text: "Le nouveau métier : Intent Engineer" },
      { type: 'paragraph', text: "LinkedIn classe ce rôle comme le métier qui croît le plus vite : +340% en un an. Comprendre le business, formuler des intentions précises, valider les sorties IA. Une compétence hybride entre product, dev et IA." },
      { type: 'quote', text: "Le code n'est plus l'artefact final. L'intention l'est." },
      { type: 'paragraph', text: "L'avenir n'est pas 'l'IA va remplacer les devs'. C'est 'les devs qui maîtrisent l'intention vont remplacer ceux qui ne maîtrisent que la syntaxe'." },
    ],
    contentEn: [
      { type: 'paragraph', text: "Marc Andreessen said in 2011: 'Software is eating the world.' Fifteen years later, AI is eating software. And the way we build code is changing radically." },
      { type: 'heading', text: "Three eras of UX" },
      { type: 'list', items: [
        "1960–1995 — Business Computing: spreadsheets, word processing. Goal: productivity.",
        "1995–2025 — Internet: engagement, infinite scroll, dark patterns. Goal: capture attention.",
        "2026+ — AI: augment humans. Goal: free the brain for what truly matters.",
      ]},
      { type: 'heading', text: "What is Intent-Based Development?" },
      { type: 'paragraph', text: "Instead of writing code, you express intent. The 'what' and 'why' before the 'how'. AI then translates intent into executable code." },
      { type: 'list', items: [
        "Functional intent: what the system should do (features, security, design).",
        "Operational intent: how it should behave (SLAs, performance, monitoring).",
        "Refinement intent: how it should evolve over time.",
      ]},
      { type: 'heading', text: "The real challenges" },
      { type: 'list', items: [
        "Ambiguity: per Stanford, expert specs contain 7.3 ambiguous elements per 1,000 words.",
        "Hallucinations: 12–18% on complex specs (MIT CSAIL, 2024).",
        "Performance: AI-generated code is 15–20% slower than expert code (Google Research).",
        "Cultural resistance: 67% of intent-engineering initiatives meet internal pushback (Prosci).",
      ]},
      { type: 'heading', text: "The new role: Intent Engineer" },
      { type: 'paragraph', text: "LinkedIn ranks this role as the fastest-growing job: +340% year over year. Understand the business, formulate precise intent, validate AI output. A hybrid skill between product, dev and AI." },
      { type: 'quote', text: "Code is no longer the final artifact. Intent is." },
      { type: 'paragraph', text: "The future isn't 'AI will replace devs.' It's 'devs who master intent will replace those who only master syntax.'" },
    ],
  },
  {
    slug: 'software-development-programming-guide',
    title: 'Développement logiciel et programmation : le guide complet',
    titleEn: 'Software Development and Programming: The Complete Guide',
    excerpt: "Du Waterfall au DevOps, du C aux IA génératives — comprendre l'évolution du développement logiciel pour mieux le pratiquer aujourd'hui.",
    excerptEn: "From Waterfall to DevOps, from C to generative AI — understanding the evolution of software development to practice it better today.",
    date: '2026-04-27',
    readTime: 7,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/blog/software-development.png',
    content: [
      { type: 'paragraph', text: "Le développement logiciel a évolué plus vite que n'importe quelle autre discipline ces 60 dernières années. Comprendre cette évolution, c'est comprendre comment on en est arrivé là — et anticiper où ça va." },
      { type: 'heading', text: "Une histoire en quatre temps" },
      { type: 'list', items: [
        "Origines : code partagé entre chercheurs, expérimentation libre — l'ADN de l'open source.",
        "Waterfall (mid-XXe) : phases linéaires, planification rigide. Bon pour des projets prévisibles, étouffant pour le reste.",
        "Agile (fin 1990s) : Scrum, Kanban. Itératif, collaboratif, orienté feedback client.",
        "DevOps + IA (aujourd'hui) : CI/CD, low-code, IA génératives intégrées au cycle de dev.",
      ]},
      { type: 'heading', text: "Le SDLC en 7 phases" },
      { type: 'list', items: [
        "1. Planification & faisabilité",
        "2. Spécification des besoins (SRS)",
        "3. Design système (HLD + LLD)",
        "4. Développement (coding, code reviews, tests unitaires)",
        "5. Tests (intégration, performance, sécurité)",
        "6. Déploiement (production, formation utilisateurs)",
        "7. Maintenance (correctifs, évolutions)",
      ]},
      { type: 'heading', text: "Les modèles SDLC" },
      { type: 'list', items: [
        "Waterfall : séquentiel, rigide. OK si les besoins sont 100% clairs au départ.",
        "V-Model : Waterfall + validation à chaque étape. Petits projets, exigences claires.",
        "Agile : itératif, flexible. Pour environnements changeants.",
        "DevOps : intégration dev + ops, déploiement continu. Pour produits dynamiques en évolution rapide.",
      ]},
      { type: 'heading', text: "Langages les plus demandés en 2024" },
      { type: 'list', items: [
        "Python — 42,1% (data science, ML, scripts)",
        "JavaScript — 41,6% (web, full-stack)",
        "Java — 39,1% (enterprise, Android)",
      ]},
      { type: 'heading', text: "Les outils essentiels" },
      { type: 'list', items: [
        "Version control : Git (incontournable)",
        "CI/CD : GitHub Actions, GitLab CI, Jenkins",
        "Tests : Jest, Pytest, Cypress",
        "Observabilité : Datadog, Grafana, Dynatrace",
        "Sécurité : Snyk, code reviews automatisés, pen tests",
      ]},
      { type: 'heading', text: "Ce qui change en 2026" },
      { type: 'list', items: [
        "Low-code / no-code : démocratisation, prototypage rapide.",
        "IA générative : Copilot, Claude Code et consorts. Productivité +30 à 40%.",
        "DevSecOps : la sécurité intégrée dès le début du cycle.",
        "Open source : moteur d'innovation et de carrière.",
      ]},
      { type: 'quote', text: "Le développement logiciel n'est pas une science exacte — c'est un artisanat qui évolue. Ceux qui restent figés dans leurs méthodes deviennent obsolètes." },
    ],
    contentEn: [
      { type: 'paragraph', text: "Software development has evolved faster than any other discipline in the last 60 years. Understanding that evolution means understanding how we got here — and anticipating where it's going." },
      { type: 'heading', text: "A four-act history" },
      { type: 'list', items: [
        "Origins: code shared between researchers, free experimentation — the DNA of open source.",
        "Waterfall (mid-20th c.): linear phases, rigid planning. Great for predictable projects, suffocating for the rest.",
        "Agile (late 1990s): Scrum, Kanban. Iterative, collaborative, customer-feedback driven.",
        "DevOps + AI (today): CI/CD, low-code, generative AI woven into the dev cycle.",
      ]},
      { type: 'heading', text: "The 7-phase SDLC" },
      { type: 'list', items: [
        "1. Planning & feasibility",
        "2. Requirements specification (SRS)",
        "3. System design (HLD + LLD)",
        "4. Development (coding, reviews, unit tests)",
        "5. Testing (integration, performance, security)",
        "6. Deployment (production, user training)",
        "7. Maintenance (fixes, evolutions)",
      ]},
      { type: 'heading', text: "SDLC models" },
      { type: 'list', items: [
        "Waterfall: sequential, rigid. OK if requirements are 100% clear upfront.",
        "V-Model: Waterfall + validation at every stage. Small projects, clear specs.",
        "Agile: iterative, flexible. For changing environments.",
        "DevOps: dev + ops integrated, continuous deployment. For fast-evolving products.",
      ]},
      { type: 'heading', text: "Most-demanded languages in 2024" },
      { type: 'list', items: [
        "Python — 42.1% (data science, ML, scripting)",
        "JavaScript — 41.6% (web, full-stack)",
        "Java — 39.1% (enterprise, Android)",
      ]},
      { type: 'heading', text: "Essential tools" },
      { type: 'list', items: [
        "Version control: Git (non-negotiable)",
        "CI/CD: GitHub Actions, GitLab CI, Jenkins",
        "Testing: Jest, Pytest, Cypress",
        "Observability: Datadog, Grafana, Dynatrace",
        "Security: Snyk, automated code reviews, pen tests",
      ]},
      { type: 'heading', text: "What's changing in 2026" },
      { type: 'list', items: [
        "Low-code / no-code: democratization, fast prototyping.",
        "Generative AI: Copilot, Claude Code & co. Productivity +30 to 40%.",
        "DevSecOps: security baked in from the start.",
        "Open source: engine of innovation and careers.",
      ]},
      { type: 'quote', text: "Software development isn't an exact science — it's a craft that evolves. Those who freeze in their methods become obsolete." },
    ],
  },
  {
    slug: 'rise-ai-agent-workforce',
    title: "L'arrivée de la main-d'œuvre IA : agents au travail",
    titleEn: 'The Rise of the AI Agent Workforce',
    excerpt: "Les agents IA ne sont plus des chatbots. Ils analysent, décident, exécutent. Et ils sont en train de redessiner le marché du travail.",
    excerptEn: "AI agents are no longer chatbots. They analyze, decide, execute. And they're redrawing the labor market.",
    date: '2026-04-27',
    readTime: 6,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/blog/ai-agent-workforce.png',
    content: [
      { type: 'paragraph', text: "Un agent IA, c'est différent d'un chatbot. Le chatbot répond. L'agent agit. Il prend une décision, exécute une action, observe le résultat, et recommence. Il a sa propre boucle de raisonnement." },
      { type: 'heading', text: "Les chiffres qui font réfléchir" },
      { type: 'list', items: [
        "Adoption en entreprise : 1% en 2024 → 33% prévus en 2028 (Gartner).",
        "Productivité : +1,8% par an aux États-Unis sur la prochaine décennie.",
        "Marché de l'IA : 150,2 Mds$ en 2023 → 1 345,2 Mds$ en 2030.",
        "75 millions d'emplois disparaissent d'ici 2025, mais 133 millions en sont créés.",
      ]},
      { type: 'heading', text: "Qui les utilise déjà ?" },
      { type: 'list', items: [
        "Santé : Insilico Medicine, DeepMind Health pour la détection précoce de maladies.",
        "Juridique : analyse de jurisprudence en quelques secondes au lieu de plusieurs heures.",
        "Marketing : un agent remplace 6 analystes pour optimiser une campagne globale.",
        "Finance : détection de fraude, gestion de portefeuille, onboarding clients.",
        "E-commerce : pricing dynamique, support 24/7, gestion logistique.",
      ]},
      { type: 'heading', text: "Les vrais problèmes" },
      { type: 'list', items: [
        "Biais : si les données d'entraînement sont biaisées, les décisions le sont aussi.",
        "Black box : 'pourquoi l'IA a-t-elle décidé ça ?' → souvent personne ne sait répondre.",
        "Perte d'emplois : 2,5% des emplois US menacés à court terme.",
        "Inégalités : ceux qui maîtrisent l'IA gagnent plus, les autres décrochent.",
      ]},
      { type: 'heading', text: "Ce que ça change pour vous" },
      { type: 'paragraph', text: "Les métiers ne disparaissent pas tous — ils se transforment. Le travail répétitif est délégué. Le travail créatif, stratégique, relationnel reste humain. Mais le delta entre 'humain qui sait collaborer avec une IA' et 'humain qui ne sait pas' devient un fossé." },
      { type: 'quote', text: "L'IA ne remplacera pas les humains. Mais les humains qui utilisent l'IA remplaceront ceux qui ne l'utilisent pas." },
    ],
    contentEn: [
      { type: 'paragraph', text: "An AI agent isn't a chatbot. The chatbot answers. The agent acts. It decides, executes, observes the result, and loops. It has its own reasoning cycle." },
      { type: 'heading', text: "Numbers that make you think" },
      { type: 'list', items: [
        "Enterprise adoption: 1% in 2024 → 33% projected by 2028 (Gartner).",
        "Productivity: +1.8% annually in the US over the next decade.",
        "AI market: $150.2B in 2023 → $1,345.2B by 2030.",
        "75M jobs disappear by 2025, but 133M new ones are created.",
      ]},
      { type: 'heading', text: "Who's using them already?" },
      { type: 'list', items: [
        "Healthcare: Insilico Medicine, DeepMind Health for early disease detection.",
        "Legal: case-law analysis in seconds instead of hours.",
        "Marketing: one agent replaces 6 analysts for global campaign optimization.",
        "Finance: fraud detection, portfolio management, client onboarding.",
        "E-commerce: dynamic pricing, 24/7 support, logistics management.",
      ]},
      { type: 'heading', text: "The real problems" },
      { type: 'list', items: [
        "Bias: biased training data → biased decisions.",
        "Black box: 'why did the AI decide that?' → often nobody knows.",
        "Job loss: 2.5% of US jobs threatened short-term.",
        "Inequality: AI-fluent people earn more, others fall behind.",
      ]},
      { type: 'heading', text: "What it means for you" },
      { type: 'paragraph', text: "Jobs aren't all disappearing — they're transforming. Repetitive work gets delegated. Creative, strategic, relational work stays human. But the gap between 'human who collaborates with AI' and 'human who doesn't' becomes a chasm." },
      { type: 'quote', text: "AI won't replace humans. But humans who use AI will replace those who don't." },
    ],
  },
  {
    slug: 'tech-impact-on-earth',
    title: "L'impact de la tech sur la planète : la double face",
    titleEn: 'Tech Impact on Earth: The Double-Edged Sword',
    excerpt: "La technologie sauve la planète. La technologie détruit la planète. Les deux sont vrais. Voici comment naviguer le paradoxe.",
    excerptEn: "Technology saves the planet. Technology destroys the planet. Both are true. Here's how to navigate the paradox.",
    date: '2026-04-27',
    readTime: 6,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/blog/tech-impact-earth.png',
    content: [
      { type: 'paragraph', text: "Depuis la Révolution industrielle, la tech a amélioré nos vies — et dégradé la planète. Aujourd'hui, on en est au point où la même technologie peut faire les deux en parallèle." },
      { type: 'heading', text: "Ce que la tech fait de bien" },
      { type: 'list', items: [
        "Énergies renouvelables : prix du solaire ÷10 en 10 ans. Émissions de CO₂ en baisse là où c'est déployé.",
        "Gestion des déchets : l'IA optimise le tri, accélère le recyclage, alimente l'économie circulaire.",
        "Santé publique : véhicules électriques, ventes +35% en 2023, qualité de l'air en hausse en ville.",
        "Agriculture : précision agricole, réduction des pesticides, écosystèmes plus sains.",
        "Réseaux : stockage batterie, microgrids, électrification de zones rurales jusque-là isolées.",
      ]},
      { type: 'heading', text: "Ce que la tech fait de mal" },
      { type: 'list', items: [
        "Carbone numérique : 2 à 3% des émissions mondiales. Plus que l'aviation civile.",
        "E-déchets : la catégorie de déchets qui croît le plus vite au monde.",
        "Pollution chimique : recyclage souvent fait dans des pays pauvres, dans des conditions toxiques.",
        "Inégalités : pays riches profitent de la tech ; pays pauvres en subissent les externalités.",
        "Énergie de l'IA : entre 8 et 21% de l'énergie mondiale d'ici 2030 selon les projections.",
      ]},
      { type: 'heading', text: "Le piège de la 'rush vers les solutions'" },
      { type: 'paragraph', text: "On déploie des technologies sans évaluer leurs conséquences à long terme. Voitures autonomes, IA générative, blockchain — toutes ont consommé de l'énergie et des ressources avant qu'on se demande si c'était soutenable." },
      { type: 'heading', text: "Ce qu'on peut faire" },
      { type: 'list', items: [
        "Privilégier les services tech qui publient leur empreinte carbone.",
        "Allonger la vie de ses appareils (réparer plutôt que remplacer).",
        "Choisir des hébergements verts pour ses sites et apps.",
        "Soutenir les entreprises qui investissent dans le recyclage.",
        "Accepter qu'une tech 'innovante' n'est pas toujours nécessaire.",
      ]},
      { type: 'quote', text: "La technologie n'est ni écologique ni anti-écologique. C'est l'usage qu'on en fait qui décide." },
    ],
    contentEn: [
      { type: 'paragraph', text: "Since the Industrial Revolution, tech has improved our lives — and degraded the planet. Today we've reached the point where the same technology can do both at once." },
      { type: 'heading', text: "What tech does right" },
      { type: 'list', items: [
        "Renewable energy: solar price ÷10 in 10 years. CO₂ emissions falling where deployed.",
        "Waste management: AI optimizes sorting, speeds up recycling, fuels the circular economy.",
        "Public health: EVs, sales +35% in 2023, urban air quality improving.",
        "Agriculture: precision farming, reduced pesticides, healthier ecosystems.",
        "Grids: battery storage, microgrids, electrification of previously isolated rural areas.",
      ]},
      { type: 'heading', text: "What tech does wrong" },
      { type: 'list', items: [
        "Digital carbon: 2–3% of global emissions. More than civil aviation.",
        "E-waste: the fastest-growing waste category in the world.",
        "Chemical pollution: recycling often done in poor countries under toxic conditions.",
        "Inequality: rich countries reap tech benefits; poor countries absorb the externalities.",
        "AI energy: between 8% and 21% of global energy by 2030 in some projections.",
      ]},
      { type: 'heading', text: "The 'rush for solutions' trap" },
      { type: 'paragraph', text: "We deploy technologies without assessing long-term consequences. Self-driving cars, generative AI, blockchain — all consumed energy and resources before we asked whether they were sustainable." },
      { type: 'heading', text: "What we can do" },
      { type: 'list', items: [
        "Prefer tech services that publish their carbon footprint.",
        "Extend device lifespans (repair rather than replace).",
        "Choose green hosting for sites and apps.",
        "Support companies investing in recycling.",
        "Accept that 'innovative' tech isn't always necessary.",
      ]},
      { type: 'quote', text: "Technology is neither green nor anti-green. How we use it decides." },
    ],
  },
  {
    slug: 'tech-industry-revolution',
    title: "Révolution de l'industrie tech : du transistor à l'IA",
    titleEn: 'The Tech Industry Revolution: From Transistor to AI',
    excerpt: "Soixante-dix ans d'histoire en cinq actes. Comment quelques inventions ont créé l'économie qui nous gouverne aujourd'hui.",
    excerptEn: "Seventy years of history in five acts. How a handful of inventions created the economy that runs us today.",
    date: '2026-04-27',
    readTime: 7,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/blog/tech-industry-revolution.png',
    content: [
      { type: 'paragraph', text: "Tu utilises un smartphone. Dedans : des milliards de transistors, gravés à l'échelle nanométrique, exécutant des milliards d'instructions par seconde. Tout ça est né d'une invention faite chez Bell Labs il y a 80 ans." },
      { type: 'heading', text: "Les cinq phases" },
      { type: 'list', items: [
        "1947 : invention du transistor par Shockley, Bardeen et Brattain. Bascule du tube à vide vers le silicium.",
        "1960s : circuits intégrés. Plusieurs transistors sur une même puce. Miniaturisation explosive.",
        "1980s : ordinateur personnel. Apple, IBM, Microsoft. La tech entre dans les foyers.",
        "1990s–2000s : Internet. Google, Amazon, Facebook. La tech connecte tout le monde.",
        "2020s+ : IA générative + quantum computing. La tech commence à penser et calculer autrement.",
      ]},
      { type: 'heading', text: "Les technologies qui dominent en 2026" },
      { type: 'list', items: [
        "IoT : capteurs partout, des smart cities aux usines.",
        "IA / ML : prédiction, génération, automatisation.",
        "Blockchain & Web3 : décentralisation, traçabilité, identité numérique.",
        "RPA / Intelligent Automation : automatiser les tâches répétitives.",
        "Quantum computing : encore en germination, mais déjà utilisé pour chiffrement et drug discovery.",
      ]},
      { type: 'heading', text: "Les acteurs qui pèsent" },
      { type: 'list', items: [
        "Géants : Apple, Google, Microsoft. Standards de fait, écosystèmes verrouillés.",
        "Disrupteurs : startups qui ré-imaginent des secteurs entiers (Tenna, ICON, Workrise).",
        "État : ARPANET → Internet. La défense US a financé la moitié des innovations clés.",
      ]},
      { type: 'heading', text: "Ce que ça nous coûte vraiment" },
      { type: 'list', items: [
        "Vie privée : caméras, capteurs, profiling génétique. Les lois courent derrière l'innovation.",
        "Inégalités : ceux qui ont les compétences gagnent ; les autres reculent.",
        "Polarisation des emplois : très qualifiés montent, moyennement qualifiés disparaissent.",
        "Cultures : adaptation forcée, identités locales sous pression.",
      ]},
      { type: 'quote', text: "Une révolution n'est pas neutre. Elle a des gagnants et des perdants. Le rôle de la société est de décider qui sont les uns et les autres." },
    ],
    contentEn: [
      { type: 'paragraph', text: "You're using a smartphone. Inside: billions of transistors, etched at nanometer scale, running billions of instructions per second. All of it born from an invention made at Bell Labs 80 years ago." },
      { type: 'heading', text: "The five phases" },
      { type: 'list', items: [
        "1947: transistor invented by Shockley, Bardeen and Brattain. Vacuum tube → silicon.",
        "1960s: integrated circuits. Multiple transistors on one chip. Explosive miniaturization.",
        "1980s: personal computer. Apple, IBM, Microsoft. Tech enters homes.",
        "1990s–2000s: Internet. Google, Amazon, Facebook. Tech connects everyone.",
        "2020s+: generative AI + quantum computing. Tech begins to think and compute differently.",
      ]},
      { type: 'heading', text: "Technologies dominating in 2026" },
      { type: 'list', items: [
        "IoT: sensors everywhere, from smart cities to factories.",
        "AI / ML: prediction, generation, automation.",
        "Blockchain & Web3: decentralization, traceability, digital identity.",
        "RPA / Intelligent Automation: automating repetitive tasks.",
        "Quantum computing: still seedling, but already used for cryptography and drug discovery.",
      ]},
      { type: 'heading', text: "The players that matter" },
      { type: 'list', items: [
        "Giants: Apple, Google, Microsoft. De facto standards, locked ecosystems.",
        "Disruptors: startups reimagining entire sectors (Tenna, ICON, Workrise).",
        "Government: ARPANET → Internet. US defense funded half the key innovations.",
      ]},
      { type: 'heading', text: "What it really costs us" },
      { type: 'list', items: [
        "Privacy: cameras, sensors, genetic profiling. Laws lag behind innovation.",
        "Inequality: skilled people win; others fall back.",
        "Job polarization: high-skill rises, mid-skill vanishes.",
        "Cultures: forced adaptation, local identities under pressure.",
      ]},
      { type: 'quote', text: "A revolution isn't neutral. It has winners and losers. Society's role is to decide who's which." },
    ],
  },
  {
    slug: 'future-technology',
    title: "Les technologies du futur : qu'est-ce qui nous attend ?",
    titleEn: 'Future Technology: What Awaits Us?',
    excerpt: "Biotech, IA, nouveaux matériaux, espace : un panorama sans hype des technologies qui vont vraiment compter d'ici 2040.",
    excerptEn: "Biotech, AI, new materials, space: a hype-free overview of the technologies that will actually matter by 2040.",
    date: '2026-04-27',
    readTime: 7,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/blog/future-technology.png',
    content: [
      { type: 'paragraph', text: "Tout le monde fait des prédictions. Peu se vérifient. Mais certaines tendances de fond sont solides — pas parce que des gourous l'ont dit, mais parce que les milliards d'investissement, les brevets et les talents convergent dans la même direction." },
      { type: 'heading', text: "Quatre catégories à surveiller" },
      { type: 'heading', text: "1. Biotechnologie" },
      { type: 'paragraph', text: "Pourrait représenter 20% de l'économie mondiale d'ici 2040. Modification génétique, médecine personnalisée, agriculture cellulaire. Soulève des questions éthiques majeures (OGM, eugénisme, biologie synthétique)." },
      { type: 'heading', text: "2. Intelligence artificielle" },
      { type: 'paragraph', text: "De l'IA étroite (tâches spécifiques) vers l'AGI (intelligence générale). Sant é personnalisée, éducation sur mesure, transports autonomes. Mais aussi armement, gouvernance algorithmique, asymétries géopolitiques." },
      { type: 'heading', text: "3. Matériaux & fabrication" },
      { type: 'paragraph', text: "Impression 3D, métamatériaux, matériaux 2D. Aérospatial, électronique, médical. Des objets plus légers, plus solides, plus durables." },
      { type: 'heading', text: "4. Espace" },
      { type: 'paragraph', text: "Acteurs publics + privés. Constellations de satellites, services orbitaux, fabrication en gravité zéro. Compétition US-Chine accélère tout." },
      { type: 'heading', text: "L'effet 'convergence'" },
      { type: 'paragraph', text: "C'est l'intersection de ces domaines qui produira les vraies ruptures : biotech + IA = médecine prédictive. Quantum + cryptographie = nouveau modèle de sécurité. Telecom + AI = villes vraiment intelligentes." },
      { type: 'heading', text: "Les défis qu'on sous-estime" },
      { type: 'list', items: [
        "Disruption économique : 800 millions d'emplois potentiellement remplacés d'ici 2030 selon l'OIT.",
        "Vie privée : les données personnelles deviennent la monnaie de tous les services.",
        "Inégalités : ceux qui ont accès accélèrent, les autres décrochent.",
        "Géopolitique : la suprématie technologique devient suprématie tout court.",
      ]},
      { type: 'quote', text: "Le futur n'arrive pas tout d'un coup. Il s'installe par couches successives. Ceux qui regardent les couches plutôt que les annonces ne sont jamais surpris." },
    ],
    contentEn: [
      { type: 'paragraph', text: "Everyone makes predictions. Few come true. But some underlying trends are solid — not because gurus said so, but because billions in investment, patents and talent converge on the same direction." },
      { type: 'heading', text: "Four categories to watch" },
      { type: 'heading', text: "1. Biotechnology" },
      { type: 'paragraph', text: "Could be 20% of global economy by 2040. Genetic editing, personalized medicine, cellular agriculture. Raises major ethical questions (GMOs, eugenics, synthetic biology)." },
      { type: 'heading', text: "2. Artificial Intelligence" },
      { type: 'paragraph', text: "From narrow AI (specific tasks) toward AGI (general intelligence). Personalized health, custom education, autonomous transport. But also weaponry, algorithmic governance, geopolitical asymmetries." },
      { type: 'heading', text: "3. Materials & Manufacturing" },
      { type: 'paragraph', text: "3D printing, metamaterials, 2D materials. Aerospace, electronics, medical. Lighter, stronger, more durable objects." },
      { type: 'heading', text: "4. Space" },
      { type: 'paragraph', text: "Public + private actors. Satellite constellations, orbital services, zero-G manufacturing. US-China competition accelerates everything." },
      { type: 'heading', text: "The 'convergence' effect" },
      { type: 'paragraph', text: "The real breakthroughs come at the intersections: biotech + AI = predictive medicine. Quantum + cryptography = new security model. Telecom + AI = truly smart cities." },
      { type: 'heading', text: "Underestimated challenges" },
      { type: 'list', items: [
        "Economic disruption: 800M jobs potentially replaced by 2030 per ILO.",
        "Privacy: personal data becomes the currency of every service.",
        "Inequality: those with access accelerate, others fall behind.",
        "Geopolitics: tech supremacy becomes supremacy, full stop.",
      ]},
      { type: 'quote', text: "The future doesn't arrive all at once. It settles in layers. Those who watch the layers, not the announcements, are never surprised." },
    ],
  },
  {
    slug: 'ai-technology-guide',
    title: "L'IA en 2026 : guide complet d'une technologie qui change tout",
    titleEn: 'AI in 2026: A Complete Guide to a Technology Changing Everything',
    excerpt: "Narrow AI, AGI, machine learning, generative AI : comprendre les types, les usages, les limites — et les vrais débats.",
    excerptEn: "Narrow AI, AGI, machine learning, generative AI: understanding the types, uses, limits — and the real debates.",
    date: '2026-04-27',
    readTime: 7,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/blog/ai-technology-guide.png',
    content: [
      { type: 'paragraph', text: "L'IA est partout dans les conversations, et nulle part dans les définitions claires. Voici un guide qui démêle ce qu'on appelle 'IA' — et ce qu'on devrait vraiment appeler comme ça." },
      { type: 'heading', text: "Les types d'IA" },
      { type: 'list', items: [
        "Narrow AI : conçue pour une tâche précise. C'est 99% de l'IA actuelle (recommandations, reconnaissance d'image, traduction).",
        "AGI (Artificial General Intelligence) : capable de raisonner sur n'importe quel sujet comme un humain. Théorique pour l'instant.",
        "Machine Learning : algorithmes qui apprennent à partir de données.",
        "Deep Learning : ML avec des réseaux de neurones profonds (vision, langage, audio).",
        "Expert Systems : règles structurées pour mimer un spécialiste (vieille école, mais encore utile).",
        "Generative AI : crée du nouveau contenu (texte, image, son, code) à partir d'apprentissage.",
      ]},
      { type: 'heading', text: "Les composants clés" },
      { type: 'list', items: [
        "Apprentissage supervisé : on donne des exemples étiquetés.",
        "Apprentissage non supervisé : l'IA trouve des patterns toute seule.",
        "Apprentissage par renforcement : récompense / punition pour optimiser.",
        "Données : qualité > quantité. Une IA mal nourrie produit du n'importe quoi.",
        "Algorithmes & frameworks : du modèle linéaire simple aux transformers géants.",
      ]},
      { type: 'heading', text: "Là où l'IA fait vraiment la différence" },
      { type: 'list', items: [
        "Santé : médecine personnalisée (Tempus), santé mentale (Spring Health), wearables proactifs.",
        "Service client : chatbots GPT-based, support 24/7, satisfaction en hausse.",
        "Création : MidJourney, Wonder Dynamics, Adobe Firefly. Le métier de créatif est redéfini.",
        "Mobilité : véhicules autonomes, optimisation du trafic, sécurité routière.",
        "Énergie : optimisation des réseaux, prévisions de production solaire/éolienne.",
      ]},
      { type: 'heading', text: "Les limites qu'on minimise" },
      { type: 'list', items: [
        "Biais : 'garbage in, garbage out'. Un biais dans les données = biais dans les décisions.",
        "Black box : on ne sait pas toujours pourquoi l'IA décide ce qu'elle décide. Problème en santé, justice, sécurité.",
        "Confidentialité : entraîner une IA, c'est consommer des données personnelles. RGPD, anonymisation, etc.",
        "Job displacement : automation = transition difficile pour beaucoup de métiers.",
        "Armement autonome : qui est responsable quand un drone IA tue ?",
      ]},
      { type: 'heading', text: "Tendances 2026" },
      { type: 'list', items: [
        "Generative AI omniprésente (Bard, Claude, ChatGPT, Perplexity).",
        "Wearables médicaux + virtual health assistants.",
        "Régulation accrue (EU AI Act, US executive orders).",
        "AI sustainability : optimiser énergie, agriculture, recyclage.",
      ]},
      { type: 'quote', text: "L'IA n'est pas magique. C'est des stats sur stéroïdes. Plus on comprend ça, mieux on l'utilise." },
    ],
    contentEn: [
      { type: 'paragraph', text: "AI is everywhere in conversation, nowhere in clear definitions. Here's a guide that untangles what people call 'AI' — and what should really be called that." },
      { type: 'heading', text: "Types of AI" },
      { type: 'list', items: [
        "Narrow AI: designed for one specific task. That's 99% of current AI (recommendations, image recognition, translation).",
        "AGI (Artificial General Intelligence): can reason on any topic like a human. Theoretical for now.",
        "Machine Learning: algorithms that learn from data.",
        "Deep Learning: ML with deep neural networks (vision, language, audio).",
        "Expert Systems: structured rules to mimic a specialist (old school but still useful).",
        "Generative AI: creates new content (text, image, sound, code) from training.",
      ]},
      { type: 'heading', text: "Key components" },
      { type: 'list', items: [
        "Supervised learning: labeled examples.",
        "Unsupervised learning: AI finds patterns on its own.",
        "Reinforcement learning: reward / punishment to optimize.",
        "Data: quality > quantity. Bad data = nonsense output.",
        "Algorithms & frameworks: from simple linear models to giant transformers.",
      ]},
      { type: 'heading', text: "Where AI really makes a difference" },
      { type: 'list', items: [
        "Health: personalized medicine (Tempus), mental health (Spring Health), proactive wearables.",
        "Customer service: GPT-based chatbots, 24/7 support, higher satisfaction.",
        "Creative: MidJourney, Wonder Dynamics, Adobe Firefly. Creative jobs are being redefined.",
        "Mobility: autonomous vehicles, traffic optimization, road safety.",
        "Energy: grid optimization, solar/wind production forecasts.",
      ]},
      { type: 'heading', text: "Limits we downplay" },
      { type: 'list', items: [
        "Bias: 'garbage in, garbage out'. Bias in data = bias in decisions.",
        "Black box: we don't always know why AI decides what it decides. Problem in health, justice, security.",
        "Privacy: training AI consumes personal data. GDPR, anonymization, etc.",
        "Job displacement: automation = hard transition for many jobs.",
        "Autonomous weapons: who's responsible when an AI drone kills?",
      ]},
      { type: 'heading', text: "2026 trends" },
      { type: 'list', items: [
        "Generative AI everywhere (Bard, Claude, ChatGPT, Perplexity).",
        "Medical wearables + virtual health assistants.",
        "Increased regulation (EU AI Act, US executive orders).",
        "AI sustainability: optimize energy, agriculture, recycling.",
      ]},
      { type: 'quote', text: "AI isn't magic. It's stats on steroids. The more you understand that, the better you use it." },
    ],
  },
  {
    slug: 'tech-use-in-career',
    title: "La tech au boulot : ce qui change vraiment dans ta carrière",
    titleEn: 'Tech at Work: What Really Changes for Your Career',
    excerpt: "Outils, compétences, automatisation, IA : comment la tech redessine les carrières — et comment t'adapter sans paniquer.",
    excerptEn: "Tools, skills, automation, AI: how tech is redrawing careers — and how to adapt without panicking.",
    date: '2026-04-27',
    readTime: 6,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/blog/tech-in-career.png',
    content: [
      { type: 'paragraph', text: "En 1995, savoir utiliser un ordinateur était un atout. En 2010, c'était la norme. En 2026, ne pas savoir collaborer avec une IA est un handicap. Le décalage entre les compétences requises et les compétences présentes ne fait que grandir." },
      { type: 'heading', text: "Les outils qui structurent les carrières" },
      { type: 'list', items: [
        "Communication : Slack, Microsoft Teams, Zoom — la coordination distribuée est la norme.",
        "Project management : Asana, Monday, Notion. La gestion par projet remplace la gestion par poste.",
        "CRM : Salesforce, HubSpot, Zoho. Pas que pour les commerciaux : tout est relation client.",
        "AI tools : Claude, ChatGPT, Copilot. Productivité +8 à +36% selon les études.",
        "Cybersécurité : compétence transversale obligatoire dans tous les métiers tech.",
      ]},
      { type: 'heading', text: "Les métiers qui montent" },
      { type: 'list', items: [
        "Data Scientist : interprétation, prédiction, visualisation.",
        "Information Security Analyst : protéger systèmes et données.",
        "UX Designer : centrer la tech sur l'humain.",
        "AI / ML Engineer : entraîner et déployer des modèles.",
        "Cloud Architect : penser l'infrastructure scalable.",
      ]},
      { type: 'heading', text: "Les compétences indispensables" },
      { type: 'list', items: [
        "Digital literacy : naviguer, communiquer, sécuriser.",
        "Data analysis : lire et interpréter des chiffres.",
        "Cybersécurité de base : reconnaître phishing, gérer ses mots de passe, comprendre le RGPD.",
        "AI fluency : prompter, valider, détecter les hallucinations.",
        "Soft skills : communication, adaptation, apprentissage continu.",
      ]},
      { type: 'heading', text: "Les défis pour les organisations" },
      { type: 'list', items: [
        "Skills gap : 40% de la main-d'œuvre devra se reformer (World Economic Forum).",
        "Communication : impliquer les employés dans la transition.",
        "Formation continue : ce n'est plus une option.",
        "Vie privée : équilibrer surveillance et confiance.",
        "AI vs humain : qui fait quoi, pourquoi, comment.",
      ]},
      { type: 'heading', text: "Que faire concrètement ?" },
      { type: 'list', items: [
        "Identifier 1 ou 2 outils IA et les intégrer dans ton workflow.",
        "Apprendre les bases d'un domaine adjacent au tien (data, sécurité, design).",
        "Créer ou nourrir un portfolio public (GitHub, blog, side project).",
        "Réseauter dans des communautés tech (Discord, Slack, Meetups).",
        "Accepter qu'apprendre devient un mode de vie, plus une étape de carrière.",
      ]},
      { type: 'quote', text: "La sécurité d'emploi a changé de définition. Avant, c'était 'rester dans son poste'. Maintenant, c'est 'rester employable dans tous les postes qui n'existent pas encore'." },
    ],
    contentEn: [
      { type: 'paragraph', text: "In 1995, knowing how to use a computer was an asset. In 2010, it was the norm. In 2026, not being able to collaborate with AI is a handicap. The gap between required and actual skills keeps widening." },
      { type: 'heading', text: "Tools that structure careers" },
      { type: 'list', items: [
        "Communication: Slack, Microsoft Teams, Zoom — distributed coordination is the norm.",
        "Project management: Asana, Monday, Notion. Project-based management replaces position-based.",
        "CRM: Salesforce, HubSpot, Zoho. Not just for sales: everything is customer relationship.",
        "AI tools: Claude, ChatGPT, Copilot. Productivity +8 to +36% per studies.",
        "Cybersecurity: mandatory cross-functional skill in all tech jobs.",
      ]},
      { type: 'heading', text: "Rising roles" },
      { type: 'list', items: [
        "Data Scientist: interpretation, prediction, visualization.",
        "Information Security Analyst: protect systems and data.",
        "UX Designer: center tech on humans.",
        "AI / ML Engineer: train and deploy models.",
        "Cloud Architect: design scalable infrastructure.",
      ]},
      { type: 'heading', text: "Essential skills" },
      { type: 'list', items: [
        "Digital literacy: navigate, communicate, secure.",
        "Data analysis: read and interpret numbers.",
        "Basic cybersecurity: spot phishing, manage passwords, understand GDPR.",
        "AI fluency: prompt, validate, detect hallucinations.",
        "Soft skills: communication, adaptation, continuous learning.",
      ]},
      { type: 'heading', text: "Challenges for organizations" },
      { type: 'list', items: [
        "Skills gap: 40% of workforce needs reskilling (World Economic Forum).",
        "Communication: involve employees in the transition.",
        "Continuous training: no longer optional.",
        "Privacy: balance surveillance and trust.",
        "AI vs human: who does what, why, how.",
      ]},
      { type: 'heading', text: "What to do concretely" },
      { type: 'list', items: [
        "Pick 1–2 AI tools and integrate them in your workflow.",
        "Learn the basics of an adjacent domain (data, security, design).",
        "Build or maintain a public portfolio (GitHub, blog, side project).",
        "Network in tech communities (Discord, Slack, meetups).",
        "Accept that learning becomes a lifestyle, not a career stage.",
      ]},
      { type: 'quote', text: "Job security has changed definition. It used to mean 'stay in your position.' Now it means 'stay employable across roles that don't yet exist.'" },
    ],
  },
  {
    slug: 'humanoid-robots-general-purpose',
    title: "Le humanoïde dans le couloir : la robotique généraliste arrive",
    titleEn: 'The Humanoid in the Hallway: General-Purpose Robotics Is Here',
    excerpt: "Boston Dynamics, Unitree, Tesla Optimus. Les robots humanoïdes ne sont plus de la science-fiction. Ils s'apprêtent à entrer dans nos vies.",
    excerptEn: "Boston Dynamics, Unitree, Tesla Optimus. Humanoid robots are no longer sci-fi. They're about to enter our lives.",
    date: '2026-04-27',
    readTime: 7,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/blog/humanoid-robots.png',
    content: [
      { type: 'paragraph', text: "Imagine ouvrir ta porte d'entrée et trouver un robot qui prend la livraison. Imagine un parent âgé qui dit 'pose ça là' à un assistant qui comprend et obéit. Ce n'est plus dans 50 ans. C'est dans 5." },
      { type: 'heading', text: "Pourquoi humanoïdes ?" },
      { type: 'paragraph', text: "Le monde est conçu pour des humains. Portes à hauteur humaine, escaliers, poignées, claviers, voitures. Un robot humanoïde n'a pas besoin qu'on adapte l'environnement. Il s'adapte." },
      { type: 'heading', text: "Comment ils perçoivent" },
      { type: 'list', items: [
        "Vision : caméras + LiDAR pour reconnaître objets et obstacles.",
        "Toucher : capteurs de force/pression pour saisir des objets fragiles.",
        "Audio : reconnaissance de parole et son ambiant.",
        "Multimodal : combinaison vision + audio = meilleure reconnaissance d'émotions.",
        "VLM (Vision-Language Models) : ChatGPT pour robots, base de la nouvelle génération.",
      ]},
      { type: 'heading', text: "Là où ils servent déjà" },
      { type: 'list', items: [
        "Santé : Pepper aide les personnes avec Alzheimer dans leurs tâches quotidiennes.",
        "Hôtellerie : Promobot reconnaît les émotions des clients, prend des paiements.",
        "Industrie : reshoring + robots humanoïdes = production locale et flexible.",
        "Domestique : assistance pour personnes en situation de handicap.",
      ]},
      { type: 'heading', text: "Le marché" },
      { type: 'list', items: [
        "2024 : prototypes avancés (Atlas électrique de Boston Dynamics, G1 d'Unitree).",
        "2025 : début de production de masse.",
        "2026 : premiers déploiements commerciaux significatifs.",
        "2035 : 13 millions de robots humanoïdes prévus aux US seulement.",
      ]},
      { type: 'heading', text: "Les questions difficiles" },
      { type: 'list', items: [
        "Vie privée : un robot dans ta maison voit, entend, enregistre tout. Qui contrôle les données ?",
        "Emploi : qu'arrive-t-il aux livreurs, aides-soignants, manutentionnaires ?",
        "Conscience : les robots n'en ont pas, mais le design ne devrait pas le suggérer.",
        "Sécurité : que se passe-t-il quand un robot interprète mal une commande ?",
        "Responsabilité : quand un robot blesse, qui est coupable ? Le fabricant ? L'utilisateur ?",
      ]},
      { type: 'heading', text: "Les principes de design éthiques" },
      { type: 'list', items: [
        "Privacy by design : traitement on-device, retention limitée, contrôle utilisateur.",
        "Override humain : un humain doit toujours pouvoir reprendre le contrôle.",
        "Reporting d'incidents : tracer les anomalies et apprendre.",
        "Transparence : ne pas suggérer une fausse intelligence émotionnelle.",
        "Espace personnel : un robot doit savoir reculer.",
      ]},
      { type: 'quote', text: "Le défi n'est pas technique — il est culturel. Sommes-nous prêts à partager notre quotidien avec des machines ? Et à quelles conditions ?" },
    ],
    contentEn: [
      { type: 'paragraph', text: "Imagine opening your front door and a robot takes the delivery. Imagine an elderly parent saying 'put that there' to an assistant who understands and obeys. This isn't 50 years away. It's 5." },
      { type: 'heading', text: "Why humanoid?" },
      { type: 'paragraph', text: "The world is designed for humans. Doors at human height, stairs, handles, keyboards, cars. A humanoid robot doesn't need the environment adapted. It adapts." },
      { type: 'heading', text: "How they perceive" },
      { type: 'list', items: [
        "Vision: cameras + LiDAR for object and obstacle recognition.",
        "Touch: force/pressure sensors to handle fragile objects.",
        "Audio: speech and ambient sound recognition.",
        "Multimodal: vision + audio combined = better emotion recognition.",
        "VLM (Vision-Language Models): ChatGPT for robots, base of the new generation.",
      ]},
      { type: 'heading', text: "Where they're already useful" },
      { type: 'list', items: [
        "Health: Pepper helps Alzheimer patients with daily tasks.",
        "Hospitality: Promobot recognizes emotions, takes payments.",
        "Industry: reshoring + humanoid robots = local, flexible production.",
        "Home: assistance for people with disabilities.",
      ]},
      { type: 'heading', text: "The market" },
      { type: 'list', items: [
        "2024: advanced prototypes (Boston Dynamics electric Atlas, Unitree G1).",
        "2025: start of mass production.",
        "2026: first significant commercial deployments.",
        "2035: 13M humanoid robots projected in the US alone.",
      ]},
      { type: 'heading', text: "The hard questions" },
      { type: 'list', items: [
        "Privacy: a robot in your home sees, hears, records everything. Who owns the data?",
        "Jobs: what happens to delivery, care, warehouse workers?",
        "Consciousness: robots don't have it, but design shouldn't suggest they do.",
        "Safety: what happens when a robot misinterprets a command?",
        "Liability: when a robot harms, who's at fault? Maker? User?",
      ]},
      { type: 'heading', text: "Ethical design principles" },
      { type: 'list', items: [
        "Privacy by design: on-device processing, limited retention, user control.",
        "Human override: a human must always be able to take back control.",
        "Incident reporting: trace anomalies and learn.",
        "Transparency: don't suggest fake emotional intelligence.",
        "Personal space: a robot must know to step back.",
      ]},
      { type: 'quote', text: "The challenge isn't technical — it's cultural. Are we ready to share our daily lives with machines? And on what terms?" },
    ],
  },
  {
    slug: 'emerging-2026-trends',
    title: 'Tendances émergentes 2026 : la nouvelle voie',
    titleEn: 'Emerging 2026 Trends: The New Way to Go',
    excerpt: "IA agentique, économie circulaire, travail hybride, santé personnalisée. Six grands courants qui redessinent la façon dont on bosse, dirige, vit.",
    excerptEn: "Agentic AI, circular economy, hybrid work, personalized health. Six big currents reshaping how we work, lead, live.",
    date: '2026-04-27',
    readTime: 8,
    category: 'Tech & IA',
    categoryEn: 'Tech & AI',
    thumbnail: '/blog/emerging-2026-trends.png',
    content: [
      { type: 'paragraph', text: "2026 ne ressemblera pas à 2025. La technologie, la durabilité, le travail, la santé — tout bouge en parallèle. Voici les courants de fond qu'il faut comprendre pour ne pas être pris à contre-pied." },
      { type: 'heading', text: "1. Avancées technologiques : l'IA agentique passe à l'échelle" },
      { type: 'paragraph', text: "L'IA agentique a quitté la phase concept. Elle tourne désormais en production : automatisation de procurement, escalades client, analyses de marché, cycles de dev logiciel." },
      { type: 'list', items: [
        "Multi-agent systems : équipes d'agents IA qui se coordonnent (supply chain, trading, parcours santé personnalisés).",
        "Convergence : IA agentique + quantum + biotech + efficacité de calcul commencent à s'amplifier mutuellement.",
        "Industrie 4.0 : maintenance prédictive dans les usines, milliards de pertes évitées.",
        "Finance : détection de fraude temps réel, trading algorithmique en millisecondes.",
        "CX : hyper-personnalisation, blending physique/numérique via AR/VR.",
        "Workforce : maîtriser les outils IA devient un prérequis baseline en 2026.",
      ]},
      { type: 'heading', text: "2. Durabilité environnementale : la conformité ne suffit plus" },
      { type: 'paragraph', text: "La durabilité passe de 'truc marketing' à 'composante centrale de la stratégie'. Les entreprises qui traînent vont payer cher en compliance et en réputation." },
      { type: 'list', items: [
        "Économie circulaire : retail, logistique, manufacturing — c'est devenu un levier de réduction de coûts, pas juste un geste vert.",
        "Biodiversité financière : la nature est désormais une ligne du bilan.",
        "Régulation : Circular Economy Act dans l'UE, marchés des matières secondaires en croissance.",
        "Valeur long terme : les jeunes générations achètent des marques alignées avec leurs valeurs. Concrètement : du chiffre d'affaires.",
      ]},
      { type: 'heading', text: "3. Mutations sociales : reconstruire le lien" },
      { type: 'paragraph', text: "Le post-pandémie a fragilisé les communautés. Les organisations qui rebâtissent du lien (au sens vrai, pas via Slack) gagnent en rétention, en performance, en bien-être." },
      { type: 'list', items: [
        "Santé mentale : >1 trillion $ de coûts mondiaux par an. Pourrait doubler d'ici 2030. Les leaders investissent ou décrochent.",
        "Hybride : ~80% des salariés télétravaillent au moins partiellement. La flexibilité est un standard, pas un avantage.",
        "Leadership adaptatif : EAPs IA-augmentés, well-being stipends, sécurité psychologique.",
        "Communautés peer-to-peer : les expériences vécues partagées remplacent la consommation de masse.",
      ]},
      { type: 'heading', text: "4. Économie : un cocktail compliqué" },
      { type: 'list', items: [
        "Productivité tirée par l'IA : retour à 2% d'inflation possible plus vite que prévu.",
        "Capitaux : tech et manufacturing surperforment, soutenus par CAPEX IA et incitations industrielles.",
        "Risques : déficits US sans plan clair, tarifs douaniers, immigration restrictive — recette pour 'stagflation lite'.",
        "Consommateur : transparence et éthique deviennent critères d'achat, pas options.",
      ]},
      { type: 'heading', text: "5. Santé & wellness : 'Dr Me'" },
      { type: 'paragraph', text: "Le patient devient acteur. Wearables, IA, EHR augmentés. Le médecin reste central, mais le suivi quotidien passe par les données personnelles." },
      { type: 'list', items: [
        "Quantified self : rythme cardiaque, sommeil, stress — toutes les métriques accessibles.",
        "Wellness IA en entreprise : recommandations personnalisées, mindfulness ciblée, ROI mesuré sur la productivité.",
        "AI scribes : le département des Vétérans US déploie l'ambient AI dans tous ses centres médicaux. Du temps clinicien rendu au patient.",
        "Démocratisation : l'accès à des soins de qualité s'affranchit (un peu) de la géographie.",
      ]},
      { type: 'heading', text: "6. Avenir du travail : la workforce hybride" },
      { type: 'paragraph', text: "Pour la première fois dans l'histoire moderne du travail, on ne gère plus seulement des humains. On gère aussi des agents logiciels qui exécutent des tâches en autonomie." },
      { type: 'list', items: [
        "Agent workforce : les agents IA s'intègrent comme une 'seconde équipe' à côté des humains.",
        "Communauté en interne : sans connexion, pas de rétention. Les boîtes qui cultivent du sens gagnent.",
        "Stratégie IA : un fossé se creuse entre celles qui maîtrisent l'IA et celles qui hésitent.",
        "Restructuration : nouveaux rôles, nouveaux workflows. L'IA devient structure, pas accessoire.",
      ]},
      { type: 'heading', text: "Ce qu'il faut retenir" },
      { type: 'paragraph', text: "Aucune de ces tendances n'est un effet de mode. Toutes se renforcent mutuellement. L'IA accélère la productivité économique. La productivité change le travail. Le travail change les communautés. Les communautés changent la santé. La santé change l'économie. La boucle est fermée — et elle tourne plus vite chaque année." },
      { type: 'quote', text: "Anticiper 2026, ce n'est pas prédire. C'est observer ce qui converge déjà — et choisir où se positionner avant que tout le monde le voie." },
    ],
    contentEn: [
      { type: 'paragraph', text: "2026 won't look like 2025. Technology, sustainability, work, health — everything is moving in parallel. Here are the underlying currents you need to understand to avoid being caught off guard." },
      { type: 'heading', text: "1. Tech advances: agentic AI scales up" },
      { type: 'paragraph', text: "Agentic AI has left the concept phase. It runs in production now: procurement automation, customer escalations, market analyses, software dev cycles." },
      { type: 'list', items: [
        "Multi-agent systems: AI agent teams coordinating (supply chain, trading, personalized health journeys).",
        "Convergence: agentic AI + quantum + biotech + compute efficiency are starting to amplify each other.",
        "Industry 4.0: predictive maintenance in factories, billions in losses avoided.",
        "Finance: real-time fraud detection, millisecond algorithmic trading.",
        "CX: hyper-personalization, physical/digital blending via AR/VR.",
        "Workforce: AI tool fluency is now a baseline requirement in 2026.",
      ]},
      { type: 'heading', text: "2. Environmental sustainability: compliance isn't enough" },
      { type: 'paragraph', text: "Sustainability is moving from 'marketing thing' to 'core strategy component'. Companies that drag their feet will pay heavily in compliance and reputation." },
      { type: 'list', items: [
        "Circular economy: retail, logistics, manufacturing — it's now a cost reduction lever, not just a green gesture.",
        "Financial biodiversity: nature is now a balance-sheet line.",
        "Regulation: EU Circular Economy Act, growing secondary materials markets.",
        "Long-term value: younger generations buy from values-aligned brands. Concretely: revenue.",
      ]},
      { type: 'heading', text: "3. Social shifts: rebuilding connection" },
      { type: 'paragraph', text: "Post-pandemic communities are fragile. Organizations rebuilding real (not Slack-only) connection gain on retention, performance, wellbeing." },
      { type: 'list', items: [
        "Mental health: >$1T global costs per year. Could double by 2030. Leaders invest or fall behind.",
        "Hybrid: ~80% of employees work remotely at least part-time. Flexibility is a standard, not a perk.",
        "Adaptive leadership: AI-augmented EAPs, well-being stipends, psychological safety.",
        "Peer-to-peer communities: shared lived experiences replace mass content consumption.",
      ]},
      { type: 'heading', text: "4. Economy: a complicated cocktail" },
      { type: 'list', items: [
        "AI-driven productivity: return to 2% inflation possibly faster than expected.",
        "Capital: tech and manufacturing outperform, fueled by AI CAPEX and industrial incentives.",
        "Risks: US deficits with no clear plan, tariffs, restrictive immigration — recipe for 'stagflation lite'.",
        "Consumer: transparency and ethics become purchase criteria, not options.",
      ]},
      { type: 'heading', text: "5. Health & wellness: 'Dr Me'" },
      { type: 'paragraph', text: "The patient becomes the actor. Wearables, AI, augmented EHRs. The doctor stays central, but daily monitoring runs through personal data." },
      { type: 'list', items: [
        "Quantified self: heart rate, sleep, stress — all metrics accessible.",
        "Workplace AI wellness: personalized recommendations, targeted mindfulness, productivity ROI measured.",
        "AI scribes: US Veterans Affairs is deploying ambient AI across all medical centers. Clinician time given back to patients.",
        "Democratization: quality care access partially decoupled from geography.",
      ]},
      { type: 'heading', text: "6. Future of work: the hybrid workforce" },
      { type: 'paragraph', text: "For the first time in modern work history, we're not just managing humans. We're managing software agents that execute tasks autonomously alongside them." },
      { type: 'list', items: [
        "Agent workforce: AI agents integrate as a 'second team' next to humans.",
        "Internal community: no connection, no retention. Companies that cultivate meaning win.",
        "AI strategy: a gap widens between AI-fluent companies and hesitant ones.",
        "Restructuring: new roles, new workflows. AI becomes structure, not accessory.",
      ]},
      { type: 'heading', text: "What to take away" },
      { type: 'paragraph', text: "None of these trends is a fad. They all reinforce each other. AI accelerates economic productivity. Productivity changes work. Work changes communities. Communities change health. Health changes the economy. The loop is closed — and spins faster every year." },
      { type: 'quote', text: "Anticipating 2026 isn't predicting. It's observing what's already converging — and choosing where to stand before everyone else sees it." },
    ],
  },
  {
    slug: 'cultural-travel-local-traditions',
    title: "Voyage culturel : comment vivre les traditions locales",
    titleEn: "Cultural Travel: How to Experience Local Traditions",
    excerpt: "Voyager pour visiter, c'est une chose. Voyager pour comprendre, c'en est une autre. Le guide pratique du voyage culturel.",
    excerptEn: "Traveling to visit is one thing. Traveling to understand is another. The practical guide to cultural travel.",
    date: '2026-04-28',
    readTime: 7,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/cultural-travel.png',
    content: [
      { type: 'paragraph', text: "Tu peux 'visiter' un pays en restant à la surface. Ou tu peux le vivre. Le voyage culturel, c'est passer du tourisme à la rencontre." },
      { type: 'heading', text: "Pourquoi ça vaut le coup" },
      { type: 'list', items: [
        "Tu élargis ta vision du monde — tu comprends d'autres systèmes de valeurs.",
        "Tu vis des moments uniques avec des locaux, pas avec d'autres touristes.",
        "Tu sors de ta zone de confort et tu en reviens transformé.",
        "Tu soutiens directement l'économie locale et la préservation du patrimoine.",
      ]},
      { type: 'heading', text: "Comment préparer un voyage culturel" },
      { type: 'list', items: [
        "Recherche : histoire, fêtes, étiquette, tabous. Pas Wikipedia 5 minutes — un livre, un documentaire, des récits.",
        "Cale ton voyage sur un événement : Têt au Vietnam, Holi en Inde, Songkran en Thaïlande.",
        "Apprends 20 mots et phrases. Bonjour, merci, 'délicieux', 'comment ça s'appelle ?'. Ça change tout.",
        "Habille-toi en respect du contexte (lieux religieux, villages traditionnels).",
      ]},
      { type: 'heading', text: "Six façons concrètes de vivre les traditions" },
      { type: 'list', items: [
        "Participer aux coutumes : enlever ses chaussures, manger avec les mains si c'est l'usage.",
        "Aller à un festival : tu vois la culture en action, pas en photo.",
        "Faire un atelier : cuisine, artisanat, langue. Tu repars avec un savoir, pas juste une photo.",
        "Visiter des lieux sacrés avec respect : silence, vêtements adaptés, pas de selfies si interdits.",
        "Acheter directement aux artisans : tu paies juste, ils gardent leur métier.",
        "Volontariat ou échange : 1-2 semaines avec une ONG locale = plus dense que 3 mois en backpack.",
      ]},
      { type: 'heading', text: "Les pièges à éviter" },
      { type: 'list', items: [
        "Sur-planifier : laisse de la place à l'imprévu, c'est là qu'arrivent les meilleurs moments.",
        "Confondre appréciation et appropriation : porter un sari pour une photo Instagram, c'est non.",
        "Imposer tes valeurs : tu es invité, pas évaluateur.",
        "Sur-tourisme : préfère les destinations moins connues, surtout en haute saison.",
      ]},
      { type: 'quote', text: "Le voyage culturel n'a rien à voir avec où tu vas. C'est avec quel respect tu y vas." },
    ],
    contentEn: [
      { type: 'paragraph', text: "You can 'visit' a country and stay on the surface. Or you can live it. Cultural travel is moving from tourism to encounter." },
      { type: 'heading', text: "Why it's worth it" },
      { type: 'list', items: [
        "You broaden your worldview — you understand other value systems.",
        "You have unique moments with locals, not with other tourists.",
        "You leave your comfort zone and come back changed.",
        "You directly support the local economy and heritage preservation.",
      ]},
      { type: 'heading', text: "How to prepare a cultural trip" },
      { type: 'list', items: [
        "Research: history, festivals, etiquette, taboos. Not 5-minute Wikipedia — a book, a documentary, real accounts.",
        "Time your trip with an event: Tet in Vietnam, Holi in India, Songkran in Thailand.",
        "Learn 20 words and phrases. Hello, thanks, 'delicious', 'what's this called?'. It changes everything.",
        "Dress in line with context (religious sites, traditional villages).",
      ]},
      { type: 'heading', text: "Six concrete ways to live the traditions" },
      { type: 'list', items: [
        "Join in customs: take shoes off, eat with hands if that's the norm.",
        "Go to a festival: you see culture in action, not in photos.",
        "Take a workshop: cooking, craft, language. You leave with knowledge, not just a picture.",
        "Visit sacred places with respect: silence, proper dress, no selfies if forbidden.",
        "Buy direct from artisans: fair price, their craft survives.",
        "Volunteer or exchange: 1–2 weeks with a local NGO = denser than 3 months backpacking.",
      ]},
      { type: 'heading', text: "Pitfalls to avoid" },
      { type: 'list', items: [
        "Over-planning: leave room for the unplanned — best moments live there.",
        "Mixing up appreciation and appropriation: wearing a sari for an Instagram pic, no.",
        "Imposing your values: you're a guest, not a judge.",
        "Over-tourism: prefer less-known destinations, especially in high season.",
      ]},
      { type: 'quote', text: "Cultural travel has nothing to do with where you go. It's about how respectfully you go." },
    ],
  },
  {
    slug: 'first-international-travel-guide',
    title: "Premier voyage à l'étranger : le guide pour partir sans paniquer",
    titleEn: "First International Travel: The Guide to Leaving Without Panic",
    excerpt: "Premier passeport, premier vol, premier choc culturel. Tout ce que tu aurais aimé savoir avant le décollage.",
    excerptEn: "First passport, first flight, first culture shock. Everything you wish you'd known before takeoff.",
    date: '2026-04-28',
    readTime: 7,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/first-international-travel.png',
    content: [
      { type: 'paragraph', text: "On naît tous touristes débutants. Personne ne sort de l'utérus avec un passeport et un sens de l'orientation. Voici un guide simple pour ne pas paniquer à ton premier voyage international." },
      { type: 'heading', text: "Avant de partir" },
      { type: 'list', items: [
        "Passeport : valide au moins 6 mois après la date de retour, avec pages vierges. Renouvelle-le maintenant si nécessaire.",
        "Visa : vérifie sur le site officiel du pays. Certains visas se font en ligne, d'autres à l'arrivée, d'autres à l'avance.",
        "Vaccinations : consulte un centre de vaccination internationale 6 semaines avant le départ.",
        "Assurance voyage : indispensable. Couverture médicale + rapatriement + annulation.",
        "Recherche : climat, fuseau horaire, devise, prises électriques, dangers locaux.",
      ]},
      { type: 'heading', text: "Choisir une destination de première fois" },
      { type: 'paragraph', text: "Pas l'Iran ou la Mongolie pour démarrer. Vise la sécurité + infrastructure + accessibilité." },
      { type: 'list', items: [
        "Bons choix : Tokyo, Lisbonne, Barcelone, Bangkok, Da Nang.",
        "À éviter en premier : zones avec instabilité politique, rural sans transports.",
      ]},
      { type: 'heading', text: "Sur place" },
      { type: 'list', items: [
        "Connectivité : eSIM avant le départ pour avoir internet à l'atterrissage.",
        "Apps : Google Maps offline, Google Translate offline, Citymapper, Grab/Uber selon le pays.",
        "Argent : préviens ta banque, utilise des distributeurs, garde du cash pour petits commerces.",
        "Sécurité : photo de ton passeport sur ton téléphone, lieu de l'ambassade noté, n° d'urgence local.",
      ]},
      { type: 'heading', text: "Culture & langage" },
      { type: 'list', items: [
        "Apprends 'bonjour, merci, s'il vous plaît, pardon' dans la langue locale. Le sourire fait le reste.",
        "Observe avant d'agir : comment on salue, comment on mange, comment on s'habille.",
        "Habille-toi modeste pour les lieux religieux. Toujours.",
        "Demande la permission avant de photographier des gens.",
      ]},
      { type: 'heading', text: "Les erreurs classiques de débutant" },
      { type: 'list', items: [
        "Sur-charger l'itinéraire : 5 villes en 7 jours, et tu n'as rien vu vraiment.",
        "Sous-estimer le décalage horaire : prévois une journée tampon en arrivant.",
        "Oublier de prévenir sa banque : carte bloquée le 2e jour = panique.",
        "Pas d'assurance : un accident peut coûter 30 000€.",
      ]},
      { type: 'quote', text: "Le premier voyage international ne te change pas parce que tu vois des choses. Il te change parce que tu te vois autrement." },
    ],
    contentEn: [
      { type: 'paragraph', text: "We're all born beginner tourists. Nobody comes out of the womb with a passport and a sense of direction. Here's a simple guide to not panic on your first international trip." },
      { type: 'heading', text: "Before leaving" },
      { type: 'list', items: [
        "Passport: valid at least 6 months after return, with blank pages. Renew now if needed.",
        "Visa: check the country's official site. Some are online, some on arrival, some in advance.",
        "Vaccinations: visit an international travel clinic 6 weeks before departure.",
        "Travel insurance: essential. Medical + repatriation + cancellation.",
        "Research: climate, time zone, currency, plugs, local hazards.",
      ]},
      { type: 'heading', text: "Choosing a first-time destination" },
      { type: 'paragraph', text: "Not Iran or Mongolia for round one. Aim for safety + infrastructure + accessibility." },
      { type: 'list', items: [
        "Good picks: Tokyo, Lisbon, Barcelona, Bangkok, Da Nang.",
        "Avoid first time: politically unstable zones, rural without transport.",
      ]},
      { type: 'heading', text: "On the ground" },
      { type: 'list', items: [
        "Connectivity: eSIM before departure to have data on landing.",
        "Apps: Google Maps offline, Google Translate offline, Citymapper, Grab/Uber depending on country.",
        "Money: notify your bank, use ATMs, keep cash for small vendors.",
        "Safety: passport photo on your phone, embassy noted, local emergency number.",
      ]},
      { type: 'heading', text: "Culture & language" },
      { type: 'list', items: [
        "Learn 'hello, thanks, please, sorry' in the local language. The smile does the rest.",
        "Observe before acting: how they greet, eat, dress.",
        "Dress modestly in religious places. Always.",
        "Ask permission before photographing people.",
      ]},
      { type: 'heading', text: "Classic beginner mistakes" },
      { type: 'list', items: [
        "Overpacking the itinerary: 5 cities in 7 days, and you've seen nothing really.",
        "Underestimating jet lag: plan a buffer day on arrival.",
        "Forgetting to notify your bank: card blocked day 2 = panic.",
        "No insurance: an accident can cost €30,000.",
      ]},
      { type: 'quote', text: "Your first international trip doesn't change you because you see things. It changes you because you see yourself differently." },
    ],
  },
  {
    slug: 'history-of-tourism',
    title: "Histoire du tourisme : du pèlerinage médiéval au selfie Instagram",
    titleEn: "History of Tourism: From Medieval Pilgrimage to Instagram Selfie",
    excerpt: "Comment voyager est passé d'un privilège élitiste à un loisir de masse — et où ça nous mène.",
    excerptEn: "How travel went from elite privilege to mass leisure — and where that leads us.",
    date: '2026-04-28',
    readTime: 8,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/history-of-tourism.png',
    content: [
      { type: 'paragraph', text: "Tes vacances en Thaïlande sont l'aboutissement de 60 000 ans d'histoire humaine. Voilà comment on en est arrivé là." },
      { type: 'heading', text: "Antiquité : voyager = survivre ou prier" },
      { type: 'list', items: [
        "60 000 av. J.-C. : sortie d'Afrique. On voyage pour ne pas mourir.",
        "10 000 av. J.-C. : agriculture, sédentarisation, premières routes commerciales.",
        "Empire perse : Route royale, Route de la soie. Le voyage devient organisé.",
        "Pèlerinages : Mecque, Jérusalem, sanctuaires gréco-romains. Le voyage spirituel naît.",
        "Rome : la Pax Romana permet aux riches d'aller en villégiature à Naples. Premier tourisme de loisir.",
      ]},
      { type: 'heading', text: "Moyen Âge : pèlerinage = tourisme" },
      { type: 'paragraph', text: "Canterbury, Saint-Jacques, Rome. Les pèlerinages drainent des millions de personnes. Les villes sur la route construisent auberges et marchés. C'est le premier vrai tourisme économique." },
      { type: 'heading', text: "Renaissance & Lumières : le Grand Tour" },
      { type: 'paragraph', text: "Les jeunes aristocrates européens font le tour de Rome, Florence, Venise pour 'parfaire' leur éducation. Le voyage devient signe de statut social." },
      { type: 'heading', text: "XIXe siècle : naissance du tourisme de masse" },
      { type: 'list', items: [
        "1825 : première ligne ferroviaire publique (Stephenson).",
        "1841 : Thomas Cook crée la première agence de voyage.",
        "Travel writing : Mark Twain, Stevenson popularisent les récits.",
        "L'avènement de la classe moyenne change tout : voyager devient accessible.",
      ]},
      { type: 'heading', text: "XXe siècle : Jet Age & forfait" },
      { type: 'list', items: [
        "1950 : premier vol charter Londres-Corse. Naissance du forfait vacances.",
        "1960s : Boeing 707. Le tourisme intercontinental explose.",
        "1970 : 163 millions de touristes internationaux. 700 millions à la fin du siècle.",
        "Émergence du tourisme de niche : aventure, écotourisme, œnotourisme.",
      ]},
      { type: 'heading', text: "Aujourd'hui : surtourisme & reconquête de l'authentique" },
      { type: 'list', items: [
        "Industrie 4.0 dans le tourisme : IA, big data, hyper-personnalisation.",
        "Surtourisme : Venise, Barcelone, Bali. Les locaux résistent.",
        "Tourisme culturel et durable : on cherche du sens, pas juste des photos.",
        "Travail à distance : nomades digitaux, frontière vacances/vie qui s'efface.",
      ]},
      { type: 'quote', text: "L'histoire du tourisme, c'est l'histoire de qui peut bouger, et pourquoi. Aujourd'hui presque tout le monde peut. La question est devenue : pourquoi voulons-nous bouger ?" },
    ],
    contentEn: [
      { type: 'paragraph', text: "Your Thailand vacation is the culmination of 60,000 years of human history. Here's how we got here." },
      { type: 'heading', text: "Antiquity: travel = survive or pray" },
      { type: 'list', items: [
        "60,000 BCE: out of Africa. We travel not to die.",
        "10,000 BCE: agriculture, settlement, first trade routes.",
        "Persian Empire: Royal Road, Silk Road. Travel becomes organized.",
        "Pilgrimages: Mecca, Jerusalem, Greco-Roman sanctuaries. Spiritual travel is born.",
        "Rome: Pax Romana lets the rich vacation in Naples. First leisure tourism.",
      ]},
      { type: 'heading', text: "Middle Ages: pilgrimage = tourism" },
      { type: 'paragraph', text: "Canterbury, Santiago, Rome. Pilgrimages draw millions. Towns along the route build inns and markets. First true tourism economy." },
      { type: 'heading', text: "Renaissance & Enlightenment: the Grand Tour" },
      { type: 'paragraph', text: "Young European aristocrats tour Rome, Florence, Venice to 'finish' their education. Travel becomes social status." },
      { type: 'heading', text: "19th century: birth of mass tourism" },
      { type: 'list', items: [
        "1825: first public rail line (Stephenson).",
        "1841: Thomas Cook creates the first travel agency.",
        "Travel writing: Mark Twain, Stevenson popularize narratives.",
        "The rising middle class changes everything: travel becomes accessible.",
      ]},
      { type: 'heading', text: "20th century: Jet Age & package holidays" },
      { type: 'list', items: [
        "1950: first charter flight London–Corsica. Birth of package vacations.",
        "1960s: Boeing 707. Intercontinental tourism explodes.",
        "1970: 163M international tourists. 700M by century's end.",
        "Niche tourism emerges: adventure, ecotourism, wine tourism.",
      ]},
      { type: 'heading', text: "Today: overtourism & quest for authentic" },
      { type: 'list', items: [
        "Industry 4.0 in tourism: AI, big data, hyper-personalization.",
        "Overtourism: Venice, Barcelona, Bali. Locals resist.",
        "Cultural and sustainable tourism: we seek meaning, not just photos.",
        "Remote work: digital nomads, vacation/life border dissolves.",
      ]},
      { type: 'quote', text: "The history of tourism is the history of who can move, and why. Today almost anyone can. The question has become: why do we want to move?" },
    ],
  },
  {
    slug: 'avoid-tourist-scams-worldwide',
    title: "Éviter les arnaques touristiques dans le monde",
    titleEn: "How to Avoid Tourist Scams Around the World",
    excerpt: "Du faux taxi à Bangkok au QR code piégé à Paris : le manuel pour ne pas se faire avoir en voyage.",
    excerptEn: "From fake taxis in Bangkok to rigged QR codes in Paris: the manual to not get scammed.",
    date: '2026-04-28',
    readTime: 6,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/tourist-scams.png',
    content: [
      { type: 'paragraph', text: "L'arnaque touristique, c'est un métier. Il y a des gens dont le job est de te faire perdre 50€ en 3 minutes. Voici comment ne pas être leur prochain client." },
      { type: 'heading', text: "Les 4 grandes familles d'arnaques" },
      { type: 'list', items: [
        "Online : faux Airbnb, faux booking, faux site officiel d'attraction. Ton argent disparaît avant ton arrivée.",
        "Service : restos surcotés, taxis qui font des détours, 'guides' improvisés.",
        "Hébergement : photos truquées, hôtel inexistant, 'votre réservation a un problème, je vous propose autre chose'.",
        "En personne : pickpocket, vol par diversion, arnaque à la pétition, 'amitié' nocturne.",
      ]},
      { type: 'heading', text: "Variations régionales" },
      { type: 'list', items: [
        "Europe : pickpocket à Paris, Rome, Venise. Toujours la foule, toujours la distraction.",
        "Asie : 'le temple est fermé, je vous emmène ailleurs'. Pas vrai. Bangkok est le champion.",
        "Afrique : faux opérateurs, SIM hors de prix, attractions soi-disant fermées.",
        "Amérique du Nord : QR codes piégés sur les parcmètres, frais cachés sur les locations de voiture.",
        "Moyen-Orient : surfacturation, faux guides aux abords des sites touristiques.",
      ]},
      { type: 'heading', text: "Stratégies anti-arnaque" },
      { type: 'list', items: [
        "Reste vigilant en zone bondée. La distraction est l'arme n°1.",
        "Sécurise tes affaires : ceinture cash, sacs anti-vol, sacs fermés devant.",
        "Fais des recherches avant de réserver : 'nom + scam' sur Google révèle 90% des arnaques.",
        "Ne te laisse jamais presser. 'Achète maintenant ou tu rates' = signal d'alerte.",
        "Fie-toi à ton instinct. Si quelque chose semble bizarre, ça l'est probablement.",
      ]},
      { type: 'heading', text: "Si tu te fais avoir" },
      { type: 'list', items: [
        "Bloque immédiatement ta carte. Change tes mots de passe.",
        "Documente : photos, captures, e-mails. Plus c'est précis, plus tu récupères.",
        "Police touristique : la plupart des grandes destinations en ont une.",
        "Assurance voyage : couvre souvent une partie. Vérifie les conditions.",
        "Ambassade si grave : 'je suis victime d'une infraction' = formule efficace.",
      ]},
      { type: 'quote', text: "Une arnaque réussit parce qu'elle joue sur ton émotion : peur, urgence, gratitude, séduction. Ralentis et elle s'effondre." },
    ],
    contentEn: [
      { type: 'paragraph', text: "Tourist scamming is a profession. People's full-time job is making you lose €50 in 3 minutes. Here's how to not be their next customer." },
      { type: 'heading', text: "The 4 big scam families" },
      { type: 'list', items: [
        "Online: fake Airbnb, fake booking, fake attraction official site. Your money disappears before you arrive.",
        "Service: overpriced restaurants, taxi detours, improvised 'guides'.",
        "Lodging: faked photos, non-existent hotel, 'your booking has an issue, I have another option'.",
        "In-person: pickpocket, diversion theft, petition scam, late-night 'friendship'.",
      ]},
      { type: 'heading', text: "Regional variations" },
      { type: 'list', items: [
        "Europe: pickpocketing in Paris, Rome, Venice. Always crowds, always distraction.",
        "Asia: 'the temple is closed, I'll take you elsewhere'. False. Bangkok is the champion.",
        "Africa: fake operators, overpriced SIMs, attractions allegedly closed.",
        "North America: rigged QR codes on parking meters, hidden car rental fees.",
        "Middle East: overcharging, fake guides near tourist sites.",
      ]},
      { type: 'heading', text: "Anti-scam strategies" },
      { type: 'list', items: [
        "Stay alert in crowded zones. Distraction is weapon #1.",
        "Secure belongings: money belt, anti-theft bags, bags in front.",
        "Research before booking: 'name + scam' on Google reveals 90% of scams.",
        "Never let yourself be rushed. 'Buy now or miss out' = warning sign.",
        "Trust your gut. If something feels off, it usually is.",
      ]},
      { type: 'heading', text: "If you get scammed" },
      { type: 'list', items: [
        "Block your card immediately. Change passwords.",
        "Document: photos, screenshots, emails. The more precise, the more you recover.",
        "Tourist police: most major destinations have one.",
        "Travel insurance: often covers part. Check terms.",
        "Embassy if serious: 'I'm a victim of crime' = effective phrase.",
      ]},
      { type: 'quote', text: "A scam works because it plays on your emotion: fear, urgency, gratitude, attraction. Slow down and it collapses." },
    ],
  },
  {
    slug: 'become-travel-influencer-2026',
    title: "Devenir influenceur voyage en 2026 : le guide réaliste",
    titleEn: "How to Become a Travel Influencer in 2026: The Realistic Guide",
    excerpt: "L'âge des selfies devant le Taj Mahal est mort. L'authenticité est la nouvelle monnaie. Voilà comment construire une audience voyage en 2026.",
    excerptEn: "The age of selfies in front of the Taj Mahal is dead. Authenticity is the new currency. Here's how to build a travel audience in 2026.",
    date: '2026-04-28',
    readTime: 8,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/travel-influencer.png',
    content: [
      { type: 'paragraph', text: "Tu peux encore vivre du voyage en créant du contenu. Mais pas comme en 2019. L'audience est devenue exigeante, intelligente, et lassée des poses." },
      { type: 'heading', text: "Ce qui marche en 2026" },
      { type: 'list', items: [
        "L'authenticité brute : montrer le vrai, y compris les galères, les budgets, les retours en arrière.",
        "Le 'Whycation' : voyage avec un but personnel (renouveau, retrouvailles, deuil).",
        "La niche profonde : pas 'voyage' mais 'voyage solo en train pour les plus de 40 ans'.",
        "Le storytelling honnête sur les coûts, les vrais coûts, pas les coûts romancés.",
      ]},
      { type: 'heading', text: "Les plateformes" },
      { type: 'list', items: [
        "Instagram : Reels + Stories. Le feed seul ne suffit plus.",
        "TikTok : indispensable pour la gen Z. Format court, spontané.",
        "YouTube : long format, le seul endroit où tu peux vraiment raconter.",
        "Newsletter : ton audience à toi, pas celle d'un algo.",
      ]},
      { type: 'heading', text: "Construire ta marque" },
      { type: 'list', items: [
        "Une niche claire en une phrase : 'voyage culinaire en Asie du Sud-Est avec petit budget'.",
        "Une cohérence visuelle : palette, typo, ton.",
        "Une voix unique : pas le ton 'amazing places' générique.",
        "Une histoire : qui es-tu, d'où viens-tu, où vas-tu ?",
      ]},
      { type: 'heading', text: "Faire grossir ton audience" },
      { type: 'list', items: [
        "Règle 80/20 : 80% éduquer / divertir / inspirer, 20% vendre.",
        "Cross-pollination : collabs avec des influenceurs adjacents (cuisine, photo, langues).",
        "Communauté : réponds aux commentaires, organise des Q&A, des défis.",
        "SEO : optimise tes captions et titres comme des articles de blog.",
      ]},
      { type: 'heading', text: "Monétiser sans se vendre" },
      { type: 'list', items: [
        "Sponsoring : choisis des marques alignées. Une mauvaise collab tue ta crédibilité.",
        "Affiliation : Travelpayouts, Booking, Amazon. Cumul lent mais durable.",
        "Pub : YouTube, Mediavine pour les blogs, ads sur newsletter.",
        "Produits : ebooks, cours, guides téléchargeables. Pas besoin d'être 'gros' pour vendre.",
        "Conférences, ateliers, consulting : ta crédibilité a une valeur monétaire.",
      ]},
      { type: 'heading', text: "Les défis réels" },
      { type: 'list', items: [
        "Saturation du marché : il y a 100x plus d'influenceurs voyage qu'il y a 5 ans.",
        "Coûts : voyager est cher. Tu vas devoir financer les premiers mois.",
        "Burn-out : créer du contenu chaque jour pendant que tu voyages = épuisement.",
        "Régulation : FTC, hashtag #ad obligatoire, RGPD. Sois propre.",
      ]},
      { type: 'quote', text: "Tu ne deviens pas influenceur voyage en filmant des couchers de soleil. Tu le deviens en racontant ce que les autres ne voient pas." },
    ],
    contentEn: [
      { type: 'paragraph', text: "You can still make a living from travel by creating content. But not like 2019. The audience has become demanding, smart, and tired of poses." },
      { type: 'heading', text: "What works in 2026" },
      { type: 'list', items: [
        "Raw authenticity: show the real, including the struggles, budgets, U-turns.",
        "The 'Whycation': travel with a personal purpose (renewal, reunion, grief).",
        "Deep niche: not 'travel' but 'solo train travel for 40+'.",
        "Honest storytelling about costs, real costs, not romanticized.",
      ]},
      { type: 'heading', text: "Platforms" },
      { type: 'list', items: [
        "Instagram: Reels + Stories. Feed alone isn't enough anymore.",
        "TikTok: essential for Gen Z. Short, spontaneous format.",
        "YouTube: long form, the only place to really tell stories.",
        "Newsletter: your audience, not an algorithm's.",
      ]},
      { type: 'heading', text: "Build your brand" },
      { type: 'list', items: [
        "A clear niche in one sentence: 'budget Southeast Asia food travel'.",
        "Visual consistency: palette, typography, tone.",
        "A unique voice: not generic 'amazing places' tone.",
        "A story: who are you, where from, where to?",
      ]},
      { type: 'heading', text: "Grow your audience" },
      { type: 'list', items: [
        "80/20 rule: 80% educate/entertain/inspire, 20% sell.",
        "Cross-pollination: collabs with adjacent influencers (food, photo, languages).",
        "Community: reply to comments, run Q&As, challenges.",
        "SEO: optimize captions and titles like blog articles.",
      ]},
      { type: 'heading', text: "Monetize without selling out" },
      { type: 'list', items: [
        "Sponsorship: pick aligned brands. A bad collab kills credibility.",
        "Affiliate: Travelpayouts, Booking, Amazon. Slow but lasting.",
        "Ads: YouTube, Mediavine for blogs, newsletter ads.",
        "Products: ebooks, courses, downloadable guides. No need to be 'big' to sell.",
        "Talks, workshops, consulting: your credibility has monetary value.",
      ]},
      { type: 'heading', text: "Real challenges" },
      { type: 'list', items: [
        "Market saturation: 100x more travel influencers than 5 years ago.",
        "Costs: travel is expensive. You'll fund the first months yourself.",
        "Burn-out: creating daily content while traveling = exhaustion.",
        "Regulation: FTC, mandatory #ad, GDPR. Stay clean.",
      ]},
      { type: 'quote', text: "You don't become a travel influencer by filming sunsets. You become one by telling what others don't see." },
    ],
  },
  {
    slug: 'fight-jet-lag-naturally',
    title: "Vaincre le décalage horaire naturellement (sans méditation)",
    titleEn: "Fight Jet Lag Naturally (Without Meditation)",
    excerpt: "Lumière, hydratation, mouvement, mélatonine. Le protocole sérieux pour réinitialiser ton horloge interne.",
    excerptEn: "Light, hydration, movement, melatonin. The serious protocol to reset your internal clock.",
    date: '2026-04-28',
    readTime: 5,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/jet-lag.png',
    content: [
      { type: 'paragraph', text: "Le décalage horaire, c'est ton corps qui pense qu'il est 3h du matin alors que tu es en pleine réunion à Tokyo. Voilà le protocole pour aligner les deux." },
      { type: 'heading', text: "Pourquoi le jet lag existe" },
      { type: 'paragraph', text: "Ton rythme circadien est calé sur la lumière et la température de chez toi. Quand tu changes brutalement de fuseau, ton cerveau, ton sommeil, tes hormones et ta digestion désynchronisent. Direction est = plus dur (corps doit avancer son horloge), direction ouest = plus facile." },
      { type: 'heading', text: "Avant le départ" },
      { type: 'list', items: [
        "Décale ton sommeil de 30 min/jour pendant 5-7 jours dans le sens du voyage.",
        "Hydrate-toi sérieusement les 48h avant.",
        "Évite l'alcool la veille.",
        "Repère les heures de lumière de ta destination.",
      ]},
      { type: 'heading', text: "Pendant le vol" },
      { type: 'list', items: [
        "Bois 250ml d'eau par heure de vol. L'air en cabine est plus sec que le Sahara.",
        "Évite alcool et café excessif. Ils déshydratent et perturbent le sommeil.",
        "Bouge toutes les 90 minutes : marche, étirements assis. Empêche le DVT et stimule la circulation.",
        "Cale ta montre sur l'heure de destination dès le décollage. Mange et dors selon ce nouveau rythme.",
      ]},
      { type: 'heading', text: "À l'arrivée" },
      { type: 'list', items: [
        "Lumière : exposition 11h-17h pour resynchroniser. Évite la lumière 3h-9h les premiers jours.",
        "Mélatonine : 0,5-3 mg, 1-2h avant le coucher local. Effet net pour les voyages vers l'est.",
        "Mange aux horaires locaux, même si tu n'as pas faim. Ton système digestif suit.",
        "Évite la sieste longue le premier jour. 20 minutes max.",
        "Sors marcher. Mouvement + lumière du soleil = combo magique.",
      ]},
      { type: 'heading', text: "Compléments naturels qui aident" },
      { type: 'list', items: [
        "L-Théanine : favorise relaxation et sommeil.",
        "Pin maritime (Maritime Pine Bark) : aide la circulation cérébrale.",
        "Magnésium : améliore la qualité du sommeil.",
        "Tryptophane (dans la dinde, les œufs) : précurseur de la sérotonine.",
      ]},
      { type: 'quote', text: "Le jet lag se gagne avant le décollage. Pas en pop-pant des cachets en arrivant." },
    ],
    contentEn: [
      { type: 'paragraph', text: "Jet lag is your body thinking it's 3am while you're mid-meeting in Tokyo. Here's the protocol to align both." },
      { type: 'heading', text: "Why jet lag exists" },
      { type: 'paragraph', text: "Your circadian rhythm is tuned to your home's light and temperature. Sudden time-zone change desynchronizes brain, sleep, hormones, digestion. Eastward = harder (clock must advance), westward = easier." },
      { type: 'heading', text: "Before departure" },
      { type: 'list', items: [
        "Shift your sleep 30 min/day for 5–7 days in the travel direction.",
        "Hydrate seriously the 48h before.",
        "Avoid alcohol the night before.",
        "Note destination daylight hours.",
      ]},
      { type: 'heading', text: "During the flight" },
      { type: 'list', items: [
        "Drink 250ml water per flight hour. Cabin air is drier than the Sahara.",
        "Avoid excess alcohol and coffee. They dehydrate and disrupt sleep.",
        "Move every 90 min: walk, seated stretches. Prevents DVT and stimulates circulation.",
        "Set your watch to destination time at takeoff. Eat and sleep on the new rhythm.",
      ]},
      { type: 'heading', text: "On arrival" },
      { type: 'list', items: [
        "Light: exposure 11am–5pm to resync. Avoid light 3am–9am for the first days.",
        "Melatonin: 0.5–3 mg, 1–2h before local bedtime. Strong effect eastward.",
        "Eat at local hours even if not hungry. Your gut follows.",
        "Avoid long naps day one. 20 minutes max.",
        "Get outside and walk. Movement + sunlight = magic combo.",
      ]},
      { type: 'heading', text: "Helpful natural supplements" },
      { type: 'list', items: [
        "L-Theanine: aids relaxation and sleep.",
        "Maritime Pine Bark: helps cerebral circulation.",
        "Magnesium: improves sleep quality.",
        "Tryptophan (turkey, eggs): serotonin precursor.",
      ]},
      { type: 'quote', text: "Jet lag is won before takeoff. Not by popping pills on arrival." },
    ],
  },
  {
    slug: 'authentic-local-food-tourist-traps',
    title: "Trouver de la vraie cuisine locale (loin des pièges à touristes)",
    titleEn: "Finding Authentic Local Food (Far from Tourist Traps)",
    excerpt: "Comment repérer une bonne table et fuir les arnaques culinaires en 6 signaux concrets.",
    excerptEn: "How to spot a great spot and avoid culinary scams via 6 concrete signals.",
    date: '2026-04-28',
    readTime: 6,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/authentic-food.png',
    content: [
      { type: 'paragraph', text: "Tu n'es pas venu en Italie pour manger des pâtes industrielles à 22€ servies par un mec déguisé en gondolier. Voilà comment trouver la vraie cuisine locale." },
      { type: 'heading', text: "Repérer un piège à touristes" },
      { type: 'list', items: [
        "Menu en 8 langues avec photos brillantes.",
        "Quelqu'un devant la porte qui t'invite à entrer ('come in my friend, special price').",
        "Décor 'typique' caricatural : drapeaux, gondoliers, photos sépia.",
        "Cuisine internationale + locale au même endroit.",
        "Prix affichés en 3 devises.",
        "Personne du coin n'y mange.",
      ]},
      { type: 'heading', text: "6 signaux d'authenticité" },
      { type: 'list', items: [
        "Locaux qui mangent là : si la salle est remplie de gens du coin un mardi midi, c'est gagné.",
        "Menu court et focalisé : 8 plats bien faits > 80 plats moyens.",
        "Décor sobre, ancien, vécu. Pas Instagram-friendly.",
        "Cuisine ouverte : tu vois la grand-mère cuisiner = bon signe.",
        "Heures locales : si c'est plein à 13h en France, à 14h en Espagne, à 19h au Japon.",
        "Recommandé par un local (chauffeur de taxi, hôte, voisin de bus). Pas par TripAdvisor.",
      ]},
      { type: 'heading', text: "Stratégies pratiques" },
      { type: 'list', items: [
        "Sors du quartier touristique : marche 10 min, les prix divisent par 2.",
        "Va aux marchés alimentaires locaux : c'est là que mangent les gens qui cuisinent.",
        "Parle aux habitants : où mangent leurs parents le dimanche ?",
        "Mange à l'heure des locaux, pas à la tienne.",
        "Apprends 5 plats régionaux à chercher : 'cao lau' à Hoi An, pas 'pad thai'.",
      ]},
      { type: 'heading', text: "Outils utiles" },
      { type: 'list', items: [
        "World of Mouth : guides ultra curated par des experts.",
        "Pao : pépites cachées par ville.",
        "HappyCow : pour les vegé/vegan.",
        "Google Maps en filtrant par 'most popular with locals'.",
        "Reels TikTok par hashtag de quartier (#hcmcdistrict4food).",
      ]},
      { type: 'quote', text: "La vraie cuisine locale ne se trouve pas dans les guides. Elle se trouve dans les ruelles, sur les tabourets en plastique, sous des bâches en tôle." },
    ],
    contentEn: [
      { type: 'paragraph', text: "You didn't come to Italy to eat industrial €22 pasta served by a guy dressed as a gondolier. Here's how to find real local food." },
      { type: 'heading', text: "Spotting a tourist trap" },
      { type: 'list', items: [
        "Menu in 8 languages with glossy photos.",
        "Someone outside inviting you in ('come in my friend, special price').",
        "Cartoon 'typical' decor: flags, gondoliers, sepia photos.",
        "International + local cuisine at the same place.",
        "Prices in 3 currencies.",
        "No locals eating there.",
      ]},
      { type: 'heading', text: "6 authenticity signals" },
      { type: 'list', items: [
        "Locals eating there: full of locals on a Tuesday lunch = win.",
        "Short focused menu: 8 well-done dishes > 80 average ones.",
        "Sober, old, lived-in decor. Not Instagram-friendly.",
        "Open kitchen: you see grandma cooking = good sign.",
        "Local hours: full at 1pm in France, 2pm in Spain, 7pm in Japan.",
        "Recommended by a local (taxi driver, host, bus seatmate). Not TripAdvisor.",
      ]},
      { type: 'heading', text: "Practical strategies" },
      { type: 'list', items: [
        "Leave the tourist district: walk 10 min, prices halve.",
        "Go to local food markets: where the cooks themselves eat.",
        "Talk to locals: where do their parents eat on Sundays?",
        "Eat at local hours, not yours.",
        "Learn 5 regional dishes to look for: 'cao lau' in Hoi An, not 'pad thai'.",
      ]},
      { type: 'heading', text: "Useful tools" },
      { type: 'list', items: [
        "World of Mouth: ultra-curated guides by experts.",
        "Pao: hidden gems per city.",
        "HappyCow: for veg/vegan.",
        "Google Maps filtering 'most popular with locals'.",
        "TikTok Reels by neighborhood hashtag (#hcmcdistrict4food).",
      ]},
      { type: 'quote', text: "Real local food isn't in the guidebooks. It's in alleys, on plastic stools, under metal sheet roofs." },
    ],
  },
  {
    slug: 'learn-foreign-language-during-travel',
    title: "Apprendre une langue étrangère en voyage : la méthode qui marche",
    titleEn: "Learn a Foreign Language While Traveling: The Method That Works",
    excerpt: "Sortir de Duolingo et plonger dans le bain. Le guide complet pour apprendre une langue par l'immersion.",
    excerptEn: "Leave Duolingo and dive in. The complete guide to learning a language by immersion.",
    date: '2026-04-28',
    readTime: 7,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/learn-language-travel.png',
    content: [
      { type: 'paragraph', text: "Une langue ne s'apprend pas. Elle se vit. Et nulle part on ne la vit autant qu'en voyage. Voici comment transformer un séjour en accélérateur linguistique." },
      { type: 'heading', text: "Avant le départ" },
      { type: 'list', items: [
        "Apprends 50 phrases utiles : salutations, achats, transports, urgences.",
        "Travaille la prononciation. C'est ce qui te fait comprendre, pas la grammaire.",
        "Mets ton téléphone et tes apps en langue cible.",
        "Suit 5 comptes Instagram/TikTok dans la langue. Immersion passive.",
        "Trouve un partenaire de conversation en ligne (iTalki, Tandem).",
      ]},
      { type: 'heading', text: "Pendant le voyage : la méthode immersive" },
      { type: 'list', items: [
        "Parle aux locaux dès la sortie de l'aéroport. Mauvaise prononciation = mieux que le silence.",
        "Mets-toi dans des situations qui forcent la langue : marchés, transports publics, demandes d'info.",
        "Refuse l'anglais quand tu peux. 'Could we speak in Vietnamese?' fait sourire les locaux.",
        "Note 5 mots nouveaux par jour. Révise-les le soir.",
        "Regarde un épisode dans la langue locale tous les soirs (Netflix, YouTube).",
      ]},
      { type: 'heading', text: "Outils tech qui boostent" },
      { type: 'list', items: [
        "Google Translate avec photo : tu scannes les menus, c'est traduit.",
        "Anki : flashcards pour mémoriser les nouveaux mots.",
        "Pimsleur : pour la prononciation.",
        "ChatGPT : conversations simulées dans la langue cible.",
      ]},
      { type: 'heading', text: "Le piège du débutant" },
      { type: 'paragraph', text: "Le perfectionnisme. Tu attends de bien parler avant d'oser. Résultat : tu ne parles jamais. Le bébé qui apprend à marcher tombe 2 000 fois. Toi tu tomberas 200 fois. Tombes vite, tombes souvent." },
      { type: 'heading', text: "Après le voyage" },
      { type: 'list', items: [
        "Garde contact avec 2-3 locaux rencontrés. WhatsApp, audio, vidéo.",
        "Continue à consommer du contenu : podcasts, séries, musique.",
        "Trouve une communauté locale chez toi : restaurants, cours, événements.",
        "Plante un nouveau voyage dans la même langue dans 6 mois.",
      ]},
      { type: 'quote', text: "Une langue n'est pas un savoir, c'est un comportement. Tu ne l'apprends pas dans un livre. Tu la deviens." },
    ],
    contentEn: [
      { type: 'paragraph', text: "A language isn't learned. It's lived. And nowhere is it lived more than in travel. Here's how to turn a trip into a language accelerator." },
      { type: 'heading', text: "Before departure" },
      { type: 'list', items: [
        "Learn 50 useful phrases: greetings, shopping, transport, emergencies.",
        "Work on pronunciation. That's what makes you understood, not grammar.",
        "Set your phone and apps to target language.",
        "Follow 5 Instagram/TikTok accounts in the language. Passive immersion.",
        "Find an online conversation partner (iTalki, Tandem).",
      ]},
      { type: 'heading', text: "On the trip: the immersive method" },
      { type: 'list', items: [
        "Talk to locals from the airport exit. Bad pronunciation = better than silence.",
        "Put yourself in situations that force the language: markets, public transport, info requests.",
        "Refuse English when you can. 'Could we speak in Vietnamese?' makes locals smile.",
        "Note 5 new words per day. Review at night.",
        "Watch one episode in the local language every evening (Netflix, YouTube).",
      ]},
      { type: 'heading', text: "Tech tools that boost you" },
      { type: 'list', items: [
        "Google Translate with photo: scan menus, get translation.",
        "Anki: flashcards for new words.",
        "Pimsleur: pronunciation.",
        "ChatGPT: simulated conversations in target language.",
      ]},
      { type: 'heading', text: "The beginner trap" },
      { type: 'paragraph', text: "Perfectionism. You wait to speak well before daring. Result: you never speak. A baby learning to walk falls 2,000 times. You'll fall 200. Fall fast, fall often." },
      { type: 'heading', text: "After the trip" },
      { type: 'list', items: [
        "Keep in touch with 2–3 locals you met. WhatsApp, audio, video.",
        "Keep consuming content: podcasts, series, music.",
        "Find a local community at home: restaurants, classes, events.",
        "Plan another trip in the same language in 6 months.",
      ]},
      { type: 'quote', text: "A language isn't knowledge, it's behavior. You don't learn it in a book. You become it." },
    ],
  },
  {
    slug: 'stay-healthy-while-travelling',
    title: "Rester en bonne santé en voyage : le manuel pratique",
    titleEn: "Staying Healthy While Traveling: The Practical Manual",
    excerpt: "Préparation, hydratation, sommeil, nutrition, hygiène. Tout ce qu'il faut pour ne pas tomber malade en route.",
    excerptEn: "Prep, hydration, sleep, nutrition, hygiene. Everything you need to not get sick on the road.",
    date: '2026-04-28',
    readTime: 6,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/healthy-travel.png',
    content: [
      { type: 'paragraph', text: "Rien ne ruine un voyage comme une gastro à Bangkok ou un coup de fatigue à Tokyo. Voilà comment voyager longtemps sans s'effondrer." },
      { type: 'heading', text: "Avant le départ (4-6 semaines avant)" },
      { type: 'list', items: [
        "Bilan médical si tu as une condition chronique. Médicaments en quantité suffisante + 50%.",
        "Vaccinations selon destination : centre de vaccination internationale.",
        "Ordonnance traduite si tu pars longtemps avec des traitements.",
        "Assurance voyage avec rapatriement médical. Non négociable.",
        "Trousse santé : antalgiques, anti-diarrhéiques, désinfectant, pansements, anti-moustique.",
      ]},
      { type: 'heading', text: "Hydratation" },
      { type: 'list', items: [
        "Avant le vol : commence à boire 48h avant.",
        "Pendant le vol : 250ml d'eau par heure de vol.",
        "Sur place : eau en bouteille dans les pays à risque, ou bouteille filtrante (LifeStraw, Grayl).",
        "Évite glaçons et crudités lavées avec l'eau du robinet dans certains pays.",
      ]},
      { type: 'heading', text: "Sommeil et activité" },
      { type: 'list', items: [
        "Adapte ton sommeil au fuseau dès le 5e jour avant départ.",
        "Bouge dans l'avion toutes les 90 min. Préviens les thromboses.",
        "Fais de l'exercice tôt à l'arrivée : marche, natation. Réinitialise le rythme.",
        "Priorise 7-8h de sommeil même en voyage. Ce n'est pas négociable.",
      ]},
      { type: 'heading', text: "Nutrition" },
      { type: 'list', items: [
        "Snacks sains dans le bagage : noix, fruits secs, barres protéinées.",
        "Évite le buffet d'hôtel le matin. Trop, trop sucré, trop transformé.",
        "Mange local mais cuit : la chaleur tue les pathogènes.",
        "Évite les fruits de mer crus dans les pays chauds sans traçabilité.",
      ]},
      { type: 'heading', text: "Hygiène" },
      { type: 'list', items: [
        "Lave-toi les mains 5 fois par jour. Aéroports, transports = nids à microbes.",
        "Gel hydroalcoolique toujours dans ta poche.",
        "Ne touche pas ton visage avec des mains non lavées.",
        "Brosse à dents avec eau filtrée dans les pays à risque.",
      ]},
      { type: 'heading', text: "Santé mentale" },
      { type: 'list', items: [
        "Voyager fatigue : mentalement, émotionnellement, physiquement.",
        "Garde une routine : un café le matin, journaling, méditation 5 min.",
        "Ne sur-planifie pas : laisse 1 jour sur 3 sans plan.",
        "Garde le contact avec tes proches. Le silence prolongé crée de l'angoisse.",
      ]},
      { type: 'quote', text: "La santé en voyage, ce n'est pas la chance. C'est l'addition de petites décisions quotidiennes." },
    ],
    contentEn: [
      { type: 'paragraph', text: "Nothing ruins a trip like a stomach bug in Bangkok or burnout in Tokyo. Here's how to travel long without collapsing." },
      { type: 'heading', text: "Before departure (4–6 weeks ahead)" },
      { type: 'list', items: [
        "Medical check if you have a chronic condition. Meds for trip + 50%.",
        "Vaccinations per destination: international travel clinic.",
        "Translated prescription for long trips with treatments.",
        "Travel insurance with medical repatriation. Non-negotiable.",
        "Health kit: painkillers, anti-diarrheal, antiseptic, bandages, mosquito repellent.",
      ]},
      { type: 'heading', text: "Hydration" },
      { type: 'list', items: [
        "Before the flight: start drinking 48h ahead.",
        "During the flight: 250ml water per flight hour.",
        "On location: bottled water in risk countries, or filter bottle (LifeStraw, Grayl).",
        "Avoid ice and salads washed with tap water in some countries.",
      ]},
      { type: 'heading', text: "Sleep and movement" },
      { type: 'list', items: [
        "Adapt sleep to time zone 5 days before departure.",
        "Move on the plane every 90 min. Prevents thrombosis.",
        "Exercise early on arrival: walk, swim. Resets the rhythm.",
        "Prioritize 7–8h sleep even traveling. Non-negotiable.",
      ]},
      { type: 'heading', text: "Nutrition" },
      { type: 'list', items: [
        "Healthy snacks in your bag: nuts, dried fruit, protein bars.",
        "Skip the hotel breakfast buffet. Too much, too sweet, too processed.",
        "Eat local but cooked: heat kills pathogens.",
        "Avoid raw seafood in hot, low-traceability countries.",
      ]},
      { type: 'heading', text: "Hygiene" },
      { type: 'list', items: [
        "Wash hands 5x a day. Airports, transit = germ nests.",
        "Hand sanitizer always in pocket.",
        "Don't touch your face with unwashed hands.",
        "Brush teeth with filtered water in risk countries.",
      ]},
      { type: 'heading', text: "Mental health" },
      { type: 'list', items: [
        "Travel is tiring: mentally, emotionally, physically.",
        "Keep a routine: morning coffee, journaling, 5 min meditation.",
        "Don't over-plan: leave 1 day in 3 unplanned.",
        "Stay in touch with loved ones. Long silence breeds anxiety.",
      ]},
      { type: 'quote', text: "Health on the road isn't luck. It's the sum of small daily decisions." },
    ],
  },
  {
    slug: 'survive-long-flight',
    title: "Survivre à un long vol : tactique complète",
    titleEn: "Surviving a Long Flight: Complete Tactics",
    excerpt: "12h dans une boîte à 10 000 mètres. Voilà comment en sortir sans courbatures, déshydraté ou fou.",
    excerptEn: "12h in a metal box at 33,000 ft. Here's how to come out without aches, dehydration or madness.",
    date: '2026-04-28',
    readTime: 5,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/long-flight.png',
    content: [
      { type: 'paragraph', text: "Un long vol, c'est un test physique et mental. Avec un peu de prep, tu peux le transformer en pause utile au lieu d'un calvaire." },
      { type: 'heading', text: "Avant le décollage" },
      { type: 'list', items: [
        "Choix du siège : couloir si tu veux te lever souvent, hublot si tu veux dormir contre la cloison, sortie de secours si tu veux la place pour les jambes.",
        "Sac à main organisé : tout ce dont tu as besoin pendant le vol dans une pochette accessible (eau, médics, lingettes, baume, écouteurs, livre).",
        "Tenue : couches souples, chaussettes de compression, chaussures faciles à enlever.",
        "Hydrate-toi 48h avant. L'avion va te déshydrater violemment.",
      ]},
      { type: 'heading', text: "Au décollage : règle ta montre sur la destination" },
      { type: 'paragraph', text: "Tu manges et tu dors selon ce nouveau temps. Pas selon le tien." },
      { type: 'heading', text: "Pendant le vol" },
      { type: 'list', items: [
        "Eau : 250ml par heure. Évite alcool et café excessif.",
        "Mouvement : marche dans l'allée toutes les 90 min, étirements assis. Préviens le DVT.",
        "Sommeil : masque, bouchons d'oreille, oreiller cervical. Indispensable.",
        "Soin : crème hydratante, baume à lèvres, spray nasal d'eau de mer.",
        "Distractions : films téléchargés à l'avance (n'attends pas le système de bord), podcasts, livre.",
      ]},
      { type: 'heading', text: "Anxiété de l'avion" },
      { type: 'list', items: [
        "Comprends comment l'avion vole. La connaissance désamorce la peur.",
        "Respiration carrée : 4 secondes inspire, 4 retiens, 4 expire, 4 retiens.",
        "Musique calmante en playlist dédiée.",
        "Si c'est sérieux : thérapie cognitivo-comportementale avant le voyage.",
      ]},
      { type: 'heading', text: "À l'atterrissage" },
      { type: 'list', items: [
        "Sors-toi sous le soleil dans l'heure qui suit.",
        "Bois encore 500ml d'eau dans la première heure.",
        "Bouge : marche, étirements, voire courte session de yoga.",
        "Mange un repas léger riche en protéines, pas un buffet.",
      ]},
      { type: 'quote', text: "Un long vol mal géré te coûte 3 jours de récupération. Un long vol bien géré, tu es opérationnel le lendemain." },
    ],
    contentEn: [
      { type: 'paragraph', text: "A long flight is a physical and mental test. With a little prep, you can turn it into a useful pause instead of an ordeal." },
      { type: 'heading', text: "Before takeoff" },
      { type: 'list', items: [
        "Seat: aisle if you want to stand often, window if you want to sleep against the wall, exit row for legroom.",
        "Organized carry-on: everything you need during the flight in an accessible pouch (water, meds, wipes, balm, earphones, book).",
        "Outfit: soft layers, compression socks, slip-on shoes.",
        "Hydrate 48h ahead. The plane will dehydrate you hard.",
      ]},
      { type: 'heading', text: "At takeoff: set your watch to destination" },
      { type: 'paragraph', text: "You eat and sleep on the new time. Not yours." },
      { type: 'heading', text: "During the flight" },
      { type: 'list', items: [
        "Water: 250ml per hour. Avoid excess alcohol and coffee.",
        "Movement: walk the aisle every 90 min, seated stretches. Prevents DVT.",
        "Sleep: eye mask, earplugs, neck pillow. Essential.",
        "Skincare: moisturizer, lip balm, saline nasal spray.",
        "Distractions: pre-downloaded movies (don't rely on in-flight system), podcasts, book.",
      ]},
      { type: 'heading', text: "Flight anxiety" },
      { type: 'list', items: [
        "Understand how the plane flies. Knowledge defuses fear.",
        "Box breathing: 4 sec in, 4 hold, 4 out, 4 hold.",
        "Calming music on a dedicated playlist.",
        "If serious: cognitive-behavioral therapy before the trip.",
      ]},
      { type: 'heading', text: "On landing" },
      { type: 'list', items: [
        "Get sunlight within the hour.",
        "Drink another 500ml water in the first hour.",
        "Move: walk, stretch, even short yoga.",
        "Eat a light protein-rich meal, not a buffet.",
      ]},
      { type: 'quote', text: "A badly handled long flight costs you 3 recovery days. A well-handled one, you're operational next day." },
    ],
  },
  {
    slug: 'travel-safely-solo',
    title: "Voyager seul(e) en sécurité : le guide complet",
    titleEn: "How to Travel Safely Solo: The Complete Guide",
    excerpt: "Voyager seul(e) n'est pas dangereux. C'est mal préparé que ça l'est. Voilà le manuel.",
    excerptEn: "Solo travel isn't dangerous. Unprepared travel is. Here's the manual.",
    date: '2026-04-28',
    readTime: 7,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/solo-travel.png',
    content: [
      { type: 'paragraph', text: "Voyager seul(e) est l'une des expériences les plus formatrices qu'on puisse vivre. Mais ça ne s'improvise pas. Voilà comment partir armé(e)." },
      { type: 'heading', text: "Avant de partir" },
      { type: 'list', items: [
        "Recherche : zones sûres et zones à éviter, ambassade, numéro d'urgence local.",
        "Hébergement : choisis des lieux bien notés, dans des quartiers sûrs, avec personnel 24/7.",
        "Communication : iSIM, copies de tes documents stockées en ligne.",
        "Itinéraire partagé : envoie ton planning à 2 personnes de confiance.",
        "Assurance voyage : médicale + rapatriement + vol/perte. Non négociable.",
        "Apprends 10 phrases-clés dans la langue : 'au secours, police, hôpital, je suis perdue'.",
      ]},
      { type: 'heading', text: "Sur place : la sécurité quotidienne" },
      { type: 'list', items: [
        "Évite l'écouteur dans les deux oreilles dans la rue. Tu dois entendre.",
        "Habille-toi en discrétion : pas de bijoux apparents, pas de logos qui crient.",
        "Vérifie le profil du chauffeur Uber/Grab avant de monter. Photo, plaque.",
        "Garde ton sac fermé devant toi en zone bondée.",
        "Cash dans plusieurs endroits : poche, sac, caché. Jamais tout au même endroit.",
      ]},
      { type: 'heading', text: "La nuit" },
      { type: 'list', items: [
        "Reste dans des zones publiques bien éclairées.",
        "Ne quitte jamais ton verre des yeux. Drogue dans les boissons = réalité, pas film.",
        "Ne dis pas où tu loges aux gens rencontrés le soir.",
        "Rentre en taxi officiel ou Uber. Pas à pied dans une rue déserte.",
      ]},
      { type: 'heading', text: "L'instinct" },
      { type: 'paragraph', text: "Si une situation te semble bizarre, elle l'est. Pars, recule, change de plan. Personne ne t'en voudra. Et toi, tu seras en sécurité." },
      { type: 'heading', text: "Spécial femmes" },
      { type: 'list', items: [
        "Recherche les codes vestimentaires locaux. Robe modeste = moins de regards.",
        "Voyage avec une fausse alliance dans certains pays. Les hommes te laisseront tranquille.",
        "Connais les zones / heures à risque par destination.",
        "Apprends à dire 'non' fort et assertif. Pas de sourire poli.",
      ]},
      { type: 'heading', text: "Le mythe à briser" },
      { type: 'paragraph', text: "Voyager seul(e) ne veut pas dire 'être seul(e)'. Tu rencontres plus de gens en solo qu'en groupe. Les gens viennent vers toi. Les locaux t'invitent. Les autres voyageurs t'incluent." },
      { type: 'quote', text: "Le danger n'est pas dans la destination. Il est dans le manque de préparation. Prépare-toi, et le monde devient ton terrain." },
    ],
    contentEn: [
      { type: 'paragraph', text: "Solo travel is one of the most formative experiences you can have. But it isn't improvised. Here's how to leave armed." },
      { type: 'heading', text: "Before leaving" },
      { type: 'list', items: [
        "Research: safe zones and risk zones, embassy, local emergency number.",
        "Accommodation: well-rated places, safe neighborhoods, 24/7 staff.",
        "Communication: eSIM, copies of your documents stored online.",
        "Shared itinerary: send your plan to 2 trusted people.",
        "Travel insurance: medical + repatriation + theft/loss. Non-negotiable.",
        "Learn 10 key phrases in the language: 'help, police, hospital, I'm lost'.",
      ]},
      { type: 'heading', text: "On site: daily safety" },
      { type: 'list', items: [
        "Avoid both earbuds in on the street. You must hear.",
        "Dress unflashy: no visible jewelry, no loud logos.",
        "Verify Uber/Grab driver profile before getting in. Photo, plate.",
        "Keep your bag closed in front of you in crowded zones.",
        "Cash in multiple spots: pocket, bag, hidden. Never all in one place.",
      ]},
      { type: 'heading', text: "At night" },
      { type: 'list', items: [
        "Stay in well-lit public areas.",
        "Never let your drink out of sight. Drink-spiking is real, not film.",
        "Don't tell strangers where you sleep at night.",
        "Go home by official taxi or Uber. Not on foot down a deserted street.",
      ]},
      { type: 'heading', text: "Instinct" },
      { type: 'paragraph', text: "If a situation feels off, it is. Leave, back off, change plan. Nobody will hold it against you. And you'll be safe." },
      { type: 'heading', text: "Specific to women" },
      { type: 'list', items: [
        "Research local dress codes. Modest dress = fewer stares.",
        "Travel with a fake wedding ring in some countries. Men leave you alone.",
        "Know risk zones / hours per destination.",
        "Learn to say 'no' firm and assertive. No polite smile.",
      ]},
      { type: 'heading', text: "The myth to bust" },
      { type: 'paragraph', text: "Solo travel doesn't mean 'being alone'. You meet more people solo than in groups. People come to you. Locals invite you. Other travelers include you." },
      { type: 'quote', text: "Danger isn't in the destination. It's in the lack of preparation. Prepare, and the world becomes your playground." },
    ],
  },
  {
    slug: 'travel-world-tight-budget',
    title: "Voyager dans le monde avec un petit budget",
    titleEn: "How to Travel the World on a Tight Budget",
    excerpt: "Pas besoin de 10 000€ pour voir 10 pays. Voilà comment voyager longtemps avec peu.",
    excerptEn: "You don't need €10,000 to see 10 countries. Here's how to travel long with little.",
    date: '2026-04-28',
    readTime: 7,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/budget-travel.png',
    content: [
      { type: 'paragraph', text: "Voyager pas cher, ce n'est pas voyager mal. C'est voyager malin. Voilà la méthode pour partir longtemps avec un petit budget." },
      { type: 'heading', text: "Choisir la destination" },
      { type: 'list', items: [
        "Asie du Sud-Est : 25-35€/jour tout compris en mode standard. Vietnam, Thaïlande, Cambodge, Laos.",
        "Amérique latine : Mexique, Bolivie, Pérou. 35-45€/jour.",
        "Europe de l'Est : Pologne, Albanie, Roumanie. 40-55€/jour.",
        "Évite : Suisse, Norvège, Japon en haute saison, Singapour. Magnifiques mais doubles.",
      ]},
      { type: 'heading', text: "Vol pas cher" },
      { type: 'list', items: [
        "Flexibilité : ±3 jours = -30% souvent.",
        "Multi-cités : pars d'une ville, reviens d'une autre. Évite les vols circulaires.",
        "Hors saison : -40% sur les mêmes destinations.",
        "Comparateurs : Skyscanner, Kiwi, Google Flights. Alertes prix.",
        "Cartes de crédit voyage : miles + bonus signup = vols gratuits.",
      ]},
      { type: 'heading', text: "Hébergement" },
      { type: 'list', items: [
        "Hostels : dortoirs à 8-15€/nuit. Tu rencontres tout le monde.",
        "Guesthouses : équivalent local des B&B. Pas cher et chaleureux.",
        "Airbnb avec cuisine : économie sur les repas + sentiment 'à la maison'.",
        "Couchsurfing / Trustroots : gratuit, rencontres garanties.",
        "Workaway / Worldpackers : tu travailles 4-5h/jour contre logement et nourriture.",
      ]},
      { type: 'heading', text: "Bouffe" },
      { type: 'list', items: [
        "Marchés locaux et street food : 1-3€ le repas en Asie.",
        "Cuisiner toi-même 1 repas/jour si tu as une cuisine. -50% sur le budget bouffe.",
        "Évite les restos avec menu en 5 langues. C'est cher et moyen.",
        "Lunch des restos chics > dîner. Mêmes plats, prix divisés par 2.",
      ]},
      { type: 'heading', text: "Activités" },
      { type: 'list', items: [
        "Visites guidées gratuites : free walking tours dans presque chaque ville.",
        "Parcs, plages, randonnées : gratuits.",
        "Musées : jours gratuits + cartes étudiant + entrées combinées.",
        "Demande à ton hôte : il connaît les pépites gratuites.",
      ]},
      { type: 'heading', text: "Tracker ton budget" },
      { type: 'list', items: [
        "Trail Wallet, TravelSpend : apps dédiées au budget voyage.",
        "Cash dans une enveloppe par jour : tu vois physiquement ta limite.",
        "Préviens ta banque, utilise une carte sans frais à l'étranger (Wise, Revolut).",
      ]},
      { type: 'quote', text: "Le voyage économique n'est pas une privation. C'est une école d'inventivité, de rencontres, et d'humilité." },
    ],
    contentEn: [
      { type: 'paragraph', text: "Cheap travel isn't bad travel. It's smart travel. Here's the method to travel long with little." },
      { type: 'heading', text: "Pick the destination" },
      { type: 'list', items: [
        "Southeast Asia: €25–35/day all-in in standard mode. Vietnam, Thailand, Cambodia, Laos.",
        "Latin America: Mexico, Bolivia, Peru. €35–45/day.",
        "Eastern Europe: Poland, Albania, Romania. €40–55/day.",
        "Avoid: Switzerland, Norway, Japan high season, Singapore. Beautiful but double.",
      ]},
      { type: 'heading', text: "Cheap flights" },
      { type: 'list', items: [
        "Flexibility: ±3 days = often −30%.",
        "Multi-city: depart from one city, return from another. Avoid circulars.",
        "Off-season: −40% on the same destinations.",
        "Comparators: Skyscanner, Kiwi, Google Flights. Price alerts.",
        "Travel credit cards: miles + signup bonuses = free flights.",
      ]},
      { type: 'heading', text: "Lodging" },
      { type: 'list', items: [
        "Hostels: dorms €8–15/night. You meet everyone.",
        "Guesthouses: local B&Bs. Cheap and warm.",
        "Airbnb with kitchen: meal savings + 'at home' feel.",
        "Couchsurfing / Trustroots: free, guaranteed encounters.",
        "Workaway / Worldpackers: you work 4–5h/day for room and food.",
      ]},
      { type: 'heading', text: "Food" },
      { type: 'list', items: [
        "Local markets and street food: €1–3/meal in Asia.",
        "Cook 1 meal/day yourself if you have a kitchen. −50% food budget.",
        "Avoid restaurants with menus in 5 languages. Expensive and average.",
        "Fancy place lunch > dinner. Same dishes, half price.",
      ]},
      { type: 'heading', text: "Activities" },
      { type: 'list', items: [
        "Free walking tours: in almost every city.",
        "Parks, beaches, hikes: free.",
        "Museums: free days + student cards + combined tickets.",
        "Ask your host: they know the hidden free gems.",
      ]},
      { type: 'heading', text: "Track your budget" },
      { type: 'list', items: [
        "Trail Wallet, TravelSpend: dedicated travel budget apps.",
        "Cash in a daily envelope: you physically see your limit.",
        "Notify your bank, use no-fee abroad cards (Wise, Revolut).",
      ]},
      { type: 'quote', text: "Budget travel isn't deprivation. It's a school of inventiveness, encounters, and humility." },
    ],
  },
  {
    slug: 'travelling-fight-depression',
    title: "Comment voyager peut aider à combattre la dépression",
    titleEn: "How Travelling Can Help Fight Depression",
    excerpt: "Le voyage n'est pas une thérapie. Mais c'est un outil puissant pour redémarrer un cerveau bloqué.",
    excerptEn: "Travel isn't therapy. But it's a powerful tool to restart a stuck brain.",
    date: '2026-04-28',
    readTime: 7,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/travel-depression.png',
    content: [
      { type: 'paragraph', text: "Voyager n'est pas un médicament. Mais c'est un mouvement physique et mental qui sort des routines qui maintiennent la dépression en place." },
      { type: 'heading', text: "Pourquoi ça aide vraiment" },
      { type: 'list', items: [
        "Rupture de routine : la dépression aime la répétition. Le voyage la casse.",
        "Réduction du cortisol : changement d'environnement = baisse mesurée du stress chronique.",
        "Lumière naturelle : un voyage au soleil après un hiver gris = thérapie de luminothérapie naturelle.",
        "Mouvement physique : marche quotidienne, escaliers, kayak — endorphines.",
        "Nouvelles connexions : sortir de l'isolement social, parler à des inconnus.",
        "Sentiment d'accomplissement : tu as pris un avion seul. Tu as commandé en thaï. Tu as survécu.",
      ]},
      { type: 'heading', text: "Le type de voyage qui aide le plus" },
      { type: 'list', items: [
        "Voyage solo : self-discovery, autonomie, fierté.",
        "Voyage en groupe organisé : lien social structuré, peu de décisions à prendre.",
        "Retraite nature : forêt, mer, montagne. Le système nerveux se calme.",
        "Voyage culturel : nouveau sens, perspective, humilité.",
        "Aventure douce : trek facile, vélo, kayak. Pas l'extrême.",
      ]},
      { type: 'heading', text: "Préparer un voyage 'thérapeutique'" },
      { type: 'list', items: [
        "Ne te sur-charge pas. 1-2 activités par jour max.",
        "Choisis un endroit qui te fait respirer. Pas une métropole frénétique.",
        "Voyage avec une intention : rest, écriture, deuil, renouveau.",
        "Garde un journal : exprimer = soulager.",
        "Reste connecté à un ami / thérapeute. Pas une coupure totale.",
      ]},
      { type: 'heading', text: "Les pièges à éviter" },
      { type: 'list', items: [
        "L'illusion 'je vais me trouver à Bali'. Tu ramènes ce que tu emmènes.",
        "Voyage avec dépression sévère sans encadrement médical : risque réel.",
        "Solitude prolongée si tu rumines. Préfère un trip avec des étapes humaines.",
        "Comparaison aux 'super-voyageurs' Instagram. Tu n'es pas eux. Et eux non plus.",
      ]},
      { type: 'heading', text: "Si tu reviens et que c'est revenu" },
      { type: 'paragraph', text: "C'est normal. Le voyage est un déclic, pas une cure. Reviens avec une routine renforcée : sport, sommeil, lien social, lumière, thérapie si besoin. Le voyage t'a donné l'élan. À toi de continuer." },
      { type: 'quote', text: "On ne guérit pas en voyageant. Mais on commence à respirer. Et c'est par là que la guérison commence." },
    ],
    contentEn: [
      { type: 'paragraph', text: "Travel isn't medication. But it's a physical and mental movement that breaks out of the routines depression locks you into." },
      { type: 'heading', text: "Why it really helps" },
      { type: 'list', items: [
        "Routine break: depression loves repetition. Travel kills it.",
        "Cortisol drop: environment change = measurable chronic-stress reduction.",
        "Natural light: a sunny trip after a gray winter = natural light therapy.",
        "Physical movement: daily walks, stairs, kayaking — endorphins.",
        "New connections: out of social isolation, talking to strangers.",
        "Sense of accomplishment: you took a plane alone. Ordered in Thai. Survived.",
      ]},
      { type: 'heading', text: "The travel that helps most" },
      { type: 'list', items: [
        "Solo travel: self-discovery, autonomy, pride.",
        "Group travel: structured social bond, few decisions.",
        "Nature retreat: forest, sea, mountain. Nervous system calms.",
        "Cultural travel: new meaning, perspective, humility.",
        "Soft adventure: easy trek, biking, kayak. Not extreme.",
      ]},
      { type: 'heading', text: "Preparing a 'therapeutic' trip" },
      { type: 'list', items: [
        "Don't overpack the schedule. 1–2 activities per day max.",
        "Choose a place that lets you breathe. Not a frantic metropolis.",
        "Travel with intent: rest, writing, grief, renewal.",
        "Keep a journal: express = relieve.",
        "Stay connected to a friend / therapist. Not full cut-off.",
      ]},
      { type: 'heading', text: "Pitfalls" },
      { type: 'list', items: [
        "The 'I'll find myself in Bali' illusion. You bring what you bring.",
        "Travel with severe depression without medical follow-up: real risk.",
        "Prolonged solitude if you ruminate. Prefer a trip with human stops.",
        "Comparing to Instagram 'super-travelers'. You aren't them. They aren't them either.",
      ]},
      { type: 'heading', text: "If you return and it returns" },
      { type: 'paragraph', text: "Normal. Travel is a trigger, not a cure. Come back with a stronger routine: sport, sleep, social ties, light, therapy if needed. Travel gave you momentum. You continue." },
      { type: 'quote', text: "You don't heal by traveling. But you start to breathe. And that's where healing begins." },
    ],
  },
  {
    slug: 'kuala-lumpur-deuxieme-voyage',
    title: "Mon deuxième voyage à Kuala Lumpur",
    titleEn: "My Second Trip to Kuala Lumpur",
    excerpt: "Retour à KL pour de courtes vacances : jardin botanique, Petronas, grottes de Batu, musée national, parc d'attractions et averse tropicale. Une ville que j'affectionne plus à chaque passage.",
    excerptEn: "Back to KL for a short break: botanical garden, Petronas, Batu Caves, national museum, theme park and a tropical downpour. A city I love a little more every time.",
    date: '2026-05-02',
    readTime: 5,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/kuala-lumpur.jpg',
    content: [
      { type: 'paragraph', text: "Je suis récemment revenu à Kuala Lumpur pour de courtes vacances. C'est une ville que j'affectionne beaucoup pour sa qualité de vie, sa modernité — les gratte-ciel y sont omniprésents — sa convivialité et la bienveillance des locaux à mon égard. Deuxième passage, et toujours autant de plaisir à retrouver ses rues." },
      { type: 'heading', text: "Jour 1 : jardin botanique, Petronas et nuit en ville" },
      { type: 'paragraph', text: "J'ai commencé assez simplement avec une visite du jardin botanique. Splendide parc qui met en valeur la nature avec des étendues vertes magnifiques, une bonne mise en jambe pour reprendre contact avec la ville. J'ai prolongé le moment dans un coffee shop local autour d'un matcha — ambiance calme, lumière douce, exactement ce qu'il fallait." },
      { type: 'paragraph', text: "J'ai ensuite poursuivi en parcourant le mall des Petronas Towers (les fameuses tours jumelles), un espace immense rempli de magasins et de restaurants. On peut facilement y passer un après-midi entier sans s'en rendre compte, et lever les yeux de temps en temps pour se rappeler où l'on est." },
      { type: 'paragraph', text: "Quoi de mieux pour terminer la journée qu'un moment de détente au Club Millenium, un endroit charmant rempli de jolies demoiselles. L'alcool y est évidemment à consommer avec modération." },
      { type: 'heading', text: "Jour 2 : grottes de Batu et musée national" },
      { type: 'paragraph', text: "Au jour 2, je suis parti explorer les grottes de Batu, et je n'ai pas été déçu : une immense caverne resplendissante de beauté s'offrait à mes yeux, avec cette lumière qui tombe depuis les ouvertures naturelles dans la voûte. Les marches arc-en-ciel, la statue dorée de Murugan à l'entrée et les macaques en surveillance complètent un tableau qu'on n'oublie pas." },
      { type: 'paragraph', text: "J'ai continué la journée avec une visite au musée national de KL. Un endroit très intéressant avec divers objets présentés — poteries, armes, vêtements, scènes de la vie traditionnelle. Une immersion au cœur de l'histoire malaisienne à ne manquer sous aucun prétexte si tu veux comprendre ce que tu croises ensuite dans la ville." },
      { type: 'paragraph', text: "Le soir, j'ai mangé dans un délicieux restaurant pakistanais [NOM ET ADRESSE À COMPLÉTER]. Cuisine généreuse, parfumée, qui laisse repu pour le reste de la soirée." },
      { type: 'heading', text: "Parc d'attractions et pluie tropicale" },
      { type: 'paragraph', text: "Pour la suite de mon voyage, je suis allé me détendre au parc d'attractions [NOM DU PARC À COMPLÉTER]. Un endroit charmant rempli d'attractions à sensations fortes : roller coasters, toboggans, manèges en tout genre. On s'y plaît à rester des heures — sois patient pour la queue, qui peut vraiment être frustrante en haute affluence." },
      { type: 'paragraph', text: "La pluie est malheureusement venue gâcher mon périple. Une averse tropicale comme la Malaisie en a le secret : tu es trempé en trente secondes et une partie des attractions extérieures ferme. Tant pis, il faut faire avec — c'est aussi ça l'Asie du Sud-Est." },
      { type: 'heading', text: "Retour à la maison" },
      { type: 'paragraph', text: "Mon voyage à KL s'achevait. Je rentrais à la maison le cœur léger, plein de souvenirs en tête, avec déjà l'envie d'y revenir une troisième fois." },
      { type: 'quote', text: "Kuala Lumpur n'a pas la photogénie évidente de Bangkok ou Singapour. Mais elle a une chaleur humaine que peu de capitales asiatiques savent encore offrir." },
      { type: 'paragraph', text: "Je vous invite vraiment à vous rendre dans cette ville vibrante et pleine de vie. Prochaine destination, prochain article : George Town, à Penang. Portez-vous bien :)" },
    ],
    contentEn: [
      { type: 'paragraph', text: "I recently came back to Kuala Lumpur for a short break. It's a city I love for its quality of life, its sheer modernity — skyscrapers are everywhere — its friendliness, and the kindness locals always show me. Second visit, and still as much pleasure walking its streets." },
      { type: 'heading', text: "Day 1: botanical garden, Petronas and night out" },
      { type: 'paragraph', text: "I started simply with a visit to the botanical garden. A stunning park that puts nature centre stage with magnificent green spaces — a perfect warm-up to reconnect with the city. I stretched the moment with a matcha at a local coffee shop: calm vibe, soft light, exactly what I needed." },
      { type: 'paragraph', text: "I then carried on through the Petronas Towers mall (the famous twin towers), a huge space filled with shops and restaurants. You can easily spend a whole afternoon there without noticing — and look up every now and then to remember where you are." },
      { type: 'paragraph', text: "What better way to end the day than a relaxed evening at Club Millenium, a charming spot full of beautiful young women. Alcohol, of course, to be enjoyed in moderation." },
      { type: 'heading', text: "Day 2: Batu Caves and national museum" },
      { type: 'paragraph', text: "On day 2, I set off to explore the Batu Caves — and I wasn't disappointed: a huge cave glowing with beauty opened up before my eyes, with that natural light dropping from the openings in the vault. Rainbow steps, the golden Murugan statue at the entrance, and the watching macaques complete a scene you don't forget." },
      { type: 'paragraph', text: "I continued the day with a visit to KL's national museum. A really interesting place with a wide range of objects on display — pottery, weapons, clothing, traditional life scenes. A deep dive into Malaysian history that you shouldn't skip if you want to make sense of what you'll see in town afterwards." },
      { type: 'paragraph', text: "In the evening, I ate at a delicious Pakistani restaurant [NAME AND ADDRESS TO BE FILLED IN]. Generous, fragrant cuisine that leaves you happily full for the rest of the night." },
      { type: 'heading', text: "Theme park and tropical rain" },
      { type: 'paragraph', text: "Next on the trip, I went to unwind at [NAME OF THE PARK TO BE FILLED IN] theme park. A lovely spot packed with thrill rides: roller coasters, water slides, all kinds of attractions. You happily spend hours there — just be patient with the queue, which can get truly frustrating in peak season." },
      { type: 'paragraph', text: "Rain unfortunately came in to ruin part of the day. A tropical downpour Malaysia knows how to deliver: soaked in thirty seconds, and a chunk of the outdoor rides shut down. Oh well, you live with it — that's Southeast Asia too." },
      { type: 'heading', text: "Heading home" },
      { type: 'paragraph', text: "My KL trip was wrapping up. I was heading home with a light heart, head full of memories, and already the urge to come back a third time." },
      { type: 'quote', text: "Kuala Lumpur lacks the obvious photogenic appeal of Bangkok or Singapore. But it has a human warmth few Asian capitals still know how to offer." },
      { type: 'paragraph', text: "I really encourage you to visit this vibrant, lively city. Next destination, next article: George Town, in Penang. Take care of yourselves :)" },
    ],
  },
  {
    slug: 'preparer-arrivee-vietnam',
    title: "Comment bien préparer son arrivée au Vietnam",
    titleEn: "How to Properly Prepare Your Arrival in Vietnam",
    excerpt: "SIM 5G à l'aéroport, taxi VinaSun à éviter les arnaques, Grab, logement, street food, eau et culture du café : le checklist concret pour débarquer au Vietnam sereinement.",
    excerptEn: "5G SIM at the airport, VinaSun taxi to dodge scams, Grab, housing, street food, water and coffee culture: the practical checklist to land in Vietnam stress-free.",
    date: '2026-05-02',
    readTime: 5,
    category: 'Voyages',
    categoryEn: 'Travel',
    thumbnail: '/blog/vietnam-guide-complet.png',
    ebookCta: true,
    ebookType: 'vietnam',
    content: [
      { type: 'paragraph', text: "Lorsque vous voyagez au Vietnam, il est important de bien préparer son arrivée pour éviter les mauvaises surprises. Voici la checklist que j'aurais aimé avoir avant mon premier vol — celle qui te fait gagner du temps, de l'argent et un peu de tranquillité d'esprit dès la sortie de l'avion." },
      { type: 'heading', text: "Une carte SIM 5G dès l'aéroport" },
      { type: 'paragraph', text: "Il va vous falloir une bonne connexion 5G dès l'arrivée au pays. Il est donc bien pratique de trouver au sein même de l'aéroport une boutique de SIM. Prenez un opérateur Viettel ou Mobifone pour garantir une bonne qualité de connexion : ce sont les deux réseaux les plus fiables, particulièrement en dehors des grandes villes." },
      { type: 'paragraph', text: "Comptez environ 200 000 à 300 000 VND (8–12 €) pour une SIM touriste avec data illimitée valable un mois. Le passeport est demandé au moment de l'achat, c'est normal." },
      { type: 'heading', text: "Taxi à la sortie : VinaSun, et seulement VinaSun" },
      { type: 'paragraph', text: "Pour le taxi à la sortie de l'aéroport, je vous conseille de vous fier à la compagnie VinaSun. Ils sont très peu chers et compétents, et ils vous attendent dès la sortie, au fond à gauche." },
      { type: 'paragraph', text: "Attention : il y a beaucoup de compagnies qui arnaquent les voyageurs avec des prix très élevés — jusqu'à 3 fois plus cher pour la même course. Si quelqu'un vient vous rabattre dans le hall, c'est rarement bon signe. Marchez jusqu'à la file officielle, ouvrez l'œil sur le compteur, et exigez qu'il soit enclenché dès le départ." },
      { type: 'quote', text: "La première erreur d'un voyageur au Vietnam, c'est presque toujours le taxi de l'aéroport. Évite-la et tu démarres ton séjour bien mieux que 80 % des arrivants." },
      { type: 'heading', text: "Grab : ton Uber + Uber Eats local" },
      { type: 'paragraph', text: "Pour la suite, il est important de télécharger l'application Grab, qui est l'équivalent d'Uber et Uber Eats chez nous. Tu réserves une voiture, une moto-taxi ou un repas livré, tu paies en cash ou par carte enregistrée, et tu vois le prix avant de confirmer — fini les négociations à la sauvage." },
      { type: 'paragraph', text: "Active Grab dès que ta SIM est en place. La moto-taxi (GrabBike) est imbattable pour traverser une ville embouteillée, et c'est souvent 2 à 3 fois moins cher qu'un taxi voiture." },
      { type: 'heading', text: "Logement : AirBnb ou Booking" },
      { type: 'paragraph', text: "Pour le logement, vous pouvez facilement trouver votre bonheur sur AirBnb ou prendre un hôtel via Booking.com. Vous vous en sortirez pour une vingtaine d'euros par nuit pour un appartement de qualité — climatisation, wifi correct, parfois piscine sur le toit dans les grandes villes." },
      { type: 'paragraph', text: "Conseil : pour un premier séjour, réserve les 3 ou 4 premières nuits, puis adapte selon ton ressenti une fois sur place. Tu trouveras toujours mieux et moins cher en demandant aux locaux." },
      { type: 'heading', text: "Street food : ne passe pas à côté" },
      { type: 'paragraph', text: "La nourriture se trouve partout dans la rue. N'hésite pas à goûter à la street food, c'est cheap et délicieux — phở, bánh mì, bún chả, cơm tấm — la liste est infinie. Le bon repère : un stand avec beaucoup de locaux qui mangent dessus, c'est presque toujours un gage de qualité (et de fraîcheur)." },
      { type: 'paragraph', text: "Compte 30 000 à 60 000 VND (1–2,50 €) pour un plat copieux. C'est probablement le meilleur rapport qualité/prix du monde." },
      { type: 'heading', text: "Eau : toujours en bouteille" },
      { type: 'paragraph', text: "L'eau n'est pas potable au Vietnam. Il est donc nécessaire d'acheter des bouteilles d'eau au marché du coin pour bien rester hydraté. Une grande bouteille de 1,5 L coûte environ 10 000 VND (0,40 €), donc aucune raison de prendre des risques." },
      { type: 'paragraph', text: "Petit bonus écolo : beaucoup d'hôtels et de coworkings proposent des fontaines à eau filtrée. Pense à voyager avec une gourde, tu réduis tes déchets plastiques d'un coup." },
      { type: 'heading', text: "Café : un vrai art de vivre" },
      { type: 'paragraph', text: "Au Vietnam, le café est un art de vivre. Entrez dans un des nombreux coffee shops de la ville où vous vous situez et n'hésitez pas à y passer des heures — vous ne vous ferez pas virer. Au contraire : la plupart des cafés sont conçus pour qu'on s'y installe, qu'on y travaille, qu'on y discute des après-midi entiers." },
      { type: 'paragraph', text: "Goûte au minimum un cà phê sữa đá (café glacé au lait concentré) et un egg coffee (café à la mousse de jaune d'œuf, spécialité de Hanoï). Tu changeras peut-être ton rapport au café pour de bon." },
      { type: 'heading', text: "Voilà, tu es prêt" },
      { type: 'paragraph', text: "Voilà, je crois bien que j'ai tout dit. SIM, taxi, Grab, logement, street food, eau, café : avec ces 7 réflexes, tu démarres ton voyage du bon pied et tu évites les pièges les plus classiques." },
      { type: 'paragraph', text: "Êtes-vous prêts à partir à l'aventure ? :)" },
    ],
    contentEn: [
      { type: 'paragraph', text: "When you travel to Vietnam, getting your arrival right matters — it saves you time, money and a fair amount of stress in the first hours. Here's the checklist I wish I'd had before my first flight." },
      { type: 'heading', text: "A 5G SIM card right at the airport" },
      { type: 'paragraph', text: "You'll need a solid 5G connection from the moment you land. The easiest move is to grab a SIM at the airport itself. Pick Viettel or Mobifone — these two networks give you the best coverage, especially outside the big cities." },
      { type: 'paragraph', text: "Budget around 200,000–300,000 VND (€8–12) for a tourist SIM with unlimited data valid for a month. They'll ask for your passport at purchase — that's normal." },
      { type: 'heading', text: "Taxi at the exit: VinaSun, and only VinaSun" },
      { type: 'paragraph', text: "For your taxi out of the airport, stick to VinaSun. They're cheap, professional, and they wait right at the exit — far back, on the left." },
      { type: 'paragraph', text: "Heads up: a lot of companies scam travellers with crazy prices — up to 3x the real fare. If someone tries to pull you in inside the terminal, it's almost never a good deal. Walk to the official line, watch the meter, and make sure it's started from the very beginning." },
      { type: 'quote', text: "The first mistake travellers make in Vietnam is almost always the airport taxi. Skip it and you'll start your trip ahead of 80% of new arrivals." },
      { type: 'heading', text: "Grab: your local Uber + Uber Eats" },
      { type: 'paragraph', text: "Next, download Grab — it's the local equivalent of Uber and Uber Eats. You can book a car, a motorbike taxi, or get food delivered, pay in cash or with a saved card, and see the price before confirming. No more roadside haggling." },
      { type: 'paragraph', text: "Activate Grab as soon as your SIM is up. GrabBike (motorbike taxi) is unbeatable for cutting through traffic in big cities — and it's usually 2 to 3 times cheaper than a car." },
      { type: 'heading', text: "Accommodation: AirBnb or Booking" },
      { type: 'paragraph', text: "For housing, AirBnb and Booking.com both work great. Around €20 a night gets you a quality apartment — air conditioning, decent wifi, sometimes a rooftop pool in the big cities." },
      { type: 'paragraph', text: "Tip: for a first trip, book your first 3 or 4 nights only, then adjust once you're on the ground. You'll always find better and cheaper deals by asking locals." },
      { type: 'heading', text: "Street food: don't miss out" },
      { type: 'paragraph', text: "Food is everywhere on the street. Don't be afraid to dive into street food — it's cheap and delicious: phở, bánh mì, bún chả, cơm tấm — the list goes on. Best rule of thumb: a stall packed with locals is almost always a good sign (quality and freshness)." },
      { type: 'paragraph', text: "Expect 30,000–60,000 VND (€1–2.50) for a generous meal. Probably the best value-for-money food in the world." },
      { type: 'heading', text: "Water: always bottled" },
      { type: 'paragraph', text: "Tap water isn't drinkable in Vietnam. You have to buy bottled water from the local shops to stay hydrated. A 1.5L bottle is around 10,000 VND (€0.40), so really no reason to take risks." },
      { type: 'paragraph', text: "Bonus eco tip: many hotels and coworking spaces have filtered-water dispensers. Travel with a refillable bottle and you'll cut your plastic waste right down." },
      { type: 'heading', text: "Coffee: a real way of life" },
      { type: 'paragraph', text: "In Vietnam, coffee is a way of life. Step into one of the many coffee shops in whatever city you're in, and feel free to spend hours there — no one will kick you out. Most cafés are designed for you to settle in, work, chat away the afternoon." },
      { type: 'paragraph', text: "Try at least a cà phê sữa đá (iced coffee with condensed milk) and an egg coffee (coffee with whipped egg yolk foam, a Hanoi specialty). It might just change your relationship with coffee for good." },
      { type: 'heading', text: "There you go, you're ready" },
      { type: 'paragraph', text: "I think that covers it. SIM, taxi, Grab, accommodation, street food, water, coffee: with these 7 reflexes, you start your trip on the right foot and skip the classic traps." },
      { type: 'paragraph', text: "Are you ready for the adventure? :)" },
    ],
  },
];

export default posts;
