import type { About, Contact, Home, Newsletter, Person, Services, Social, Team } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

type Language = "en" | "fr";

const translations = {
  en: {
    person: {
      firstName: "Tangent",
      lastName: "Consulting",
      name: "Tangent Consulting",
      role: "Independent AI & Engineering Advisor",
      languages: ["English"],
    },
    home: {
      label: "Home",
      title: "Tangent Consulting - Independent AI & Engineering Advisory",
      description:
        "Independent AI advisor for leadership teams: decide where AI pays off, build it properly, keep your data private, and train your teams.",
      headline: <>Build AI that works in the real world.</>,
      subline: (
        <>
          I help startups and engineering teams design, deploy and optimize AI systems, and make
          better decisions about technology, infrastructure and hiring.
        </>
      ),
    },
    services: {
      label: "Services",
      title: "Services - Tangent Consulting",
      description:
        "AI strategy and engineering, private AI and infrastructure, engineering leadership and hiring, team training and AI & data governance for startups and engineering teams.",
      services: [
        {
          title: "AI Strategy & Engineering",
          description: <>Make the right technical decisions when building AI-powered products.</>,
          includes: [
            "AI use-case assessment and technical roadmaps",
            "Model selection and architecture design",
            "RAG systems and knowledge integration",
            "Evaluation, reliability and production readiness",
            "AI integration into existing applications",
          ],
        },
        {
          title: "Private AI & Infrastructure",
          description: (
            <>
              Deploy AI systems efficiently while maintaining control over your infrastructure and
              data.
            </>
          ),
          includes: [
            "On-premise and private AI deployment",
            "Self-hosted language and speech models",
            "GPU sizing and inference optimization",
            "Model serving and performance benchmarking",
            "Infrastructure cost analysis",
          ],
        },
        {
          title: "Engineering Leadership & Hiring",
          description: (
            <>
              Independent technical expertise when you need it, without necessarily hiring a
              full-time technical leader.
            </>
          ),
          includes: [
            "Fractional CTO and engineering advisory",
            "Architecture and codebase assessments",
            "Technical interviews and candidate evaluation",
            "Engineering process and productivity reviews",
            "Technology and vendor selection",
          ],
        },
        {
          title: "Team Training",
          description: (
            <>Give your teams the practical knowledge and tools to build and run AI systems.</>
          ),
          includes: [
            "Practical AI engineering workshops",
            "LLM infrastructure and deployment training",
            "Sessions tailored to your team's current skill levels",
          ],
        },
        {
          title: "AI & Data Governance",
          description: (
            <>Adopt AI responsibly with clear practices for data, evaluation and internal use.</>
          ),
          includes: [
            "Data and AI governance fundamentals",
            "AI evaluation and reliability practices",
            "Internal AI adoption guidelines",
          ],
        },
      ],
      button: {
        bookACall: "Book an intro call",
      },
    },
    team: {
      label: "About Me",
      title: "About Me - Tangent Consulting",
      description: "Meet the engineer behind Tangent Consulting.",
      members: [
        {
          name: "Landry Monga",
          role: "Founding Engineer",
          bio: (
            <>
              Founding engineer at a defense startup, where my work spans AI, software
              development, on-prem deployment and governance. I'm a practicing AI engineer: I built my
              own open-source agent harness, I serve my own models with vLLM on my own
              GPU, and every system I ship comes with logs, tracing and dashboards.
              I've worked with highly sensitive data and I know how to run data
              governance that holds up in production. Before that I worked at startups
              backed by Y Combinator and Sequoia, and at a unicorn, so I know what it
              takes to make a small engineering team work, and how to build one that's
              a winner.
            </>
          ),
          email: "contact@lvndry.xyz",
          linkedin: "https://www.linkedin.com/in/landry-monga",
          github: "https://github.com/lvndry",
          logos: [
            {
              src: "https://img.logo.dev/dust.tt",
              alt: "Dust",
            },
            {
              src: "https://img.logo.dev/ledger.com",
              alt: "Ledger",
            },
          ],
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Contact - Tangent Consulting",
      description: "Get in touch to discuss your AI or engineering challenge.",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone (Optional)",
        service: "What do you need help with? (Optional)",
        message: "Message",
        submit: "Send Message",
        sending: "Sending...",
        success: "Thank you! We'll get back to you soon.",
        error: "Something went wrong. Please try again or email us directly.",
        placeholder: {
          name: "Your name",
          email: "your.email@company.com",
          phone: "+33 6 12 34 56 78",
          message: "Tell me what is stuck...",
        },
        serviceOptions: {
          select: "Select a service",
          strategy: "AI strategy",
          build: "Build and integrate",
          infrastructure: "Private AI",
          leadership: "Technical leadership",
          training: "Training and governance",
          other: "Other",
        },
      },
    },
    landing: {
      "nav": {
        "services": "Services",
        "about": "About",
        "contact": "Contact",
        "home": "Tangent home"
      },
      "hero": {
        "sentence": "Your AI works in the demo. I get it working every day.",
        "cta": "Book a free intro call"
      },
      "services": {
        "title": "What I do",
        "placeholder": "Pick what is stuck. I will show what I do about it.",
        "action": "Talk about this",
        "mailSubject": "Intro call",
        "mailGreeting": "Hello Landry,",
        "mailTopic": "What is stuck",
        "subsections": [
          {
            "title": "AI",
            "groups": [
              {
                "title": "AI strategy",
                "summary": "Find the few AI projects worth doing.",
                "items": [
                  {
                    "name": "Choosing projects",
                    "text": "Pick the few AI projects worth doing, and drop the rest, before you spend the budget."
                  },
                  {
                    "name": "Build, buy or wait",
                    "text": "A straight answer on whether to build it, buy a tool, or wait six months."
                  },
                  {
                    "name": "A roadmap you can follow",
                    "text": "A plain-language plan with order, owners and costs. Not a slide deck."
                  },
                  {
                    "name": "A second opinion",
                    "text": "A senior review of a plan or a quote you have already received."
                  }
                ]
              },
              {
                "title": "Build and integrate",
                "summary": "Put AI inside your product or operations.",
                "items": [
                  {
                    "name": "AI in your product",
                    "text": "AI features inside your product, reliable enough for customers to depend on."
                  },
                  {
                    "name": "AI in your operations",
                    "text": "AI inside the daily work of your team, wired into the tools they already use."
                  },
                  {
                    "name": "Answers you can trust",
                    "text": "Quality checks so you can trust what the AI says, and see when it is wrong."
                  },
                  {
                    "name": "A clean handover",
                    "text": "A handover your team can maintain without calling me."
                  }
                ]
              },
              {
                "title": "Private AI",
                "summary": "Keep your data on your own servers.",
                "items": [
                  {
                    "name": "On your own servers",
                    "text": "AI that runs on your own servers, so company and customer data stays inside."
                  },
                  {
                    "name": "Data that never leaves",
                    "text": "No third party sees your documents, conversations or customer records."
                  },
                  {
                    "name": "Running costs, up front",
                    "text": "What it costs to run, laid out before you commit to anything."
                  },
                  {
                    "name": "Fits your rules",
                    "text": "A setup that fits your security rules and legal obligations."
                  }
                ]
              }
            ]
          },
          {
            "title": "Leadership and teams",
            "groups": [
              {
                "title": "Technical leadership",
                "summary": "Senior tech judgment without the full-time hire.",
                "items": [
                  {
                    "name": "A part-time tech leader",
                    "text": "Senior technical judgment a few days a month, without a full-time hire."
                  },
                  {
                    "name": "Hiring engineers",
                    "text": "Help interviewing and choosing the right engineers."
                  },
                  {
                    "name": "Reviewing your team",
                    "text": "An honest review of your tech and your team, with what to fix first."
                  },
                  {
                    "name": "Choosing vendors",
                    "text": "Tool and supplier decisions made with you, not for you."
                  }
                ]
              },
              {
                "title": "Training and governance",
                "summary": "Teams that use AI well, and safely.",
                "items": [
                  {
                    "name": "Team workshops",
                    "text": "Hands-on sessions on your team's real work, not generic demos."
                  },
                  {
                    "name": "Rules people follow",
                    "text": "Simple rules for everyday AI use that people actually follow."
                  },
                  {
                    "name": "Rules for your data",
                    "text": "Clear practices for the data you give to AI, and who can see what."
                  },
                  {
                    "name": "Ready for an audit",
                    "text": "Practices that hold up when someone asks you to prove them."
                  }
                ]
              }
            ]
          }
        ]
      },
      "about": {
        "first": "Landry",
        "last": "Monga",
        "passages": [
          {
            "text": "I am a founding engineer at a defense startup. My work spans AI, software development, on-prem deployment and governance.",
            "note": "Where data is sensitive and mistakes are expensive."
          },
          {
            "text": "Before that I worked at startups backed by Y Combinator and Sequoia, and at a unicorn.",
            "logos": [
              { "name": "Y Combinator", "domain": "ycombinator.com" },
              { "name": "Sequoia", "domain": "sequoiacap.com" },
              { "name": "Ledger", "domain": "ledger.com" },
              { "name": "Dust", "domain": "dust.tt" }
            ],
            "note": "So I know how a small team ships, and how to build one that wins."
          },
          {
            "text": "You work with me directly.",
            "note": "If I am not the right person, I will say so on the first call."
          }
        ]
      },
      "contact": {
        "pageTitle": "Contact",
        "pageLede": "Tell me what is stuck and I will reply.",
        "ask": "Write to me about what is stuck.",
        "cta": "Book a free intro call",
        "form": "Or send a message",
        "languages": "English and French",
        "mailBody": "Hello Landry,\n\nHere is what is stuck:\n"
      },
      "footer": {
        "servicesTitle": "Services",
        "writeTitle": "Write",
        "elsewhereTitle": "Elsewhere",
        "languagesTitle": "Languages",
        "languages": [
          "English",
          "Français"
        ]
      }
    },
  },
  fr: {
    person: {
      firstName: "Tangent",
      lastName: "Consulting",
      name: "Tangent Consulting",
      role: "Conseiller indépendant en IA et ingénierie",
      languages: ["Français"],
    },
    home: {
      label: "Accueil",
      title: "Tangent Consulting - Conseil indépendant en IA et ingénierie",
      description:
        "Conseil indépendant en IA pour les équipes dirigeantes : décider où l'IA rapporte, la construire proprement, garder vos données privées et former vos équipes.",
      headline: <>Construisez une IA qui fonctionne dans le monde réel.</>,
      subline: (
        <>
          J&apos;aide les startups et les équipes d&apos;ingénierie à concevoir, déployer et
          optimiser leurs systèmes d&apos;IA, et à mieux décider en matière de technologie,
          d&apos;infrastructure et de recrutement.
        </>
      ),
    },
    services: {
      label: "Services",
      title: "Services - Tangent Consulting",
      description:
        "Stratégie et ingénierie IA, IA privée et infrastructure, leadership technique et recrutement, formation des équipes et gouvernance de l'IA et des données pour les startups et les équipes d'ingénierie.",
      services: [
        {
          title: "Stratégie & ingénierie IA",
          description: (
            <>
              Prenez les bonnes décisions techniques pour construire vos produits basés sur
              l&apos;IA.
            </>
          ),
          includes: [
            "Évaluation des cas d'usage IA et feuilles de route techniques",
            "Choix des modèles et conception d'architecture",
            "Systèmes RAG et intégration des connaissances",
            "Évaluation, fiabilité et préparation à la production",
            "Intégration de l'IA dans les applications existantes",
          ],
        },
        {
          title: "IA privée & infrastructure",
          description: (
            <>
              Déployez vos systèmes d&apos;IA efficacement tout en gardant le contrôle de votre
              infrastructure et de vos données.
            </>
          ),
          includes: [
            "Déploiement d'IA on-premise et privé",
            "Modèles de langage et de parole auto-hébergés",
            "Dimensionnement GPU et optimisation de l'inférence",
            "Serving de modèles et benchmarks de performance",
            "Analyse des coûts d'infrastructure",
          ],
        },
        {
          title: "Leadership technique & recrutement",
          description: (
            <>
              Une expertise technique indépendante quand vous en avez besoin, sans forcément
              recruter un responsable technique à plein temps.
            </>
          ),
          includes: [
            "CTO à temps partagé et conseil en ingénierie",
            "Audits d'architecture et de code",
            "Entretiens techniques et évaluation des candidats",
            "Revue des processus et de la productivité d'ingénierie",
            "Choix des technologies et des fournisseurs",
          ],
        },
        {
          title: "Formation des équipes",
          description: (
            <>
              Donnez à vos équipes les connaissances et les outils pratiques pour construire et
              exploiter des systèmes d&apos;IA.
            </>
          ),
          includes: [
            "Ateliers pratiques d'ingénierie IA",
            "Formation à l'infrastructure et au déploiement des LLM",
            "Sessions adaptées au niveau actuel de vos équipes",
          ],
        },
        {
          title: "Gouvernance de l'IA et des données",
          description: (
            <>
              Adoptez l&apos;IA de façon responsable grâce à des pratiques claires sur les données,
              l&apos;évaluation et l&apos;usage interne.
            </>
          ),
          includes: [
            "Fondamentaux de la gouvernance des données et de l'IA",
            "Bonnes pratiques d'évaluation et de fiabilité de l'IA",
            "Guides internes d'adoption de l'IA",
          ],
        },
      ],
      button: {
        bookACall: "Réserver un appel découverte",
      },
    },
    team: {
      label: "Qui suis-je",
      title: "Qui suis-je - Tangent Consulting",
      description: "Rencontrez l'ingénieur derrière Tangent Consulting.",
      members: [
        {
          name: "Landry Monga",
          role: "Founding Engineer",
          bio: (
            <>
              Founding Engineer dans une startup de défense, mon travail couvre l&apos;IA, le
              développement logiciel, le déploiement on-prem et la gouvernance. Je ne me contente pas de
              conseiller : j&apos;ai construit mon propre harnais d&apos;agents open source,
              je sers mes propres modèles avec vLLM sur mes propres GPU, et chaque
              système que je livre embarque logs, tracing et dashboards. J&apos;ai travaillé
              sur des données très sensibles et je sais faire tourner une gouvernance
              des données qui tient en production. Avant, j&apos;ai travaillé dans des
              startups soutenues par Y Combinator et Sequoia, et dans une licorne, donc je
              sais ce qu&apos;il faut pour faire tourner une petite équipe d&apos;ingénierie, et
              comment construire une équipe qui gagne.
            </>
          ),
          email: "contact@lvndry.xyz",
          linkedin: "https://www.linkedin.com/in/landry-monga",
          github: undefined,
          logos: [
            {
              src: "https://img.logo.dev/dust.tt",
              alt: "Dust",
            },
            {
              src: "https://img.logo.dev/ledger.com",
              alt: "Ledger",
            },
          ],
        },
      ],
      button: {
        bookACall: "Réserver un Appel",
      },
    },
    contact: {
      label: "Contact",
      title: "Contact - Tangent Consulting",
      description: "Contactez-nous pour discuter de votre défi IA ou d'ingénierie.",
      form: {
        name: "Nom",
        email: "Email",
        phone: "Téléphone (Optionnel)",
        service: "De quoi avez-vous besoin ? (Optionnel)",
        message: "Message",
        submit: "Envoyer le Message",
        sending: "Envoi en cours...",
        success: "Merci ! Nous vous répondrons bientôt.",
        error:
          "Une erreur s'est produite. Veuillez réessayer ou nous envoyer un email directement.",
        placeholder: {
          name: "Votre nom",
          email: "votre.email@entreprise.com",
          phone: "+33 6 12 34 56 78",
          message: "Dites-moi ce qui bloque...",
        },
        serviceOptions: {
          select: "Sélectionner un service",
          strategy: "Stratégie IA",
          build: "Construire et intégrer",
          infrastructure: "IA privée",
          leadership: "Direction technique",
          training: "Formation et gouvernance",
          other: "Autre",
        },
      },
    },
    landing: {
      "nav": {
        "services": "Services",
        "about": "À propos",
        "contact": "Contact",
        "home": "Accueil Tangent"
      },
      "hero": {
        "sentence": "Votre IA fonctionne en démo. Je la fais fonctionner tous les jours.",
        "cta": "Réserver un appel gratuit"
      },
      "services": {
        "title": "Ce que je fais",
        "placeholder": "Choisissez ce qui bloque. Je vous montre ce que je fais.",
        "action": "En parler",
        "mailSubject": "Appel d'introduction",
        "mailGreeting": "Bonjour Landry,",
        "mailTopic": "Ce qui bloque",
        "subsections": [
          {
            "title": "IA",
            "groups": [
              {
                "title": "Stratégie IA",
                "summary": "Trouver les quelques projets IA qui comptent.",
                "items": [
                  {
                    "name": "Choisir les projets",
                    "text": "Garder les quelques projets IA qui valent la peine, et abandonner les autres, avant de dépenser le budget."
                  },
                  {
                    "name": "Construire, acheter ou attendre",
                    "text": "Une réponse franche : construire, acheter un outil ou attendre six mois."
                  },
                  {
                    "name": "Une feuille de route claire",
                    "text": "Un plan en langage clair : ordre, responsables et coûts. Pas un PowerPoint."
                  },
                  {
                    "name": "Un second avis",
                    "text": "Un regard senior sur un plan ou un devis que vous avez déjà reçu."
                  }
                ]
              },
              {
                "title": "Construire et intégrer",
                "summary": "Mettre l'IA dans votre produit ou vos opérations.",
                "items": [
                  {
                    "name": "L'IA dans votre produit",
                    "text": "Des fonctions IA dans votre produit, assez fiables pour que vos clients s'y fient."
                  },
                  {
                    "name": "L'IA dans vos opérations",
                    "text": "L'IA au cœur du travail quotidien de vos équipes, branchée sur leurs outils actuels."
                  },
                  {
                    "name": "Des réponses fiables",
                    "text": "Des contrôles qualité pour faire confiance à l'IA, et voir quand elle se trompe."
                  },
                  {
                    "name": "Une passation propre",
                    "text": "Une passation que votre équipe sait maintenir sans m'appeler."
                  }
                ]
              },
              {
                "title": "IA privée",
                "summary": "Garder vos données sur vos serveurs.",
                "items": [
                  {
                    "name": "Sur vos propres serveurs",
                    "text": "Une IA qui tourne sur vos serveurs : les données de l'entreprise et des clients restent chez vous."
                  },
                  {
                    "name": "Des données qui ne sortent pas",
                    "text": "Aucun tiers ne voit vos documents, conversations ou fiches clients."
                  },
                  {
                    "name": "Les coûts, dès le départ",
                    "text": "Ce que ça coûte à faire tourner, posé avant tout engagement."
                  },
                  {
                    "name": "Conforme à vos règles",
                    "text": "Une installation conforme à vos règles de sécurité et à vos obligations légales."
                  }
                ]
              }
            ]
          },
          {
            "title": "Direction et équipes",
            "groups": [
              {
                "title": "Direction technique",
                "summary": "Un regard tech senior sans l'embauche à temps plein.",
                "items": [
                  {
                    "name": "Un directeur technique à temps partiel",
                    "text": "Un regard technique senior quelques jours par mois, sans embauche à temps plein."
                  },
                  {
                    "name": "Recruter des ingénieurs",
                    "text": "De l'aide pour interviewer et choisir les bons ingénieurs."
                  },
                  {
                    "name": "Auditer votre équipe",
                    "text": "Un audit honnête de votre tech et de votre équipe, avec ce qu'il faut corriger d'abord."
                  },
                  {
                    "name": "Choisir les fournisseurs",
                    "text": "Des choix d'outils et de fournisseurs faits avec vous, pas à votre place."
                  }
                ]
              },
              {
                "title": "Formation et gouvernance",
                "summary": "Des équipes qui utilisent l'IA bien, et en sécurité.",
                "items": [
                  {
                    "name": "Ateliers d'équipe",
                    "text": "Des sessions pratiques sur le vrai travail de votre équipe, pas des démos génériques."
                  },
                  {
                    "name": "Des règles suivies",
                    "text": "Des règles simples pour l'usage quotidien de l'IA, que les gens suivent vraiment."
                  },
                  {
                    "name": "Des règles pour vos données",
                    "text": "Des pratiques claires sur les données confiées à l'IA, et qui peut voir quoi."
                  },
                  {
                    "name": "Prêt pour un audit",
                    "text": "Des pratiques qui tiennent quand on vous demande de les prouver."
                  }
                ]
              }
            ]
          }
        ]
      },
      "about": {
        "first": "Landry",
        "last": "Monga",
        "passages": [
          {
            "text": "Je suis founding engineer dans une startup de défense. Mon travail couvre l'IA, le développement logiciel, le déploiement on-prem et la gouvernance.",
            "note": "Là où les données sont sensibles et où les erreurs coûtent cher."
          },
          {
            "text": "Avant, j'ai travaillé dans des startups soutenues par Y Combinator et Sequoia, et dans une licorne.",
            "logos": [
              { "name": "Y Combinator", "domain": "ycombinator.com" },
              { "name": "Sequoia", "domain": "sequoiacap.com" },
              { "name": "Ledger", "domain": "ledger.com" },
              { "name": "Dust", "domain": "dust.tt" }
            ],
            "note": "Je sais donc comment livre une petite équipe, et comment en bâtir une qui gagne."
          },
          {
            "text": "Vous travaillez directement avec moi.",
            "note": "Si je ne suis pas la bonne personne, je vous le dirai dès le premier appel."
          }
        ]
      },
      "contact": {
        "pageTitle": "Contact",
        "pageLede": "Dites-moi ce qui bloque et je vous réponds.",
        "ask": "Écrivez-moi pour dire ce qui bloque.",
        "cta": "Réserver un appel gratuit",
        "form": "Ou envoyez un message",
        "languages": "Anglais et français",
        "mailBody": "Bonjour Landry,\n\nVoici ce qui bloque :\n"
      },
      "footer": {
        "servicesTitle": "Services",
        "writeTitle": "Écrire",
        "elsewhereTitle": "Ailleurs",
        "languagesTitle": "Langues",
        "languages": [
          "English",
          "Français"
        ]
      }
    },
  },
};

export function getContent(language: Language = "en") {
  const t = translations[language];
  const personData: Person = {
    firstName: t.person.firstName,
    lastName: t.person.lastName,
    name: t.person.name,
    role: t.person.role,
    avatar: "/images/avatar.jpg",
    email: "contact@lvndry.xyz",
    location: "Europe/Paris",
    languages: t.person.languages,
  };

  const social: Social = [
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/landry-monga",
    },
    {
      name: "Email",
      icon: "email",
      link: `mailto:${personData.email}`,
    },
  ];

  const newsletter: Newsletter = {
    display: false,
    title: <>Subscribe to our Newsletter</>,
    description: <>Career insights and industry updates</>,
  };

  const home: Home = {
    path: "/",
    image: "/images/og/tangent.png",
    label: t.home.label,
    title: t.home.title,
    description: t.home.description,
    headline: t.home.headline,
    featured: {
      display: false,
      title: (
        <Row gap="12" vertical="center">
          <strong className="ml-4">Services</strong>{" "}
          <Line background="brand-alpha-strong" vert height="20" />
          <Text marginRight="4" onBackground="brand-medium">
            Learn more
          </Text>
        </Row>
      ),
      href: "/services",
    },
    subline: t.home.subline,
  };

  const about: About = {
    path: "/about",
    label: "About",
    title: `About - ${personData.name}`,
    description: `Meet ${personData.name}, ${personData.role} from ${personData.location}`,
    tableOfContent: {
      display: true,
      subItems: false,
    },
    avatar: {
      display: true,
    },
    calendar: {
      display: true,
      link: "https://calendar.app.google/vsTDwGyn5oBUVkrf8",
    },
    intro: {
      display: true,
      title: "Introduction",
      description: "",
    },
    work: {
      display: false,
      title: "Work Experience",
      experiences: [],
    },
    studies: {
      display: false,
      title: "Studies",
      institutions: [],
    },
    technical: {
      display: false,
      title: "Technical skills",
      skills: [],
    },
  };

  const services: Services = {
    path: "/services",
    label: t.services.label,
    title: t.services.title,
    description: t.services.description,
    image: "/images/og/tangent.png",
    services: t.services.services,
    button: t.services.button,
  };

  const logoDevToken = process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN || "";

  const team: Team = {
        path: "/about-me",
    label: t.team.label,
    title: t.team.title,
    description: t.team.description,
    image: "/images/og/tangent.png",
    members: t.team.members.map((member) => ({
      ...member,
      avatar: "/images/avatar.jpg",
      email: member.email || personData.email,
      logos: member.logos?.map((logo) => ({
        ...logo,
        src: logoDevToken ? `${logo.src}?token=${logoDevToken}` : logo.src,
      })),
    })),
  };

  const contact: Contact = {
    path: "/contact",
    label: t.contact.label,
    title: t.contact.title,
    description: t.contact.description,
    image: "/images/og/tangent.png",
  };

  return {
    person: personData,
    social,
    newsletter,
    home,
    about,
    services,
    team,
    contact,
    translations: t,
  };
}

export const elsewhereLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/landry-monga" },
  { name: "GitHub", href: "https://github.com/lvndry" },
];

export const person = getContent("en").person;
export const social = getContent("en").social;
export const newsletter = getContent("en").newsletter;
export const home = getContent("en").home;
export const about = getContent("en").about;
export const services = getContent("en").services;
export const team = getContent("en").team;
export const contact = getContent("en").contact;
