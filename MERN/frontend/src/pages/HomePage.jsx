
import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProdStore } from '../store/product'
import ProdCard from '../components/ProdCard'

function HomePage() {
    const {fetchProducts,products}=useProdStore()
    
    useEffect(()=>{
        fetchProducts()
    },[])

    console.log(products)
  return (
    <Container maxW='containter.xl' py={12}>
        <VStack spacing={8}>
        <Text
					fontSize={"30"}
					fontWeight={"bold"}
					color={"black"}
					textAlign={"center"}
				>
					Current Products 🚀
				</Text>
                {products.map((product)=>(
                    <>{product.name}</>
                ))}

{products.map((product) => (
                    <>{product.name}</>
				))}


                {products.length===0 ? (<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
                    No products found 😢{" "}
                    <Link to={"/create"}>
                        <Text as='span' color='black' _hover={{ textDecoration: "underline" }}>
                            Create a product
                        </Text>
                    </Link>
                </Text>): ""}
				      
        </VStack>
    </Container>
  )
}

export default HomePage