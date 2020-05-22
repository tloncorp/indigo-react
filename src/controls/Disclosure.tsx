import { Disclosure as _Disclosure } from "@reach/disclosure";
import styled from 'styled-components'

type Props = {
    children: JSX.Element | JSX.Element[] | string | (string | JSX.Element)[];
    defaultOpen?: 	boolean
    id?: string | number
    onChange?: Function
    open?: boolean
}

const Disclosure = styled(_Disclosure)<Props>``

export default Disclosure;
