
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

const { error } = require('console')
const {readFile} = require('fs')

const getText= (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(e,data)=>{
            if(e){
                reject(e)
            }
            else{
                resolve(data)
            }
        })
    })
}


getText('./content/first.txt')
    .then(res=>console.log(res))
    .catch((e)=>console.log(e))