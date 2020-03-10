# Text Components

[Top](https://www.github.com/urbit/indigo-react)

## `<Anchor />`

#### Outer HTML Tag

`<a />`

#### Props
```ts
ColorProps &
LayoutProps &
SpaceProps &
TypographyProps & {
  gray?: boolean;
  bold?: boolean;
  mono?: boolean;
  textDecoration?: string;
};
```

#### Default Props
```js
{
  textDecoration: 'underline',
}
```

#### Usage
```tsx
<StyledLink gray fontSize='2' py='1' href='http://urbit.org'>
  Urbit
</StyledLink>
```

## `<Code />`

#### Outer HTML Tag

`<code />`

#### Props
```ts
ColorProps & LayoutProps & SpaceProps & TypographyProps & BorderProps &  {};
```

#### Default Props
```js
{
  fontFamily: 'mono',
  bg: 'gray0',
  color: 'black',
  fontSize: 2,
  padding: 1,
  paddingTop: '2px',
  paddingBottom: '2px',
  lineHeight: 'short',
}
```

#### Usage
```tsx
<Code>
  `export default Code;
  export {Props};`
</Code>
```


## `<Text />`

#### Outer HTML Tag

`<div />`

#### Props
```ts
ColorProps &
LayoutProps &
SpaceProps &
TypographyProps & {
  gray?: boolean;
  bold?: boolean;
  mono?: boolean;
};
```

#### Default Props
```js
{
  lineHeight: 'short',
  fontWeight: 400,
  fontSize: 2,
}
```

#### Usage
```tsx
<Text fontSize='8' gray bold mono>
  ~zod
</Text>
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
