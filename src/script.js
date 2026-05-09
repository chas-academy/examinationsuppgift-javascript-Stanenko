const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const balanceDisplay = document.getElementById("balance");

let balance = 0;


incomeBtn.addEventListener("click", addIncome);
expenseBtn.addEventListener("click", addExpense);


function addIncome() {
    const description = descInput.value;
    const amount = amountInput.value;

    if (description === "" || amount === "") {
        alert("Inte alla fält är ifyllda");
        return;
    }

    const numAmount = parseFloat(amount);

    if (isNaN(numAmount)) {
        alert("Värder är inte ett tal");
        return;
    }

    if (numAmount < 0) {
        const confirmed = confirm("Vill du verkligen lägga till ett negativt värde som inkomst?");

        if (!confirmed) {
            descInput.value = "";
            amountInput.value = "";
            return;
        }
    }

    const listItem = document.createElement("li");
    listItem.textContent = `${description} - ${numAmount} kr (Inkomst)`;
    incomeList.appendChild(listItem);

    balance = balance + numAmount;
    balanceDisplay.textContent = balance;

    descInput.value = "";
    amountInput.value = "";
}

function addExpense() {
    const description = descInput.value;
    const amount = amountInput.value;

    if (description === "" || amount === "") {
        alert("Inte alla fält är ifyllda");
        return;
    }

    let numAmount = parseFloat(amount);

    if (isNaN(numAmount)) {
        alert("Värder är inte ett tal");
        return;
    }

    if (numAmount < 0) {
        numAmount = Math.abs(numAmount);
    }

    const listItem = document.createElement("li");
    listItem.textContent = `${description} - ${numAmount} kr (Utgift)`;
    expenseList.appendChild(listItem);

    balance = balance - numAmount;
    balanceDisplay.textContent = balance;

    descInput.value = "";
    amountInput.value = "";
}