# Form Components

[Top](https://www.github.com/urbit/indigo-react)

## `<Input />`

#### Outer HTML Tag

`<Box />`

#### Props
```ts
LayoutProps & SpaceProps & {
  caption?: string;
  placeholder?: string;
  label?: string;
  id: string;
  disabled?: boolean;
  type: string;
}
```

#### Default Props
```js
{
  type: 'text',
}
```

#### Usage (pseudocode)
```js
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
  });

  const initialValues = {
    firstName: '',
  };

  <Formik
    initialValues={initialValues}
    validationSchema={SignupSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}>
    <Form>
      <Input
        label="First Name"
        id="firstName"
        caption="Please enter your first name."
        placeholder="Felicia"
      />
    </Form>
  </Formik>

```

## `<Radio />`

#### Outer HTML Tag

`<label />`

#### Props
```ts
LayoutProps & SpaceProps & {
  caption?: string;
  label: string;
  name: string;
  id?: string;
  disabled?: boolean;
  type?: string;
}
```

#### Default Props
```js
{
}
```

#### Usage (pseudocode)
```js
const SignupSchema = Yup.object().shape({
  pet: Yup.string()
    .oneOf(['dog', 'cat', 'turtle'])
  });

  const initialValues = {
    pet: 'dog',
  };

  <Formik
    initialValues={initialValues}
    validationSchema={SignupSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}>
    <Form>
      <InputLabel>Favorite Pet</InputLabel>
      <Radio
        label="Dog"
        id="dog"
        name="pet"
      />
      <Radio
        label="Cat"
        id="pet"
        name="color"
      />
      <Radio
        label="Turtle"
        id="turtle"
        name="pet"
      />
    </Form>
  </Formik>

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
