const myBtn = document.getElementById("mybtn");
const myName = document.getElementById("myname");
const massage = document.getElementById("massage");
const myPrev = document.getElementById("prev");

const prevName = localStorage.getItem("key");
if (prevName) {
  myPrev.textContent = `you prev name is: ${prevName}`;
}

myBtn.addEventListener("click", () => {
  console.log(myName.value);

  localStorage.setItem("key", myName.value);

  massage.textContent = myName.value;
});
