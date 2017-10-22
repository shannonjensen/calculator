document.addEventListener("DOMContentLoaded", function(){
    var nums = document.getElementById('keypad');
    var results_main = document.getElementById('results_text');
    var results_sub = document.getElementById('results_subtext');
    var equals = document.getElementById('equals');
    var clear = document.getElementById('clear');
    var operators = document.getElementById('operators');
    var curNum = 0;
    var history = "";
    var curResult = 0;
    var curOperator = "+";
    var oneDecimal = false;

    nums.addEventListener("click",function(e) {
        if ((e.target.id == ".")&&(curNum!=="")&&(oneDecimal===false)) {
            curNum += e.target.id;
            oneDecimal = true;
            results_main.innerHTML = curNum;
            results_sub.innerHTML = history+curNum;
        } else if (e.target.id != ".") {
            if (curNum == "0") {
                curNum = e.target.id;
            } else {
                curNum += e.target.id;
            }
            results_main.innerHTML = curNum;
            results_sub.innerHTML = history+curNum;
        }
    },false);

    equals.addEventListener("click",function(e) {
        theAns = eval(history+curNum);
        results_main.innerHTML = theAns;
        results_sub.innerHTML = history+curNum+"="+theAns;
        history = theAns.toString();
        curNum = "";
        oneDecimal = false;
    },false);

    clear.addEventListener("click",function(e) {
        curNum = 0;
        history = "";
        oneDecimal = false;
        results_main.innerHTML = 0;
        results_sub.innerHTML = 0;
    },false);

    operators.addEventListener("click",function(e) {
        history += curNum;
        if ((history.slice(-1)!="+")&&(history.slice(-1)!="-")&&(history.slice(-1)!="*")&&(history.slice(-1)!="/")&&(history!=="")) {
            history += e.target.id;
        } else if ((e.target.id=="-")&&(history.slice(-1)!="-")) {
            history += e.target.id;
        }
        results_sub.innerHTML = history;
        curNum = "";
        oneDecimal = false;
    })
});
