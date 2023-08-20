Array.prototype.zenMap = function (cb) {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    array.push(cb(this[i], i, this));
  }
  return array;
};

const arr = [1, 3, 5, 7, 9];
arr.map((ele, index, accArr) => {
  console.log(
    ` Regular map
            Element : ${ele}
            index : ${index}
            acctual array : ${accArr}
          `
  );
});

console.log(arr);
arr.zenMap((ele, index, accArr) => {
  console.log(
    ` Zen map
                Element : ${ele}
                index : ${index}
                acctual array : ${accArr}
              `
  );
});
