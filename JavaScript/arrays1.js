let arr=[1,2,3,4,5,6,7,8,9,10];
//original array
console.log("original array:" , arr)
//adding 40 at index 3
arr.splice(3,0,40)
console.log("40 at third index:",arr)
//push 100
arr.push(100)
console.log("after pushing 100:",arr)
//pop
let removed=arr.pop
console.log("Popped element:", removed);
console.log("Final array:", arr);