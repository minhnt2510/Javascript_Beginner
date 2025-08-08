const scores = [10, 9, 6, 4, 7];

// scores.forEach((value, index) => {
//   console.log("index = ", index, "value = ", value);
// });

const scores2 = scores.map((value, index) => {
  return value * 2;
});

console.log(scores2);
