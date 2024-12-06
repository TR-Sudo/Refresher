const express= require('express')
const app = express()
const {products} = require('./data')





app.get('',(req,res)=>{
    res.status(200).send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProd = products.map((product)=>{
        const {id,name,image}=product
        return {id,name,image}// only returns id name image and no desc
    })
    res.status(200).json(newProd)
})
/*
app.get('/api/products/1',(req,res)=>{
    const newProd = products.find((product)=>product.id==1)
    res.status(200).json(newProd)
})
*/

app.get('/api/products/:id',(req,res)=>{
    console.log(req)
    const id = req.params.id
    const newProd = products.find((product)=>product.id==id)
    if(!newProd){
        return res.status(404).send('Product Does not exist')
    }
    res.status(200).json(newProd)
})

app.get('/api/products/:id/reviews/:reviewId',(req,res)=>{
    console.log(req.params)
    res.send('Hello world')
})

app.listen(5000,()=>{
    console.log("Server is listening on port 5000")
})