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