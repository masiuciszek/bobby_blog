const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/masiuciszek/web-dev/myWebProj/jonkri_blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/masiuciszek/web-dev/myWebProj/jonkri_blog/src/pages/404.tsx"))),
  "component---src-pages-about-tsx": hot(preferDefault(require("/Users/masiuciszek/web-dev/myWebProj/jonkri_blog/src/pages/about.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/masiuciszek/web-dev/myWebProj/jonkri_blog/src/pages/index.tsx"))),
  "component---src-posts-fifth-post-index-mdx": hot(preferDefault(require("/Users/masiuciszek/web-dev/myWebProj/jonkri_blog/src/posts/fifth-post/index.mdx"))),
  "component---src-posts-first-post-index-mdx": hot(preferDefault(require("/Users/masiuciszek/web-dev/myWebProj/jonkri_blog/src/posts/first-post/index.mdx"))),
  "component---src-posts-fourth-post-index-mdx": hot(preferDefault(require("/Users/masiuciszek/web-dev/myWebProj/jonkri_blog/src/posts/fourth-post/index.mdx"))),
  "component---src-posts-second-post-index-mdx": hot(preferDefault(require("/Users/masiuciszek/web-dev/myWebProj/jonkri_blog/src/posts/second-post/index.mdx"))),
  "component---src-posts-third-post-index-mdx": hot(preferDefault(require("/Users/masiuciszek/web-dev/myWebProj/jonkri_blog/src/posts/third-post/index.mdx"))),
  "component---src-templates-blog-list-tsx": hot(preferDefault(require("/Users/masiuciszek/web-dev/myWebProj/jonkri_blog/src/templates/blog-list.tsx"))),
  "component---src-templates-blog-post-tsx": hot(preferDefault(require("/Users/masiuciszek/web-dev/myWebProj/jonkri_blog/src/templates/blog-post.tsx")))
}

