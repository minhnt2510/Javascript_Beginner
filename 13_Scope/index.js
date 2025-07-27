// phạm vi

// global scope
let globalVar = "Tôi là biến toàn cục";
const show = () => {
  console.log(globalVar); // có thể truy cập đc
};
show();
console.log(globalVar);

// function scope
const show1 = () => {
  let name1 = "minh"; // let chỉ có tác dụng trong ()
  console.log("hi ", name1);
};
show1();
console.log(name1); // undefine
