// os module

const os = require('os')// built in mod

//info about curr user
const user = os.userInfo()
console.log(user)

// method returns uptime of system
console.log(`The system uptime is : ${os.uptime()}s`)


const currOS= {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currOS)