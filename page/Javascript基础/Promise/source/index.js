/**
 * 1、promise 就是一个类，在执行这个类的时候，需要传递一个执行器进去，执行器会立即执行
 * 2、Promise 中有第三种状态，分别是 成功：fulfilled 失败 rejected 等待 pending
 *  pending -> fulfilled
 *  pending -> rejected
 *  一旦状态确定，就不可更改
 * 3、resolve和reject 函数是用来更改状态的，
 *  resolve: fulfilled
 *  reject: rejected
 * 4、 then 方法内部做的事情就是判断状态，如果状态是成功，调用成功的回调函数，如果状态失败，调用失败的回调函数
 *5、
 */
const MyPromise = require("./myPromise");
const promise = new MyPromise((resolve, reject) => {
  //throw new Error("exe error");
  reject("失败");
});

// function other() {
//   return new MyPromise((resolve, reject) => {
//     resolve("other");
//   });
// }

promise.then(
  (data) => {
    console.log(data);
    throw new Error("lll");
  },
  (error) => {
    console.log(error);
  }
);
promise
  .then()
  .then()
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.log("aaa");
      console.log(error);
    }
  );

// let p1 = promise.then((data) => {
//   console.log("2" + data);
//   return p1;
// });

// p1.then(
//   (data) => {
//     console.log(data);
//   },
//   (reason) => {
//     console.log(reason.message);
//   }
// );

// Promise.all test
console.log("Promise.all test");
const p1 = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve("p1");
  }, 1000);
});
const p2 = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve("p2");
  }, 1000);
});
MyPromise.all(["a1", "a2", "a3", p1, p2, "a4"]).then((result) => {
  console.log(result);
});
MyPromise.resolve(100).then((data) => {
  console.log(data);
});
MyPromise.resolve(p1).then((data) => {
  console.log(p1, data);
});
