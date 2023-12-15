const s = new Set();
s.add(1);
s.add('2');
s.add('Hi');

// console.log(s);

// console.log(s.has(2));
// console.log(s.has('2'));

s.delete('Hi');

// console.log(s);

s.add("Arm");
s.add(2023);

const newArray = [...s];

// console.log(newArray);

const arrSet = Array.from(s)

// console.log(arrSet);

// console.log(typeof s);
// console.log(Array.isArray(newArray));

// console.log(s.size);

const arr = [1,2,3,4,1,2];
const s2 = new Set(arr);
// console.log(s2);
// console.log(s2.size === arr.length);

const s3 = new Set();
arr.forEach(el => s3.add(el));
// console.log(s3);

const s4 = new Set();
s4.add(56);
s4.add(69);
s4.add(1);
s4.add('Arm');

// console.log(s4);

const difference = new Set([...s4].filter((x) => !s.has(x)));
// console.log(difference);



const union = new Set([...s4].filter((x) => s.has(x)));
// console.log(union);

const set1 = new Set();
set1.add(42);
set1.add('forthy two');

const iterator = set1.entries();
for(const entry of iterator){
    // console.log(entry)
}



