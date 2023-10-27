function slicing(array, start, end) {

    if (end) {
        end = end;
    } else { end = array.length }

    if (end < 0) {
        end = arr.length + end;
    }
    if (start >= end) {
        return [];
    }
    const temp = [];
    for (let i = 0; i < array.length; i++) {
        if (i >= start && i <= end - 1) {
            temp.push(array[i]);
        }
        if (start < 0) {
            start = arr.length + start;
        }
    } return temp;
}



const arr = [1, 2, 3, 4, 5];

// console.log(slicing(arr, 1, 3));
// console.log(arr);

// console.log(slicing(arr, 1));
// console.log(arr);

// console.log(slicing(arr, 1, -3));
// console.log(arr);

// console.log(slicing(arr, -1, 3));
// console.log(arr);

// console.log(slicing(arr, 5, 3));
// console.log(arr);

// console.log(arr.slice(1,3));
// console.log(arr);