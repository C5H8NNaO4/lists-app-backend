"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HelloWorldExample2 = exports.HelloWorldExample1 = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _reactServer = require("@state-less/react-server");
var _ServerSideProps = require("./ServerSideProps");
var _jsxRuntime = require("@state-less/react-server/dist/jsxRenderer/jsx-runtime");
var HelloWorldExample1 = function HelloWorldExample1() {
  var _useState = (0, _reactServer.useState)(0, {
      key: 'count',
      scope: 'global'
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
    count = _useState2[0];
  var increase = function increase() {
    throw new Error('Not implemented');
  };
  return (0, _jsxRuntime.jsx)(_ServerSideProps.ServerSideProps
  // Needed for reactivity
  , {
    count: count,
    increase: increase
  }, "hello-world-1-props");
};
exports.HelloWorldExample1 = HelloWorldExample1;
var HelloWorldExample2 = function HelloWorldExample2() {
  var _useState3 = (0, _reactServer.useState)(0, {
      key: 'count',
      scope: _reactServer.Scopes.Global
    }),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    count = _useState4[0],
    setState = _useState4[1];
  var increase = function increase() {
    setState(count + 1);
  };
  return (0, _jsxRuntime.jsx)(_ServerSideProps.ServerSideProps, {
    count: count,
    increase: increase
  }, "hello-world-2-props");
};
exports.HelloWorldExample2 = HelloWorldExample2;