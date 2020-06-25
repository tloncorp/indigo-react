// import * as React from 'react';
// @ts-ignore
import MarkdownToJsx from "markdown-to-jsx";
// import { Box } from '../core/index';
import styled from "styled-components";

// type Props = {
//   md: string;
// }

// const Markdown = ({md, ...props}:Props) => {
//   // marked.setOptions({
//   //   renderer: new marked.Renderer(),
//   //   // blue: function(code, language) {
//   //   //   const hljs = require('blue.js');
//   //   //   const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
//   //   //   return hljs.blue(validLanguage, code).value;
//   //   // },
//   //   pedantic: false,
//   //   gfm: true,
//   //   breaks: false,
//   //   sanitize: false,
//   //   smartLists: true,
//   //   smartypants: false,
//   //   xhtml: false
//   // });

//   // const html = marked(md)

//   return (
//     <MarkdownToJsx {...props}>
//     {  }
//     </MarkdownToJsx>
//   )
// }

// MarkdownRenderer.defaultProps = {
//   md: '',
// }

const Markdown = styled(MarkdownToJsx)`
  width: 100%;

  * {
    color: ${p => p.theme.colors.black};
    font-size: 12px;
    font-family: "Inter", sans-serif;
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  a,
  ul,
  blockquote,
  code,
  pre {
    padding-bottom: 8px;
    padding-top: 8px;
  }

  h2,
  h3,
  h4,
  h5,
  p,
  a,
  ul {
    font-weight: 400;
  }

  h1 {
    padding-top: 72px;
    padding-bottom: 8px;
    font-weight: 600;
    font-size: 12px;
  }

  h2 {
    padding-top: 48px;
    padding-bottom: 8px;
    font-weight: 600;
    font-size: 12px;
  }

  h3 {
    padding-top: 32px;
    padding-bottom: 8px;
    font-weight: 600;
    font-size: 12px;
    color: ${p => p.theme.colors.gray};
  }

  h4 {
    padding-top: 16px;
    padding-bottom: 8px;
    font-weight: 600;
    font-size: 12px;
    color: ${p => p.theme.colors.gray};
  }

  pre,
  code {
    padding: 1px 2px;
    font-family: "Source Code Pro", mono;
    background-color: ${p => p.theme.colors.gray};
    border-radius: 2px;
  }

  pre {
    padding: 8px;
  }

  pre span {
    font-family: "Source Code Pro", mono;
  }

  ul > li {
    line-height: 1.5;
  }

  a {
  }

  img {
    margin-bottom: 8px;
  }

  th,
  td {
    min-width: 120px;
    border-style: solid;
    border-width: 1px;
    border-color: ${p => p.theme.colors.gray};
    padding: 8px;
  }

  th {
    font-weight: 600;
    text-align: left;
  }

  table {
    border-collapse: collapse;
  }

  hr {
    border: none;
    height: 1px;
    background-color: ${p => p.theme.colors.gray};
    margin: 8px 0px;
  }

  strong,
  b {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  ol {
    list-style-type: decimal;
    margin-left: 16px;
  }

  ul {
    list-style-type: disc;
    margin-left: 16px;
  }

  blockquote {
    padding-left: 8px;
    border-left: 4px solid ${p => p.theme.colors.gray};
  }

  blockquote p {
    padding: 0;
  }
`;

Markdown.defaultProps = {
  children: "",
  className: ""
  // escapeHtml: false,
  // skipHtml: false,
  // sourcePos: false,
  // rawSourcePos: false,
  // includeNodeIndex: false,
  // renderers: {
  //   code: p => (
  //     <pre>
  //       <span>{p.value}</span>
  //     </pre>
  //   ),
  // },
};

export default Markdown;
