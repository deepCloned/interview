class Promise {
  constructor(executor) {
    this.status = "pending"; // Promise 状态
    this.value = undefined; // Promise 成功返回值
    this.reason = undefined; // Promise 失败原因
    this.onFulfilledCallbacks = []; // 存放成功回调函数的数组
    this.onRejectedCallbacks = []; // 存放失败回调函数的数组

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback());
      }
    };

    const reject = (reason) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => callback());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected = typeof onRejected === "function" ? onRejected : (reason) => { throw reason };

    const promise2 = new Promise((resolve, reject) => {
      const fulfilledMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = onFulfilled(this.value);
            Promise.resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      };

      const rejectedMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = onRejected(this.reason);
            Promise.resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      };

      if (this.status === "fulfilled") {
        fulfilledMicrotask();
      } else if (this.status === "rejected") {
        rejectedMicrotask();
      } else if (this.status === "pending") {
        this.onFulfilledCallbacks.push(fulfilledMicrotask);
        this.onRejectedCallbacks.push(rejectedMicrotask);
      }
    });

    return promise2;
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  static resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError("Chaining cycle detected for Promise"));
    }

    let called = false;

    if (x instanceof Promise) {
      if (x.status === "pending") {
        x.then(
          (value) => Promise.resolvePromise(promise2, value, resolve, reject),
          (reason) => reject(reason)
        );
      } else {
        x.then(resolve, reject);
      }
    } else if (x !== null && (typeof x === "object" || typeof x === "function")) {
      try {
        const then = x.then;
        if (typeof then === "function") {
          then.call(
            x,
            (y) => {
              if (called) return;
              called = true;
              Promise.resolvePromise(promise2, y, resolve, reject);
            },
            (r) => {
              if (called) return;
              called = true;
              reject(r);
            }
          );
        } else {
          resolve(x);
        }
      } catch (error) {
        if (called) return;
        called = true;
        reject(error);
      }
    } else {
      resolve(x);
    }
  }

  static all(promises) {
    return new Promise((resolve, reject) => {
      const results = new Array(promises.length);
      let count = 0;

      promises.forEach((promise, index) => {
        Promise.resolve(promise).then(
          (value) => {
            results[index] = value;
            count++;
            if (count === promises.length) {
              resolve(results);
            }
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        Promise.resolve(promise).then(
          (value) => {
            resolve(value);
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  }

  static finally(promise, callback) {
    return promise.then(
      (value) => Promise.resolve(callback()).then(() => value),
      (reason) =>
        Promise.resolve(callback()).then(() => {
          throw reason;
        })
    );
  }
}

// 测试用例
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 2");
  }, 2000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, 3000);
});

Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(results))
  .catch((error) => console.error(error));

Promise.race([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

promise1.finally(() => console.log("Promise 1 is finished"));