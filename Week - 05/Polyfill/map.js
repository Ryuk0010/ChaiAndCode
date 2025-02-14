if (!Array.prototype.myMap) {
    const res = [];
    Array.prototype.myMap = function (userfn) {
        

        for (let i = 0; i < this.length; i++) {
            res.push(userfn(this[i], i)); // ✅ Pass both value and index
        }

        
    };
    return res; // ✅ Return the new array
}

const arr = [1, 2, 3, 4, 5];

const ans = arr.myMap(e => e * 3);
console.log(ans);
