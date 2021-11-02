const data = require('./util.js');
const validator = require('validator');
console.log("hola");

data.saludo("Rafael");

data.sumar(5,4);

console.log(validator.isCreditCard('45'));