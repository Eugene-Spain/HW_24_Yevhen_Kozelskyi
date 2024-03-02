"use strict"
const USD = "USD"
const EUR = "EUR"
let requestRate = +prompt(`This is DEX exchanger from ${USD} to ${EUR} without commissions on buy/sell option. What's todays exchange rate for 1 USD?`)
if (!isNaN(requestRate) && requestRate > 0) {   
     function createCurrencyConverter(requestRate) {
        let currencyRate = requestRate
    
        function intoEUR(valueUSD) {
            let resultEUR = valueUSD * currencyRate
            return resultEUR.toLocaleString( 'es-ES', {style: 'currency' , currency: 'EUR'})
        }

        function intoUSD(valueEUR) {
            let resultUSD = valueEUR / currencyRate
            return resultUSD.toLocaleString( 'en-US', {style: 'currency' , currency: 'USD'})
        }

        return {
            intoEUR: intoEUR,
            intoUSD: intoUSD,
        }
    }

    let requestConvert = prompt(`how much money do you want to change and is it "${USD}" or "${EUR}" ? E.g. 100 EUR`)
    const CONVERTER =  createCurrencyConverter(requestRate)
    const USER_VALUE = parseInt(requestConvert)
    const USER_RESULT = requestConvert.includes(USD) ? CONVERTER.intoEUR(USER_VALUE) : CONVERTER.intoUSD(USER_VALUE)
    
    alert(`${USER_RESULT}`)
    
    
} else {
    alert(`You have inserted "${requestRate}" as an exchange rate but this value is incorrect. Try again. `)
}

