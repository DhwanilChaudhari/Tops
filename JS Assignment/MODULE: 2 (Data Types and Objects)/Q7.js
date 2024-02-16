// Destructuring assignment We have an object: Write the Destructuring assignment that
// reads:
// let user = { name: "John", years: 30};
//ANS
let user = { name: "John", years: 30 };
// a) Name property into the variable name.
let { name } = user;
console.log(name);
// b) Year’s property into the variable age.
let { years: age } = user;
console.log(age);
// c) isAdmin property into the variable isAdmin (false, if no such property)
let { isAdmin = false } = user;
console.log(isAdmin);
