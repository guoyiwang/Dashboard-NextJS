## Next.js
- the folder structure is URL path structure, corresponding to router and navigation
- add loading.tsx will automaticlly be used for loading time
- under /app, every fold is a router, the page.tsx under every fold is the Ui of this router
    - /app/dashboard, is the router domain/dashboard
    - the foldname with parentheses `()` will not be included in URL path. `/dashboard/(overview)/page.tsx` becomes `/dashboard`.