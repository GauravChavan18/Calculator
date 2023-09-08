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
let isneg = false;
function setans() {
    if (isNaN(exp.charAt(exp.length - 1))) {
        alert("Enter Number First:")
    }
    else {
        if (exp.charAt(0) === '-') {
            exp = exp.substring(1, exp.length);
            isneg = true;
        }
        console.log(exp)
        let op = exp.split("")
        let oparr = [];

        op.forEach((val) => {
            if (val == "+" || val == "-" || val == "x" || val == "/") {
                oparr.push(val);
            }
        })

        let arr = exp.split(/[-+x/]+/)
        console.log(arr)
        console.log(oparr)
        let first = arr[0];
        if (isneg) {
            first = 0 - arr[0];
            isneg = false
        }

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
        if (first.toString().length > 6) {
            ans = first.toString().substring(0, 6);
        }
        else {
            ans = first.toString()
        }
        inputvalue.innerHTML = ans;
        exp = ans;
    }
}


function resetinput() {
    inputvalue.innerHTML = "0";
    exp = "";
    ans = "";
}
