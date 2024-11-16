const tips = document.querySelectorAll(".tip_option");
const tipCounter = document.querySelector(".tip-count");
const billInput = document.querySelector(".bill_input");
const customTip = document.querySelector(".tip-custom");
const tipInput = document.querySelector(".tip_input");
const custInput = document.querySelector(".cust_input");
const tipPrice = document.getElementById("tip_price");
const totalPrice = document.getElementById("total_price");
const resetButton = document.querySelector(".reset_btn");
const errorMessage = document.querySelector(".error_msg");

billInput.addEventListener("input", handleBillInput);
custInput.addEventListener("input", handleCustInput);
resetButton.addEventListener("click", resetBtn);
tipInput.addEventListener("input", handleTipInput);

let billValue = 0.0;
let numCustomer = 1;
let tipValue = 0;

tips.forEach((e) => {
  e.addEventListener("click", () => {
    tips.forEach((button) => button.classList.remove("active"));
    e.classList.add("active");
    tipValue = parseFloat(e.value / 100) || 0;

    calculatePrice();
  });
});

function handleBillInput() {
  billValue = parseFloat(billInput.value) || 0;
  calculatePrice();
}

function handleCustInput() {
  if (custInput.value <= 0) {
    custInput.classList.add("error");
    errorMessage.style.display = "block";
  } else {
    custInput.classList.remove("error");
    errorMessage.style.display = "none";
    numCustomer = parseFloat(custInput.value) || 0;
    calculatePrice();
  }
}

function handleTipInput() {
  tipValue = parseFloat(tipInput.value / 100) || 0;
  calculatePrice();
}

function calculatePrice() {
  let updateTip = (billValue / numCustomer) * tipValue;
  let updateTotal = billValue / numCustomer + updateTip;

  tipPrice.textContent = `$${updateTip.toFixed(2)}`;
  totalPrice.textContent = `$${updateTotal.toFixed(2)}`;
}

function resetBtn() {
  billInput.value = "";
  custInput.value = "";
  tipPrice.textContent = "0.00";
  totalPrice.textContent = "0.00";
  billValue = 0.0;
  numCustomer = 1;
  tipValue = 0;
  tips.forEach((e) => e.classList.remove("active"));
}

billInput.value = "";
custInput.value = "";
tipInput.value = "";
tipPrice.textContent = "0.00";
totalPrice.textContent = "0.00";
