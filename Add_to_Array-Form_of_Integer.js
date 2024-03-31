// The array-form of an integer num is an array representing its digits in left to right order.

// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234
 
const addToArrayForm = (nums, k) => (BigInt(nums.join('')) + BigInt(k)).toString().split('')

// let a =addToArrayForm([1,2,0,0],34);//[ '1', '2', '3', '4' ]
// let a =addToArrayForm([2,7,8],181);
let a =addToArrayForm([2,1,5],806);
console.log(a);