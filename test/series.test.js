'use strict';

const chai = require('chai');
chai.should();

describe('series-promise package test', function() {

	const Promise = require('../src/entry');
	const array = [1, 2, 3, 4, 5, 6, 7, 8];
	let tasks = [];

	before(function() {
		for (let i = 0; i < array.length; i++) {
			let f = () => {
				return new Promise((resolve, reject) => {
					let time = Math.random() * 1000;
					setTimeout(function() {
						console.log(i);
						resolve(array[i]);
					}, time)
				});
			};
			tasks.push(f);
		}
	})

	describe('begin to test', function() {
		it('should fulfill successfully', function(done) {
			this.timeout(20000);
			Promise.series(tasks)
				.then(function(results) {
					results[3].should.be.equal(4);
					done();
				})
				.catch(function(err) {
					console.log(err);
				});
		})
	})

	after(function() {})

})