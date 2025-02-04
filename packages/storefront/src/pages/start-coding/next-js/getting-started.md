# Next Js

<TableOfContents></TableOfContents>

## Quick start

To build your own **NextJS** application with the **React** components of the Porsche Design System, follow these steps:

- Create a new application by executing:

```shell script
// install with yarn:
yarn create next-app

// install with npm:
npm init next-app
```

- Follow the installation wizard to set everything up:

```
✔ What is your project named? "my-app"
✔ Would you like to use TypeScript with this project? "Yes"
✔ Would you like to use ESLint with this project? "Yes"
```

- Install the Porsche Design System within your project directory (e.g. "my-app"):

```shell script
// install with yarn:
cd my-app
yarn add @porsche-design-system/components-react

// install with npm:
cd my-app
npm install @porsche-design-system/components-react
```

You are ready to start building your own application.

## Integration

The following project is a standard NextJS setup with following adaptions.

Extend `_app.tsx` by the necessary `PorscheDesignSystemProvider`:

```tsx
// pages/_app.tsx

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PorscheDesignSystemProvider } from '@porsche-design-system/components-react/ssr';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PorscheDesignSystemProvider>
      <Component {...pageProps} />
    </PorscheDesignSystemProvider>
  );
}
```

Create `_document.tsx` and add necessary partials `getInitialStyles()` and `getDSRPonyfill()`. Further details,
configuration options and even more partials to improve the UX or loading performance can be found
[here](partials/introduction):

```tsx
// pages/_document.tsx

import { Head, Html, Main, NextScript } from 'next/document';
import {
  getInitialStyles,
  getFontFaceStylesheet,
  getFontLinks,
  getComponentChunkLinks,
  getIconLinks,
  getMetaTagsAndIconLinks,
  getDSRPonyfill,
  getCookiesFallbackScript,
  getBrowserSupportFallbackScript,
} from '@porsche-design-system/components-react/partials';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* **necessary for SSR support**, injects stylesheet which defines visibility of pre-hydrated PDS components */}
        {getInitialStyles({ format: 'jsx' })}
        {/* injects stylesheet which defines Porsche Next CSS font-face definition (=> minimize FOUT) */}
        {getFontFaceStylesheet({ format: 'jsx' })}
        {/* preloads Porsche Next font (=> minimize FOUT) */}
        {getFontLinks({ format: 'jsx' })}
        {/* preloads PDS component core chunk from CDN for PDS component hydration (=> improve loading performance) */}
        {getComponentChunkLinks({ format: 'jsx' })}
        {/* preloads Porsche icons (=> minimize FOUC) */}
        {getIconLinks({ format: 'jsx' })}
        {/* injects favicon, apple touch icons, android touch icons, etc. */}
        {getMetaTagsAndIconLinks({ appTitle: 'Sample Project NextJS', format: 'jsx' })}
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* **necessary for SSR support**, enables declarative shadow dom support for Safari and Firefox */}
        {getDSRPonyfill({ format: 'jsx' })}
        {/* shows a cookie fallback overlay and blocks the page, in case cookies are disabled */}
        {getCookiesFallbackScript({ format: 'jsx' })}
        {/* shows a browser fallback overlay and blocks the page, in case browser is not supported (e.g. IE11) */}
        {getBrowserSupportFallbackScript({ format: 'jsx' })}
      </body>
    </Html>
  );
}
```

Extend `index.tsx` and use a Porsche Design System component, e.g. `PHeadline`:

```tsx
// pages/index.tsx

import { PHeadline } from '@porsche-design-system/components-react/ssr';

export default function Home() {
  return (
    <>
      <PHeadline>Welcome to Next.js with Porsche Design System!</PHeadline>
    </>
  );
}
```

- Run `yarn build` or `npm build`
- Execute `yarn start` or `npm start` and check if the components are displayed correctly.

## When are Porsche Design System components (re-)hydrated?

See [componentsReady()](helpers/components-ready) for further information.

## Sample integration

We provide a public GitHub repository with a basic sample project setup to show how it is managed in real code.  
You can find the repository of the NextJS example project here:
[Sample Integration NextJS](https://github.com/porsche-design-system/sample-integration-nextjs)

### Get the project up and running

- Clone the repository by executing  
  `git clone https://github.com/porsche-design-system/sample-integration-nextjs.git`
- Follow the installation guidelines in the `README.md` file
