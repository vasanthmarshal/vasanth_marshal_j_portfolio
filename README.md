# J Vasanth Marshal — Portfolio

A static portfolio website built with **React + Vite**. There is no backend: `npm run build` produces plain HTML/CSS/JS files in `dist/`, which can be hosted anywhere (Netlify, GitHub Pages, etc.).

## Run it locally

Requires Node.js 18 or newer.

```bash
cd vasanth-portfolio
npm install        # first time only
npm run dev        # starts the dev server, usually http://localhost:5173
```

Open the URL printed in the terminal. Edits to files in `src/` reload automatically.

Other commands:

| Command           | What it does                                              |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Dev server with hot reload                                |
| `npm run build`   | Production build into `dist/`                             |
| `npm run preview` | Serve the built `dist/` folder locally (to test the build) |

If `npm install` fails with a permission error on `~/.npm`, run `sudo chown -R $(whoami) ~/.npm` once, or use `npm install --cache /tmp/npm-cache`.

## Add your photo

Save your photo as **`public/assets/profile.jpg`**. A portrait (3:4) photo with your face in the upper half works best. Without it, the hero shows without a portrait.

## File structure

```
vasanth-portfolio/
├── index.html              HTML shell: page title, meta tags, fonts
├── package.json            Dependencies and npm scripts
├── vite.config.js          Vite config (React plugin)
├── netlify.toml            Netlify build settings (npm run build -> dist)
├── .gitignore              Ignores node_modules/ and dist/
├── public/                 Files copied as-is into the build
│   └── assets/
│       ├── VasanthMarshalJ_Resume.pdf   Resume download button
│       └── profile.jpg                  YOUR PHOTO (add this)
└── src/
    ├── main.jsx            App entry point
    ├── App.jsx             Page layout: sections in order
    ├── styles.css          All styling (colours are CSS variables at the top)
    ├── data/
    │   └── profile.js      ALL the content: text, skills, projects, awards, certs
    └── components/
        ├── Header.jsx          Sticky nav + mobile menu
        ├── Hero.jsx            Hero / intro section with photo
        ├── Skills.jsx          Tabbed skills grid with tech logos
        ├── AIEngineering.jsx   Claude / MCP / AI agent work
        ├── Experience.jsx      Role timeline, bullets, education
        ├── Recognition.jsx     Awards and certifications
        ├── Projects.jsx        Featured and other projects
        ├── Contact.jsx         Email / phone / LinkedIn
        ├── Footer.jsx
        └── Reveal.jsx          Fade-in-on-scroll wrapper
```

## Editing content

- **Text, skills, projects, awards, certifications, contact details:** edit `src/data/profile.js`.
- **Resume:** replace `public/assets/VasanthMarshalJ_Resume.pdf` (keep the same file name).
- **Colours:** change the variables at the top of `src/styles.css` (`--accent`, `--accent-2`, `--bg`, ...).
- **Intro heading and paragraph:** edit `src/components/Hero.jsx`.
- **GitHub link:** add a `github` field in `profile.js` and a link in `Hero.jsx` / `Contact.jsx`.

## Deploy to Netlify

1. Push this folder to a GitHub repository.
2. In Netlify: **Add new site -> Import an existing project**, and pick the repo.
3. The build settings come from `netlify.toml` (build command `npm run build`, publish directory `dist`). Click **Deploy**.

Every push to the connected branch redeploys automatically.
