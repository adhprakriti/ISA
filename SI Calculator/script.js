function compute() {
    let principal = parseInt(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let years = parseInt(document.getElementById("years").value);
  
    if (principal <= 0) {
      alert("Enter a positive number");
      document.getElementById("principal").focus();
      return;
    }
  
    let interest = (principal * years * rate) / 100;
    let amount = principal + interest;
    let currentYear = new Date().getFullYear();
    let futureYear = currentYear + years;
    let result = document.getElementById("result");
    result.innerHTML = `If you deposit <mark>$${principal}</mark>,<br>
    at an interest rate of <mark>${rate}%</mark>,<br>
    you will receive an amount of <mark>$${amount}</mark>,<br>
    in the year <mark>${futureYear}</mark>.`;
  }
  

function updateRate() {
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").textContent = rateval;
  }
  
