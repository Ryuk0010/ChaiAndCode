Array.prototype.myFindIndex = function(userfn){

    for(let i = 0; i < this.length; i++){
        if(userfn(this[i],i)){
            return i
        }
    }

    return -1
}

const arr = [2, 7, 9, 16, 20];

const ans = arr.myFindIndex((ele) => ele > 13);

console.log(ans);