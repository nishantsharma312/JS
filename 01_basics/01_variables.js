const accountId = 12265
let accountEmail = "nish@mail.com"
var accountPass = "qwerty"
accountCity = "Chandigarh"
let accountState  //this is undefined

// accountId = 1 // not allowed, cant change value of a constant

accountEmail = "n@mail.com"
accountPass = "12345"
accountCity = "Solan"

/*  NOTE

const = can't be re-assigned a value and can't be redeclared (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

prefer not to use var because of issue in blocked scope and functional scope

# console.table([group of variables you want to show in tabular form])

*/

console.log(accountId);
console.table([accountEmail, accountId, accountPass, accountCity, accountState])
