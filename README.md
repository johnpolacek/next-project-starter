## Getting Started

To create a new project, run:

```
git clone https://github.com/johnpolacek/project-starter.git your-project-name
cd your-project-name
npm install
```

To run the project in your local development environment:

```
npm run dev
```

Turn on automatic code formatting with [prettier](https://prettier.io/):

```
npm run format-watch
```

## Project Settings

Update `package.json` with info for your own project’s name and other info.

A global document head with `<title>`, `<description>`, `<meta>` tags and more can be updated by editing `src/layout/Head.js`.

If you are using Google Analytics or other services you need to embed on every page, add them to the `Wrapper` component at `src/layout/Wrapper.js`


## Authoring

Refer to the [Next.js docs](https://nextjs.org/docs/basic-features/pages) for how to author pages and [set up routing](https://nextjs.org/docs/routing/introduction).

Each page contains a `Layout` component with the `Header` and `Footer` components and a `Main` component for the page content itself. The `Layout` component accepts props for the url, title, description and more that are used to set meta tag data on each page - see `src/layout/Wrapper.js`.

You can write long form content in markdown with [mdx](https://mdxjs.com/). For example, this project’s homepage content has been authored in markdown - see `src/markdown/Home.mdx` and these docs have been imported to `src/views/Docs.js` from the project’s top level `README.md` file.

This starter project comes with its own components like in the `/src/ui` folder that you can use, customize or throw away. 

## Routing

This project comes with some default routes - see the `/pages` folder. The `/app` route features a parameterized route that uses `AppContext` to switch between different color modes and share that state with different components, in this case the project’s `Main` component - see `src/views/App.js`, `src/context/AppContext.js` and `src/ui/Main.js`.

Refer to the [Next.js docs](https://nextjs.org/docs/routing/introduction) for more info about how routing works. 

## Styling

Configure your project’s color scheme, typography and other design system values by editing the theme object in `src/layout/Theme.js`. For more info on the theme object, refer to the [System UI Theme Specification](https://system-ui.com/theme/) and the [Theme UI docs](https://theme-ui.com/theming).

Edit global styles in `src/layout/Styles.js`.

Style components using Theme UI’s [sx prop](https://theme-ui.com/sx-prop) or use its [built-in components](https://theme-ui.com/components). You can also drop in components from any [styled-system](https://styled-system.com/) compatible component framework, such as [Chakra UI](https://chakra-ui.com/). For more info, refer to the [Theme UI docs](https://theme-ui.com/theming).

## Tests

This project uses [Cypress](https://www.cypress.io/) for testing. Tests have been written for the landing page, docs and app. 

Expand, modify or delete these tests in `cypress/integration` folder. A custom command written for testing the example App can be found in `cypress/support/commands.js`

To run tests:

```
npm run test
```

## Deploy

The deploy script in `package.json` will run tests, push to master then deploy to [now](https://github.com/zeit/now).

```
npm run deploy
```

The first time your run the script you will need to set up your [zeit](https://zeit.co) account and configure your project for deployment.