// creating number array using [] 
var nums = [1,2,3];
console.log(nums.length) // 3

// creating array using constructor
var ints = new Array(1,2,3,4);
console.log(ints) // [1,2,3,4]
console.log(ints.length) // 4

// creating array of given length. let length=10
var givenLenArr = new Array(10);
console.log(givenLenArr.length); // 10

// mixed Array 
var mixedArr = [1,0.2,true,"hello world"];
// lets check mixedArr is an array object
console.log(Array.isArray(mixedArr)) // true
// lets check a number is an Array
console.log(Array.isArray(3)) // false

