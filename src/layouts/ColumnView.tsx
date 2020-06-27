import { Disclosure as _Disclosure, DisclosureProps } from "@reach/disclosure";
import { space , display, compose, SpaceProps, DisplayProps } from 'styled-system'
import styled from 'styled-components'

type Props = DisclosureProps & SpaceProps & DisplayProps

const ColumnView = styled(_Disclosure)<Props>`
    display: flex;
    width: 100%:
    height: 100%;
    flex-wrap: nowrap;
    ${compose(space, display)};
`

export default ColumnView;
