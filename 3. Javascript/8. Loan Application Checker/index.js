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
