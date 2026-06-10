//take 4 values a,b,c,d ,,,, add two two variables if a+b is greater tha 50 and 
// c+d is greater than 50 ..give output as true else false .
function checkValues(a, b, c, d) {
    return (a + b > 50) && (c + d > 50);
}

// Example
console.log(checkValues(30, 25, 10, 20)); // false
console.log(checkValues(20, 10, 40, 20)); // false


//either value should be grater than 100 then true else false
function checkValues(a, b, c, d) {
    return (a + b > 100) || (c + d > 100);
}

// Examples
console.log(checkValues(60, 50, 30, 40)); // true  (a+b = 110)
console.log(checkValues(20, 30, 70, 40)); // true  (c+d = 110)
console.log(checkValues(20, 30, 40, 50)); // false (both sums <= 100)

//if both should be less than 50 , then true
function checkValues(a, b, c, d) {
    return (a + b < 50) && (c + d < 50);
}

// Examples
console.log(checkValues(20, 10, 15, 20)); // true  (30 < 50 and 35 < 50)
console.log(checkValues(30, 25, 10, 15)); // false (55 is not < 50)
console.log(checkValues(10, 20, 40, 20)); // false (60 is not < 50)