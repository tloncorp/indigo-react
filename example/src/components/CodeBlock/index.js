import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "../../utils/theme";
import { Box, Span } from "indigo-react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CodeBlock = ({ codeExample }) => (
  <React.Fragment>
    <Box bg="grayLightest" padding={4} mb={2} overflow="hidden">
      <Highlight
        {...defaultProps}
        theme={theme}
        code={codeExample}
        language="jsx"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
    <CopyToClipboard text={codeExample}>
      <Span borderBottom="1px solid" style={{ cursor: "pointer" }}>
        Copy
      </Span>
    </CopyToClipboard>
  </React.Fragment>
);

export default CodeBlock;
