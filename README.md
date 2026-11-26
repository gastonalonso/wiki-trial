# Wiki Trial

A throwaway trial of the wiki publishing stack. Sveltia CMS edits the Markdown pages in this repo, and every push to `main` builds the Astro + Starlight site and publishes it to GitHub Pages.

- **Site:** https://gastonalonso.github.io/wiki-trial/
- **Editor:** https://gastonalonso.github.io/wiki-trial/admin/. Choose "Sign In with Token" and paste a fine-grained token for this repo with Contents set to "Read and write".

Pages live in `src/content/docs/`, and uploaded images in `public/images/`.

## Running it locally

```sh
npm install
npm run dev
```

The site opens at http://localhost:4321/wiki-trial/. The dev server doesn't serve `index.html` for a folder, so open the editor at http://localhost:4321/wiki-trial/admin/index.html.
