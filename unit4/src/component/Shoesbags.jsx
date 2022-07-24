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

function Shoesbags() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Box maxW={"inherit"} border="0px solid red">
      <Navbar />

      {/* <VStack */}
      <Box mt={100}>
        <VStack
          divider={<StackDivider borderColor="gray.500" />}
          spacing={50}
          align="stretch"
        >
          <Box maxW={"inherit"} border="0px solid red">
            <Box px={"10%"} mt="10px" mb="50">
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                interval="1000"
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Shoes_Desktop-1-21July2022.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner2-desktop-ShoeandBags-21July2022.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner3-desktop-ShoeandBags-21July2022.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner4-desktop-ShoeandBags-21July2022.jpg"
                    alt="fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-ShoeandBags-21July2022.jpg"
                    alt="fifth slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Box>

            <Box px={"10%"} mt={100}>
              <VStack
                divider={<StackDivider borderColor="gray.500" />}
                spacing={50}
                align="stretch"
              >
                <Box>
                  <Image src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-9modblock-StripBanner2-D-19July2022.gif"></Image>
                </Box>
                <Box>
                  <Image src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-10modblock-oneBythree-A-Women-18July2022.jpg"></Image>
                </Box>
                <Box>
                  <Image src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-oneBythree-A-StripBanner1-18July2022.jpg"></Image>
                </Box>
                <Box>
                  <Image src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-9modblock-StripBanner2-D-19July2022.gif"></Image>
                </Box>
                <Box>
                  <Heading fontSize={"30px"}>Shop By Category</Heading>
                  <Grid
                    fontSize={"xl"}
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(6, 1fr)"
                    gap={4}
                  >
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-9-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-9-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-9-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-9-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-9-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-9-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-9-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-9-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-9-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-9-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-9-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-9-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>
                  </Grid>
                </Box>

                <Box>
                  <Heading fontSize={"30px"}>Top Trending Brands</Heading>
                  <Grid
                    fontSize={"xl"}
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(6, 1fr)"
                    gap={4}
                  >
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>
                  </Grid>
                </Box>

                <Box>
                  <Heading fontSize={"30px"}>Wardrobe Essentials</Heading>
                  <Grid
                    fontSize={"xl"}
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(3, 1fr)"
                    gap={3}
                  >
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-A-Women-24June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-A-Women-24June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-A-Women-24June2022.jpg"></Image>
                    </GridItem>
                  </Grid>
                </Box>
                <Box>
                  <Heading fontSize={"30px"}>Top Picks</Heading>
                  <Grid
                    fontSize={"xl"}
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(3, 1fr)"
                    gap={3}
                  >
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Women-modblock-oneBythree-D-24June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Women-modblock-oneBythree-D-24June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Women-modblock-oneBythree-D-24June2022.jpg"></Image>
                    </GridItem>
                  </Grid>
                </Box>
                <Box>
                  <Heading fontSize={"30px"}>Top Trending Brands</Heading>
                  <Grid
                    fontSize={"xl"}
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={3}
                  >
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-1-Women-Desktop-22June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-1-Women-Desktop-22June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-1-Women-Desktop-22June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-1-Women-Desktop-22June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-1-Women-Desktop-22June2022.jpg"></Image>
                    </GridItem>
                  </Grid>
                </Box>
                <Box>
                  <Heading fontSize={"30px"}>Trending Ethnic Wear</Heading>
                  <Grid
                    fontSize={"xl"}
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(3, 1fr)"
                    gap={3}
                  >
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-Women-24June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-Women-24June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-Women-24June2022.jpg"></Image>
                    </GridItem>
                  </Grid>
                </Box>
                <Box>
                  <Heading fontSize={"30px"}>Essential Range</Heading>
                  <Grid
                    fontSize={"xl"}
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(3, 1fr)"
                    gap={3}
                  >
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-B-Women-24June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-Women-24June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-Women-24June2022.jpg"></Image>
                    </GridItem>
                  </Grid>
                </Box>
                <Box>
                  <Heading fontSize={"30px"}>Wardrobe -Must Haves</Heading>
                  <Grid
                    fontSize={"xl"}
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(3, 1fr)"
                    gap={3}
                  >
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-A-24June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-A-24June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-A-24June2022.jpg"></Image>
                    </GridItem>
                  </Grid>
                </Box>

                <Box>
                  <Heading fontSize={"30px"}>Flash Sale For Today</Heading>
                  <Grid
                    fontSize={"xl"}
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(1, 1fr)"
                    gap={3}
                  >
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock1-A-08July2022.jpg"></Image>
                    </GridItem>
                  </Grid>
                </Box>
                <Box>
                  <Heading fontSize={"30px"}>Best Sellers</Heading>
                  <Grid
                    fontSize={"xl"}
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(2, 1fr)"
                    gap={3}
                  >
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-5modblock-oneBytwo1-C-Women-20May2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-5modblock-oneBytwo1-C-Women-20May2022.jpg"></Image>
                    </GridItem>
                  </Grid>
                </Box>
                <Box>
                  <Heading fontSize={"30px"}>Shop By Department</Heading>
                  <Grid
                    fontSize={"xl"}
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(3, 1fr)"
                    gap={3}
                  >
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-A-Women-04March2022A.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-A-Women-04March2022A.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-A-Women-04March2022A.jpg"></Image>
                    </GridItem>
                  </Grid>
                </Box>
                <Box> </Box>
              </VStack>
            </Box>
          </Box>
        </VStack>
        <Box>
        <Footer />
        </Box>
      </Box>
    </Box>
  );
}

export default Shoesbags;
