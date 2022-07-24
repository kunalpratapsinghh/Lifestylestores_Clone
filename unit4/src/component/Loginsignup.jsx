import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Appcontext } from '../context/Appcontext';

function Loginsignup({isauth}) {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text,setText]=useState({email:"",password:""})
  let {handleauth,handlelogout}=useContext(Appcontext);
  const handlechange=(e)=>{
    const {name,value}=e.target
    setText({...text,[name]:value})
  }
 const handleclick=()=>{
  axios.post("https://reqres.in/api/login",text)
  .then(res=>{
  handleauth(res.data.token)
  onClose()
          
  })
  .catch(err=>alert("Pease Enter Valid Details"))
    
 }
  return (
    <>
   {!isauth.status? <Button variant={"ghost"} fontSize="xl" onClick={onOpen}>Login / Signup</Button>:<Button variant={"ghost"} fontSize="xl" onClick={handlelogout}>Logout</Button>}

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login/Signup</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
         <Input name="email" onChange={(e)=>handlechange(e)} placeholder='Email Address'/>
         <Input name="password" onChange={(e)=>handlechange(e)} placeholder='Password'/>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost' onClick={handleclick}>Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}

export default Loginsignup