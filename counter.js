var createCounter = function(n) {
    
    return function() {
        current = n;
        current += 1;
        n = current;
        return current -= 1;
    };
};
    var n;
    let a = createCounter(2);

console.log(createCounter(a));