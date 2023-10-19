// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. 
// In other words, the next number is a sum of the two preceding ones.

function fibonacci(n) {
    if (n === 1) return 1;
    let a = 0;
    let b = 1;
    
    let result = 0;
    for (let i = 2; i <= n; i++) {
        
        result = a + b;
        a = b;
        b = result;
    }
    return result;
}

console.log(fibonacci(4));

