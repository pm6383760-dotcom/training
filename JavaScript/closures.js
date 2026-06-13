function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3

//outer() is called.
//A local variable count is created.
//inner() is returned and assigned to counter.
//Normally, count would disappear when outer() finishes.
//Because inner() still references count, JavaScript keeps it alive.
//Each call to counter() can access and modify the same count variable.