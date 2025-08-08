/*
tạo 1 mảng products chưa danh sách 5 sp, mỗi sp là 1 Object
*/
const sanpham1 = {
  name: "máy tính cầm tay",
  price: 200,
  inStock: true,
};
const sanpham2 = {
  name: "loa cầm tay",
  price: 400,
  inStock: false,
};
const sanpham3 = {
  name: "tai nghe",
  price: 270,
  inStock: true,
};
const sanpham4 = {
  name: "điện thoại mini",
  price: 2000,
  inStock: true,
};
const sanpham5 = {
  name: "sạc dự phòng",
  price: 1245,
  inStock: false,
};

const products = [sanpham1, sanpham2, sanpham3, sanpham4, sanpham5];

console.log(products);
// 1. In ra tên sảm phẩm đầu tiên
const firstProduct = products[0];
console.log("tên sp đầu tiên : ", firstProduct.name);
// 2. Thay đổi giá sp thứ 2 thành 150
const products2 = [
  sanpham1,
  {
    name: sanpham2.name,
    price: 150,
    inStock: sanpham2.inStock,
  },
  sanpham3,
  sanpham4,
  sanpham5,
];
console.log(products2);
// 3. Thêm sản phầm mới vào cuối mảng
products.push({
  name: "đang cập nhật",
  price: 999,
  inStock: true,
});
console.log(products);
// 4. xóa sp cuối
products.pop();
console.log(products);
// 5. dùng for_each in ra tên tất cả sp
products.forEach((item, value) => {
  console.log(item.name);
});
// 6. dùng map tạp mảng mới chỉ chứa giá sp
const priceList = products.map((item, index) => {
  return item.price;
});
console.log(priceList);
// dùng filter lấy sp còn hàng
const inStockProduct = products.filter((item, index) => item.inStock === true);
console.log("inStockProduct", inStockProduct);

for (const key in sanpham1) {
  console.log(key, sanpham1[key]);
}
