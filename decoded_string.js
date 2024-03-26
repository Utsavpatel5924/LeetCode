// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

var decodeString = function(s) {
    let counts = [];
    let resultStack = [];
    resultStack.push([]);
    let k = 0;

    for (let ch of s) {
        if (ch >= '0' && ch <= '9') {
            k = k * 10 + parseInt(ch, 10);
        } else if (ch === '[') {
            counts.push(k);
            resultStack.push([]);
            k = 0;
        } else if (ch === ']') {
            let temp = resultStack.pop().join('');
            let count = counts.pop();
            resultStack[resultStack.length - 1].push(temp.repeat(count));
        } else {
            resultStack[resultStack.length - 1].push(ch);
        }
    }

    return resultStack.pop().join('');
};

// let a =decodeString("3[a]2[bc]");
// let a =decodeString("3[a2[c]]");
let a =decodeString("4[utsav ]");

console.log(a);