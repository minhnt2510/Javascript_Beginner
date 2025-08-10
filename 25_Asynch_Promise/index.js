const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("dữ liệu đã tải xong");
      // return
      resolve("gia tri ngau nhien");
    }, 2000);
  });
};

myPromise();

const test = myPromise();
console.log(test);

myPromise().then((data) => {
  console.log(data);
});
