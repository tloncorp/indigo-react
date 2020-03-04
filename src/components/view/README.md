# View Components

[Top](https://www.github.com/urbit/indigo-react)

## `<Frame />`

#### Outer Tag

`<Col />`

#### Props
```ts
children?: JSX.Element | JSX.Element[];
topBarContents?: JSX.Element | JSX.Element[];
```

#### Default Props
```js
{
}
```

#### Usage
See Below


## `<View />`

#### Outer Tag

`<Col />`

#### Props
```ts
children?: JSX.Element | JSX.Element[];
sideBarContents?: JSX.Element | JSX.Element[];
sideBarOpen?: boolean;
```

#### Default Props
```js
{
}
```

#### Usage
```tsx
const SideBarContents = ({listItems}) => {
  return (
    <Col>
      <Row height='6'>
        Title
      </Row>
      {
        listItems.map(item =>
          <Row>
            <Text>{item}</Text>
          </Row>
        )
      }
    </Col>
  )
}

export default class Application extends React.Component {
  state = {
    open: true
  }

  toggleSidebar() {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <Frame>
        <View
          sideBarOpen={this.state.open}
          sideBarContents={
            <SideBarContents listItems={list} />
          }>
          <Text>Main</Text>
          <Button onClick={() => this.toggleSidebar()}>
            Toggle Sidebar
          </Button>
        </View>
      </Frame>
    )
  }
}
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
