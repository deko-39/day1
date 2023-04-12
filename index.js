// const fs = require("fs");

// const data = fs.readFileSync("data.txt", "utf-8");

// const text = "afajfkj \n";
// fs.writeFileSync("data.txt", text, { flag: "a" });

// a = append
// w = write

const { display, sort } = require("./index2");
const { displayObject, displayFullObject, displayName } = require("./index3");

const arr = [2, 3, 5, 1, 6, 4]; /// -> arr = [1,2,3,4,5,6]
const arr2 = sort(arr);

console.log(arr2);

const object = {};

const people = [
  {
    name: "A",
    detail: {
      age: 10,
    },
  },
  {
    name: "B",
    detail: {
      age: 20,
    },
  },
  {
    name: "C",
    detail: {
      age: 8,
    },
  },
];

people.sort((item1, item2) => {
  return item2.detail.age - item1.detail.age;
});
console.log(people);

// displayObject(object); // In ra như sau: "Tên là Nam, 18 tuổi, ở Hà Nội"
// displayFullObject(object); // In ra toàn bộ key và value của object
// displayName(people);
// Tạo file index3.js
// Trong file index3.js có hàm hiển thị data trong 1 object tên là displayObject
// Dùng hàm displayObject ở file index.js

// tìm hiểu dùng thư viện lodash, nodemon, express trên npm
