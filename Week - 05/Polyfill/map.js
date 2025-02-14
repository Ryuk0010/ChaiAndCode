if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (userfn) {
        const res = [];
        for (let i = 0; i < this.length; i++) {
            res.push(userfn(this[i], i));
        }
        return res; 
    };
}

const arr = [1, 2, 3, 4, 5];

const ans = arr.myMap(e => e * 3);
console.log(ans);
