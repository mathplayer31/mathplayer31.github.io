export type Lang = 'fr' | 'en';

// Dans hero et about, *mot* marque un mot mis en couleur.
export const t = {
  fr: {
    nav: { about: 'À propos', projects: 'Projets', path: 'Parcours', contact: 'Contact' },
    role: 'Développeur web et mobile',
    description: "Portfolio de Mathéo, développeur web et mobile : React, TypeScript, Supabase et applications hors ligne.",
    available: 'Disponible pour de nouveaux projets',
    hero: "Je conçois des apps qu'on *ouvre* tous les jours.",
    heroSub: 'Développeur web et mobile. React, TypeScript, Supabase, et des applications qui marchent aussi hors ligne.',
    ctaProjects: 'Voir les projets',
    ctaContact: 'Me contacter',
    aboutLabel: '01 / À propos',
    about: "J'aime les produits *simples* en surface et *solides* en dessous. Je construis de bout en bout : l'interface, la base de données, le mode *hors* *ligne* et l'application Android.",
    facts: [
      { value: 3023, label: 'mots dans SvenskaCore' },
      { value: 2, label: 'cours (suédois, français)' },
      { value: 'Web + APK', label: 'une seule base de code' },
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
    role: 'Web and mobile developer',
    description: 'Portfolio of Mathéo, web and mobile developer: React, TypeScript, Supabase and offline-first apps.',
    available: 'Open to new projects',
    hero: 'I build apps people *open* every day.',
    heroSub: 'Web and mobile developer. React, TypeScript, Supabase, and apps that keep working offline.',
    ctaProjects: 'See the projects',
    ctaContact: 'Get in touch',
    aboutLabel: '01 / About',
    about: 'I like products that are *simple* on the surface and *solid* underneath. I build end to end: the interface, the database, *offline* mode and the Android app.',
    facts: [
      { value: 3023, label: 'words in SvenskaCore' },
      { value: 2, label: 'courses (Swedish, French)' },
      { value: 'Web + APK', label: 'one codebase' },
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
