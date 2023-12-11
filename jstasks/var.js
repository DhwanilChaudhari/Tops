/*Q Want to re-use variable name so which variable declare method should i use?\
let Var = 12;
// now
Var = 22;
console.log(Var);

// or
var Let = 44;
Let = 54;
console.log(Let);*/
//------------------------------------------------------------------------------------------
//Q what will print
let x = 100;
var y = 100;
const z = 100;
{
  x = 90;
  //y = 90;
  //z = 90;
  console.log("x1=", x);
  console.log("y1=", y);
  console.log("z1=", z);
}
console.log("x2", x);
console.log("y2", y);
console.log("z2", z);

x1 = 90;
x2 = 90;
y1 = 90;
y2 = 90;
z1 = err;
z2 = err;
//------------------------------------------------------------------------------------------
