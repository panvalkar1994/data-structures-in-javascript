// reverse array
var nums = [1,2,3,4,5];
nums.reverse();
console.log(nums);

// sort string array
var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
names.sort();
console.log(names);

// sort number Array fails because The sort() function sorts data lexicographically
var nums1 = [3,1,2,100,4,200];
// nums1.sort();
// console.log(nums1); //[ 1, 100, 2, 200, 3, 4 ]

// sort using compare function as determine the order
function compare(num1,num2){
    return num1 - num2;
}

// The sort() function uses the compare() function to sort the array elements numerically rather than lexicographically.
nums1.sort(compare);
console.log(nums1);