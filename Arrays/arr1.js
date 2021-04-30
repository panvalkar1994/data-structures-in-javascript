// accessing and writing to arrays

// fill an empty array with 1-100 numbers 
var arr = []; // arr.length=0
for(var i=0; i<100; i++){
    arr[i]=i+1;
}
// console.log(arr); prints all 100 numbers

// accessing 21st element of arr. it should be 21
// arrays are 0 indexed
// console.log(arr[20]);

// sum all elemnts of arr 
var sum =0;
for(var i=0; i<arr.length; i++){
    sum += arr[i];
}
console.log(sum) // 5050

