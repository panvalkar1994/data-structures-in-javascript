/**
 * Store a set of words in an array and display the contents both forward and backward.
 */

var str = "Store a set of words in an array and display the contents both forward and backward.";
var words = str.split(" ");
function concat(accumulator, currentVal){
    return accumulator +" "+ currentVal;
}
// console in forward direction
var strForward =  words.reduce(concat);
console.log('strForward',strForward);

// console in backword direction
var strBackward = words.reduceRight(concat);
console.log('strBackward', strBackward)
