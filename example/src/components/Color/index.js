import React from "react";
import { H3, Li, Span, H2, P } from "indigo-react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 30px;
`;

const Color = () => (
  <div>
    <H2 mb={[5]}>Color</H2>
    <P mb={[8]}>Colors in the app are as follows:</P>
    <Grid>
      <div>
        <H3 mb={[7]}>Color</H3>
        <ul>
          <Li height={[6]} mb={[4]}>
            white
          </Li>
          <Li height={[6]} mb={[4]}>
            gray.0
          </Li>
          <Li height={[6]} mb={[4]}>
            gray.1
          </Li>
          <Li height={[6]} mb={[4]}>
            gray.2
          </Li>
          <Li height={[6]} mb={[4]}>
            gray.3
          </Li>
          <Li height={[6]} mb={[4]}>
            gray.4
          </Li>
          <Li height={[6]} mb={[4]}>
            gray.5
          </Li>
          <Li height={[6]} mb={[4]}>
            black
          </Li>
          <Li height={[6]} mb={[4]}>
            blue.0
          </Li>
          <Li height={[6]} mb={[4]}>
            blue.1
          </Li>
          <Li height={[6]} mb={[4]}>
            blue.2
          </Li>
          <Li height={[6]} mb={[4]}>
            blue.3
          </Li>
          <Li height={[6]} mb={[4]}>
            green.0
          </Li>
          <Li height={[6]} mb={[4]}>
            green.1
          </Li>
          <Li height={[6]} mb={[4]}>
            green.2
          </Li>
          <Li height={[6]} mb={[4]}>
            green.3
          </Li>
          <Li height={[6]} mb={[4]}>
            red.0
          </Li>
          <Li height={[6]} mb={[4]}>
            red.1
          </Li>
          <Li height={[6]} mb={[4]}>
            red.2
          </Li>
          <Li height={[6]} mb={[4]}>
            red.3
          </Li>
          <Li height={[6]} mb={[4]}>
            yellow.0
          </Li>
          <Li height={[6]} mb={[4]}>
            yellow.1
          </Li>
          <Li height={[6]} mb={[4]}>
            yellow.2
          </Li>
          <Li height={[6]} mb={[4]}>
            yellow.3
          </Li>
        </ul>
      </div>
      <div>
        <H3 mb={[7]}>Value</H3>
        <ul>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #ffffff
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #333333
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #4d4d4d
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #7f7f7f
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #b1b2b3
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #e6e6e6
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #f9f9f9
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #000000
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #ecf6ff
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #b0c7ff
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #4330fc
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #190d7b
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #bdebcc
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #2ed196
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #2aa779
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #286e55
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #f9d6ce
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #ffa073
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #ee5432
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #c10d30
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #ffefc5
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #ffd972
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #fcc440
          </Li>
          <Li height={[6]} mb={[4]} fontFamily="mono">
            #ee892b
          </Li>
        </ul>
      </div>
      <div>
        <H3 mb={[7]}>Example</H3>
        <ul>
          <Li height={[6]} mb={[4]}>
            <Span
              border="1px solid #b1b2b3"
              display="block"
              bg="white"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="gray.0"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="gray.1"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="gray.2"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="gray.3"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="gray.4"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="gray.5"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="black"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="blue.0"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="blue.1"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="blue.2"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="blue.3"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="green.0"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="green.1"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="green.2"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="green.3"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="red.0"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="red.1"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="red.2"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="red.3"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="yellow.0"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="yellow.1"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="yellow.2"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
          <Li height={[6]} mb={[4]}>
            <Span
              display="block"
              bg="yellow.3"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </Li>
        </ul>
      </div>
    </Grid>
  </div>
);

export default Color;
