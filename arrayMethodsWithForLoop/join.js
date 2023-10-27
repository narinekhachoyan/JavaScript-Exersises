function join(arr, str) {
    let temporary = '';
   
    for (let i = 0; i < arr.length; i++) {
        if (str) {
            temporary += arr[i];
            if (i < arr.length - 1) {
                temporary += str;
            }
            
        } else if (!str) {
            temporary += arr[i];
            if (i < arr.length - 1) {
                temporary += ',';
            } 
        } 
        if (str === '') {
          temporary = arr.reduce((acc,el) => acc+el); 
        } 
    } return temporary;
}

const joined = join(['a','v', 'p'],'');

// console.log(joined);

// console.log(['a', 'v','b'].join(''));

