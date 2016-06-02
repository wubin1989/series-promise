'use strict';

let series = (tasks) => {
	let len = tasks.length;
	let i = 0;
	let results = [];
	return new Promise((resolve, reject) => {
		let doTask = (i) => {
			return tasks[i]()
				.then((resolved) => {
					i++;
					results.push(resolved);
					if (i < len) {
						return doTask(i);
					} else {
						return resolve(results);
					}
				});
		};
		doTask(i);
	});
};

module.exports = series;