## Why indigo-react? indigo-static? indigo-tokens?

The prior indigo project iterations all lived in the same repository. This repository comprised react components, static styles, and design constants loosely organized, as well as the documentation, example sites, and build steps for each.

One of the main problems with the prior iteration is that there was no process for publishing and using each of these libraries. Previously, developers would copy components from indigo into the project they were currently working on OR use whatever design component tools they were comfortable using. If it is faster to use a library you are comfortable with, like Tachyons, one might use that instead of indigo's static library.

Projects are moving targets with changing requirements, so sometimes these components would need updates or tweaks. A developer might update their indigo components or classes, causing their version to be out of sync with the `master` copy, and also out of sync with all other developers.

New, useful components that were created through project work were tough to integrate into the indigo project. If updates were made to indigo, one would have to update all the applications using indigo by hand, which is error prone and slow. There's also no mechanism to extend components in a sane manner that everyone can understand.

## Updates

1. Separate the projects – build tooling, publishing, and project structure are pretty different for static css, react component libraries, and design tokens. We have separated the projects. The common denominator is that they are all now part of the Javascript ecosystem (more below).

   - indigo-tokens is where our design tokens live. These are theme constants to be used within indigo-react and indigo-static. They serve as our source of truth for the design system.

   - indigo-react is our React component library. Within a react project, you import our tokens `import theme from "indigo-tokens";` and use the `theme` alongside styled-component's `ThemeProvider`. In a top-level component:

     ```
       <ThemeProvider theme={theme}>
         ...
       </ThemeProvider>
     ```

   - indigo-static is our Tachyons-based static css library. It uses indigo-tokens at compilation to inject our theme values into the Tachyons system. You will not need to import indigo-tokens for your static site project.

2. Publish the packages to NPM – now all developers can import versioned components to their projects.

3. Make maintainence easier – the react library comes with an example site (create-react-app) where your components are available _as you develop_. You can use this as a playground for new ideas, a documentation site, or a learning resource for other developers.

4. Benefits of CSS-in-JS (styled-components & styled-system):

   - Automatic critical CSS: styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically. Combined with code splitting, this means your users load the least amount of code necessary.
   - No class name bugs: styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.
   - Easier deletion of CSS: it can be hard to know whether a class name is used somewhere in your codebase. styled-components makes it obvious, as every bit of styling is tied to a specific component. If the component is unused (which tooling can detect) and gets deleted, all its styles get deleted with it.
   - Simple dynamic styling: adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.
   - Painless maintenance: you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.
     Automatic vendor prefixing: write your CSS to the current standard and let styled-components handle the rest.
   - Quickly build custom UI components with constraint-based style props based on scales defined in your theme.
   - Primitive building blocks for component-based design systems
   - Consistency in typographic scale, margin, padding, and widths

5. Tachyons-based static build – Some projects are already using tachyons. It's fairly battle-tested for static sites. We are able to generate a build with indigo-tokens that replaces some of the default Tachyons values with our theme values. This is the best of both worlds: we get the customization we need from our design system + the familiarity/maturity of Tachyons.
