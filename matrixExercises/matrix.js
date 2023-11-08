const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

// 1. Գտնել գլխավոր անկյունագծից ներքև գտնվող թվերի քանակը, որոնք պատիկ են տրված k թվին։
function kPatik(mat, k) {
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (mat[i][j] % k === 0) {
                count++;
            }
        }
    } return count;
}
// console.log(kPatik(matrix, 5));

// 2. Գտնել գլխավոր անկյունագծից ներքև գտնվող թվերի միջին թվաբանականը, որոնք պազմապատիկ են 5-ին։
function mijinTv5Patik(mat) {
    let arr = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (mat[i][j] % 5 === 0) {
                arr.push(mat[i][j]);
            }
        }
    }
    let total = 0
    let count = 0;
    arr.forEach(item => {
        total += item;
        count++;
    })
    return total / count;
}
// console.log(mijinTv5Patik(matrix));

// 3. Գտնել գլխավոր անկյունագծից ներքև կամ նրա վրա գտնվող զույգ արժեք ունեցող թվերի միջին քառակուսայինը։
function mijinQar(mat) {
    let arr = [];
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j <= i; j++) {
            if (mat[i][j] % 2 === 0) {
                arr.push(mat[i][j]);
            }
        }
    }
    arr.map(el => el * el);
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    return sum / arr.length;
}
// console.log(mijinQar(matrix));

// 4. Գտնել գլխավոր անկյունագծից ներքև կամ նրա վրա գտնվող կենտ արժեք ունեցող թվերի միջին թվաբանականը։
function mijTvKent(mat) {
    let arr = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j <= i; j++) {
            if(mat[i][j]% 2 === 1){
            arr.push(mat[i][j]);
            }
        }
    }
    let total = 0;
    let count = 0;
    arr.forEach(item => {
        total += item;
        count++;
    })
    return total / count;
}


// console.log(mijTvKent(matrix));

// 5.Գտնել գլխավոր անկյունագծից ներքև գտնվող զույգ արժեք ունեցող տարրերի քանակը։

function evenItems(mat) {
    let arr = [];
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < i; j++) {
            if (mat[i][j] % 2 === 0) {
                arr.push(mat[i][j]);
                count++;
            }
        }
    } return count;
}
// console.log(evenItems(matrix));

// 6. Օժանդակ անկյունագծից վերև գտնվող զույգ արժեք ունեցող տարրերի գումարը։
function secDiagSum(mat) {
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (j < mat.length - i - 1) {
                if (mat[i][j] % 2 === 0) {
                    sum += mat[i][j];
                };
            }
        }
    } return sum;
}
// console.log(secDiagSum(matrix));

// 7. Օժանդակ անկյունագծից վերև կամ նրա վրա գտնվող տարրերի արտադրյալը, որոնք բազմապատիկ են տրված k ամբողջ թվին։

function checkMulti(mat, k) {
    if(!Number.isInteger(k)){
        return `The given number should be a whole number`
    }
    let arr = [];

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (j <= mat.length - 1 - i) {
                if (mat[i][j] % k === 0) {
                    arr.push(mat[i][j]);
                }
            }
        }
    } return arr.reduce((acc, cur) => acc *= cur, 1);
}

// console.log(checkMulti(matrix,2));

// 8. Օժանդակ անկյունագծից վերև կամ նրա վրա գտնվող 0 արժեք ունեցող տարրերի քանակը։
const matrix1 = [
    [1, 0, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 11, 12],
    [13, 14, 15, 16]
]
function checkZero(mat) {
    let count = 0;

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (j <= mat.length - 1 - i) {
                if (mat[i][j] === 0) {
                    count++;
                }
            }
        }
    } return count;
}

// console.log(checkZero(matrix1));

// 9. Գլխավոր անկյունագծից վերև կամ նրա վրա գտնվող այն տարրերի քանակը, որոնք 5-ի բաժանելիս մնացորդը կմնա 2։
function div5rem2(mat) {
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        for (j = i; j < mat.length; j++) {
            if (mat[i][j] % 5 === 1) {
                count++;
            }
        }
    } return count;
}

// console.log(div5rem2(matrix)); 

// 10. Գլխավոր անկյունագծից ներքև կամ նրա վրա գտնվող զույգ արժեք ունեցող տարրերի միջին թվաբանականը։
function calcAver(mat) {
    let arr = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (mat[i][j] % 2 === 0 && mat[i][j] !== 0) {
                arr.push(mat[i][j]);
            }
        }
    }
    let total = 0;
    let count = 0;
    arr.forEach(item => {
        total += item;
        count++;
    })
    return total / count;
}

// console.log(calcAver(matrix));
