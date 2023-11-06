// const books = [
//     { name: "Harry Potter", author: "J. K. Rowling", pages: 500 },
//     { name: "Game of Thrones", author: "Robert Martin", pages: 700 },
//     { name: "Silent patient", author: "Alex Marxwel", pages: 450 },
//     { name: "1984", author: "Jorj Oruel", pages: 560 },
//     { name: "Anumal Pharm", author: "Jorj Oruel", pages: 120 }
// ]


// function list() {
//     return `${this.name} ${this.author} ${this.pages}`
// }


// books.forEach(book => {
//     console.log(list.call(book));
// })


// function maskify(cc) {
//     let fourSaved = cc.slice(-4);
//     let arr = cc.split(',');
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].replace('#')
//     }
//     let str = arr.join('');
//     let masked = str.slice(0, -4)+fourSaved;
//     return masked;

// }


// const maskify = (info) => {
//     return info.slice(0, -4).replace(/[a-zA-Z]/g, '#').concat(info.slice(-4, info.len));
//   }
// console.log(maskify('askdjhdfgdkfjh'));