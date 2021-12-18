const _ = require('lodash');
const fp = require('lodash/fp');
const reverse = arr=> arr.reverse();
const first = arr =>arr[0];
const toUpper = s => s.toUpperCase();
const f = _.flowRight(toUpper,first,reverse);
console.log(f(['one','two','three']));
_.map()


// lodash fp
console.log('fp1',fp.map(fp.toUpper,['a,b,c']));

