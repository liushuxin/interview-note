// 微任务、
/** ================= first start =============  */
// console.log("global start");
// setTimeout(() => {
//   console.log("timeout1");
// }, 0);
// Promise.resolve()
//   .then(() => {
//     console.log("promise1");
//   })
//   .then(() => {
//     console.log("promise2");
//   })
//   .then(() => {
//     console.log("promise3");
//   });

// console.log("global end");
// function* foo() {
//     console.log("start");
//     const res = yield "foo";
//     console.log(res);
//     yield "bar";
//   }
//   const generator = foo();
//   const result = generator.next();

// const result2 = generator.next("haha");
// generator.throw(new Error("Genetator error"));
//   console.log(result);
/** ================= first end =============  */

const ajax = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 1000);
  });
};

function* main() {
  const user = yield ajax("test1");
  console.log(user);
  const user1 = yield ajax("test2");
  console.log(user1);
}
const co = (generator) => {
  const g = generator();
  function recursionGenerator(result) {
    if (result.done) return;
    result.value.then(
      (data) => {
        recursionGenerator(g.next(data));
      },
      (error) => {
        g.throw(error);
      }
    );
  }
  recursionGenerator(g.next());
};
co(main);
