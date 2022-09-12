import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

function Women() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Box maxW={"inherit"} border="0px solid red" position="relative">
      <Navbar  />
     
      {/* <VStack */}
      <Box mt={100} position="absolute">
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
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-1-18July2022.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-2-18July2022.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-3-18July2022.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-4-18July2022.jpg"
                    alt="fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-Women-18July2022.jpg"
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
                  <Image src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modularblock-oneBytwo1A-Women-22June2022.jpg"></Image>
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
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-1-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Kurtas</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-12-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Dresses</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-2-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Ethnic sets</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-3-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Bottom Wear</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-4-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Joggers & Tracks</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-5-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Sleep Wear</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-6-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Lingerie</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-7-Desktop-Women-23July2022.jpg"></Image>
                      <Text textAlign={"center"}>Plus Size</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-8-Desktop-Women-17May2022.jpg"></Image>
                      <Text textAlign={"center"}>Watches</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-10-Desktop-Women-17May2022.gif"></Image>
                      <Text textAlign={"center"}>Shoes & Bags</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-11-Desktop-Women-17May2022.jpg"></Image>
                      <Text textAlign={"center"}>Beauty</Text>
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
                      <Text textAlign={"center"}>Up to 50% Off</Text>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-2-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Up to 50% Off</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-3-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Up to 50% Off</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-4-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Up to 50% Off</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-5-Desktop-Women-06July2022.jpg"></Image>
                      <Text textAlign={"center"}>Up to 50% Off</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-6-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Tops & Tees</Text>
                    </GridItem>{" "}



                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-7-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Up to 50% Off</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-8-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Up to 50% Off</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-9-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Up to 50% Off</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-10-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Up to 50% Off</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-10-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Up to 50% Off</Text>
                    </GridItem>{" "}
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-Women-23June2022.jpg"></Image>
                      <Text textAlign={"center"}>Up to 50% Off</Text>
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
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-B-Women-24June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-C-Women-24June2022.jpg"></Image>
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
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Women-modblock-oneBythree-E-24June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Women-modblock-oneBythree-F-24June2022.jpg"></Image>
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
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-2-Women-Desktop-22June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-3-Women-Desktop-22June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-4-Women-Desktop-22June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-6-Women-Desktop-23June2022.jpg"></Image>
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
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-B-Women-24June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-C-Women-24June2022.jpg"></Image>
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
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-C-Women-24June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-A-Women-24June2022.jpg"></Image>
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
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-B-24June2022.jpg"></Image>
                    </GridItem>
                    <GridItem>
                      <Image src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-C-24June2022.jpg"></Image>
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
                      <Image src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-5modblock-oneBytwo1-D-Women-07March2022.jpg"></Image>
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

export default Women;
