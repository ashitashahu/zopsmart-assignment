function sum(num1) {
  return function (num2) {
    return function (num3) {
      return function (num4) {
        return function (num5) {
          return function () {
            return num1 + num2 + num3 + num4 + num5;
          };
        };
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)(5)());
