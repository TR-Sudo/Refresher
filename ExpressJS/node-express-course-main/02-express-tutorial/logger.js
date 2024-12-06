

// req => middleware => res


const logger = (req,res,next) =>{// logger, must pass to the next middleware
    const method=req.method

    const url = req.url

    const time = new Date().getFullYear();

    console.log(method,url,time)

    //res.send('Testing')

    next()// passes to the next middleware
}


module.exports=logger