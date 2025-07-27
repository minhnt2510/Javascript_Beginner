const greeting = () => {
  console.log("hello world");
};
greeting();

(function () {
  console.log("anh trai say hi");
})();

// arrowFunction
// sum a + b
const sum = (a, b) => {
  // params
  return a + b;
};
console.log(sum(2, 9)); // input
console.log(sum("tan", " minh"));

const sum1 = (a, b, c) => {
  if (typeof a !== "number") {
    return;
  }
  return a + b + c;
};
console.log(sum1(2, 4, 6));
