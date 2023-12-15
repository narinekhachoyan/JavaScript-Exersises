class ourArr extends Array {
    constructor(...args){
        super(...args)
        if(args.length === 1 ){
            this.length = 0 
            this.push(args[0])
        }
    }
    toString(){
        return this.join(" ")
    }
    replace(f,s){
       const index = this.indexOf(f);
       this[index] = s
       return this
    }
    replaceAll1(given, repl) {
        return this.map(elem => 
            (elem === given ? repl : elem)
            );
    }
    replaceAll2(g,r){
        const resArr = [];
        this.forEach(el =>{
            if(el === g){
            resArr.push(r)
            } else {
                resArr.push(el)
            }
        }) 
        return resArr
    }
    replaceAll3(giv, rep) {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            if (this[i] === giv) {
                result.push(rep)
            } else {
                result.push(this[i])
            }
        }
        return result
    }
}


const arr = new ourArr(1,2,3,2,5,2);

console.log(arr.replaceAll1(2,4));

console.log(arr.replaceAll2(2,7));

console.log(arr.replaceAll3(2,8));

