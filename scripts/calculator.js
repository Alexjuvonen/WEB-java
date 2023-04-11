$(function () {
    let randomnumber1 = GetrandomInt(11);
    let randomnumber2 = GetrandomInt(11);
    console.log("1. randomnumer" + GetrandomInt(11));
    document.getElementById('firstTextInput').value = randomnumber1;
    console.log("2. randomnumer" + GetrandomInt(11));
    document.getElementById('secondTextInput').value = randomnumber2;
});

function GetrandomInt(max) {
    return Math.floor(Math.random() * max);
}
function calculate() {
    let nrValue;
    nrValue = document.getElementById('firstTextInput').value;

    console.log("nrValue: " + nrValue);

    let nrValue1;
    nrValue1 = document.getElementById('secondTextInput').value;

    console.log("nrValue: " + nrValue1);

    let operators = document.getElementById("operationSelect");
    let selectedText = operators.options[operators.selectedIndex].text;

    let total = eval(nrValue + selectedText + nrValue1);
    document.getElementById('juttu').value = total;

}
function minus1() {
    nrValue = document.getElementById('firstTextInput').value;
    nrValue3 = nrValue - 1;
    console.log(nrValue);
    document.getElementById('firstTextInput').value = nrValue3;
}
function minus2() {
    nrValue1 = document.getElementById('secondTextInput').value;
    nrValue4 = nrValue1 - 1;
    document.getElementById('secondTextInput').value = nrValue4;
}
function plus1() {
    nrValue = document.getElementById('firstTextInput').value;
    nrValue5 = nrValue++;
    document.getElementById('firstTextInput').value = nrValue5;
}
function plus2() {

    nrValue1 = document.getElementById('secondTextInput').value;
    nrValue6 = nrValue1++;
    document.getElementById('secondTextInput').value = nrValue6;
}
