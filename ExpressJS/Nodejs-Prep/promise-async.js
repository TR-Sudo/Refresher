const { error } = require('console')
const {readFile,writeFile} = require('fs')


const ultil= require('util')
const readFilePromise=ultil.promisify(readFile)
const writeFilePromise=ultil.promisify(writeFile)

const start = async() =>{
    try{
        const first = await readFilePromise('./content/first.txt','utf-8')
        const second = await readFilePromise('./content/second.txt','utf-8')
        await writeFilePromise('./content/result-mind-grenade.txt',`This is awesome :${first} ${second}`)
        console.log(first,second)
    }catch(e){
        console.log(e)
    }
}


start()

//Promise method
// const getText= (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(e,data)=>{// promise for the file to read without error
//             if(e){
//                 reject(e)// if it fails to read
//             }
//             else{
//                 resolve(data)// if it passes returns this data as a resolve
//             }
//         })
//     })
// }


// getText('./content/first.txt')// passes the param path
//     .then(res=>console.log(res))
//     .catch((e)=>console.log(e))

//async method
// const start = async() =>{
//     try{
//         const first = await getText('./content/first.txt')
//         const second = await getText('./content/second.txt')
//         console.log(first,second)
//     }catch(e){
//         console.log(e)
//     }
// }
// 