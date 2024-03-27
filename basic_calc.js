// Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
var calculate = function(s) {
    let sign = 1, sum = 0;
    
    const stack = []; 
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] >= '0' && s[i] <= '9') {
            let num = 0

            while (s[i] >= '0' && s[i] <= '9') {
                num = (num * 10) + (s[i] - '0');
                i += 1;
            }

            sum += (num * sign);

            i -= 1;
        } else if (s[i] === '+') {
            sign = 1;
        } else if (s[i] === '-') {
            sign = -1;
        } else if (s[i] === '(') {
			
            stack.push(sum);
            stack.push(sign);
            sum = 0

            sign = 1;
        } else if (s[i] === ')') {
			
            sum = stack.pop() * sum;
            sum += stack.pop();
        }
    }
    
    return sum;
};

// let a = calculate("1 + 1");
// let a = calculate("2-1 + 2");
let a = calculate("(1+(4+5+2)-3)+(6+8)");
console.log(a);