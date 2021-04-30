// creating new array from existing arrays by combining
var dept1 = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dept2 = ["Raymond", "Cynthia", "Bryan"];
// var dept3 = dept1.concat(dept2);
// var dept4 = dept2.concat(dept1);
// console.log(dept3)
// console.log(dept4)

// slicing array to get subarray
var dept5 = dept1.splice(1,3);
console.log(dept5.length); // 3