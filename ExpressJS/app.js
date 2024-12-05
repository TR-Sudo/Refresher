
// npm -D saves as dev dep and you wont need these packages during prod
// globally install node packages using -g [npm i -g nodemon]...
// [ you wont need to type npm... package name but just type the package name]
// npx allows you to run a package without installing it [npx create-react-app ...] temp use

// eventloop nodejs allows you to offload tasks that may slow the program and put at the end of the line
// JS is single threaded event loop helps solve problems that may slow the program
// async will help you offload tasks [ex readFile]

// settimeout() function is async so it will get offloaded no matter the wait time 0s 1000s etc
/*

const _ = require('lodash')


const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);

console.log(newItems)
console.log("Hello People")
*/
// callback functions are functions that recieve input from another function

// Streams
// Writeable
// read
// duplex
// transform sequentially

// read stream allows you to use streams instead of string (for big files)

const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', {highWaterMark:90000,encoding:'utf-8'})

stream.on('data',(res)=>{
    console.log(res)
})
stream.on('error',(e)=>{
    console.log(e)
})



