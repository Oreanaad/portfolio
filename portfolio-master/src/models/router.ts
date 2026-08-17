export const PublicRoutes = {
    ABOUTME: '/aboutme',
    SKILLS: '/experience',
    PROJECTS: '/projects',
    CONTACT: '/contact',
}

/** `key` indexes into the nav section of the translations. */
export const NavLinks = [
    { to: PublicRoutes.ABOUTME, key: 'about' },
    { to: PublicRoutes.SKILLS, key: 'experience' },
    { to: PublicRoutes.PROJECTS, key: 'projects' },
    { to: PublicRoutes.CONTACT, key: 'contact' },
] as const
