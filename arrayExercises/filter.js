function filtering(arr, condition) {
    let filtered = [];
    for (i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            filtered.push(arr[i])
        }
    } return filtered;
}

const ar = [1, 2, 3, 4, 5, 6]
const filterEvens = filtering(ar, (number) => number % 2 === 0);
console.log(filterEvens);


const str = ['Art', 'BodyArt', 'Sculpture'];
//console.log(filtering(str, (el => el.includes('Art'))));