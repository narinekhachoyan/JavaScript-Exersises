const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// Version 1
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}
// console.log(sum);

//  Version 2
const gumar = arr.reduce((acc, cur) => {
    cur.forEach(el => {
        acc += el
    })
    return acc;
}, 0)
// console.log(gumar);

// Version 3
const conc = arr.reduce((acc, cur) => acc.concat(cur), [])
    .reduce((acc, it) => acc + it, 0)
// console.log(conc);


const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
// console.log(matrix);

for (let i = 0; i < matrix.length; i++) {
    // console.log(matrix[i][i]); 
    // prints the primary diagonal
}

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j <= i; j++) {
        // console.log(matrix[i][j]); 
        // prints the inner lower triangle of primary diagonal including diagonal
    }
}


for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        // if (i === j) {
        // console.log(matrix[i][j]); }prints the primary diagonal
        if (i <= j) {
            // console.log(matrix[i][j]); 
            // prints the inner upper triangle of primary diagonal
        }
    }
}


for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        if (i + j == matrix.length - 1) {
            // console.log(matrix[i][j]); 
            // prints the secondary diagonal
        }
    }
}

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
        // console.log(matrix[i][j]);
        // prints the inner lower triangle of primary diagonal
    }
}

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        if (j < matrix.length - i - 1) {
            // console.log(matrix[i][j]);
            // pronts the upper triangle excluding secondary diagonal
        }
    }
}


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
            if (mat[i][j] % 2 === 1) {
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
    if (!Number.isInteger(k)) {
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


// 481
function createMat(n) {
    return Array(n).fill(Array(n).fill(n));
}

// console.log(createMat(4));

function createArray(N) {
    let newArr = [];
    for (let i = 1; i <= N; i++) {
        newArr.push(i);
    }
    return newArr;
}
const num = 4;
const array = createArray(num);
// console.log(array);

function createMatrix(width, height) {
    const result = [];
    for (let i = 0; i < width; i++) {
        result[i] = [];
        for (let j = 0; j < height; j++) {
            result[i][j] = Math.floor(Math.random() * height - width + 1) + width;
        }
    }
    return result;
}

const ground = createMatrix(3, 3);
// console.log(ground);

// հաշվել այն տարրերի քանակը, որոնք մեծ են տրված մատրիցի մեծագույն և փոքրագույն տարրերի միջին թվաբանականից։
const gr1 = [
    [5, 9, 7],
    [14, 11, 3],
    [2, 6, 15]
]

function one(mat) {
    let count = 0;
    const newArr = mat.flat();
    const max = Math.max(...newArr);
    const min = Math.min(...newArr);
    const aver = (max + min) / 2;
    console.log(aver);
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (mat[i][j] > aver) count++;
        }
    }
    return count;
}
// console.log(one(gr1));

// հաշվել բոլոր դրական թվերի արտադրյալը։

const gr2 = [
    [5, -4, -3],
    [-3, -7, 2],
    [8, -5, -6]
]
function two(mat) {
    const newArr = mat.flat();

    const ar1 = [];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > 0) ar1.push(newArr[i])
    }

    let product = ar1.reduce((acc, cur) => acc *= cur, 1);

    return product;

}
// console.log(two(gr2));

// հաշվել գլխավոր և օժանդակ անկյունագծերի դրական տարրերի միջին թվաբանականը

function three(mat) {
    let main = [];
    for (let i = 0; i < mat.length; i++) {
        if (mat[i][i] > 0) main.push(mat[i][i])
    }
    let secondary = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (i + j == mat.length - 1 && mat[i][j] > 0) secondary.push(mat[i][j])
        }
    }
    let newArr = [...main, ...secondary];

    let total = newArr.reduce((acc, cur) => acc += cur, 0);
    let aver = total / newArr.length;
    return aver;
}

// console.log(three(gr2));

// հաշվել գլխավոր և օժանդակ անկյունագծերի բացասական տարրերի միջին քառակուսայինը։

function four(mat) {
    let main = [];
    for (let i = 0; i < mat.length; i++) {
        if (mat[i][i] < 0) main.push(mat[i][i])
    }
    let secondary = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (i + j == mat.length - 1 && mat[i][j] < 0) secondary.push(mat[i][j])
        }
    }
    let newArr = [...main, ...secondary];
    console.log(newArr);
    const arr = newArr.map(el => el * el);
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    return Math.sqrt(sum / arr.length).toFixed(2);
}

// console.log(four(gr2));


// հաշվել գլխավոր և օժանդակ անկյունագծերի դրական տարրերի միջին քառակուսայինը։

function five(mat) {
    let main = [];
    for (let i = 0; i < mat.length; i++) {
        if (mat[i][i] > 0) main.push(mat[i][i])
    }
    let secondary = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (i + j == mat.length - 1 && mat[i][j] > 0) secondary.push(mat[i][j])
        }
    }
    let newArr = [...main, ...secondary];
    console.log(newArr);
    const arr = newArr.map(el => el * el);
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    return Math.sqrt(sum / arr.length).toFixed(2);
}
// console.log(five(gr2));

// մեծագույն տարրը պարունակող տողի և սյան տարրերի գումարը։
function six(mat) {
    let max = mat[0][0];
    let row = [];
    let col = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (mat[i][j] > max) {
                max = mat[i][j];
                row = i;
                col = j;
            }
        }
    }
    let rowEl = [];

    console.log(max);
    console.log(row);
    console.log(col);
    

}

console.log(six(gr2));



