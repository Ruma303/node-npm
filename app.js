//const validator = require('validator')
//console.log(validator)


/* const val1 = validator.isBoolean('true')
const val2 = validator.isBoolean('24')
console.log(val1, val2)
const val3 = validator.blacklist('<p>\'Codice da sanificare.\'</p>', '<>/')
console.log(val3)


const db = require('./db.json')
console.log(db) */


//% require vs import

//# require()
/* // importare moduli da node_modules
const fs = require('fs');
// importare file
const db = require('./db.json')

module.exports = function test () {
    console.warn('This is a test!')
} */



//# import / from
/* button.addEventListener('click', async () => {
    const module = await import('./myModule.js');
    module.myFunction();
}); */

/* // importare moduli da node_modules
import debug from 'debug';
// importare altri file
import db from './db.json'
// alias
import { isBoolean as bool } from 'validator'

export const a = 10;
export const b = 20;
export const c = () => 'Hi!';
export default hello = 'Hello World';

import { a, b, c } from './'
import hello from './' */

