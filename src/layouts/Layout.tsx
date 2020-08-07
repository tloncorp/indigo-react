// import * as React from 'react'
import {
    border,
    BorderProps,
    flexbox,
    FlexboxProps,
    layout,
    LayoutProps,
    space,
    SpaceProps,
    compose
  } from "styled-system";
import styled from 'styled-components'
import css from '@styled-system/css'

type Props = BorderProps &
    FlexboxProps &
    LayoutProps &
    SpaceProps & {
        vertical?: boolean
        pitch?: number | string | null
        children?: JSX.Element[] | (string | JSX.Element)[]
    };

const Layout = styled.div(({vertical, pitch}:Props) => css({
    display: 'flex',
    flexDirection: vertical ? 'column' : 'row',
    '& > *': vertical ? { marginTop: pitch } : { marginLeft: pitch },
    '& :first-child': vertical ? { marginTop: '0px' } : { marginLeft: '0px' },
}), layout, space, flexbox, border);

export default Layout;
