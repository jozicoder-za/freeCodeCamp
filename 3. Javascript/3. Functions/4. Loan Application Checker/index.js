//Duplex
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

//Condo
const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

//Car
const minIncomeForCar = 30000;
const minCreditForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if (
    annualIncome > minIncomeForDuplex &&
    creditScore > minCreditScoreForDuplex
  ) {
    return "You qualify for a duplex, condo and car loan.";
  } else if (
    annualIncome > minIncomeForCondo &&
    creditScore > minCreditScoreForCondo
  ) {
    return "You qualify for a condo and car loan";
  } else if (annualIncome > minIncomeForCar && creditScore > minCreditForCar) {
    return "You qualify for a car loan.";
  } else {
    return "You don't qualify for any loans.";
  }
}

const duplexLoanMessage = getLoanMessage(85000, 850);
const condoLoanMessage = getLoanMessage(65000, 690);
const carLoanMessage = getLoanMessage(45000, 660);
const noLoanMessage = getLoanMessage(25000, 550);

//output
console.log(duplexLoanMessage);
console.log(condoLoanMessage);
console.log(carLoanMessage);
console.log(noLoanMessage);
