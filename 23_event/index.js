const value = document.getElementById("mybtn");
console.log(value);

const handleClick = () => {
  console.log("you click a button");
};

const element = document.getElementById("minhbtn");
element.addEventListener("click", () => {
  console.log("you click");
});
console.log(element);
