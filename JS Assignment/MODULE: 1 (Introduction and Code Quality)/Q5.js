//Q5. The following function returns true if the parameter age is greater than
// 18. Otherwise it asks for a confirmation and returns its result:
// function
// checkAge(age)
// {
// else {
// }
// }
// if (age> 18) { return true; }
// ...return confirm (‘did parents allow you?');
// Replace Function Expressions with arrow functions in the code below:
// Function
// ask(question, yes, no)
// { if (confirm(question))yes();
// else
// no();
// }
// ask("Do you agree?", function()
// { alert("You agreed."); },
// function() {
// alert("You canceled the execution."); }
// }
//ANS.

let checkAge = (age) => {
  return age > 18 ? true : confirm("Did parents allow you?");
};

let ask = (question, yes, no) => {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
};

ask(
  "Do you agree?",
  () => {
    alert("You agreed.");
  },
  () => {
    alert("You canceled the execution.");
  }
);
