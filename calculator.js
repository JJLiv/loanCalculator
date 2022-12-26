let monthlyPayment = document.getElementById('monthly-payment');

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  
  return  {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
  
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  
let a = document.getElementById('loan-amount');
let y = document.getElementById('loan-years');
let r = document.getElementById('loan-rate');

a.value = 10043;
y.value = 7;
r.value = .25;

    
let mp = 0;
let P = a.value;
let i = r.value / 12;
let n = y.value * 12;
mp = (P * i) / (1 - (1 + i)**-n);

let monthlyPayment = document.getElementById('monthly-payment');
monthlyPayment.innerText = (mp.toFixed(2)).toString();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
 
 let x = getCurrentUIValues();
 if(x.amount <= 0){
  alert('Enter a valid loan amount');
 }
 if(x.years < 0 ){
  alert('Enter a valid length of time');
 }
 if (x.rate < .01 || x.rate > .99 ){
  alert('Enter a valid yearly rate in decimals. Example: (0.25) would equate to 25%');
 }
 let cmp = calculateMonthlyPayment(x);
 
 updateMonthly(cmp);
  
  
  
  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let vals = Object.values(values);
  console.log(vals);
  let a = vals[0];
  let y = vals[1];
  let r = vals[2];

  let mp = 0;
let P = a;
let i = r / 12;
let n = y * 12;
mp = ((P * i) / (1 - (1 + i)**-n)).toFixed(2);
console.log(mp);
return mp;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.getElementById('monthly-payment');
  monthlyPayment.innerText = monthly;
}
