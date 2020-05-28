import * as React from 'react'
import {
    Center,
    Text,
    Rule,
    Col,
} from '@tlon/indigo-react'

const NoMatch = () => (
    <Col expand >
        <Rule/>
        <Center height='66vh'><Text mono fontSize='10'>404</Text></Center>
    </Col>
)

export default NoMatch