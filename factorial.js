
function fact(n) {
    
    if(n === 0 || n === 1) return 1

    let factor = 1;
    for (i = 1; i <= n; i++) {
        factor *= i;
    } 

    return factor;
}

console.log(fact(1));





