const inputTxt = document.getElementById("itemInput");
const listTxt = document.getElementById("itemList");
const resultTxt = document.getElementById("result");

let arr = [];

// Add number
function addItem() {
    let value = inputTxt.value;

    if (value === "") {
        alert("Please enter a number");
        return;
    }

    value = Number(value);   // convert to number
    arr.push(value);

    inputTxt.value = "";

    displayItems();
    calculateResult();
}

// Display numbers
function displayItems() {
    listTxt.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        li.textContent = arr[i];
        listTxt.appendChild(li);
    }
}

// Calculate sum, highest, lowest
function calculateResult() {

    if (arr.length === 0) {
        resultTxt.innerHTML = "";
        return;
    }

    let sum = 0;
    let highest = arr[0];
    let lowest = arr[0];

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];

        if (arr[i] > highest) {
            highest = arr[i];
        }

        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }

    resultTxt.innerHTML =
        "Sum: " + sum +
        "<br>Highest: " + highest +
        "<br>Lowest: " + lowest;
}

// Delete all
function deleteAll() {
    arr = [];
    listTxt.innerHTML = "";
    resultTxt.innerHTML = "";
}