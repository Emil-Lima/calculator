function sum (n1,n2) {
    let result = Number(n1) + Number(n2);
    document.getElementById("screen").textContent = result;
}

function subs (n1,n2) {
    let result = Number(n1) - Number(n2);
    document.getElementById("screen").textContent = result;
}

function multiply (n1,n2) {
    let result = Number(n1) * Number(n2);
    document.getElementById("screen").textContent = result;
}

function divide (n1,n2) {
    let result = Number(n1) / Number(n2);
    document.getElementById("screen").textContent = result;
}

function operator (arg) {
    let myRegExp = /.?\d+/;
    let matchedLeft = arg.match(myRegExp);
    let arg2 = arg.replace(matchedLeft,"");
    console.log(arg2);
    let myRegexpOperator = /\+|\-|\*|\//;
    let matchedOperator = arg2.match(myRegexpOperator);
    let matchedRight = arg2.replace(matchedOperator,"");    

    if (matchedOperator == "+") {
        return sum(matchedLeft, matchedRight);
    } else if (matchedOperator == "-") {
        return subs(matchedLeft, matchedRight);
    } else if (matchedOperator == "*") {
        return multiply(matchedLeft, matchedRight);
    } else {
        return divide(matchedLeft, matchedRight);
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(element => {
    if ((/\d|\/|\*|\-|\+|\./).test(element.textContent)) {
        element.addEventListener("click",() => {
            document.getElementById("screen").textContent += element.textContent;
        })
    } else if (element.textContent === "enter") {
        element.addEventListener("click",() => {
            if (!(/.?\d+(\/|\*|\-|\+).?\d+/).test(document.getElementById("screen").textContent)) {
                document.getElementById("screen").textContent = document.getElementById("screen").textContent;
            } else {
                return operator(String(document.getElementById("screen").textContent));
            }
        })
    } else if (element.textContent === "del") {
        element.addEventListener("click",() => {
            let holder = document.getElementById("screen").textContent;
            let replaced = holder.replace(/(\d|\/|\*|\-|\+|\.)$/,"");
            document.getElementById("screen").textContent = replaced;
        });
    } else {
        element.addEventListener("click", () => {
            document.getElementById("screen").textContent = "";
        });
    }
});


