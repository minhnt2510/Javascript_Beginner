/* 
Yêu cầu : tạo các biến sau với const hoặc let 
(chọn phù hợp)
*/

const fullName = "Nguyen Tan Minh";
const birthDay = 2004;
const isStudent = true;
// tính tuổi hiện tại dựa trên birthDay
// khai báo new Date()
const today = new Date();
// năm hiện tại
const currentYear = today.getFullYear({});
// tính số tuổi hiện tại
const currentOld = currentYear - birthDay;

// in ra console.log
console.log(`Tên: ${fullName}
Tuổi: ${currentOld}
Sinh viên: ${isStudent}`);
