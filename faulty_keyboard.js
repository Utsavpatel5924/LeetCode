// Your laptop keyboard is faulty, and whenever you type a character 'i' on it, it reverses the string that you have written. Typing other characters works as expected.

// You are given a 0-indexed string s, and you type each character of s using your faulty keyboard.

// Return the final string that will be present on your laptop screen.

function finalString(s) {
    const finalStr = [];
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "i") {
        finalStr.reverse();
        continue;
      }
      finalStr.push(s[i]);
    }
    return finalStr.join("");
  }

// let a=finalString("string");//rtsng
let a=finalString("poiinter");//ponter
console.log(a);