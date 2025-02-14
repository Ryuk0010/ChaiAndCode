
if(!Array.prototype.myConcat){
    Array.prototype.myConcat = function(arr2){
        let newArr = [...this]
        for(let i = 0; i < arr2.length; i++){
            newArr.push(arr2[i])
        }
        return newArr
    }

}


let arr1 = [1, 2, 3]
let arr2 = [2, 1, 3];

console.log(arr1.myConcat(arr2))