"convert-button"
const convertButton = document.querySelector(".convert-button");
const convertCurrency = document.querySelector(".currency-select")

convertButton.addEventListener("click", convertValues);


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value //valor recebido a converter 
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); //valor em real a ser convertido
    const currencyValueConverted = document.querySelector(".currency-value");//valor convertido
    
    
    const dolarToday = 6.14; //dolar do dia
    const euroToday = 7.15;//euro do dia

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) //moeda a converter 


    if (convertCurrency.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }


    if (convertCurrency.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    const convertedValue = inputCurrencyValue
    const convertedValueEuro = inputCurrencyValue

    
    console.log(convertedValue);
}
   
function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")
   

    if (convertCurrency.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "../assets/dolar.png"
    }

    if (convertCurrency.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "../assets/euro.png"
    }
    convertValues()
}    


convertCurrency.addEventListener("change", changeCurrency)
