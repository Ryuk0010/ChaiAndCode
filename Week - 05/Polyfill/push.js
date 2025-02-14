if(!Array.prototype.myPush){
    Array.prototype.myPush = function(...ele){
        let res = [...this];
        for(let i = 0; i < ele.length; i++){
            this[this.length] = ele[i]
        }
        return this.length;
    }
}


const arr = [1,2,3,4,5]

console.log(arr.myPush(6, 7, 8))
console.log(arr)