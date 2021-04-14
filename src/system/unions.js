"use strict";
exports.__esModule = true;
exports.typographicStyle = exports.structureStyle = exports.cosmeticStyle = exports.commonStyle = exports.allSystemStyle = void 0;
var styled_system_1 = require("styled-system");
exports.allSystemStyle = [
  styled_system_1.background,
  styled_system_1.border,
  styled_system_1.color,
  styled_system_1.flexbox,
  styled_system_1.grid,
  styled_system_1.textAlign,
  styled_system_1.opacity,
  styled_system_1.layout,
  styled_system_1.position,
  styled_system_1.shadow,
  styled_system_1.space,
  styled_system_1.typography,
  styled_system_1.system({
    cursor: true,
    textOverflow: true,
    whiteSpace: true,
    textTransform: true,
  }),
];
exports.commonStyle = [
  styled_system_1.border,
  styled_system_1.color,
  styled_system_1.flexbox,
  styled_system_1.grid,
  styled_system_1.layout,
  styled_system_1.space,
  styled_system_1.typography,
];
exports.cosmeticStyle = [
  styled_system_1.background,
  styled_system_1.border,
  styled_system_1.color,
  styled_system_1.opacity,
  styled_system_1.shadow,
  styled_system_1.system({
    cursor: true,
  }),
];
exports.structureStyle = [
  styled_system_1.border,
  styled_system_1.flexbox,
  styled_system_1.grid,
  styled_system_1.layout,
  styled_system_1.position,
  styled_system_1.space,
  styled_system_1.system({
    cursor: true,
  }),
];
exports.typographicStyle = [
  styled_system_1.color,
  styled_system_1.textAlign,
  styled_system_1.typography,
  styled_system_1.system({
    cursor: true,
    textOverflow: true,
    whiteSpace: true,
    textTransform: true,
  }),
];
