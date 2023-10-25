function stringify(arr) {
    let str = '';
    for (let elem of arr) {
        elem = String(elem);
        str += elem + ',';
    } return str;
}

console.log(typeof stringify([2,4,6]));

console.log(stringify(['fd', 'gh', 'sd']));

console.log(['fd', 'gh', 'sd'].toString());