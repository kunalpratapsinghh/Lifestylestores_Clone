import { Button, Flex, Grid, GridItem, Heading, Image, Stack, StackDivider } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

function Cart() {
    let xx=JSON.parse(localStorage.getItem("cartdata1")) || [];

    let [cartdata,setCartdata]=useState(xx)
    let navigate=useNavigate()
    let sum=cartdata?.reduce((a,b)=>a+(b.price*b.qty),0)
   
    
    const handleitem=(ele,value)=>{
        let newdata=cartdata.map(el=>{return(el.title===ele.title)?{...el,qty:el.qty+value}:el})
        let x=  newdata.filter((el)=>el.qty!==0)
      
        sum=cartdata.reduce((a,b)=>a+(b.price*b.qty),0)
        localStorage.setItem("cartdata1",JSON.stringify(x))
        setCartdata(x)
   
    }


    const handledelete=(el)=>{
        let newdata=cartdata.map((ele)=>ele.title===el.title?{...ele,qty:1}:ele)
            newdata=cartdata.filter((ele)=>ele.title!==el.title)
        setCartdata(newdata)
        sum=cartdata.reduce((a,b)=>a+(b.price*b.qty),0)
        localStorage.setItem("cartdata1",JSON.stringify(cartdata))
        
    }


    useEffect(() => {
      
       
        
        

        
        return ()=>{
            console.log("cleanup")
            localStorage.setItem("cartdata1",JSON.stringify(cartdata))
        }
    }, [cartdata])
    

        



  return (
    <Stack spacing={2} divider={<StackDivider borderColor='gray.200' />}>
        {cartdata.map((el,index)=>{
            return(
                <Flex alignItems={"center"} gap={1} key={index}>
                    <Grid>
                        <GridItem><Image w={"100px"} h={"100px"} src={el.imgage}></Image></GridItem>
                        <GridItem fontSize={"10px"}>{el.title}</GridItem>
                    </Grid>
                    
                    <Button variant={"ghost"} onClick={()=>handleitem(el,-1)}>-</Button>
                    <Heading fontSize={15}>{el.qty}</Heading>
                    <Button variant={"ghost"} onClick={()=>handleitem(el,1)}>+</Button>
                    <Heading fontSize={15}> /pc{el.price}</Heading>
                    <Heading mx={15} fontSize={15}> Rs{Number(el.qty)*Number(el.price)}</Heading>
                    <Button onClick={()=>handledelete(el)}>Delete</Button>
                </Flex>
            )
        })}
        <Heading>Total:{sum}</Heading>
        <Button bg={"grey"} disabled={sum===0} onClick={()=>navigate("/order")}>Buy Now</Button>
    </Stack>
  )
}

export default Cart