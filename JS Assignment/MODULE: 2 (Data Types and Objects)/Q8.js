// Turn the object into JSON and back Turn the user into JSON and then read it back
// into another variable.
// user = { name: "John Smith", age: 35};
//ANS

let user = { name: "John Smith", age: 35 };

// Convert the user object to JSON string
let userJson = JSON.stringify(user);

// Parse the JSON string back into an object
let newUser = JSON.parse(userJson);
console.log(newUser);
