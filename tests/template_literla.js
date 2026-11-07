//**Template Literal Using of backtick(`)  and write a string where we can get the value using ${}.

const { networkInterfaces } = require("node:os")

let lang = "playwright"
console.log("im learning " + lang)

console.log(`im learning ${lang}`) //by using backtick and dollar we can print

let fname = "nikhil"
let fullname = `hi "${fname} jadhav"`
console.log(fullname)

//api testing
let env = "staging"
let userid = 1234;
env = "staging"
//we use dollar and backtick not to assign value again and this  we usually use in automation framework
const apiurl = `https://api-${env}.wipro.com/user/${userid}`;  //env staging will print and userid 1234
 

//locators - webtable - //table/tbody/tr[1]/td[2] //firstrow second column

//logs
const testname = "Login test"
const status = "failed"
const duration = 2.3
console.log(`${testname} : ${status} executed in ${duration} minutes`)

