# bastoscostadavi.github.io

Personal academic website — two pages, About (`index.html`) and Publications (`publications.html`).

Plain static HTML + one stylesheet (`css/style.css`). No build step, no dependencies.
MathJax is loaded from a CDN on the publications page to render LaTeX in abstracts.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000

## Publish on GitHub Pages

1. Create a repository on GitHub named exactly **`bastoscostadavi.github.io`**
   (the `<username>.github.io` name is what makes it a user site served at the root).
2. From this folder:

   ```
   git remote add origin https://github.com/bastoscostadavi/bastoscostadavi.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
4. The site goes live at https://bastoscostadavi.github.io within a minute or two.

`.nojekyll` tells GitHub Pages to serve the files as-is instead of running them through Jekyll.

### Custom domain (optional)

Add a file named `CNAME` at the root containing just your domain (e.g. `davicosta.com`),
then point a CNAME DNS record at `bastoscostadavi.github.io`.

## Adding a paper

Copy an existing `<div class="paper">` block in `publications.html`, put the figure in
`images/`, and update the title, authors, venue, and abstract. Use `class="paper no-img"`
and drop the `<img>` for entries without a figure.
