const sv1 = {
  score: 10,
  name: "kura",
  address: {
    city: "hanoi",
    country: "vietnam",
  },
};
const sv2 = {
  score: 9,
  name: "juae",
  address: {
    city: "hanoi",
    country: "vietnam",
  },
};
const sinhvien = [sv1, sv2];
console.log(sinhvien);

const person = {
  name: "minh",
  age: 18,
};
console.log(person.name);
console.log(person["name"]);

console.log("person before", person);

person.address = "HCM";
console.log("person after", person);
