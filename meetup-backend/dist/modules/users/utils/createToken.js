'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createToken = createToken;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../../../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createToken(args) {
  return _jsonwebtoken2.default.sign({ id: args._id }, _config2.default.JWT_SECRET);
}