import { About, Blog, Contact, Home, Newsletter, Person, Services, Social, Team, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

type Language = "en" | "fr";

const translations = {
  en: {
    person: {
      firstName: "Tangent",
      lastName: "Consulting",
      name: "Tangent Consulting",
      role: "Career Strategy Advisor",
      languages: ["English"],
    },
    home: {
      label: "Home",
      title: "Tangent Consulting – Strategic Career Guidance for Technology Professionals",
      description: "Specialized career consulting service designed exclusively for technology professionals seeking to navigate and accelerate their careers in today's rapidly evolving tech landscape.",
      headline: <>Empowering tech professionals to take control of their careers</>,
      subline: (
        <>
          We help tech professionals define long-term career strategies, identify high-leverage skills,
          <br /> and position themselves to attract top-tier opportunities.
        </>
      ),
    },
    services: {
      label: "Services",
      title: "Our Services – Tangent Consulting",
      description: "Comprehensive career consulting services for technology professionals including strategic career planning, skills development advisory, and market positioning.",
      services: [
        {
          title: "Strategic Career Planning",
          description: (
            <>
              Personalized career roadmap development aligned with market demands. We help you identify
              target companies and prioritize them based on your individual goals, creating a long-term
              positioning strategy for career growth.
            </>
          ),
          includes: [
            <>Personalized career roadmap development</>,
            <>Target company identification and prioritization</>,
            <>Long-term positioning strategy for career growth</>,
            <>Alignment with current market demands</>,
          ],
          benefits: [
            <>Clear direction for your career trajectory</>,
            <>Data-driven decision making</>,
            <>Strategic focus on high-value opportunities</>,
          ],
        },
        {
          title: "Skills Development Advisory",
          description: (
            <>
              Current and emerging skill gap analysis with prioritized learning paths tailored to your
              career objectives. We provide guidance on certifications, projects, and experience-building
              opportunities that matter most.
            </>
          ),
          includes: [
            <>Current and emerging skill gap analysis</>,
            <>Prioritized learning paths tailored to career objectives</>,
            <>Guidance on certifications and credentials</>,
            <>Project recommendations for experience-building</>,
          ],
          benefits: [
            <>Focus on skills that drive career advancement</>,
            <>Efficient use of learning time</>,
            <>Stay ahead of industry trends</>,
          ],
        },
        {
          title: "Market Positioning",
          description: (
            <>
              LinkedIn profile optimization and personal branding strategy designed to attract quality
              recruiter opportunities. We enhance your visibility within target company networks and teach
              you recruiter engagement tactics that work.
            </>
          ),
          includes: [
            <>LinkedIn profile optimization</>,
            <>Personal branding strategy development</>,
            <>Recruiter engagement tactics</>,
            <>Visibility enhancement within target company networks</>,
          ],
          benefits: [
            <>Attract quality recruiter opportunities</>,
            <>Stand out in saturated talent pools</>,
            <>Build professional credibility</>,
          ],
        },
      ],
    },
    team: {
      label: "Team",
      title: "Our Team – Tangent Consulting",
      description: "Meet the experienced professionals helping tech professionals navigate their careers.",
      members: [
        {
          name: "Tangent Consulting Advisor",
          role: "Founder & Career Strategy Consultant",
          bio: (
            <>
              Built by a software engineer who understands both the technical and strategic dimensions of
              career growth. Having personally attracted recruiters and opportunities without ever &quot;posting&quot;
              publicly, we know what actually drives visibility, credibility, and long-term success in the
              tech job market. Our proven track record includes demonstrated success in generating consistent
              recruiter interest and opportunities.
            </>
          ),
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Contact Us – Tangent Consulting",
      description: "Get in touch to discuss how we can help accelerate your tech career.",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone (Optional)",
        service: "What's the most important for you right now? (Optional)",
        message: "Message",
        submit: "Send Message",
        sending: "Sending...",
        success: "Thank you! We'll get back to you soon.",
        error: "Something went wrong. Please try again or email us directly.",
        placeholder: {
          name: "Your name",
          email: "your.email@example.com",
          phone: "+33 6 12 34 56 78",
          message: "Tell us about your career goals and how we can help...",
        },
        serviceOptions: {
          select: "Select a service",
          strategic: "Strategic Career Planning",
          skills: "Skills Development Advisory",
          positioning: "Market Positioning",
          other: "Other",
        },
      },
    },
    homepage: {
      servicesTitle: "Our Services",
      servicesSubtitle: "Comprehensive career consulting designed specifically for the tech world",
      targetAudienceTitle: "Who We Help",
      targetAudienceSubtitle: "Technology professionals at various career stages who want to take control of their career trajectory",
      approachTitle: "Our Approach",
      approachText: "We blend strategic foresight, personal branding, and market intelligence to guide clients in making smart, data-informed decisions about their next career moves. Our approach focuses on actionable strategies rather than generic career advice, leveraging proven success in generating consistent recruiter interest and opportunities. We offer a personalized, individual approach with 1:1 sessions and dedicated sessions tailored to each client's specific needs.",
      buttons: {
        viewServices: "View Our Services",
        getInTouch: "Get In Touch",
        learnMore: "Learn More",
        viewAllServices: "View All Services",
      },
      targetAudience: [
        "Mid-level software engineers aiming for senior or leadership roles",
        "Early-career developers seeking clarity on skill development",
        "Tech professionals transitioning into AI, data, or product strategy roles",
        "Ambitious individuals seeking to stand out in a crowded job market",
      ],
    },
  },
  fr: {
    person: {
      firstName: "Tangent",
      lastName: "Consulting",
      name: "Tangent Consulting",
      role: "Conseiller en Stratégie de Carrière",
      languages: ["Français"],
    },
    home: {
      label: "Accueil",
      title: "Tangent Consulting – Orientation Stratégique pour les Professionnels de la Technologie",
      description: "Service de conseil en carrière spécialisé conçu exclusivement pour les professionnels de la technologie cherchant à naviguer et accélérer leur carrière dans le paysage technologique en évolution rapide d'aujourd'hui.",
      headline: <>Permettre aux professionnels de la tech de prendre le contrôle de leur carrière</>,
      subline: (
        <>
          Nous aidons les professionnels de la tech à définir des stratégies de carrière à long terme, à identifier les compétences à fort impact,
          <br /> et à se positionner pour attirer des opportunités de premier plan.
        </>
      ),
    },
    services: {
      label: "Services",
      title: "Nos Services – Tangent Consulting",
      description: "Services complets de conseil en carrière pour les professionnels de la technologie, incluant la planification stratégique de carrière, le conseil en développement des compétences et le positionnement sur le marché.",
      services: [
        {
          title: "Planification Stratégique de Carrière",
          description: (
            <>
              Développement d&apos;un plan de carrière personnalisé aligné sur les demandes du marché. Nous vous aidons à identifier
              les entreprises cibles et à les prioriser en fonction de vos objectifs individuels, créant une stratégie de
              positionnement à long terme pour la croissance de carrière.
            </>
          ),
          includes: [
            <>Développement d&apos;un plan de carrière personnalisé</>,
            <>Identification et priorisation des entreprises cibles</>,
            <>Stratégie de positionnement à long terme pour la croissance de carrière</>,
            <>Alignement avec les demandes actuelles du marché</>,
          ],
          benefits: [
            <>Direction claire pour votre trajectoire de carrière</>,
            <>Prise de décision basée sur les données</>,
            <>Focus stratégique sur les opportunités à forte valeur</>,
          ],
        },
        {
          title: "Conseil en Développement des Compétences",
          description: (
            <>
              Analyse des écarts de compétences actuels et émergents avec des parcours d&apos;apprentissage priorisés adaptés à vos
              objectifs de carrière. Nous fournissons des conseils sur les certifications, projets et opportunités de développement
              d&apos;expérience qui comptent le plus.
            </>
          ),
          includes: [
            <>Analyse des écarts de compétences actuels et émergents</>,
            <>Parcours d&apos;apprentissage priorisés adaptés aux objectifs de carrière</>,
            <>Conseils sur les certifications et les qualifications</>,
            <>Recommandations de projets pour le développement d&apos;expérience</>,
          ],
          benefits: [
            <>Focus sur les compétences qui favorisent l&apos;avancement de carrière</>,
            <>Utilisation efficace du temps d&apos;apprentissage</>,
            <>Rester en avance sur les tendances de l&apos;industrie</>,
          ],
        },
        {
          title: "Positionnement sur le Marché",
          description: (
            <>
              Optimisation du profil LinkedIn et stratégie de marque personnelle conçue pour attirer des opportunités de recruteurs
              de qualité. Nous améliorons votre visibilité au sein des réseaux d&apos;entreprises cibles et vous enseignons des tactiques
              d&apos;engagement avec les recruteurs qui fonctionnent.
            </>
          ),
          includes: [
            <>Optimisation du profil LinkedIn</>,
            <>Développement de stratégie de marque personnelle</>,
            <>Tactiques d&apos;engagement avec les recruteurs</>,
            <>Amélioration de la visibilité au sein des réseaux d&apos;entreprises cibles</>,
          ],
          benefits: [
            <>Attirer des opportunités de recruteurs de qualité</>,
            <>Se démarquer dans des bassins de talents saturés</>,
            <>Construire une crédibilité professionnelle</>,
          ],
        },
      ],
    },
    team: {
      label: "Équipe",
      title: "Notre Équipe – Tangent Consulting",
      description: "Rencontrez les professionnels expérimentés qui aident les professionnels de la tech à naviguer dans leur carrière.",
      members: [
        {
          name: "Conseiller Tangent Consulting",
          role: "Fondateur et Consultant en Stratégie de Carrière",
          bio: (
            <>
              Créé par un ingénieur logiciel qui comprend à la fois les dimensions techniques et stratégiques de
              la croissance de carrière. Ayant personnellement attiré des recruteurs et des opportunités sans jamais &quot;publier&quot;
              publiquement, nous savons ce qui motive réellement la visibilité, la crédibilité et le succès à long terme sur le
              marché de l&apos;emploi tech. Notre bilan éprouvé comprend un succès démontré dans la génération d&apos;intérêt et d&apos;opportunités
              de recruteurs constants.
            </>
          ),
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Contactez-nous – Tangent Consulting",
      description: "Contactez-nous pour discuter de la façon dont nous pouvons aider à accélérer votre carrière tech.",
      form: {
        name: "Nom",
        email: "Email",
        phone: "Téléphone (Optionnel)",
        service: "Qu'est-ce qui est le plus important pour vous en ce moment ? (Optionnel)",
        message: "Message",
        submit: "Envoyer le Message",
        sending: "Envoi en cours...",
        success: "Merci ! Nous vous répondrons bientôt.",
        error: "Une erreur s'est produite. Veuillez réessayer ou nous envoyer un email directement.",
        placeholder: {
          name: "Votre nom",
          email: "votre.email@exemple.com",
          phone: "+33 6 12 34 56 78",
          message: "Parlez-nous de vos objectifs de carrière et de la façon dont nous pouvons vous aider...",
        },
        serviceOptions: {
          select: "Sélectionner un service",
          strategic: "Planification Stratégique de Carrière",
          skills: "Conseil en Développement des Compétences",
          positioning: "Positionnement sur le Marché",
          other: "Autre",
        },
      },
    },
    homepage: {
      servicesTitle: "Nos Services",
      servicesSubtitle: "Conseil en carrière complet conçu spécifiquement pour le monde de la tech",
      targetAudienceTitle: "Qui Nous Aidons",
      targetAudienceSubtitle: "Professionnels de la technologie à différents stades de carrière qui souhaitent prendre le contrôle de leur trajectoire professionnelle",
      approachTitle: "Notre Approche",
      approachText: "Nous combinons la prévoyance stratégique, la marque personnelle et l'intelligence du marché pour guider les clients dans la prise de décisions intelligentes et basées sur les données concernant leurs prochaines étapes de carrière. Notre approche se concentre sur des stratégies actionnables plutôt que sur des conseils génériques, en tirant parti d'un succès éprouvé dans la génération d'intérêt et d'opportunités de recruteurs constants. Nous offrons une approche personnalisée et individuelle avec des sessions en 1:1 et des sessions dédiées adaptées aux besoins spécifiques de chaque client.",
      buttons: {
        viewServices: "Voir Nos Services",
        getInTouch: "Nous Contacter",
        learnMore: "En Savoir Plus",
        viewAllServices: "Voir Tous les Services",
      },
      targetAudience: [
        "Ingénieurs logiciels de niveau intermédiaire visant des rôles seniors ou de leadership",
        "Développeurs en début de carrière cherchant de la clarté sur le développement des compétences",
        "Professionnels de la tech en transition vers des rôles en IA, données ou stratégie produit",
        "Personnes ambitieuses cherchant à se démarquer dans un marché du travail saturé",
      ],
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
    image: "/images/tangent.png",
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
    title: `About – ${personData.name}`,
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
      link: "https://cal.com",
    },
    intro: {
      display: true,
      title: "Introduction",
      description: (
        <>
          Selene is a Jakarta-based design engineer with a passion for transforming complex challenges
          into simple, elegant design solutions. Her work spans digital interfaces, interactive
          experiences, and the convergence of design and technology.
        </>
      ),
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

  const blog: Blog = {
    path: "/blog",
    label: "Blog",
    title: "Writing about design and tech...",
    description: `Read what ${personData.name} has been up to recently`,
  };

  const work: Work = {
    path: "/work",
    label: "Work",
    title: `Projects – ${personData.name}`,
    description: `Design and dev projects by ${personData.name}`,
  }

  const services: Services = {
    path: "/services",
    label: t.services.label,
    title: t.services.title,
    description: t.services.description,
    image: "/images/tangent.png",
    services: t.services.services,
  };

  const team: Team = {
    path: "/team",
    label: t.team.label,
    title: t.team.title,
    description: t.team.description,
    image: "/images/tangent.png",
    members: t.team.members.map((member) => ({
      ...member,
      avatar: "/images/avatar.jpg",
      email: personData.email,
    })),
  };

  const contact: Contact = {
    path: "/contact",
    label: t.contact.label,
    title: t.contact.title,
    description: t.contact.description,
    image: "/images/tangent.png",
  };

  return {
    person: personData,
    social,
    newsletter,
    home,
    about,
    blog,
    work,
    services,
    team,
    contact,
    translations: t,
  };
}

// Default export for backward compatibility
export const person = getContent("en").person;
export const social = getContent("en").social;
export const newsletter = getContent("en").newsletter;
export const home = getContent("en").home;
export const about = getContent("en").about;
export const blog = getContent("en").blog;
export const work = getContent("en").work;
export const services = getContent("en").services;
export const team = getContent("en").team;
export const contact = getContent("en").contact;
