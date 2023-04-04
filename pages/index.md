---
title: Get started with Markdoc
description: How to get started with Markdoc
---

# How to add a new article?

1. Create a new directory with `index.md` file inside `/pages/docs`.
2. Go to the `components/SideNav.tsx` and add the following code to `items`:
  ```javascript
  {
    href: 'path-to-directory from /pages, f.e /docs',
    children: 'Sidemenu title, f.e Get Started'
  }
  ```
