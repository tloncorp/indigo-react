import React from "react";
import {
  StyledH3,
  StyledLi,
  StyledSpan,
  StyledH2,
  StyledP
} from "indigo-react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 30px;
`;

const Color = () => (
  <div>
    <StyledH2 mb={[5]}>Color</StyledH2>
    <StyledP mb={[8]}>Colors in the app are as follows:</StyledP>
    <Grid>
      <div>
        <StyledH3 mb={[7]}>Color</StyledH3>
        <ul>
          <StyledLi height={[6]} mb={[4]}>
            white
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            gray.0
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            gray.1
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            gray.2
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            gray.3
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            gray.4
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            gray.5
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            black
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            blue.0
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            blue.1
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            blue.2
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            blue.3
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            green.0
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            green.1
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            green.2
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            green.3
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            red.0
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            red.1
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            red.2
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            red.3
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            yellow.0
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            yellow.1
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            yellow.2
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            yellow.3
          </StyledLi>
        </ul>
      </div>
      <div>
        <StyledH3 mb={[7]}>Value</StyledH3>
        <ul>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #ffffff
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #333333
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #4d4d4d
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #7f7f7f
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #b1b2b3
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #e6e6e6
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #f9f9f9
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #000000
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #ecf6ff
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #b0c7ff
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #4330fc
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #190d7b
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #bdebcc
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #2ed196
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #2aa779
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #286e55
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #f9d6ce
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #ffa073
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #ee5432
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #c10d30
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #ffefc5
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #ffd972
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #fcc440
          </StyledLi>
          <StyledLi height={[6]} mb={[4]} fontFamily="mono">
            #ee892b
          </StyledLi>
        </ul>
      </div>
      <div>
        <StyledH3 mb={[7]}>Example</StyledH3>
        <ul>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              border="1px solid #b1b2b3"
              display="block"
              bg="white"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="gray.0"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="gray.1"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="gray.2"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="gray.3"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="gray.4"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="gray.5"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="black"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="blue.0"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="blue.1"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="blue.2"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="blue.3"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="green.0"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="green.1"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="green.2"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="green.3"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="red.0"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="red.1"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="red.2"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="red.3"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="yellow.0"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="yellow.1"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="yellow.2"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
          <StyledLi height={[6]} mb={[4]}>
            <StyledSpan
              display="block"
              bg="yellow.3"
              height={[6]}
              mb={[4]}
              width={[9]}
            />
          </StyledLi>
        </ul>
      </div>
    </Grid>
  </div>
);

export default Color;
