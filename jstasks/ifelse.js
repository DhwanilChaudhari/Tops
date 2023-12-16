//make a function which take a number and ,
//if number is even then it will print "number is even",
//if odd the it will print "number is odd" and
//if i pass 0 it will print "number is ZERO"
function wnumber(number) {
  if (number === 0) {
    console.log("Number is zero");
  } else if (number % 2 === 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
}
wnumber(2); // Output: Number is even
wnumber(3); // Output: Number is odd
wnumber(0); // Output: Number is ZERO

//make a function which, if i give a array with odd and even number it will remove all odd number and return a array with evnet number.
function filter(numbers) {
  let evenNumbers = numbers.filter((number) => number % 2 === 0);
  return evenNumbers;
}
let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let final = filter(inputArray);
console.log(final);

//make a data structure for family tree ( start from your father )
const fam = {
  father: {
    name: "Jon",
    age: 45,
    job: "Engineer",
  },
  siblings: [
    {
      name: "james",
      age: 22,
    },
    {
      name: "bobby",
      age: 18,
    },
  ],
};
console.log("Father's Name:", fam.father.name);
console.log("Father's Age:", fam.father.age);
console.log("Father's job:", fam.father.job);

console.log("Siblings:");
fam.siblings.forEach((sibling) => {
  console.log(`${sibling.name}, Age: ${sibling.age}`);
});
//Made a function which a count how many time user given carector is repeting in string.
function char(inputString, charToCount) {
  const charCount = inputString.split(charToCount).length - 1;

  if (charCount === 0) {
    return "Character is not available in the string";
  } else {
    return charCount;
  }
}
let string = "hello world";

console.log(char(string, "h"));
console.log(char(string, "y"));
console.log(char(string, "x"));

//make a function who reverce a string (by use of for-loop)
function reverseString(inputString) {
  let reversedString = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}
const originalString = "Hello World...!";
const reversedResult = reverseString(originalString);
console.log(reversedResult);

function reverseStringByWords(inputString) {
  const wordsArray = inputString.split(" ");
  const reversedWordsArray = wordsArray.reverse();
  const reversedString = reversedWordsArray.join(" ");

  return reversedString;
}
const String = "Hello World Test User";
const Result = reverseStringByWords(String);

console.log(Result);

//Find some Data from below given array of object
//Make a function to find total sum of all subject.
function getTotalSum(marksheet) {
  const totalSum = marksheet.reduce((sum, subject) => sum + subject.marks, 0);
  return totalSum;
}
const marksheet = [
  { subject: "Gujarati", marks: 60 },
  { subject: "Maths", marks: 40 },
  { subject: "Science", marks: 50 },
  { subject: "Hindi", marks: 70 },
  { subject: "English", marks: 30 },
];

const totalSum = getTotalSum(marksheet);
console.log("Total Sum of Marks:", totalSum);
