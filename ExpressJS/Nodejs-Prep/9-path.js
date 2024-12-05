const path= require('path')

console.log(path.sep)

const filePath= path.join('/content','subfile','text.txt')

console.log(filePath)
const base= path.basename(filePath)
console.log(base)// returns text.txt

const absolute = path.resolve(__dirname,'content','subfile','text.txt')
console.log(absolute)// returns C:\Users\Talha\Desktop\Transfer\Github\Refresher\ExpressJS\content\subfile\text.txt

