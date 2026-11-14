import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// SITE_URL / BASE_PATH are set by the GitHub Actions workflow (see README).
// Defaults target the custom domain https://arjunyadav.me at the root path.
const site = process.env.SITE_URL || 'https://arjunyadav.me';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
  vite: { plugins: [tailwindcss()] },
});
