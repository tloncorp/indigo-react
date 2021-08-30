# Development

## Getting Started

`npm install`

`npm run dev`

There are a few ways of making new components for Indigo. Let's cover some of the core patterns.

## Component Patterns

Creating a basic component with dynamic properties that alter styling from scratch.

```tsx
import React, { FC } from "react";
import classNames from "classnames";

// Construct a union type of the variants
type LabelVariant = "default" | "important" | "caution";

// Use that variant type when constructing the props. It's often nice to leave the prop as optional and give a default value especially when that's the most often needed value.
export type LabelProps = HTMLAttributes<HTMLLabelElement> & {
  variant?: LabelVariant;
};

// When building props it's important to let the underlying props of the HTML element pass through so we get things like className, onClick, etc. It's preferred to compose the base props using HTMLAttributes<element> so that they're complete.

// To build in the classes for variants we need the full class names so that Tailwind can pick them up and not purge them. Making a map like this is one way to do that and makes it easier to add new values later.
const variantMap: Record<LabelVariant, string> = {
  default: "font-normal text-black",
  important: "text-lg font-bold py-2 text-black",
  caution: "font-bold text-orange-500",
};

// Here, we define our component. Important to notice that we give variant a default value and also include className as a prop. Having className here gives the person using this component a path to inject customizations they might need, like margin, flexbox, etc. This is a convention that we like to keep in Indigo to always allow components to be customized to their surroundings, same as `props`.

//The the static classes inside the classNames helper function along with the variant map compose together to form the classes that will provide styling for the component.
export const Label: FC<LabelProps> = ({
  variant = "default",
  className,
  children,
  ...props
}) => {
  // ... some logic

  return (
    <label
      className={classNames(
        "label other-classes",
        variantMap[variant],
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};

// Add a displayName. It appears in the React devtools inspector and in errors. This is mandatory.
Label.displayName = "Label";
```

## Scripts

`npm run build` Builds the library with `vite` and constructs typings with `tsc`, also copies over the Tailwind config and stylesheets.

`npm run tailwind:dist` Copies the Tailwind config and our stylesheets for distribution.

`npm run reset` Removes node_modules and package-lock.json and npm installs fresh

### License

MIT License © [Tlon](https://tlon.io)
