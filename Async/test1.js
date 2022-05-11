function doSomething1() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1);
  };
}

doSomething1();
console.log('Hello');