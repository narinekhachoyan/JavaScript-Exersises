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

