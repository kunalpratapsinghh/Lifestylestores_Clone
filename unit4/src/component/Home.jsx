import { AddIcon, PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Spacer,
  StackDivider,
  TagLeftIcon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Box maxW={"inherit"} border="0px solid red">
    <Navbar/>


      {/* <VStack */}
      <Box  mt={100}>
        <VStack
          divider={<StackDivider borderColor="gray.500" />}
          spacing={50}
          align="stretch"
        >
       
         
        </VStack>
        <Box>
        <Footer />
        </Box>
      </Box>
     
    </Box>
  );
}

export default Home;
