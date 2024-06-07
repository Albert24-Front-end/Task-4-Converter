function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    // Пример фиксированных курсов валют (можно заменить на API для получения актуальных курсов)
    const exchangeRates = {
        USD: { USD: 1, EUR: 0.85 },
        EUR: { USD: 1.18, EUR: 1 }
    };

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;

    document.getElementById('result').innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}