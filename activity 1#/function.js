const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultTxt = document.getElementById("result");
const result2Txt = document.getElementById("result2");
const result3Txt = document.getElementById("result3");
const result4Txt = document.getElementById("result4");



// Function to calculate total price with tax
function calculateTotal() {
    let num1 = Number(num1Txt.value);
    let num2 = Number(num2Txt.value);

    if (num1 === 0 ||num2 === 0) {
        alert("Please enter price and tax rate");
        return;
    }
    let total = num1 + num2;
    let total2 = num1 - num2;
    let total3 = num1 * num2;
    let total4 = num1/num2;

    resultTxt.innerHTML = "SUM: " + total.toFixed(2);
    result2Txt.innerHTML = "DEFFERENCE: " + total2.toFixed(2);
    result3Txt.innerHTML = "PRODUCT: " + total3.toFixed(2);
    result4Txt.innerHTML = "QUOTIENT: " + total4.toFixed(2);
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = "";
    resultTxt.innerHTML = "";
    result2Txt.innerHTML = "";
    result3Txt.innerHTML = "";
    result4Txt.innerHTML = "";
}