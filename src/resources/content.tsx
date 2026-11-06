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
        "Independent AI & engineering advisory for startups and engineering teams: AI strategy, private AI and infrastructure, fractional CTO and hiring support, and team training.",
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
      label: "Team",
      title: "Our Team - Tangent Consulting",
      description: "Meet the engineer behind Tangent Consulting.",
      members: [
        {
          name: "Landry Monga",
          role: "Founding Engineer",
          bio: (
            <>
              Founding engineer at a defense startup, where I lead AI, research and deployment.
              Software engineer based in Paris with 6+ years of experience, having worked at
              unicorns and at Y Combinator and Sequoia-backed startups. I now bring that hands-on
              experience of building and deploying AI in demanding environments to startups and
              engineering teams.
            </>
          ),
          email: "monga.4landry@gmail.com",
          linkedin: "https://www.linkedin.com/in/landry-monga",
          github: "https://github.com/lvndry",
          logos: [
            {
              src: "https://img.logo.dev/ycombinator.com",
              alt: "Y Combinator",
            },
            {
              src: "https://img.logo.dev/sequoiacap.com",
              alt: "Sequoia Capital",
            },
            {
              src: "https://img.logo.dev/project-a.vc",
              alt: "Project A",
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
          message: "Tell us about your project or technical challenge...",
        },
        serviceOptions: {
          select: "Select a service",
          strategy: "AI Strategy & Engineering",
          infrastructure: "Private AI & Infrastructure",
          leadership: "Engineering Leadership & Hiring",
          training: "Team Training",
          governance: "AI & Data Governance",
          other: "Other",
        },
      },
    },
    homepage: {
      eyebrow: "Independent AI & Engineering Advisory",
      introTitle: "Engineering challenges deserve practical answers.",
      introText: [
        "Building AI products involves more than choosing a model.",
        "Which architecture should you use? When does self-hosting make sense? How do you control inference costs? How do you evaluate reliability? And how do you build the right engineering team to support it?",
        "I help founders and technical teams answer these questions and turn decisions into actionable plans.",
      ],
      servicesTitle: "What I can help you with",
      engagementTitle: "How we can work together",
      engagements: [
        {
          title: "Technical Assessments",
          text: "Independent reviews of your systems and technical decisions, delivered with clear recommendations and a prioritized roadmap.",
        },
        {
          title: "Focused Engineering Projects",
          text: "Time-boxed engagements to investigate, benchmark or implement a specific technical solution.",
        },
        {
          title: "Ongoing Advisory",
          text: "Regular support for architecture decisions, infrastructure strategy, hiring and engineering leadership.",
        },
        {
          title: "Team Training",
          text: "Practical workshops tailored to your organization's engineering challenges and current skill levels.",
        },
      ],
      audienceTitle: "Who I work with",
      audiences: [
        {
          title: "Early-stage startups",
          text: "Building their first AI-powered products, preparing to scale, or making foundational engineering decisions.",
        },
        {
          title: "Growing engineering teams",
          text: "Looking to improve reliability, infrastructure efficiency and technical execution.",
        },
        {
          title: "Companies adopting private AI",
          text: "Exploring secure deployment options and practical approaches to using AI with sensitive business data.",
        },
      ],
      approachTitle: "A practical, independent approach.",
      approachText: [
        "I believe good engineering is about making thoughtful trade-offs, not blindly adopting the latest technology.",
        "My approach combines technical analysis, practical experimentation and straightforward communication.",
        "The goal is to help your team understand its options, make confident decisions and build sustainable systems.",
      ],
      ctaTitle: "Let's discuss your technical challenge.",
      ctaText:
        "Whether you're planning an AI deployment, reconsidering your architecture or looking for an independent technical perspective, I'd be happy to explore how I can help.",
      buttons: {
        viewServices: "Explore services",
        getInTouch: "Book an intro call",
        contact: "Or reach out to discuss your project",
      },
    },
    about: {
      intro: {
        display: true,
        title: "Introduction",
        description: [
          "I'm an independent AI and engineering advisor based in Paris. Day to day, I work in the defense sector as a founding engineer, leading AI, research and deployment in one of the most demanding security environments there is.",
          "But I don't just advise on AI — I build and run it myself. I built my own open-source agent harness, I deploy and serve my own models on my own GPU, and I instrument everything with observability, so I know what my systems do — and when they silently lose data.",
          "I've also worked with several early-stage startups, from Y Combinator and Sequoia-backed teams to a unicorn. I know what makes an engineering team win — and what quietly kills a product before it ships.",
        ],
      },
      work: {
        display: true,
        title: "Where I get my edge",
        experiences: [
          {
            company: "Defense sector",
            timeframe: "Present",
            role: "Founding Engineer — AI, research & deployment",
            achievements: [
              "I lead AI and deployment in a regulated environment where data sovereignty and security are non-negotiable — not something to bolt on afterwards.",
              "I designed our AI and data governance end to end: what data a model sees, who can access it, how outputs are evaluated and audited.",
              "I run production AI with structured logs, end-to-end tracing and dashboards, so degradation shows up before your users notice it.",
            ],
          },
          {
            company: "Early-stage startups & a unicorn",
            timeframe: "Earlier career",
            role: "Software engineer",
            achievements: [
              "I shipped alongside small founding teams where every engineering decision had to pay off fast.",
              "I learned from the inside what makes an early-stage team win: focus, ownership, and simple systems that stay fast as you scale.",
            ],
          },
        ],
      },
      technical: {
        display: true,
        title: "What I build and run",
        skills: [
          {
            title: "On-prem AI & GPU infrastructure",
            description:
              "I run my own private AI stack: open-weight models served with vLLM on hardware I own — sized, benchmarked and tuned for cost. I've also shipped AI fleets on small GPU devices in the field, air-gapped where it mattered.",
            tags: [{ name: "vLLM" }, { name: "Self-hosted LLMs" }, { name: "GPU sizing" }, { name: "Edge devices" }],
          },
          {
            title: "AI agent systems",
            description:
              "I built my own agent harness from scratch — the framework the agents I work with every day run on — and I maintain it solo. I know exactly where agent systems break, because I'm the one who fixes them.",
            tags: [{ name: "Agent harness" }, { name: "Open source" }],
          },
          {
            title: "Observability",
            description:
              "Every system I run ships with structured logs, tracing and dashboards. I can tell when a model degrades or data is silently lost — and I hold the same standard for the stacks I advise on.",
            tags: [{ name: "Structured logging" }, { name: "Tracing" }, { name: "Dashboards" }],
          },
          {
            title: "Security & data governance",
            description:
              "Working in defense means I default to data classification, access control and auditability. I bring that rigor to AI: what data a model sees, how outputs are evaluated, and how internal adoption stays governed.",
            tags: [{ name: "Data sovereignty" }, { name: "Access control" }, { name: "Auditability" }],
          },
        ],
      },
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
        "Conseil indépendant en IA et ingénierie pour les startups et les équipes techniques : stratégie IA, IA privée et infrastructure, CTO à temps partagé et recrutement, formation des équipes.",
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
              Founding Engineer dans une startup de défense, où je pilote l&apos;IA, la recherche et
              le déploiement. Ingénieur logiciel basé à Paris avec plus de 6 ans d&apos;expérience,
              passé par des licornes et des startups soutenues par Y Combinator et Sequoia Capital.
              J&apos;apporte aujourd&apos;hui cette expérience concrète de la construction et du
              déploiement d&apos;IA en environnements exigeants aux startups et aux équipes
              d&apos;ingénierie.
            </>
          ),
          email: "monga.4landry@gmail.com",
          linkedin: "https://www.linkedin.com/in/landry-monga",
          github: undefined,
          logos: [
            {
              src: "https://img.logo.dev/ycombinator.com",
              alt: "Y Combinator",
            },
            {
              src: "https://img.logo.dev/sequoiacap.com",
              alt: "Sequoia Capital",
            },
            {
              src: "https://img.logo.dev/project-a.vc",
              alt: "Project A",
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
          message: "Parlez-nous de votre projet ou de votre défi technique...",
        },
        serviceOptions: {
          select: "Sélectionner un service",
          strategy: "Stratégie & ingénierie IA",
          infrastructure: "IA privée & infrastructure",
          leadership: "Leadership technique & recrutement",
          training: "Formation des équipes",
          governance: "Gouvernance de l'IA et des données",
          other: "Autre",
        },
      },
    },
    homepage: {
      eyebrow: "Conseil indépendant en IA et ingénierie",
      introTitle: "Les défis d'ingénierie méritent des réponses pratiques.",
      introText: [
        "Construire des produits d'IA, ce n'est pas seulement choisir un modèle.",
        "Quelle architecture adopter ? Quand l'auto-hébergement a-t-il du sens ? Comment maîtriser les coûts d'inférence ? Comment évaluer la fiabilité ? Et comment constituer la bonne équipe d'ingénierie pour soutenir tout cela ?",
        "J'aide les fondateurs et les équipes techniques à répondre à ces questions et à transformer leurs décisions en plans d'action.",
      ],
      servicesTitle: "Comment je peux vous aider",
      engagementTitle: "Comment travailler ensemble",
      engagements: [
        {
          title: "Audits techniques",
          text: "Des revues indépendantes de vos systèmes et de vos décisions techniques, avec des recommandations claires et une feuille de route priorisée.",
        },
        {
          title: "Projets d'ingénierie ciblés",
          text: "Des missions limitées dans le temps pour investiguer, benchmarker ou implémenter une solution technique précise.",
        },
        {
          title: "Accompagnement continu",
          text: "Un soutien régulier pour les décisions d'architecture, la stratégie d'infrastructure, le recrutement et le leadership technique.",
        },
        {
          title: "Formation des équipes",
          text: "Des ateliers pratiques adaptés aux défis d'ingénierie de votre organisation et au niveau actuel de vos équipes.",
        },
      ],
      audienceTitle: "Avec qui je travaille",
      audiences: [
        {
          title: "Startups en phase initiale",
          text: "Qui construisent leurs premiers produits d'IA, se préparent à passer à l'échelle ou prennent leurs premières décisions d'ingénierie structurantes.",
        },
        {
          title: "Équipes d'ingénierie en croissance",
          text: "Qui veulent améliorer la fiabilité, l'efficacité de l'infrastructure et l'exécution technique.",
        },
        {
          title: "Entreprises adoptant l'IA privée",
          text: "Qui explorent des options de déploiement sécurisées et des approches concrètes pour utiliser l'IA avec des données d'entreprise sensibles.",
        },
      ],
      approachTitle: "Une approche pragmatique et indépendante.",
      approachText: [
        "Je crois qu'une bonne ingénierie consiste à faire des compromis réfléchis, pas à adopter aveuglément la dernière technologie.",
        "Mon approche combine analyse technique, expérimentation pratique et communication directe.",
        "L'objectif : aider votre équipe à comprendre ses options, à décider en confiance et à construire des systèmes durables.",
      ],
      ctaTitle: "Parlons de votre défi technique.",
      ctaText:
        "Que vous prépariez un déploiement d'IA, reconsidériez votre architecture ou cherchiez un regard technique indépendant, je serai ravi d'explorer comment je peux vous aider.",
      buttons: {
        viewServices: "Découvrir les services",
        getInTouch: "Réserver un appel découverte",
        contact: "Ou contactez-moi pour discuter de votre projet",
      },
    },
    about: {
      intro: {
        display: true,
        title: "Introduction",
        description: [
          "Je suis conseiller indépendant en IA et ingénierie, basé à Paris. Au quotidien, je travaille dans le secteur de la défense comme founding engineer, avec la responsabilité de l'IA, de la recherche et du déploiement dans l'un des environnements de sécurité les plus exigeants qui soient.",
          "Mais je ne fais pas que conseiller — je construis et j'exploite moi-même mes systèmes d'IA. J'ai construit mon propre harnais d'agents open source, je déploie et je fais tourner mes propres modèles sur mes propres GPU, et j'instrumente tout en observabilité : je sais ce que font mes systèmes — et quand ils perdent de la donnée sans le signaler.",
          "J'ai aussi travaillé auprès de plusieurs startups en phase initiale, de Y Combinator et Sequoia jusqu'à une licorne. Je sais ce qui fait gagner une équipe d'ingénierie — et ce qui tue un produit avant qu'il ne sorte.",
        ],
      },
      work: {
        display: true,
        title: "D'où vient mon edge",
        experiences: [
          {
            company: "Secteur de la défense",
            timeframe: "Aujourd'hui",
            role: "Founding Engineer — IA, recherche & déploiement",
            achievements: [
              "Je pilote l'IA et le déploiement dans un environnement réglementé où la souveraineté des données et la sécurité ne se négocient pas — et ne s'ajoutent pas a posteriori.",
              "J'ai conçu notre gouvernance de l'IA et des données de bout en bout : quelles données un modèle voit, qui y a accès, comment les sorties sont évaluées et auditées.",
              "J'exploite l'IA en production avec logs structurés, tracing de bout en bout et dashboards : la dégradation est visible avant vos utilisateurs.",
            ],
          },
          {
            company: "Startups en phase initiale & licorne",
            timeframe: "Carrière précédente",
            role: "Ingénieur logiciel",
            achievements: [
              "J'ai livré avec de petites équipes fondatrices où chaque décision technique devait payer rapidement.",
              "J'ai appris de l'intérieur ce qui fait gagner une équipe en phase initiale : focus, ownership, et des systèmes simples qui restent rapides à l'échelle.",
            ],
          },
        ],
      },
      technical: {
        display: true,
        title: "Ce que je construis et j'exploite",
        skills: [
          {
            title: "IA on-prem & infrastructure GPU",
            description:
              "Je fais tourner ma propre pile IA privée : des modèles open-weight servis avec vLLM sur du matériel que je possède — dimensionné, benchmarké et optimisé pour le coût. J'ai aussi déployé des flottes IA sur de petits devices GPU sur le terrain, en environnement air-gapped quand nécessaire.",
            tags: [{ name: "vLLM" }, { name: "LLM auto-hébergés" }, { name: "Dimensionnement GPU" }, { name: "Devices edge" }],
          },
          {
            title: "Systèmes d'agents IA",
            description:
              "J'ai construit mon propre harnais d'agents de zéro — le framework sur lequel tournent les agents avec lesquels je travaille chaque jour — et je l'entretiens seul. Je sais exactement où les systèmes d'agents cassent, parce que c'est moi qui les répare.",
            tags: [{ name: "Harnais d'agents" }, { name: "Open source" }],
          },
          {
            title: "Observabilité",
            description:
              "Chaque système que je fais tourner embarque des logs structurés, du tracing et des dashboards. Je sais quand un modèle se dégrade ou que des données sont perdues silencieusement — j'applique la même exigence aux stacks que je conseille.",
            tags: [{ name: "Logs structurés" }, { name: "Tracing" }, { name: "Dashboards" }],
          },
          {
            title: "Sécurité & gouvernance des données",
            description:
              "Travailler dans la défense, c'est penser par défaut classification des données, contrôle d'accès et traçabilité. J'apporte cette rigueur à l'IA : quelles données un modèle voit, comment les sorties sont évaluées, comment l'adoption interne reste gouvernée.",
            tags: [{ name: "Souveraineté des données" }, { name: "Contrôle d'accès" }, { name: "Auditabilité" }],
          },
        ],
      },
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
    email: "monga.4landry@gmail.com",
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
    intro: t.about.intro,
    work: t.about.work,
    studies: {
      display: false,
      title: "Studies",
      institutions: [],
    },
    technical: t.about.technical,
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
    path: "/team",
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

export const person = getContent("en").person;
export const social = getContent("en").social;
export const newsletter = getContent("en").newsletter;
export const home = getContent("en").home;
export const about = getContent("en").about;
export const services = getContent("en").services;
export const team = getContent("en").team;
export const contact = getContent("en").contact;
