## `<Center />`
Centers children vertical and horizontally.

#### Outer HTML Tag

`<div />`

#### Props
```ts
BorderProps &
ColorProps &
FlexboxProps &
LayoutProps &
PositionProps &
SpaceProps & {};
```

#### Default Props
```js
{
  margin: 0,
  minWidth: 0,
}
```

#### Usage
```tsx
<Center size='8'>
  <Text>I am centered.</Text>
</Center>
```

## `<Col />`
Positions children vertically.

#### Outer HTML Tag

`<div />`

#### Props
```ts
BorderProps &
ColorProps &
FlexboxProps &
LayoutProps &
PositionProps &
SpaceProps & {};
```

#### Default Props
```js
{
  margin: 0,
  minWidth: 0,
}
```

#### Usage
```tsx
<Col width='8'>
  <Text>1</Text>
  <Text>2</Text>
  <Text>3</Text>
  <Text>4</Text>
</Col>
```

## `<ItemRow />`
Positions children horizontally and accepts rules about how to position children on smaller screens.

#### Outer HTML Tag

`<div />`

#### Props
```ts
// GridTemplateColumns, GTC for short
GTC = string | number | (string | number | null)[];

BorderProps &
FlexboxProps &
LayoutProps &
PositionProps &
SpaceProps &
GridProps & {
  columns: GTC;
  width?: GTC;
  gap?: number;
  children?: JSX.Element | JSX.Element[];
};
```

#### Default Props
```js
{
}
```

#### Usage
```tsx
<ItemRow columns={[1, 2, 4]}>
  <Text>1</Text>
  <Text>2</Text>
  <Text>3</Text>
  <Text>4</Text>
</ItemRow>
```


## `<Row />`
Positions children horizontally.

#### Outer HTML Tag

`<div />`

#### Props
```ts
BorderProps &
ColorProps &
FlexboxProps &
LayoutProps &
PositionProps &
SpaceProps & {};
```

#### Default Props
```js
{
  margin: 0,
  minWidth: 0,
}
```

#### Usage
```tsx
<Row>
  <Text>1</Text>
  <Text>2</Text>
  <Text>3</Text>
  <Text>4</Text>
</Row>
```


## `<Rule />`
Positions children horizontally.

#### Outer HTML Tag

`<div />`

#### Props
```ts
BorderProps &
FlexboxProps &
LayoutProps &
PositionProps &
SpaceProps & {
  vertical?: boolean;
};
```

#### Default Props
```js
{
  borderColor: 'gray2',
  vertical: false,
}
```

#### Usage
```tsx
<Col>
  <Text>1</Text>
  <Text>2</Text>
  <Rule />
  <Text>3</Text>
  <Text>4</Text>
</Col>
```

## `<Space />`
Applies space props to all children.

#### Outer HTML Tag

`<div />`

#### Props
```ts
SpaceProps & {
  className?: string;
  children: JSX.Element | JSX.Element[];
};
```

#### Default Props
```js
{
}
```

#### Usage
```tsx
<Space pt='3'>
  <Text>1</Text>
  <Text>2</Text>
  <Rule />
  <Text>3</Text>
  <Text>4</Text>
</Space>
```

Same as
```tsx
<Box>
  <Text pt='3'>1</Text>
  <Text pt='3'>2</Text>
  <Rule pt='3' />
  <Text pt='3'>3</Text>
  <Text pt='3'>4</Text>
</Box>
```

## Styled System Reference
[SpaceProps](https://styled-system.com/table#space)

[ColorProps](https://styled-system.com/table#color)

[TypographyProps](https://styled-system.com/table#typography)

[LayoutProps](https://styled-system.com/table#layout)

[FlexboxProps](https://styled-system.com/table#flexbox)

[GridProps](https://styled-system.com/table#grid-layout)

[BackgroundProps](https://styled-system.com/table#background)

[BorderProps](https://styled-system.com/table#border)

[PositionProps](https://styled-system.com/table#position)

[ShadowProps](https://styled-system.com/table#shadow)
