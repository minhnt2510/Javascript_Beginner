// if, if-else, else if

if (10 > 5) {
  console.log("true");
} else {
  console.log("false");
}

const age = 21;
// if (age > 18) {
//   console.log("welcom to video");
// } else {
//   console.log("you cant watch video");
// }

age > 18 ? console.log("welcom to video") : console.log("no");

const score = 10;

if (score >= 8) {
  console.log("giỏi");
} else if (score >= 6 && score <= 8) {
  console.log("khá");
} else if (score >= 4 && score <= 6) {
  console.log("trung bình");
} else {
  console.log("yếu");
}
