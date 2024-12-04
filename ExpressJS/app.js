
// npm -D saves as dev dep and you wont need these packages during prod
// globally install node packages using -g [npm i -g nodemon]...
// [ you wont need to type npm... package name but just type the package name]

const _ = require('lodash')


const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);

console.log(newItems)
console.log("Hello People")