// 函数柯里化
function curry(func) {
  return function curriedFn(...args) {
    // 判断实参和形参的个数
    if (args.length < func.length) {
      return function () {
        return curriedFn(...args.concat(Array.from(arguments)));
      };
    }
    return func(...args);
  };
}
// function init(first,second,third) {
//     console.log(first,second,third);

// }
// console.log(init.length);

// 函数组合
const compose = (...args) =>value=> args.reverse().reduce((acc, fn) => fn(acc),value);
const composeFun = compose(
  function (data) {
    return data + "_first";
  },
  function (data) {
    return data + "_second";
  }
);

console.log(composeFun("hello"));
