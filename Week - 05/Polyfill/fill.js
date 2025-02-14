

Array.prototype.myFill = function(ele, start, end){
    if(start == undefined) start = 0;
    if(start < 0) start = this.length + start
    if(end == undefined) end = this.length;
    const mainArr = this
    for(let i = start; i < end; i++){
        mainArr[i] = ele;
    }

    return mainArr
}

let array = [1, 2, 3, 4, 5]

// fill with 0 from place ind 1 to ind 3
// console.log(array.myFill(0, 1, 3))

// // fill with 0 from place ind 1 to end
// console.log(array.myFill(0, 1))

// // fill the arrray with 0 
// console.log(array.myFill(1))

console.log(array.myFill(9, -3))
