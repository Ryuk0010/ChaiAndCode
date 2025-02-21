
let calculationEle = document.getElementById("cal-screen");
let upperCalculationEle = document.getElementById("cal-upper-screen");
let plus = document.getElementById("b-+");
let substract = document.getElementById("b--");
let mul = document.getElementById("b-*");
let divide = document.getElementById("b-/");
let equal = document.getElementById("b-=");
let ac = document.getElementById("clr");
let del = document.getElementById("bkspace");




function addNum(num) {
    calculationEle.value += num;
}

for (let i = 0; i < 10; i++) {
    let btn = document.getElementById(`b-${i}`);
    if (btn) {
        btn.addEventListener("click", function () {
            addNum(i);
        });
    }
}

let ans = 0;
let operator;
let elementA;
let elementB
let li = document.createElement('div');
function setOperator(op) {
    elementA = calculationEle.value;
    calculationEle.value = "";
    operator = op;
    li.innerText = elementA + " " + op
    upperCalculationEle.appendChild(li)

}


plus.addEventListener("click", () => setOperator("+"));
substract.addEventListener("click", () => setOperator("-"));
mul.addEventListener("click", () => setOperator("*"));
divide.addEventListener("click", () => setOperator("/"));


equal.addEventListener("click", function() {
    elementB = calculationEle.value;
    console.log(`element A ${elementA}`)
    console.log(`element B ${elementB}`)
    if (operator) {
        ans = eval(`${Number(elementA)} ${operator} ${Number(elementB)}`);
        console.log(ans);
    }
    li.innerText += " " + elementB

    calculationEle.value = ans;
});


ac.addEventListener("click", function(){
    calculationEle.value = "";
    upperCalculationEle.innerHTML  = "";
})

del.addEventListener("click", function(){
    let val = calculationEle.value
    val = val.slice(0, -1);
    calculationEle.value = val
})