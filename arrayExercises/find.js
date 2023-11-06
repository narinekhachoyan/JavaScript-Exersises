function finding(arr, el) {
    let found;
    let condition = false;
    for (let elem of arr) {
        if (elem === el) {
            condition = true;
            found = elem;
            break;
        }
    }

    if (condition === true) {
        return found
    } else {
        return `No such element`;
    }
}

const ar1 = [5, 7, 4, 6, 3, 1];
console.log(finding(ar1, 4));
console.log(finding(ar1, 8));


