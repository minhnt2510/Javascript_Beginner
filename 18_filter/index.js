const ages = [10, 20, 22, 30, 25, 12, 19];

const ages18 = ages.filter((value, index) => {
  return value > 18;
});

console.log(ages18);
