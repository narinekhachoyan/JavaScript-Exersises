function stringify(arr) {
    let str = '';
    for (let elem of arr) {
        str += elem + ',';
    } return str;
}

// console.log(typeof stringify([2, 4, 6]));

console.log(stringify([1, 2, 'sd']));

//console.log(['fd', 'gh', 'sd'].toString());