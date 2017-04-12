const devConfig = {
  DB_URL: 'mongodb://localhost/meetup-dev',
  JWT_SECRET: 'wiuebgiuwebgiuweugbnwghwu23t839t982tugng98',
};

const testConfig = {
  DB_URL: 'mongodb://localhost/meetup-test',
};

let config; // eslint-disable-line

if (process.env.NODE_ENV === 'development') {
  config = devConfig;
} else if (process.env.NODE_ENV === 'test') {
  config = testConfig;
}

export default config;
