# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

# Create Blog Posts

To create a new post, all you must do is create a new markdown file in the `./src/blog/` directory.
However, before you begin writing, you must first add the following two lines at the top of the 
new markdown file:

```markdown
Date: YYYY-MM-DD
Desc: Some short description to post on the index page of the blogs.
```

Below this, you can write your blog post in the markdown format. The metadata above is used for 
displaying and parsing the post.
