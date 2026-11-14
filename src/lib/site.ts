/**
 * Central site settings. Edit this one file for name, links and contact info.
 * Leave a value as `null` to hide it on the site.
 */
export const site = {
  name: 'Arjun Yadav',
  title: 'Arjun Yadav',
  tagline: 'Student | STEM Enthusiast | Competitive Swimmer',
  description:
    'Personal website of Arjun Yadav, a high school student exploring mathematics, physics, computer science and competitive swimming.',
  school: 'Eastlake High School, Washington',
  grade: '9th grade',
  domain: 'arjunyadav.me',

  // Social links — set to null to hide.
  github: 'https://github.com/arjuny-gh',
  githubUser: 'arjuny-gh' as string | null, // enables the optional GitHub activity feed
  linkedin: null as string | null, // e.g. 'https://www.linkedin.com/in/your-handle'

  // Only publish an email after a parent/guardian approves it.
  email: null as string | null, // e.g. 'hello@arjunyadav.me'

  // Put your resume at public/resume.pdf, then set this to true.
  resumeAvailable: false,
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Research', href: '/research' },
  { label: 'Projects', href: '/projects' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Writing', href: '/writing' },
  { label: 'Swimming', href: '/swimming' },
  { label: 'Contact', href: '/contact' },
];

/** Prefix a path with the configured base (works on github.io project pages and custom domains). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^https?:/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}` || '/';
}

export function readingTime(text: string): number {
  const words = text.replace(/```[\s\S]*?```/g, '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
}
