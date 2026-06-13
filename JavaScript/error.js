//compile time error
let x = ;  // Missing value
console.log(x);
//run time error
let person = null;
console.log(person.name);
//logical error
let length = 10;
let width = 5;

let area = length + width; // Wrong formula
console.log(area);