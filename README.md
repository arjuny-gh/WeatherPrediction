# arjunyadav.me — Arjun's personal website

A fast, fully static portfolio built with **Astro + TypeScript + Tailwind CSS**, with Markdown/MDX writing, KaTeX math, and automatic deployment to **GitHub Pages**. No backend, no paid services.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type-checks and builds to dist/
npm run preview    # serve the built site
```
Requires Node 22+.

## 1. First things to personalize

| What | Where |
|---|---|
| GitHub / LinkedIn / email / resume toggle | `src/lib/site.ts` |
| Profile photo | save as `src/assets/profile.jpg` (or `.png`/`.webp`) |
| Resume | save as `public/resume.pdf`, then set `resumeAvailable: true` in `site.ts` |
| About page text | `src/pages/about.astro` (a draft is there — make it yours) |

Search the repo for `YOUR-GITHUB-USERNAME` and `PLACEHOLDER` to find everything still to replace. Don't publish an email address until a parent/guardian approves it.

## 2. Updating content (no component edits needed)

All content lives in `src/content/`. Files starting with `_` are templates and are ignored by the site.

| To add… | Do this |
|---|---|
| **Blog post** | Copy `blog/_template.mdx` → `blog/my-post.md(x)`. Set `draft: true` to hide it. Math: `$x^2$` inline, `$$ … $$` for display. Tag a post `mathematics` to show it on the Math page. |
| **Project** | Create `projects/my-project.md` (see the samples). Add a screenshot in `src/assets/` and reference it as `image: ../../assets/shot.png`. Delete the sample projects and set `featured: true` on your favorite. |
| **Research entry** | Copy `research/_template.md`. The page shows a friendly empty state until you add one. Put PDFs in `public/papers/`. |
| **Achievement** | Add an entry in `data/achievements.yaml` (only verified ones; add a `verification` link when possible). |
| **Swim times / milestones** | Edit `data/swimming.yaml` and `data/milestones.yaml`. |

Avoid posting an exact training schedule or other sensitive personal info.

## 3. Deploy to GitHub Pages

1. Create a GitHub repo (e.g. `arjunyadav.me`, or `USERNAME.github.io`) and push this project to the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` now builds and deploys via `.github/workflows/deploy.yml`.

### Using the default `github.io` address first
Set repo **Variables** (Settings → Secrets and variables → Actions → Variables):
- `SITE_URL` = `https://USERNAME.github.io`
- `BASE_PATH` = `/REPO-NAME` (skip this if the repo is named `USERNAME.github.io`)

### Switching to the custom domain `arjunyadav.me`
1. Delete the two variables above (the defaults already target `https://arjunyadav.me`). `public/CNAME` is already included.
2. At your domain registrar add DNS records:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `USERNAME.github.io`
3. In **Settings → Pages → Custom domain**, enter `arjunyadav.me` and tick **Enforce HTTPS** once available.
4. Re-run the workflow (Actions → Deploy → Run workflow).

## Project structure

```
src/
  content/        ← your content (blog, projects, research, data/*.yaml)
  pages/          ← routes (one file per page)
  components/     ← reusable UI
  layouts/        ← base layout with SEO + Open Graph
  lib/site.ts     ← site settings & navigation
public/           ← CNAME, favicon, resume.pdf, papers/
```

## Optional GitHub activity feed
Set `githubUser` in `src/lib/site.ts`. The home page then shows recent public commits using GitHub's public API — no tokens.
