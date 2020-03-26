// import * as React from 'react'
import {Controlled as CodeMirror} from 'react-codemirror2';
import styled from 'styled-components';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';

const MarkdownEditor = styled(CodeMirror)`
  padding: 12px;
  height: 100% !important;
  width: 100% !important;
  cursor: text;
  font-size: 12px;
  line-height: 20px;

  * {
    font-family: 'Source Code Pro';
  }

  .CodeMirror {
    background: ${p => p.theme.colors.white} !important;
    color: ${p => p.theme.colors.black} !important;
    height: 100%;
  }

  .CodeMirror-selected { background:${p => p.theme.colors.blue0} !important; }

  .cm-s-u span { font-family: "Source Code Pro"}
  .cm-s-u span.cm-meta { color: ${p => p.theme.colors.gray5}; }
  .cm-s-u span.cm-number { color: ${p => p.theme.colors.gray5}; }
  .cm-s-u span.cm-keyword { line-height: 1em; font-weight: bold; color: ${p =>
    p.theme.colors.gray5}; }
  .cm-s-u span.cm-atom { font-weight: bold; color: ${p => p.theme.colors.gray5}; }
  .cm-s-u span.cm-def { color: ${p => p.theme.colors.black}; }
  .cm-s-u span.cm-variable { color: ${p => p.theme.colors.black}; }
  .cm-s-u span.cm-variable-2 { color: ${p => p.theme.colors.black}; }
  .cm-s-u span.cm-variable-3, .cm-s-tlon span.cm-type { color: ${p => p.theme.colors.black}; }
  .cm-s-u span.cm-property { color: ${p => p.theme.colors.black}; }
  .cm-s-u span.cm-operator { color: ${p => p.theme.colors.black}; }
  .cm-s-u span.cm-comment { color: ${p => p.theme.colors.black}; background-color: ${p =>
  p.theme.colors.gray0}; padding: 2px; border-radius: 2px;}
  .cm-s-u span.cm-string { color: ${p => p.theme.colors.gray7} }
  .cm-s-u span.cm-string-2 { color: ${p => p.theme.colors.gray5}; }
  .cm-s-u span.cm-qualifier { color: ${p => p.theme.colors.gray7} }
  .cm-s-u span.cm-error { color: ${p => p.theme.colors.red} }
  .cm-s-u span.cm-attribute { color: ${p => p.theme.colors.gray5}; }
  .cm-s-u span.cm-tag { color: ${p => p.theme.colors.gray5}; }
  .cm-s-u span.cm-link { color: ${p => p.theme.colors.gray7}; text-decoration: none;}
  .cm-s-u .CodeMirror-activeline-background { background: ${p => p.theme.colors.gray5}; }
  .cm-s-u .CodeMirror-cursor {
    border-left: 2px solid ${p => p.theme.colors.blue1};
  }

  .cm-s-u span.cm-builtin { color: ${p => p.theme.colors.gray5}; }
  .cm-s-u span.cm-bracket { color: ${p => p.theme.colors.gray5}; }

  .cm-s-u .CodeMirror-matchingbracket { outline:1px solid ${p => p.theme.colors.gray5}; color:${p =>
  p.theme.colors.black}; !important; }

  .CodeMirror-hints.u {
    color: ${p => p.theme.colors.gray7};;
    background-color: ${p => p.theme.colors.blue0}; !important;
  }

  .CodeMirror-hints.u .CodeMirror-hint-active {
    background-color: ${p => p.theme.colors.blue}; !important;
    color: ${p => p.theme.colors.gray7}; !important;
  }

`;

MarkdownEditor.defaultProps = {
  value: '',
  options: {
    value: '',
    mode: 'markdown',
    theme: 'u',
    lineNumbers: false,
    lineSeparators: null,
    indentUnit: 2,
    smartIndent: true,
    tabSize: 4,
    indentWithTabs: false,
    electricChars: true,
    specialChars: /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/,
    direction: 'ltr',
    // Host OS specific
    // rtlMoveVisually
    keyMap: 'default',
    lineWrapping: true,
    firstLineNumber: 1,
    fixedGutter: true,
    scrollbarStyle: 'null',
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
  },
};

export default MarkdownEditor;
