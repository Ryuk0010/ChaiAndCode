if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (userfn) {
        const mainArr = this;
        for (let i = 0; i < mainArr.length; i++) {
            if(userfn(mainArr[i])){
                console.log(mainArr[i])
                return;
            }
        }
    };
}

const arr = [1, 3, 4, 5, 8, 10, 7, 6];

arr.myMap(e => e % 2 == 0);
arr.myMap(e => e > 8)

