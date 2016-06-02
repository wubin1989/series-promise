'use strict';

const series = require('./src/series');
Promise.series = series;

module.exports = Promise;