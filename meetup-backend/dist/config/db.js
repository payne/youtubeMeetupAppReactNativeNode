'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */

exports.default = () => {
  _mongoose2.default.Promise = global.Promise;
  _mongoose2.default.connect(_config2.default.DB_URL);
  _mongoose2.default.connection.once('open', () => console.log('Mongodb running')).on('error', err => console.error(err));
};