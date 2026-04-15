# My Personal Website

URL: [https://miahunt.com/](https://miahunt.com/)

This is my first time using Astro. There will be a lot of superfluous inelegant code that I will work on improving throughout the process of building this site.


```sh
npm create astro@latest -- --template basics
```


## Project Structure

```text
/
├── astro.config.mjs
├── package-lock.json
├── package.json
├── public
│   ├── admin
│   │   ├── config.yml
│   │   └── index.html
│   ├── cursive
│   │   └── cursive-images.webp
│   ├── favicon.ico
│   ├── favicon.svg
│   └── icons
├── README.md
├── src
│   ├── components
│   │   ├── Nav.tsx
│   │   └── PostViewToggle.tsx
│   ├── content
│   │   └── blog
│   │       └── posts.mdx
│   ├── content.config.ts
│   ├── data
│   │   └── site.ts
│   ├── layouts
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages
│   │   ├── index.astro
│   │   ├── writing
│   │   │   └── [...slug].astro
│   │   └── writing.astro
│   ├── styles
│   │   └── global.css
│   └── utils
│       └── formatDate.ts
└── tsconfig.json
```

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## Learn more

[Astro documentation](https://docs.astro.build) or [Discord server](https://astro.build/chat).
