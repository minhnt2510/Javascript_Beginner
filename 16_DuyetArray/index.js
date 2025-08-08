const myClass = ["minh", "nam", "hung", "nguyen"];

console.log(myClass, myClass.length); // length trả về số lượng array

for (let i = 0; i < myClass.length; i++) {
  console.log("i = ", i, "and value = ", myClass[i]);
}

// for-each
myClass.forEach((value, index) => {
  console.log("value = ", value, "index = ", index);
});
