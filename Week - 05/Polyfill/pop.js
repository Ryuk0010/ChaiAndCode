if(!Array.prototype.myPop){
    Array.prototype.myPop = function(){
        if(this.length == 0) return -1
        let ele = this[this.length-1]
        this.length--;
        return  ele
    }
}


const arr = [1,2,3,4,5]

console.log(arr.myPop())
console.log(arr)