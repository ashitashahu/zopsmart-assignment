function sum(num1) {
  return function (num2) {
    if (num2 !== undefined) return sum(num1 + num2);
    return num1;
  };
}

console.log(sum(3)(7)());
console.log(sum(1)(2)(3)(4)(5)());
