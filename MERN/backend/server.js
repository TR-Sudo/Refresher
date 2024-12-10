import express, { json } from 'express'
import dotenv from "dotenv"
import {connectDB} from './config/db.js'
import router from './routes/product.route.js'

const app= express()

dotenv.config()

app.use(express.json())//allows json data in req body

app.use('/api/products',router)

console.log(process.env.MONGO_URI)

app.listen(5000,()=>{
    connectDB()
    console.log("Server started at localhost 5000")
})



