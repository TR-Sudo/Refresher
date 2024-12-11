import { Container, Text } from '@chakra-ui/react'
import React from 'react'
import { CgAdd } from 'react-icons/cg'
import { Link, Navigate, NavLink } from 'react-router-dom'

function Navbar() {


  const homepage=()=>{
    window.location.href('/')
  }
  return (
    <Container maxW={"1140px"} px={4}>
        <Text>
            <Link to="/">Product Store</Link>
        </Text>
        <NavLink
         to="/create">
            +

        </NavLink>
        
    </Container>
  )
}

export default Navbar