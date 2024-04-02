import Freecurrencyapi from '@everapi/freecurrencyapi-js'

const freecurrencyapi = new Freecurrencyapi('fca_live_ABHTzzm5sgLcw8WKSZdfYj0aBP2bdHvWoHE7xW7h');

convertCurrency("INR", "USD", 5);

export async function convertCurrency(fromCurrency, toCurrency, units) {
    console.log(`=====-------yes-------=====`);
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })
    const multiplier = await res.data[toCurrency]
    console.log(multiplier);
    return multiplier * units;
}