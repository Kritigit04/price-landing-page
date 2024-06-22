document.addEventListener('DOMContentLoaded', () => {
    const currencySelect = document.getElementById('currency');
    const unitSelect = document.getElementById('unit');
    const prices = document.querySelectorAll('.price');

    const currencySymbols = {
        IND: '₹',
        USD: '$',
        EUR: '€'
        
    };

    function updatePrices() {
        const selectedCurrency = currencySelect.value;
        const selectedUnit = unitSelect.value;

        prices.forEach(priceElement => {
            const monthlyPrice = priceElement.getAttribute('data-monthly');
            const yearlyPrice = priceElement.getAttribute('data-yearly');
            const priceValue = selectedUnit === 'month' ? monthlyPrice : yearlyPrice;
            priceElement.textContent = `${currencySymbols[selectedCurrency]}${priceValue}/${selectedUnit}`;
        });
    }

    currencySelect.addEventListener('change', updatePrices);
    unitSelect.addEventListener('change', updatePrices);

    updatePrices(); // Initial call to set prices based on default selections
});