


require("../index");

console.log(Promise);
var array = [1, 2, 3, 4, 5, 6, 7, 8];
var tasks = [];

for (let i = 0; i < array.length; i++) {
  let f = () => {
    return new Promise((resolve, reject) => {
      let time = Math.random() * 1000;
      setTimeout(function() {
        console.log(i);
        resolve(array[i]);
      }, time);
    });
  };
  tasks.push(f);
}

Promise.series(tasks)
  .then(function(results) {
    console.log(results);
  })
  .catch(function(err) {
    console.log(err);
  });