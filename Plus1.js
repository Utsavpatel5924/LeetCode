// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

var plusOne = function(digits) {
    let l = digits.length - 1;
    
    let rec = function(p) {
        if (digits[p] < 9) {
            digits[p] += 1;
            return digits;
        } else {
            digits[p] = 0;
            if (p === 0) {
                digits.unshift(1);
                return digits;
            }
            return rec(p - 1); 
        }
    };
    
    return rec(l);
};
const a=plusOne([9]);;
console.log(a);