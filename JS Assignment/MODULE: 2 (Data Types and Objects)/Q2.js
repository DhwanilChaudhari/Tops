// Is array copied?
// let fruits = ["Apples", "Pear", "Orange"]; // push a new value into the "copy" let
// shoppingCart = fruits; shoppingCart.push("Banana"); // what's in fruits?
// alert( fruits.length ); ?
//ANS. In JavaScript, when you assign an array to another variable, you're not creating a copy of the array; instead, you're creating a reference to the original array.

let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
console.log(fruits);
