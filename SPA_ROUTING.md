# SPA Routing on GitHub Pages

## Implementation: Option A (spa-github-pages pattern)

This project uses the "spa-github-pages" pattern to enable deep linking for Single Page Applications (SPA) on GitHub Pages while maintaining clean URLs.

### How it works

1. **404.html**: When GitHub Pages encounters a direct URL hit to a non-existent file (like `/paredes-verdes`), it serves our custom `404.html` instead of the default 404 page.

2. **URL Rewrite**: The `404.html` redirects the user to `/?/original-path`, which loads the main `index.html` with the route information in the query string.

3. **Client-side Rewrite**: The main `index.html` contains a script that detects URLs like `/?/route` and rewrites them back to `/route` using `history.replaceState()`.

### Files involved

- `public/404.html` - Handles direct URL hits and redirects to `/?/path`
- `index.html` - Contains the URL rewrite script that converts `/?/path` back to `/path`
- `src/App.tsx` - React Router configuration (unchanged)

### Testing deep links

After deployment, these URLs should work with direct navigation and hard refresh:

- https://naridealize.com.br/paredes-verdes
- https://naridealize.com.br/jardins-pendentes  
- https://naridealize.com.br/vasos

### Adding new routes

To add new routes:

1. Add the route to `src/App.tsx`:
   ```tsx
   <Route path="/new-route" element={<NewComponent />} />
   ```

2. Update `public/sitemap.xml` to include the new URL:
   ```xml
   <url>
     <loc>https://naridealize.com.br/new-route</loc>
     <lastmod>2025-01-XX</lastmod>
   </url>
   ```

3. No changes needed to `404.html` or the rewrite script - they handle any route automatically.

### SEO files

The following files remain publicly accessible:
- `/sitemap.xml` - Search engine sitemap
- `/robots.txt` - Search engine directives
- `/404.html` - Custom 404 handler

### Why Option A over Option B?

- ✅ **Clean URLs**: Maintains `/route` instead of `/#/route`
- ✅ **SEO-friendly**: URLs match sitemap entries
- ✅ **Minimal changes**: No router configuration changes needed
- ✅ **Future-proof**: Works with any new routes automatically
- ✅ **User experience**: No hash symbols in URLs

### Browser support

- Requires JavaScript (graceful fallback with noscript message)
- Works in all modern browsers
- Uses standard `history.replaceState()` API
