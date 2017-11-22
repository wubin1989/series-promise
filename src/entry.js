'use strict';

const series = require('./series');
Promise.series = series;

module.exports = Promise;