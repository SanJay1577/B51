// Array Methods

const arr = [1, 7, 5, 6, 4, 2];

//////// change the orginal arr//////
// push
arr.push(10);
console.log(arr); // add element to the last index

// pop
arr.pop();
console.log(arr); // remove element from last index

//shift
arr.shift();
console.log(arr); // remove element from first index

//unshift
arr.unshift(1);
console.log(arr); // add element to the first index

// sort and reverse
const unSortedString = ["a", "d", "b", "c", 1, 3, 5, "g"]; // a b c d e
console.log("before sorting");
console.log(arr);
console.log(unSortedString);
console.log("after sorting");
arr.sort().reverse();
unSortedString.sort().reverse();
console.log(arr);
console.log(unSortedString);

/// Return a new Array////////
const strngArr = ["a", "b"];
const newStringArr = strngArr.concat("c"); // return a new array
console.log(strngArr);

//join // return a string
const newArr = arr.join(",");
console.log(newArr);

// Templete literals

const name = "sanjay";
const age = 15;
console.log("my name is " + name + " what is your name? ");

console.log(`My name is ${name} and i'm ${age} 
what is your name`);

///// MRF//// (Map filter and reduce);

// For Each

const sampleArr = [2, 4, 6, 8, 9, 3, 5];

// for (let i = 0; i < sampleArr.length; i++) {
//   console.log(
//     `
//         elements : ${sampleArr[i]}
//         index : ${i}
//         accArr: ${sampleArr}
//         `
//   );
// }

// will not return anything to modify acctual
// array you need to access the index of the element
// reading and displaying
const values = sampleArr.forEach((ele, index) => {
  console.log(ele * 4);
});
console.log(sampleArr, values);

////////// Map ///////////

// Map returns a new array and it wil not disturb the existing array

const newMapArr = sampleArr.map((ele, index, accArr) => {
  console.log(
    `
    elements : ${ele}
    index : ${index}
        accArr: ${accArr}
   `
  );
  return ele * 10;
});

console.log(newMapArr, sampleArr);

// filter returs a new array based on your conditions

const filtredArr = sampleArr.filter((ele, index, accArr) => {
  return ele != 1;
});

console.log(filtredArr, sampleArr);

// reduce method
// reduce methods return an accumulater value but we can temp storage to do our operations

const sum = sampleArr.reduce((acc, ele, index, accArr) => {
  return acc + ele;
}, 0);

console.log(sum, sampleArr);

// chain

const classMark = [
  {
    name: "sanjay",
    mark: 100,
  },
  {
    name: "Maria",
    mark: 50,
  },
  {
    name: "Subbu",
    mark: 75,
  },
  {
    name: "Vimal",
    mark: 30,
  },
  {
    name: "Akshaya",
    mark: 40,
  },
];

// pass mark is 50;

// chainig of MRF functions......
const passedStudents = classMark
  .map((ele, index) => {
    console.log("mapping data", ele);
    return ele;
  })
  .filter((ele, index) => {
    console.log("after filter", ele);
    return ele.mark >= 50;
  })
  .reduce((acc, ele, index) => {
    return acc + index;
  }, 0);

console.log(passedStudents);

// array methods (Misc methods)
const miscArr = [1, 2, 5, "dbs", true, 6, "sanjay"];

// slice methods it will not affect the original array and return new array
// array.slice(start, end) // {index values -> start and end}
// slice the array from start to before the end index

let slicedArr = miscArr.slice(1, 4);
console.log(slicedArr, miscArr);

// splice methos will affect or modify the original array
// delete or add anything or slice in between an original array
// array.splice(start, deletecount, newelements ....... neewlemntsn)
console.log(miscArr);
// let splicedArr = miscArr.splice(1, 3, "vimal", "akshaya", "asa", 76, 8);
let splicedArr = miscArr.splice(5, 0, "mani", "maria");
console.log(splicedArr);
console.log(miscArr);

// finding the index of specific element in an arrau
const indexed = miscArr.findIndex((n) => n == "dbs");
console.log(indexed);

// includes (check true or false)
const check = miscArr.includes("dbs");
console.log(check);
