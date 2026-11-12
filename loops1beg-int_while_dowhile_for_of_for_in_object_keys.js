/* Loops are d 2nd form of flow control statement. Together with conditional execution statements like If and Switch, they allow for almost infinite freedom in how d application can work from an algorithmic point of view.
While conditional statements are able to change code behavior, loops are an easy way to repeat any fragment of d code as many times as we want, or until some condition is met.*/
// while
var array = [];
var i = 0;
while (i < 5) {
  array.push(i);
  i++;
}
console.log(array);

// do while loop will always run at least once before checking d condition. In a while loop, d condition is checked before each iteration, and in d do...while loop, d condition is checked after each iteration.
do {
  array.push(i);
  i++;
} while (i < 5);
console.log(i, array);

// // Running d following code with node.js => ReferenceError: prompt is not defined. It must be run in a browser, making sure that d script is loading by an HTML page.
// let isOver = false;
// let counter = 1;
// while (!isOver) {
//     isOver = !confirm(`[${counter++}] Continue d loop?`)
// };

// let isOver;
// let counter = 1;
// do {
//     isOver = !confirm(`[${counter++}] Continue d loop?`);
// } while (!isOver);

// for - better in situations where we know how many times d loop should be executed. More consistent way of writing d same thing than you can achieve with d while loop.
var array2 = [];
/* syntax of d for loop - 3 different fields separated with ; all d 3 statements are optional, but we rarely miss any of them.
- initialization (it happens before d 1st loop iteration, executed only once. D variable will be used as a loop counter). If optional it can be left empty, and it is replaced by a ;
- condition (a condition statement is an expression that is evaluated to a Boolean before each loop iteration, if false d loop is terminated, and d code execution jumps to d 1st statement after it). In case it is omittted, it will be assumed that is always true => infinite loop!
- increment (at d end of each iteration, usually increment / decrement by 1, but it could be any kind of expression).
*/
for (var i = 0; i < 10; i++) {
  array2.push[i];
}
console.log(array2);

// odd numbers
var array3 = [];
for (var i = 1; i < 10; i += 2) {
  // (var i = 10; i > 0; i-=2) // backwards. initialization of d index variable with d value of d largest index
  array3.push(i);
}
console.log(array3);

// iterate through d contents of an array.
var x = [1, 2, 3, 4, 10, 20, 100];
var total = 0;
for (var i = 0; i < x.length; i++) {
  // not a specific number of iterations, but through length
  total += x[i];
}
console.log(total);

// multidimensional or nested array.
function multiply(arr) {
  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
product = multiply([
  [1, 2],
  [3, 4],
  [5, 6, 7],
  [8, 9, 10],
]);
console.log(product);

// continue (only in loops)/ break (both loops and swich) statement
for (let i = 0; i < 10; i++) {
  if (i == 3) {
    continue; // or break
  }
  console.log(i);
}

// for...of is dedicated for use with ARRAYS, and other iterative structures / collections (such as set, map).
// In a loop of this type, we do not explicitly specify any conditions or number of iterations, as it is performed exactly as many times as there are elements in d indicated array.
var x = [1, 2, 3, 4, 10, 20, 100, 999];
var total = 0;
for (let number of x) {
  // In brackets after d word for, you will not find 3 fields separated by semicolons. There is a variable declaration, followed by d word of and then an array, d elements of which we will loop through (variable or literal).
  total += number; // d number variable will contain d subsequent elements of d values array in each iteration.
}
console.log(total);

// other example
let cities = [
  { name: "New York", population: 18.65e6 },
  { name: "Cairo", population: 18.82e6 },
  { name: "Mumbai", population: 19.32e6 },
  { name: "São Paulo", population: 20.88e6 },
  { name: "Mexico City", population: 21.34e6 },
  { name: "Shanghai", population: 23.48e6 },
  { name: "Delhi", population: 25.87e6 },
  { name: "Tokyo", population: 37.26e6 },
];
for (let city of cities) {
  if (city.population > 20e6) {
    console.log(`${city.name} = ${city.population}`);
  }
}

// for...in enables us 2 walk through OBJECT FIELDS. It iterates through all fields of d indicated object, placing d names of these fields (or keys) in d variable - construction!
// In d example, I use an object containing data about a user.
let user = {
  name: "Laura",
  surname: "Cunningham",
  age: 36,
  email: "lauracunningham@technoreveller.usa",
};
for (let key in user) {
  console.log(key); // name, surname, age, email
  console.log(user[key]); // To get to d value of a given field, we use bracket notation (d key is dynamically calculated and placed in d variable, so we cannot use dot notation).
  console.log(`${key} : ${typeof user[key]} -> ${user[key]}`); // expandin
}

// Object.keys method ()
// Another way to retrieve d names of all d object properties. It returns an array.
let keys = Object.keys(user);
console.log(keys);
