const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const num3Txt = document.getElementById("num3");
const resultTxt = document.getElementById("sum");

function concatenate() {

    if (num1 === 0 ||num2 === 0) {
        alert("Please enter price and tax rate");
        return;
    }
    
    resultTxt.innerHTML = num1Txt.value + " " + num3Txt.value + " " + num2Txt.value;
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = "";
    num3Txt.value = "";
    resultTxt.innerHTML = "";
}