import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProdStore } from '../store/product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreatePage() {
    const [newProd,setNewProd]=useState({
        name:"",
        price:"",
        image:"",
    })

    const {createProd}=useProdStore()
    const handleAddProduct=async()=>{
        
        const {success,msg}=await createProd(newProd)

        if(success){
            toast.success("Success Notification !", {
                position: "top-right"
            });
        }
        setNewProd({ name:"",
            price:"",
            image:""})
    }
  return (
    <Container maxW={"container.sm"}>
        <VStack spacing={8}>
         <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
            Create new product
         </Heading>
         <Box
         w={"full"} bg={"green"} p={6} rounded={"lg"} shadow={"md"}>
            <VStack spacing={4}>
                <Input
                placeholder="Product Name"
                name='name'
                value={newProd.name}
                onChange={(e)=>setNewProd({...newProd,name:e.target.value})}>
                </Input>
                <Input
                placeholder="Price"
                name='price'
                value={newProd.price}
                onChange={(e)=>setNewProd({...newProd,price:e.target.value})}>
                </Input>
                <Input
                placeholder="Img URL"
                name='image'
                value={newProd.image}
                onChange={(e)=>setNewProd({...newProd,image:e.target.value})}>
                </Input>
                <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
							Add Product
				</Button>
                <ToastContainer />
            </VStack>
         </Box>
        </VStack>
    </Container>
  )
}

export default CreatePage