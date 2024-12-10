import {Product} from '../models/product.model.js'
import mongoose from 'mongoose'

const getProducts=async(req,res)=>{
    try{
        const Products= await Product.find({})//{} returns all products
        res.status(200).json({success:true,data:Products})
    }catch(e){
        console.log('error while fetching data\t',e.msg)
        res.status(500).json({success:false,msg:"Server Error"})
    }
}

const createProduct=async(req,res)=>{ // post is the method to create 
    const product=req.body // user will send the data
    if(!product.name || !product.price || !product.image){
        res.status(400).json({success:false,msg:"Please provide all fields"})
    }
    const newProduct = new Product(product)

    try{
        await newProduct.save()
        res.status(201).json({success:true,data:newProduct})
    }catch(e){
        console.error(`Error in create product: ${e}`)
        res.status(500).json({success:false,msg:"Server error"})
    }
}

const updateProduct=async(req,res)=>{
    const {id}=req.params//id from params
    const product=req.body
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success:false,msg:"Invalid product id"})
    }
    try{
        const updatedProd=await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true,data:updatedProd})
    }catch(e){
        console.log('error while fetching data\t',e.msg)
        res.status(500).json({success:false,msg:"Server Error"})
    }
}

const deleteProduct=async(req,res)=>{
    const {id}=req.params//id from params
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,msg:"Product deleted"})

    }catch(e){
        console.error(`Error in deleting product: ${e}`)
        res.status(500).json({success:false,msg:"Server error"})
    }
}


export {getProducts,createProduct,updateProduct,deleteProduct}