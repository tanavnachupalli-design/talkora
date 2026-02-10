function login() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  if(name && email && phone) {
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter all details!");
  }
}

function book(amount) {
  localStorage.setItem('amount', amount);
  window.location.href = "booking.html";
}

function goToPayment() {
  let amount = localStorage.getItem('amount');
  document.getElementById('selected-amount').innerText = amount;
  window.location.href = "payment.html";
}

function paymentDone() {
  window.location.href = "confirmation.html";
}
