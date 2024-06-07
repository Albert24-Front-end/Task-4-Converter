function convert() {
   let income = document.getElementsByClassName('income')[0].value;
   let currency = document.getElementsByName('income')[0];
   let result = document.getElementsByClassName('outcome')[0];

   const rub = 130;
   const usd = 12650;
   const euro = 13700;
   

   if (currency.value == 'none') {let answer = "Select currency"
      result.value = `${answer}`}
   else if (currency.value == 'rub') {let answer = income / rub 
      result.value = `${answer}`}
   else if (currency.value == 'usd') {let answer = income / usd 
      result.value = `${answer}`}
   else if (currency.value == 'euro') {let answer = income / euro 
      result.value = `${answer}`}
   else if (currency.value == 'uzs') {let answer = income * usd 
      result.value = `${answer}`}
   
   console.log(income);
   console.log(outcome);
   console.log(result);
}
// Available options:
// UZS - RUB;
// UZS - USD;
// UZS - EUR;
// USD - UZS;