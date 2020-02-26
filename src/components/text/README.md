# Text Components
___
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

#### Styled System Reference

[ColorProps](https://styled-system.com/table#color),
[LayoutProps](https://styled-system.com/table#layout),
[SpaceProps](https://styled-system.com/table#space),
[TypographyProps](https://styled-system.com/table#typography)
#### Usage
```tsx
<StyledLink gray fontSize='2' py='1' href='http://urbit.org'>
  Urbit
</StyledLink>
```
___
## `<Code />`

#### Outer HTML Tag

`<code />`

#### Props
```ts
ColorProps & LayoutProps & SpaceProps & TypographyProps & {};
```

#### Default Props
```js
{
  fontFamily: 'mono',
  bg: 'gray1',
  fontSize: 2,
  padding: 2,
  lineHeight: 'regular',
}
```

#### Styled System Reference
[ColorProps](https://styled-system.com/table#color),
[LayoutProps](https://styled-system.com/table#layout),
[SpaceProps](https://styled-system.com/table#space),
[TypographyProps](https://styled-system.com/table#typography)

#### Usage
```tsx
<Code>
  `export default Code;
  export {Props};`
</Code>
```

___
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

#### Styled System Reference
[ColorProps](https://styled-system.com/table#color),
[LayoutProps](https://styled-system.com/table#layout),
[SpaceProps](https://styled-system.com/table#space),
[TypographyProps](https://styled-system.com/table#typography)

#### Usage
```tsx
<Text fontSize='8' gray bold mono>
  ~zod
</Text>
```
