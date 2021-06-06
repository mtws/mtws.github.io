# A statically generated blog example using Next.js, Markdown, and TypeScript

This is a demo-procjet based on [blog-starter-typescript](https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript) plus TypeScript.

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Local setup

```
yarn install
yarn dev
```

## Deploy 

Commit your changes and deploy. GitHub actions will run the `npm run export` and commit the content of the `out` directory to the `gh-pages` branch.

## Netflify CMS

Netflify CMS has been set up the following way:

- A new oauth app was created in GitHub with the Authorization callback URL https://api.netlify.com/auth/done.
- A new empty GitHub repo was created to use for the Netlify connection (could probably use any repo for this)
- A new site was created in https://app.netlify.com with the connection to the newly created Git-repo and using the oauth credentials.
- The custom domain (mtws.fi) is defined for the netlify-site.
- The netlify-site-name is used in the file `publich/admin/config.yml` of this repo.

More info: https://cnly.github.io/2018/04/14/just-3-steps-adding-netlify-cms-to-existing-github-pages-site-within-10-minutes.html

## TODO:

- Add static home-page with editable sections (https://www.netlifycms.org/docs/nextjs/)
- Add cloudinary image-loader https://nextjs.org/docs/basic-features/image-optimization#loader, 