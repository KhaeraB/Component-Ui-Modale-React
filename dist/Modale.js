"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modale.css");
/**
 *
 * Component shoudl create a modal pop-up
 * ### Modal
 */
var Modale = function Modale(_ref) {
  var displayModale = _ref.displayModale,
    onHide = _ref.onHide,
    title = _ref.title,
    content = _ref.content;
  return displayModale && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "myModal",
    className: "modal",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "close",
    "aria-hidden": "true",
    onClick: onHide
  }, "\xD7"), /*#__PURE__*/_react.default.createElement("h2", null, title)), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/_react.default.createElement("h3", null, content)), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn_close",
    onClick: onHide
  }, "Close")))));
};
var _default = Modale;
exports.default = _default;