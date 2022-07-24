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

function Beauty() {
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
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Beauty_Desktop-1-21July2022.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Beauty_Desktop-2-21July2022.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Beauty_Desktop-3-21July2022.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Beauty_Desktop-4-21July2022B.jpg"
                    alt="fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modularblock-oneBytwo1A-Beauty-22July2022.jpg"
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
                  <Image src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modularblock-oneBytwo1A-Beauty-22July2022.jpg"></Image>
                </Box>
                <Box>
                  <Image src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Beauty-modularblock1-A-22July2022.jpg"></Image>
                </Box>
                <Box>
                  <Image src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-10modblock-oneBythree-A-Beauty-19July2022.jpg"></Image>
                </Box>
                <Box>
                  <Image src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-5modblock-oneBytwo1-C-beauty-23June2022.jpg"></Image>
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
                  <Heading fontSize={"30px"}>Beauty Essentials</Heading>
                  <Grid
                    fontSize={"xl"}
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(3, 1fr)"
                    gap={3}
                  >
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Beauty-modblock-oneBythree-D-12April2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Beauty-modblock-oneBythree-E-16March2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Beauty-modblock-oneBythree-F-16March2022.jpg"></Image>
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
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-Beauty-12April2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-B-Beauty-16March2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-C-Beauty-16March2022.jpg"></Image>
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
                  <Heading fontSize={"30px"}>Top picks of the season</Heading>
                  <Grid
                    fontSize={"xl"}
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(3, 1fr)"
                    gap={3}
                  >
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Beauty-modularblock-oneBythree-A-16March2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Beauty-modularblock-oneBythree-B-31March2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Beauty-modularblock-oneBythree-C-16March2022.jpg"></Image>
                    </GridItem>
                  </Grid>
                </Box>
                <Box>
                  <Heading fontSize={"30px"}>Luxury Collection</Heading>
                  <Grid
                    fontSize={"xl"}
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(3, 1fr)"
                    gap={3}
                  >
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-A-Beauty-13May2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-B-Beauty-17March2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-C-Beauty-17March2022.jpg"></Image>
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
                  <Heading fontSize={"30px"}>Beauty Trends</Heading>
                  <Grid
                    fontSize={"xl"}
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(3, 1fr)"
                    gap={3}
                  >
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-A-Beauty-17March2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-B-Beauty-17March2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-C-Beauty-17March2022.jpg"></Image>
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

export default Beauty;
