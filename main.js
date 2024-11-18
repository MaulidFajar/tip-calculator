const tipOption = document.querySelectorAll(".tip_option");
const tipCounter = document.querySelector(".tip-count");
const billInput = document.querySelector(".bill_input");
const tipInput = document.querySelector(".tip_input");
const customerInput = document.querySelector(".cust_input");
const tipPrice = document.getElementById("tip_price");
const totalPrice = document.getElementById("total_price");
const resetButton = document.querySelector(".reset_btn");
const errorMessage = document.querySelector(".error_msg");

billInput.addEventListener("input", handleBillInput);
customerInput.addEventListener("input", handleCustomerInput);
resetButton.addEventListener("click", resetBtn);
tipInput.addEventListener("input", handleTipInput);

let billValue = 0.0;
let numCustomer = 1;
let tipValue = 0;

tipOption.forEach((e) => {
  e.addEventListener("click", () => {
    tipOption.forEach((button) => button.classList.remove("active"));
    e.classList.add("active");

    tipValue = parseFloat(e.value / 100) || 0;

    calculatePrice();
  });
});

function handleBillInput() {
  billValue = parseFloat(billInput.value) || 0;
  calculatePrice();
}

function handleCustomerInput() {
  if (customerInput.value <= 0) {
    customerInput.classList.add("error");
    errorMessage.style.display = "block";
  } else {
    customerInput.classList.remove("error");
    errorMessage.style.display = "none";
    numCustomer = parseFloat(customerInput.value) || 0;
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
  customerInput.value = "";
  tipPrice.textContent = "0.00";
  totalPrice.textContent = "0.00";
  billValue = 0.0;
  numCustomer = 1;
  tipValue = 0;
  tipOption.forEach((e) => e.classList.remove("active"));
}

billInput.value = "";
customerInput.value = "";
tipInput.value = "";
tipPrice.textContent = "0.00";
totalPrice.textContent = "0.00";
