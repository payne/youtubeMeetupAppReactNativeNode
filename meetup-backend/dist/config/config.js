'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const devConfig = {
  DB_URL: 'mongodb://localhost/meetups-dev',
  JWT_SECRET: 'un23in2i23592uitn2g2389tj293jg29gj0923jg2ng2nijjf2i'
};

const testConfig = {
  DB_URL: 'mongodb://localhost/meetups-test'
};

let config; // eslint-disable-line

if (process.env.NODE_ENV === 'development') {
  config = devConfig;
} else if (process.env.NODE_ENV === 'test') {
  config = testConfig;
}

exports.default = config;