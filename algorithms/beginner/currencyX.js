var readline = require('readline-sync');
var yourMoney = readline.question("How much money do you have in dollars and cents?: ");
var currencyChoices = {
    AUD: 1.41,
    GBP: .76,
    EUR: .86,
    JPY: 112.21,
    CHF: .99,
    AFN: 75.96,
    ALL: 108.45,
    DZD: 118.33,
    AOA: 301.42,
    ARS: 36.64
}
var currencyArray = ["AUD", "GBP", "EUR", "JPY", "CHF", "AFN", "ALL", "DZD", "AOA", "ARS"]
for (let key in currencyChoices) {
    console.log(key, currencyChoices[key]);
}


var theirInput = readline.question("Here are our currencies. which currency would you like to convert it to?: ");

if (theirInput == currencyArray[0]) {
    console.log(currencyChoices.AUD * yourMoney);
}
else if(theirInput == currencyArray[1]) {
        console.log(currencyChoices.GBP * yourMoney);
}
        else if(theirInput == currencyArray[2]) {
                console.log("Your currency is now " + currencyChoices.EUR * yourMoney);
        }
                else if(theirInput == currencyArray[3]) {
                        console.log("Your currency is now " + currencyChoices.JPY * yourMoney);
                }
                        else if(theirInput == currencyArray[4]) {
                                console.log("Your currency is now " + currencyChoices.CHF * yourMoney);
                        }
                                else if(theirInput == currencyArray[5]) {
                                        console.log("Your currency is now " + currencyChoices.AFN * yourMoney);
                                }
                                        else if(theirInput == currencyArray[6]) {
                                                console.log("Your currency is now " + currencyChoices.ALL * yourMoney);
                                        }
                                                else if(theirInput == currencyArray[7]) {
                                                        console.log("Your currency is now " + currencyChoices.DZD * yourMoney);
                                                }
                                                        else if(theirInput == currencyArray[8]) {
                                                                console.log("Your currency is now " + currencyChoices.AOA * yourMoney + "");
                                                        }
                                                                else if(theirInput == currencyArray[9]) {
                                                                        console.log("Your currency is now " + currencyChoices.ARS * yourMoney + "");
                                                                }
