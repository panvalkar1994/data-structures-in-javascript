// shallow copy
var nums1 = [1,2,3,4];
var nums2 = nums1;
// nums1[0]=4000;
// console.log(nums2[0]); // 4000

// deep copy 
var nums3 = [];
for(var i=0; i<nums1.length; i++){
    nums3[i] = nums1[i];
}
nums1[0] = 4000;
console.log(nums3[0]); // 1