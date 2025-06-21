let bank = function(loanAmount) {
  let loan = loanAmount;

  return {
    loanAmountLeft: function() {
      return loan;
    },
    emiPaid: function(amount) {
      loan -= amount;
      return loan;
    }
  }
}

let total_loan = bank(90000);

console.log("Total Loan: " , total_loan.loanAmountLeft(90000));
console.log("1st Month EMI: " + total_loan.emiPaid(10000));
console.log("2nd Month EMI: " +total_loan.emiPaid(10000));
console.log("3rd Month EMI: " +total_loan.emiPaid(10000));
console.log("4th Month EMI: " +total_loan.emiPaid(10000));
console.log("Loan Left: " + total_loan.loanAmountLeft());