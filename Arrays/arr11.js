// Iterator which do not return new array

// get a single element from an array
function square(num) {
    console.log(num, num * num);
}   
var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);

// every() if all values of array return true
function isEven(num){
    return num%2==0;
}

var even = [2,4,6];
var e = even.every(isEven);
if(e){
    console.log("all numbers are even");
}else{
    console.log("not all numbers are even");
}

// some() return true if any of array element follow certain criteria
var someEven = nums.some(isEven);
if(someEven){
    console.log("some numbers are even");
}else{
    console.log("all numbers are odd");
}

// The reduce() function applies a function to an accumulator and the successive elements of an array until the end of the array is reached, yielding a single value.
function add(accumulator, currentVal){
    return accumulator + currentVal;
}

var sum = nums.reduce(add);
console.log(`sum of all nums is ${sum}`);