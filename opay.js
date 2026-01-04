(function () {
  let balance = parseFloat(localStorage.getItem('opay_balance') || '1000.00');

  function updateBalance() {
    document.getElementById("balance").textContent = balance.toFixed(2);
  }

  window.deposit = function () {
    const amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
      alert("Enter a positive amount");
      return;
    }
    balance += amount;
    localStorage.setItem('opay_balance', balance.toFixed(2));
    updateBalance();
    document.getElementById("amount").value = '';
  };

  window.withdraw = function () {
    const amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
      alert("Enter a positive amount");
      return;
    }
    if (amount > balance) {
      alert("Insufficient funds");
      return;
    }
    balance -= amount;
    localStorage.setItem('opay_balance', balance.toFixed(2));
    updateBalance();
    document.getElementById("amount").value = '';
  };

  document.addEventListener('DOMContentLoaded', updateBalance);
})();
