function sum (n1,n2) {
    let result = n1 + n2;
    return result;
}

function subs (n1,n2) {
    let result = n1 - n2;
    return result;
}

function multiply (n1,n2) {
    let result = n1 * n2;
    return result;
}

function divide (n1,n2) {
    let result = n1 / n2;
    return result;
}

function operator (arg) {
    let myRegExp = /\d+?(?=\+|\-|\*|\/)/;
    let matchedLeft = arg.match(myRegExp);
    let myRegexpOperator = /\+|\-|\*|\//;
    let matchedOperator = arg.match(myRegexpOperator);
    let reversed = arg.split("").reverse().join("");
    let matchedRight = reversed.match(myRegExp);
    
    if (matchedOperator === "+") {
        return sum(matchedLeft, matchedRight);
    } else if (matchedOperator === "-") {
        return subs(matchedLeft, matchedRight);
    } else if (matchedOperator === "*") {
        return multiply(matchedLeft, matchedRight);
    } else {
        return divide(matchedLeft, matchedRight);
    }
}

const buttons = document.querySelectorAll("button");



