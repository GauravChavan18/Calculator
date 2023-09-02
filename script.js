let inputvalue = document.getElementById("input-display");

let exp = "";
let fno = true;
let sno = true;
let syb = true;
let ans;

function getvalue(val) {
    if (val === "+") {
        exp += "+";
    }
    else if (val === "-") {
        exp += "-";
    }
    else if (val === "/") {
        exp += "/";
    }
    else if (val === "x") {
        exp += "x";
    }
    else {
        exp += val;
    }
    inputvalue.innerHTML = exp;
}

function deletefun() {
    exp = exp.toString();
    if (exp.length > 0) {
        exp = exp.substring(0, exp.length - 1);
        console.log(exp);
        inputvalue.innerHTML = exp;
    }
}

function setans() {
    if (isNaN(exp.charAt(0)) || isNaN(exp.charAt(exp.length - 1))) {
        alert("Enter Number First:")
    }
    else {

        let op = exp.split("")
        let oparr = [];

        op.forEach((val) => {
            if (val == "+" || val == "-" || val == "x" || val == "/") {
                oparr.push(val);
            }
        })

        let arr = exp.split(/[-+x/]+/)
        let first = arr[0];
        let k = 1;

        for (let i = 0; i < oparr.length; i++) {
            let second = arr[k++];
            let op = oparr[i];

            if (op == '+') {
                first = parseFloat(first) + parseFloat(second);
            }
            else if (op == "-") {
                first = parseFloat(first) - parseFloat(second);
            }
            else if (op == "x") {
                first = parseFloat(first) * parseFloat(second);
            }
            else {
                first = parseFloat(first) / parseFloat(second);
            }
        }
        if (first.toString().length > 6 && isNaN(first)) {
            ans = first.toString().substring(0, 6);
        }
        else {
            ans = first;
        }
        inputvalue.innerHTML = ans;
        exp = ans.toString();
    }
}


function resetinput() {
    inputvalue.innerHTML = "0";
    exp = "";
    ans = "";
}