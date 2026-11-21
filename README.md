# ameen.elzaki — personal site

A plain HTML/CSS/JS site with no build step and no framework.

```
index.html          Home: services, selected work, about, latest posts, contact
blog.html           Blog index (with tag filters)
posts/*.html        One file per blog post
assets/style.css    All styling
assets/main.js      Menu, scroll reveal, project filters, hero animation
assets/posts.js     Blog post list (title, date, tag, excerpt)
```

## Notes
- Read the four blog posts and adjust them to your own voice. They're drafted from your GitHub projects.

## Add a new blog post
1. Copy any file in `posts/` → `posts/my-new-post.html`, then edit the title, date and body.
2. Add an entry at the top of the `POSTS` list in `assets/posts.js` with the same `slug` (`my-new-post`).

## Preview locally
Double-click `index.html`, or run `python -m http.server` in this folder and open http://localhost:8000.

## Publish free on GitHub Pages
1. Create a repo named `ameenelzaki96.github.io`.
2. Push these files to it.
3. The site goes live at `https://ameenelzaki96.github.io`.
