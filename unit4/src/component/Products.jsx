import { Box, Button, Flex, Grid, GridItem, Heading, Image, Select, Spacer, Stack, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import {Data} from "../common/Data"
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import { Appcontext } from '../context/Appcontext'
import { Cartcontext } from '../context/Cartcontext'

function Products() {
    const [mapingdata,setMapingdata] =useState([]);
    const {data}=useContext(Appcontext)
    const{handlecartdata}=useContext(Cartcontext)
   
    let handlesort=(e)=>{
        let newdata=[...mapingdata]
        
        let option=e.target.value;
        if(option==="option1")
        {
            newdata=newdata.sort((a,b)=>a.price-b.price);
            setMapingdata(newdata)
        }
        else if(option==="option2")
        {
            newdata=newdata.sort((a,b)=>b.price-a.price);
            setMapingdata(newdata)
        }
        else{
            setMapingdata(mapingdata)
        }
    }
    let handlename=(e)=>{
        let newdata=[...mapingdata]
        
        let option=e.target.value;
        if(option==="option1")
        {
            newdata=newdata.sort((a,b)=>{
                if(a.title>b.title) return 1;
                if(a.title<b.title) return -1;
                if(a.title==b.title) return 0;
            });
            setMapingdata(newdata)
        }
        else if(option==="option2")
        {
            newdata=newdata.sort((a,b)=>{
                if(a.title<b.title) return 1
                if(a.title>b.title) return -1
                if(a.title==b.title) return 0
            });
            setMapingdata(newdata)
        }
        else{
            setMapingdata(mapingdata)
        }
    }

    useEffect(()=>{
        console.log(Data,"1")
    },[mapingdata])
useEffect(()=>{
    console.log(Data,"2")

   setMapingdata(Data[data])
},[data])
  return (
    <Box maxW={"inherit"} border="0px solid red">
        <Navbar/>
        <Flex px={"10%"}>
        <Select w={200} placeholder='Sort By Price' onChange={(e)=>handlesort(e)}>
            <option value='option1'>Low To High</option>
            <option value='option2'>High To Low</option>
        </Select>
        <Spacer/>
        <Select w={200} placeholder='Sort By Name' onChange={(e)=>handlename(e)}>
            <option value='option1'>Ascending</option>
            <option value='option2'>Descending</option>
        </Select>
        </Flex>
        <Box px={"10%"} mt={50} mb={100}>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                
                {mapingdata.map((el,index)=>{
                    return<GridItem key={index}>
                        <Box>
                        <Image h={"400px"} src={el.imgage}></Image>
                        <Heading fontSize={20}>₹{el.price}</Heading>
                        <Text font-family='sans-serif'>{el.title}</Text>
                        <Button  font-family='sans-serif' onClick={()=>{handlecartdata(el)}}>Add to Cart</Button>
                        </Box>
                    </GridItem>
                })}
            </Grid>
        </Box>
        <Footer/>
    </Box>
   
  )
}

export default Products