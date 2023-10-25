function sortAscending(arr) {
    let tempAr = [];
    for (let i = 0; i < arr.length; i++) {
        for (j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        tempAr.push(arr[i])
    } return tempAr;
}

const array = [5,7,4,1];
const string = ['cat','axe','book'];

// console.log(sortAscending(array));
// console.log(sortAscending(string));

function sortDescending(arr) {
    let tempAr = [];
    for (let i = 0; i < arr.length; i++) {
        for (j = i; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        tempAr.push(arr[i])
    } return tempAr;
}

// console.log(sortDescending(array));
// console.log(sortDescending(string));