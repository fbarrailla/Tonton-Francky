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
];

export default posts;
