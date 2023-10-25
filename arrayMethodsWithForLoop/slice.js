function slicing(array, start, end){
    let temp = [];
    for(let i = 0; i < array.length; i++){
        if(i >= start && i <= end-1){
            temp.push(array[i]);
        }
    } return temp;
}

const arr = [1,2,3,4,5];
// console.log(slicing(arr,1,3));
// console.log(arr);

// console.log(arr.slice(1,3));
// console.log(arr);