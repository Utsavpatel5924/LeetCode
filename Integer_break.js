// Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

// Return the maximum product you can get.


// Input: n = 2
// Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1.

var integerBreak = function(n) {
    if(n == 2) return 1;
    if (n === 3) return 2;
    let product = 1;
    while(n > 4){
        product*= 3;
        n -=3;
    }
    product *= n;
    return product;
};

// let a=integerBreak(2);
let a=integerBreak(10);
console.log(a);