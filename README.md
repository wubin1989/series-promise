# series-promise

execute functions in series plugin for es6 promise in nodejs and browser.

## Setup

* npm install series-promise --save

## Usage

```javascript

require("../index");
const array = [1, 2, 3, 4, 5, 6, 7, 8];
let tasks = [];

for (let i = 0; i < array.length; i++) {
	let f = () => {
		return new Promise((resolve, reject) => {
			let time = Math.random() * 1000;
			setTimeout(function() {
				console.log(i); // it will output 0, 1, 2, 3, 4, 5, 6, 7 in series
				resolve(array[i]);
			}, time)
		});
	};
	tasks.push(f);
}

Promise.series(tasks)
	.then(function(results) {
		console.log(results); // [1, 2, 3, 4, 5, 6, 7, 8]
	})
	.catch(function(err) {
		console.log(err);
	});
```

## Contacts

* Email: 328454505@qq.com

## License
ISC
