const {readFile,watchFile, writeFile} = require('fs')
//async method so you can serve bunch of users


console.log("Start")
readFile('./content/first.txt','utf8', (error,res)=> {
    if(error){
        console.log(error)
        return;
    }
    else{//callback for second file
        const first = res;
        readFile('./content/second.txt','utf8',(e,res)=>{
            if(e){
                console.log(e)
                return;
            }
            else{
                const second = res;
                writeFile('./content/results-sync.txt',
                    `Here is the res: ${first},${second}`,
                    (e,res)=>{
                        if (e){
                            console.log(e)
                            return
                        }
                        else{
                            console.log('done with this task')
                        }
                    }
                )
            }
        })
        

    }
})
console.log("starting the next task")