function fullName(){
    return `${this.name} ${this.surname}`
}

const object1 = {
    name: "Adam",
    surname: "Petrosyan",
    age: 35,
    fN: function(){
        return ` ${object1.name} ${object1.surname}`
    }
}

// Variant 1: Using for loop

const object2 = {};

for(let key in obj){
    if(obj.hasOwnProperty(key)){
        object2[key] = object1[key];
    }
}

object2.name = "Armine"
// console.log(object1);
// console.log(object2);

// Variant 2 : Using Object.assign() method

 const object3 = {};
 const newObject = Object.assign(object3, object1);
//  console.log(newObject);
object2.name = "Arsen";
object2.surname = "Abovyan";
// console.log(newObject);
// console.log(object1);   

// console.log(object1.fullName());
// console.log(newObject.fullName());


// Variant 3: Using JSON.parse(JSON.stringify()) method

const object4 = JSON.parse(JSON.stringify(object1));

object4.name = "Arsen";
object4.surname = "Abovyan";

// console.log(object1);
// console.log(object4); 


// Variant 4: Using Spread Operator

const obj = {...object1};
// console.log(object1);
// console.log(obj);
obj.name = "Arsen";
obj.surname = "Abovyan";
// console.log(object1);
// console.log(obj);
// console.log(obj.fullName());

