/* 
yêu cầu 1:

tạo hàm tinhTrungBinh(toan, van, anh)
- hàm nhập vào 3 điểm số (sử dụng tham số)
- trả về điểm trung bình (dùng return)

yêu cầu 2: 
tạo hàm xepLoai(diemTB)
- dựa vào điểm trung bình xếp loại học sinh
từ 9 -> xuất sắc
từ 8 và nhỏ hơn 9 -> giỏi
từ 6.5 và nhỏ hơn 8 -> khá
còn lại -> trung bình

Output : cho trước 3 biến 
const diemToan = 9
const diemVan = 8
const diemAnh = 7

-> Điểm trung bình: 8.0
xếp loại: giỏi

*/

const tinhTrungBinh = (toan, van, anh) => {
  return (toan + van + anh) / 3;
};

const xepLoai = (diemTB) => {
  if (diemTB >= 9) {
    return "Xuất sắc";
  } else if (diemTB >= 8 && diemTB <= 9) {
    return "Giỏi";
  } else if (diemTB >= 6.5 && diemTB <= 8) {
    return "Khá";
  } else {
    return "Trung Bình";
  }
};

const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

const myTB = tinhTrungBinh(diemToan, diemVan, diemAnh);

console.log(`
    Điểm trung bình: ${myTB}
    Xếp loại: ${xepLoai(myTB)}
  `);
