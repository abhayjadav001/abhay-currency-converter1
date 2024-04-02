console.log("hello")
import { convertCurrency } from "abhay-currency-converter"




convertCurrency("USD", "INR", 5).then((finalAmount) => {
    console.log(`=====-------finalAmount-------=====`, finalAmount);
})

