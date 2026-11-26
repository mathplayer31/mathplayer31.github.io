export type Lang = 'fr' | 'en';

// Dans hero et about, *mot* marque un mot mis en couleur.
export const t = {
  fr: {
    nav: { about: 'À propos', projects: 'Projets', path: 'Parcours', contact: 'Contact' },
    role: "Développeur, en recherche d'alternance",
    description: "Portfolio de Mathéo Perez, étudiant en Bachelor Concepteur Développeur d'Applications à IGENSIA Tech, en recherche d'alternance près de Toulouse.",
    available: "En recherche d'alternance, disponible immédiatement",
    hero: "Je développe des *outils* utiles au métier de l'entreprise.",
    heroSub: "Étudiant en Bachelor Concepteur Développeur d'Applications à IGENSIA Tech, près de Toulouse. Back-end en Go et PHP, front en Angular et React.",
    ctaProjects: 'Voir les projets',
    ctaContact: 'Me contacter',
    aboutLabel: '01 / À propos',
    about: "J'aime les produits *simples* en surface et *solides* en dessous. Je construis de bout en bout : l'API, la base de données, l'interface et l'application *mobile*.",
    facts: [
      { value: 3023, label: 'mots dans SvenskaCore' },
      { value: '6 à 8', label: 'jours de cours par mois en alternance' },
      { value: 'Go + PostgreSQL', label: 'stage back-end chez Celowen' },
    ],
    featuredLabel: '02 / Projet phare',
    seeProject: 'Voir le projet',
    others: 'Autres projets',
    pathLabel: '03 / Parcours',
    pathTitle: 'Parcours',
    cv: 'Télécharger le CV',
    contactLabel: '04 / Contact',
    contactTitle: 'Un projet ?',
    contactSub: 'Parlons-en.',
    footer: 'Fait avec Astro',
    back: 'Retour aux projets',
    stackLabel: 'Technologies',
    openSite: 'Ouvrir le site',
    sourceCode: 'Code source',
    switchLabel: 'Version anglaise',
  },
  en: {
    nav: { about: 'About', projects: 'Projects', path: 'Experience', contact: 'Contact' },
    role: 'Developer looking for an apprenticeship',
    description: 'Portfolio of Mathéo Perez, application design and development student at IGENSIA Tech, looking for an apprenticeship near Toulouse.',
    available: 'Looking for an apprenticeship, available now',
    hero: 'I build *tools* that serve the business.',
    heroSub: 'Application design and development student at IGENSIA Tech, near Toulouse. Back end in Go and PHP, front end in Angular and React.',
    ctaProjects: 'See the projects',
    ctaContact: 'Get in touch',
    aboutLabel: '01 / About',
    about: 'I like products that are *simple* on the surface and *solid* underneath. I build end to end: the API, the database, the interface and the *mobile* app.',
    facts: [
      { value: 3023, label: 'words in SvenskaCore' },
      { value: '6 to 8', label: 'school days a month while working' },
      { value: 'Go + PostgreSQL', label: 'back-end internship at Celowen' },
    ],
    featuredLabel: '02 / Featured project',
    seeProject: 'See the project',
    others: 'More projects',
    pathLabel: '03 / Experience',
    pathTitle: 'Experience',
    cv: 'Download the resume',
    contactLabel: '04 / Contact',
    contactTitle: 'Got a project?',
    contactSub: "Let's talk.",
    footer: 'Built with Astro',
    back: 'Back to projects',
    stackLabel: 'Stack',
    openSite: 'Open the site',
    sourceCode: 'Source code',
    switchLabel: 'French version',
  },
} as const;

export const home = (lang: Lang) => (lang === 'fr' ? '/' : '/en/');
export const projectUrl = (lang: Lang, slug: string) => (lang === 'fr' ? `/projets/${slug}/` : `/en/projects/${slug}/`);

// "a *b* c" -> [{ w: 'a', hl: false }, { w: 'b', hl: true }, ...]
export const words = (s: string) =>
  s.split(' ').map((w) => (w.startsWith('*') ? { w: w.replace(/\*/g, ''), hl: true } : { w, hl: false }));
