/*

for(khởi tạo, điều kiện, cập nhật){

}
- khởi tạo : gán giá trị ban đầu cho biến đếm
- điều kiện : kiểm tra trước mỗi vòng lặp
đúng thì chạy tiếp
- cập nhật : tăng/giảm biến đếm

*/
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// while
let score = 10;
while (score > 5) {
  console.log(">> check score", score);
  score--;
}

// do while
let score1 = 10;
do {
  console.log(">>> check score1", score1);
  score1--;
} while (score1 > 5);

let score2 = 10;
do {
  console.log(">>>>>>>> check score1", score2);
  score2--;
} while (score2 > 20);
