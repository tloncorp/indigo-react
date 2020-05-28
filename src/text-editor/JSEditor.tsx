// import * as React from 'react'
import {
  Controlled as CodeMirror,
  IControlledCodeMirror
} from "react-codemirror2";
import styled from "styled-components";
import "codemirror/mode/jsx/jsx";
import "codemirror/addon/edit/closebrackets";

type Props = IControlledCodeMirror;

const JSEditor = styled(CodeMirror)<Props>`
  padding: 12px;
  height: 100% !important;
  width: 100% !important;
  cursor: text;
  font-size: 12px;
  line-height: 20px;

  * {
    font-family: "Source Code Pro";
  }

  .CodeMirror {
    background: ${p => p.theme.colors.white} !important;
    color: ${p => p.theme.colors.black} !important;
    height: 100%;
  }

  .cm-s-u.CodeMirror {
    background-color: #000000;
    color: #f4f4f4;
  }

  .cm-s-u .CodeMirror-gutters {
    background: #000000;
    color: #555555;
    border: none;
  }

  .cm-s-u .CodeMirror-guttermarker,
  .cm-s-u .CodeMirror-guttermarker-subtle,
  .cm-s-u .CodeMirror-linenumber {
    color: #555555;
  }

  .cm-s-u .CodeMirror-cursor {
    border-left: 1px solid #ffcc00;
  }

  .cm-s-u div.CodeMirror-selected {
    background: rgba(97, 97, 97, 0.2);
  }

  .cm-s-u.CodeMirror-focused div.CodeMirror-selected {
    background: rgba(97, 97, 97, 0.2);
  }

  .cm-s-u .CodeMirror-line::selection,
  .cm-s-u .CodeMirror-line > span::selection,
  .cm-s-u .CodeMirror-line > span > span::selection {
    background: rgba(128, 203, 196, 0.2);
  }

  .cm-s-u .CodeMirror-line::-moz-selection,
  .cm-s-u .CodeMirror-line > span::-moz-selection,
  .cm-s-u .CodeMirror-line > span > span::-moz-selection {
    background: rgba(128, 203, 196, 0.2);
  }

  .cm-s-u .CodeMirror-activeline-background {
    background: rgba(0, 0, 0, 0.5);
  }

  .cm-s-u .cm-keyword {
    color: #c792ea;
  }

  .cm-s-u .cm-operator {
    color: #88c6ff;
  }

  .cm-s-u .cm-variable-2 {
    color: #e1f1ff;
  }

  .cm-s-u .cm-variable-3,
  .cm-s-u .cm-type {
    color: #f59b9b;
  }

  .cm-s-u .cm-builtin {
    color: #ffc700;
  }

  .cm-s-u .cm-atom {
    color: #f59b9b;
  }

  .cm-s-u .cm-number {
    color: #f59b9b;
  }

  .cm-s-u .cm-def {
    color: #88c6ff;
  }

  .cm-s-u .cm-string {
    color: #97d6b6;
  }

  .cm-s-u .cm-string-2 {
    color: #f59b9b;
  }

  .cm-s-u .cm-comment {
    color: #555555;
  }

  .cm-s-u .cm-variable {
    color: #f59b9b;
  }

  .cm-s-u .cm-tag {
    color: #ff4136;
  }

  .cm-s-u .cm-meta {
    color: #ffc700;
  }

  .cm-s-u .cm-attribute {
    color: #c792ea;
  }

  .cm-s-u .cm-property {
    color: #f59b9b;
  }

  .cm-s-u .cm-qualifier {
    color: #ffc700;
  }

  .cm-s-u .cm-variable-3,
  .cm-s-u .cm-type {
    color: #ffdf7b;
  }

  .cm-s-u .cm-error {
    color: rgba(255, 255, 255, 1);
    background-color: #f59b9b;
  }

  .cm-s-u .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: white !important;
  }
`;

JSEditor.defaultProps = {
  value: "",
  options: {
    value: "",
    mode: "jsx",
    theme: "u",
    lineNumbers: true,
    lineSeparators: null,
    indentUnit: 1,
    smartIndent: true,
    tabSize: 4,
    indentWithTabs: false,
    electricChars: true,
    specialChars: /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/,
    direction: "ltr",
    // Host OS specific
    // rtlMoveVisually
    keyMap: "default",
    lineWrapping: true,
    firstLineNumber: 1,
    fixedGutter: true,
    scrollbarStyle: "null",
    coverGutterNextToScrollbar: false,
    // Host OS specific
    // inputStyle
    readOnly: false,
    showCursorWhenSelecting: false,
    lineWiseCopyCut: true,
    pasteLinesPerSelection: true,
    selectionsMayTouch: false,
    undoDepth: 200,
    historyEventDelay: 1250,
    autofocus: false,
    dragDrop: true,
    allowDropFileTypes: null,
    cursorBlinkRate: 530,
    cursorScrollMargin: 0,
    cursorHeight: 0.85,
    resetSelectionOnContextMenu: true,
    workTime: 200,
    workDelay: 300,
    pollInterval: 100,
    addModeClass: false,
    maxHighlightLength: 10000,
    viewportMargin: 10,
    spellcheck: true,
    autocorrect: false,
    autocapitalize: false,
    autoCloseBrackets: true
  }
};

export default JSEditor;
export { Props };
