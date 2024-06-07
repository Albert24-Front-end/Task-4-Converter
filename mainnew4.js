function convert() {
   let income = document.getElementsByClassName('income')[0].value;
   let currency = document.getElementsByName('income')[0];
   let result = document.getElementsByClassName('outcome')[0];

   const rub = 130;
   const usd = 12650;
   const euro = 13700;

   if (currency.value == 'rub') {let answer =   result.value = `${income} * ${rub}`}
   else if (currency.value == 'usd') {result.value = `${income} * ${usd}`}
   else if (currency.value == 'euro') {result.value = `${income} * ${euro}`}
   console.log(income);
   console.log(outcome);
   console.log(result);
}