function splicing(arr, startPosition, delCount, ...items) {
    let temp = [];
    let del = [];
    for (let i = 0; i < arr.length; i++) {
        if (i >= startPosition && i < startPosition + delCount) {
            del.push(arr[i])
        } else if (i === startPosition - 1) {
            temp.push(arr[startPosition - 1]);
            temp.push(...items);
        } else temp.push(arr[i]);

    }
    arr.length = 0;
    arr.push(...temp);
    return del;
}


const array = [1, 2, 3, 4, 5, 6];
console.log(splicing(array, 2, 2, 30, 40));
console.log(array);

// console.log(array.splice(2,2,30,40));
// console.log(array);

