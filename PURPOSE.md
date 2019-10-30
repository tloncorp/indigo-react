## Why indigo-react? indigo-static? indigo-tokens?

The prior indigo project iterations all lived in the same repository. This repository comprised react components, static styles, and design constants loosely organized, as well as the documentation, example sites, and build steps for each.

One of the main problems with the prior iteration is that there was no process for publishing and using each of these libraries. Previously, developers would copy components from indigo into the project they were currently working on OR use whatever design component tools they were comfortable using. If it is faster to use a library you are comfortable with, like Tachyons, one might use that instead of indigo's static library.

Projects are moving targets with changing requirements, so sometimes these components would need updates or tweaks. A developer might update their indigo components or classes, causing their version to be out of sync with the `master` copy, and also out of sync with all other developers.

New, useful components that were created through project work were tough to integrate into the indigo project. If updates were made to indigo, one would have to update all the applications using indigo by hand, which is error prone and slow. There's also no mechanism to extend components in a sane manner that everyone can understand.

## Updates

1. Separate the projects – build tooling, publishing, and project structure are pretty different for static css, react component libraries, and design tokens. We have separated the projects. The common denominator is that they are all now part of the Javascript ecosystem (more below).

2. Publish the packages to NPM – now all developers can import versioned components to their projects.

3. Make maintainence easier – the react library comes with an example site (create-react-app) where your components are available _as you develop_. You can use this as a playground for new ideas, a documentation site, or a learning resource for other developers.

4. CSS-in-JS – These components are being used in mostly React applications because that's the `planet` we live on. You can use these components on the web, React Native projects, or Electron apps. Some urbit projects already use atomic css (which is great). Styled-components + styled-system is like the CSS-in-JS version of atomic css. Atomic CSS in a component library can get a little weird. Each component, which was supposed to be isolated, somewhat relies on a global css import. Even if we want to use 1 component from the library, we still need to import all of the CSS (just because this is easiest in a sass/css pipeline). With CSS-in-JS solutions we eliminate global css import, have easier built-in methods to extends components, and can still leverage theme tokens. We can also import only the components/styles that we need. We are also able to slowly transition away from the old components.

5. Tachyons-based static build – Some projects are already using tachyons. It's fairly battle-tested for static sites. We are able to generate a build with indigo-tokens that replaces some of the default Tachyons values with our theme values. This is the best of both worlds: we get the customization we need from our design system + the familiarity/maturity of Tachyons.
