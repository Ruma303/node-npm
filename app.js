const validator = require('validator')
//console.log(validator)

const val1 = validator.isBoolean('true')
const val2 = validator.isBoolean('24')
console.log(val1, val2)
const val3 = validator.blacklist('<p>\'Codice da sanificare.\'</p>', '<>/')
console.log(val3)


const db = require('./db.json')
console.log(db)