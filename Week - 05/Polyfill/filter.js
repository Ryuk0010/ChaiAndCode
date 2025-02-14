if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (userfn) {
        const res = [];
        const mainArr = this;
        for (let i = 0; i < mainArr.length; i++) {
            if(userfn(mainArr[i])){
                res.push(mainArr[i])
            }
        }
        return res; 
    };
}

const arr = [1, 2, 3, 4, 5, 8, 10, 7, 6];

const ans = arr.myMap(e => e % 2 == 0);
console.log(ans);
