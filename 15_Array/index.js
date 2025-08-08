// Array

const others = ["tan", "minh", 21, [1, 2, 3]];
console.log(others);

const names = ["tan", "minh", "nguyen"];
console.log(names);
// lấy ra phần tử đầu tiên
console.log(names[0]);
console.log(names[10]); // undefine
// thay đổi giá trị
names[2] = "update name";
console.log(names);

/* thêm và xóa Array
 Thêm : - thêm vào cuối mảng push 
        - thêm vào đầu mảng unshift 

  Xóa : - cuối mảng pop
        - đầu mảng shift
*/
names.push("true");
console.log(names);
