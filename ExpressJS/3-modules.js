// Modules

// CommonJS, every file is module (by default)
// Modules - encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHI = require('./5-utils')
const data = require('./6-alt-flavor')

require('./7-mind-grenade')// will run the functions being invoked in the file


/*
sayHI('Susan')
sayHI(names.john)
sayHI(names.peter)
console.log(data.singleperson)
*/
