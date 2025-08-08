const sv1 = {
  name: "tanminh",
  age: 18,
};
const sv2 = {
  name: "nguyen",
  age: 21,
};

const sv3 = {
  name: "nam",
  age: 24,
};

const sinhvien = [sv1, sv2, sv3];
console.log(">>> check sinhvien", sinhvien);
console.log("========================");

sinhvien.forEach((element) => {
  console.log(element);
});

console.log("========================");

const person = {
  email: "tanmin123@gmail.com",
  age: 18,
  address: "HCM",
};
// for in duyệt qua thuôc tính

for (let key in person) {
  console.log(key, person[key]);
}
console.log("========================");

// for of
for (let value of Object.values(person)) {
  console.log(value);
}
console.log("========================");
// cach khach

for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}
