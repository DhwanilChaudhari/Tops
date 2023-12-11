//create array which have 1 to 9 no
let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newA = a.slice(1, 10);
console.log(newA);

//print 9th and 10th index of array
let arr = [1, 2, 100, 3, 300, 100, 1, 5, 6];
console.log(arr[9]);
console.log(arr[10]);

//print every element of array by map and for loop
//arr.map((value) => console.log(value));
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//change a value of 6th index with 100
arr[6] = 100;
console.log(arr);

//print a array till element value not grater then 100
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 100) break;
  {
  }
  console.log(arr[i]);
}

//add  99 in end of array
arr.push(99);
console.log(arr);

//remove 1 element from start of  array
arr.shift();
console.log(arr);

//remove 1 element from end of array
arr.pop();
console.log(arr);

//do sum of all value of an array with use of map, reduce and for-loop
//forloop
//let sum = 0;
//for (let i = 0; i < arr.length; i++) {
// sum += arr[i];
//}
//console.log(sum);
//map
//let total = 0;
//arr.map((e) => (total += e));
//console.log("total", total);
//reduce
//let total = arr.reduce((lastReturnValue, e) => {
// console.log("lastReturnValue", lastReturnValue);
// console.log("e", e);
// return lastReturnValue + e;
//});
//console.log("total", total);

//sort a array in acending decending
let up = arr.slice().sort((a, b) => a - b);

console.log("Ascending Order:", up);

let down = arr.slice().sort((a, b) => b - a);

console.log("Descending Order:", down);
//reverse array
//arr.reverse(arr);
//console.log(arr);

//[1,2,3] => [3,2,1] [2,1]
set = [1, 2, 3];
let reverseset = set.slice().reverse();
let subset = reverseset.slice(1, 3);
console.log(reverseset);
console.log(subset);
