function displayObject(object) {
  console.log(
    `Tên tôi là ${object.name}, tuổi ${object.age}, ở ${object.address}`
  );
}

function displayFullObject(object) {
  // JSON.stringify vs JSON.parse
  console.log(JSON.stringify(object));
}

function displayName(arr) {
  console.log(arr.map((item) => item.name));
}

module.exports = { displayObject, displayFullObject, displayName };
