// Iterator functions that return new array

// map function works like the forEach() function, applying a function to each element of an array.
function updateByFive(num){
    return num + 5;
}

var nums = [10,20,30,40,50,60];
var updatedNums = nums.map(updateByFive);
// console.log(updatedNums);

// filter() return array of bool array which are tested against a function
function isEven(num){
    return num%2==0;
}

var arr = [];
for(var i=0; i<10; i++){
    arr[i]=i+1;
}

var even = arr.filter(isEven);
console.log(even);