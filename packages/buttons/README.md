# Button Components

[Top](https://www.github.com/urbit/indigo-react)

## `<Button />`

#### Outer HTML Tag

`<button />`

#### Props
```ts
ColorProps &
LayoutProps &
SpaceProps & {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  wide?: boolean;
  red?: boolean;
  green?: boolean;
  blue?: boolean;
  onClick?: Function;
};
```

#### Default Props
```js
{
  lg: true,
}
```

#### Usage
```tsx
<Button wide md onClick={props.handleCancelAction}>
  Cancel
</Button>
```

## Styled System Reference
- [SpaceProps](https://styled-system.com/table#space)
- [ColorProps](https://styled-system.com/table#color)
- [TypographyProps](https://styled-system.com/table#typography)
- [LayoutProps](https://styled-system.com/table#layout)
- [FlexboxProps](https://styled-system.com/table#flexbox)
- [GridProps](https://styled-system.com/table#grid-layout)
- [BackgroundProps](https://styled-system.com/table#background)
- [BorderProps](https://styled-system.com/table#border)
- [PositionProps](https://styled-system.com/table#position)
- [ShadowProps](https://styled-system.com/table#shadow)
