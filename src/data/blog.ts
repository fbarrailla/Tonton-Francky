export interface BlogSection {
  type: 'paragraph' | 'heading' | 'list' | 'quote' | 'code';
  text?: string;
  items?: string[];
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
  ebookType?: 'claude' | 'ai';
  content: BlogSection[];
  contentEn: BlogSection[];
}

const posts: BlogPost[] = [
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
];

export default posts;
