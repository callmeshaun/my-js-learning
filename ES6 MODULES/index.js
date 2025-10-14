//ES6 Module = An external file that conatins resuable code
//             that can be imported into other js files.
//             write resuable code for many different apps.
//              Can conatain classes , functions and more introduced as part of
//              ECMAScript 2015 update

import {PI , getCircumference , getArea , getVolume} from './mathUtil.js';

console.log("The value of PI is : " + PI);
const circumference = getCircumference(10);
console.log("The circumference is : " + circumference.toFixed(2));
const area = getArea(10);
console.log("The area is : " + area.toFixed(2));