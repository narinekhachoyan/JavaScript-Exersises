// 1. տրված է միաչափ զանգված: Առանց լրացուցիչ զանգված կիրառելու 
// տրված զանգվածի տարրերը դասավորել տրվածին հակառակ ուղղությամբ:

const array = ['Marianna', 'Davit', 'Anahit'];
// console.log(array.reverse());

// 2. տրված է միաչափ զանգված: Ստանալ նոր զանգված, 
// որի սկզբում գրված կլինեն զանգվածի կենտ արժեք ունեցող տարրերը:

const arr = [2, 8, 7, 6, 15, 43, 34, 69];
const oddFirst = arr.filter(el => el%2===1)+','+arr.filter(el => el%2===0);
const odds = oddFirst.split(',');
const oddsToArray = odds.map(el => parseInt(el));

// console.log(oddsToArray);




// 3. Տրված զանգվածից գտնել թվաբանական պրոգրեսիա պարունակող թվերը և տպել

const zangvac = [2, 4, 6, 17, 8, 10, 31, 13, 52, 64]

function sortedByProgression(arr){
    if(arr.length<3) return `Not enough elements to check`
    const matProg = []; 
    for (let i = 0; i < arr.length; i++) {
        
        const a = arr[i];
        const b = arr[i+1];
        const c = arr[i+2];
        
       
        
         if(b - a === c - b) {
            matProg.push(a,b,c);
         } 
         
    } return matProg;
} 
const dsa = sortedByProgression(zangvac);
// console.log(dsa);    

const kisat = [4,5];
// console.log(sortedByProgression(kisat));

// console.log(sortedByProgression([5,50,51,75,100,111]));


