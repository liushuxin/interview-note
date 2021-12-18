Proxy
//函数声明
function sum1(a: number, b: number) {
    console.log(a, b);
    return a + b;
}
sum1(12, 22)
const sy: symbol = Symbol();
Array



// 函数表达式
const sum2: Sum2Type = (a: number, b: number) => {
    console.log(a, b);
    return a + b;
}
// 声明一个函数类型，有哪些方式
// 1、通过接口的方式
// 2、 通过函数的方式
// 类型断言 1、as 2、<number>
const a
interface Sum2 {
    (a: number, b: number): number
}
type Sum2Type = (a: number, b: number) => number