let a = 5;
const b = a--;
console.log("a = ", a); // 4
console.log("b = ", b); // 5

let c = 5;
const d = c++;
console.log("c = ", c); // 6
console.log("d = ", d); // 5

let c1 = 5;
const d1 = ++c1;
console.log("c1 = ", c1); // 6
console.log("d1 = ", d1); // 6

// so sanh
const m = 2;
const n = "2";
console.log(n == m); // so sánh lỏng -> true

const m1 = 2;
const n1 = "2";
console.log(n === m); // so sánh chặt -> false
