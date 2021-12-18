const PENDING = "pending"; // 等待
const FULFILLED = "fulfilled"; // 成功
const REJECTED = "rejected"; //失败
class MyPromise {
  constructor(executor) {
    // 捕获执行器错误
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }
  status = PENDING;
  // 成功之后的值
  value = undefined;
  // 失败之后的值
  reason = undefined;
  //成功回调
  successCallback = [];
  // 失败回调
  failCallback = [];

  resolve = (value) => {
    // 如果状态不是等待，阻止程序向下执行
    if (this.status !== PENDING) return;
    // 将状态更改为成功
    this.status = FULFILLED;
    this.value = value;
    // 判断成功回调还否存在
    //this.successCallback.length && this.successCallback(value);
    while (this.successCallback.length) {
      this.successCallback.shift()();
    }
  };
  reject = (reason) => {
    // 如果状态不是等待，阻止程序向下执行
    if (this.status !== PENDING) return;
    // 将状态更改为失败
    this.status = REJECTED;
    this.reason = reason;
    // 判断失败回调还否存在
    //this.failCallback && this.failCallback(this.reason);
    while (this.failCallback.length) {
      this.failCallback.shift()();
    }
  };
  then(successCallback, failCallback) {
    successCallback = successCallback ? successCallback : (value) => value;
    failCallback = failCallback
      ? failCallback
      : (reason) => {
          throw reason;
        };
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            const x = successCallback(this.value);
            // 判断x 是普通值，还是promise 对象
            // 如果是普通值，直接调用resolve
            // 如果是promise 对象，查看promise 的返回结果
            // 再根据promise 对象的返回结果 决定调用resolve 还是调用reject
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            failCallback(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else {
        // 将成功回调和失败回调存储起来
        this.successCallback.push(() => {
          setTimeout(() => {
            try {
              const x = successCallback(this.value);
              // 判断x 是普通值，还是promise 对象
              // 如果是普通值，直接调用resolve
              // 如果是promise 对象，查看promise 的返回结果
              // 再根据promise 对象的返回结果 决定调用resolve 还是调用reject
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
        this.failCallback.push(() => {
          setTimeout(() => {
            try {
              failCallback(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });

    return promise2;
  }
  finally(callback) {
    return this.then(
      (value) => {
        return MyPromise.resolve(callback()).then(() => value);
      },
      (reason) => {
        return MyPromise.resolve(callback()).then(() => {
          throw reason;
        });
      }
    );
  }
  catch(failCallback) {
    return this.then(undefined, failCallback);
  }
  static all(array) {
    let result = [];
    let index = 0;

    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < array.length; i++) {
        const current = array[i];
        if (current instanceof MyPromise) {
          // promise 对象
          current.then(
            (value) => addData(i, value),
            (reason) => reject(reason)
          );
        } else {
          // 普通值
          addData(i, current);
        }
      }
      function addData(key, value) {
        result[key] = value;
        index++;
        if (index === array.length) {
          resolve(result);
        }
      }
    });
  }
  static resolve(value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise((resolve) => resolve(value));
  }
}
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(
      new TypeError("Chaining cycle detected for promise #<Promise>")
    );
  }
  if (x instanceof MyPromise) {
    // promise 对象
    x.then(resolve, reject);
  } else {
    // 普通值
    resolve(x);
  }
}
module.exports = MyPromise;
try {
  const test = new Promise((resolve, reject) => {
    reject("错误111");
  }).then((data) => {
    console.log(data);
  });
} catch (error) {
  console.log("原生错误", error.message);
}
