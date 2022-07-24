import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import play from "../image/play.png";
import app from "../image/app.png";
import { EmailIcon, PhoneIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box maxW={"inherit"} border="0px solid red" px={"10%"}>
      <Box>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem>
            <Heading fontSize={25}>Subscribe to our awesome emails.</Heading>
            <Text color={"lightGrey"}>
              Get our latest offers and news straight in your inbox.
            </Text>
            <Flex mt={8}>
              <Input
                w={80}
                variant="filled"
                bg="#f7f8f7"
                placeholder="Please Enter an Email address"
              ></Input>
              <Button
                bg={"black"}
                color="white"
                variant="solid"
                borderRadius="0"
                onClick={()=>alert("Subscribed to our offers")}
              >
                Subscribe
              </Button>
            </Flex>
          </GridItem>
          <GridItem px={12}>
            <Heading fontSize={25}>Download our apps</Heading>
            <Text color={"lightGrey"}>
              Shop our products and offers on-the-go.
            </Text>
            <Grid mt={8} templateColumns="repeat(5, 1fr)" alignItems="center">
              <GridItem>
                <Image h={38} w={110} src={app}></Image>
              </GridItem>
              <GridItem>
                <Image h={38} w={110} src={play}></Image>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Box>


{/* /////// */}
      <Box>
        <CDBFooter className="shadow">
          <CDBBox
            display="flex"
            flex="column"
            className="mx-auto py-5"
            style={{ width: "90%" }}
          >
            <CDBBox
              display="flex"
              justifyContent="between"
              className="flex-wrap">
            
              <CDBBox>
                <Text className="h5 mb-4" style={{ fontWeight: "600" }}>
                  Women
                </Text>
                <CDBBox
                  flex="column"
                  style={{ cursor: "pointer", padding: "0" }}
                >
                  <Link to="/women"> <CDBFooterLink>shirt</CDBFooterLink></Link>
                  <Link to="/women"> <CDBFooterLink>Tshirt</CDBFooterLink></Link>
                  <Link to="/women"> <CDBFooterLink>Jeans</CDBFooterLink></Link>
                  
                </CDBBox>
              </CDBBox>
              <CDBBox>
                <Text className="h5 mb-4" style={{ fontWeight: "600" }}>
                  Men
                </Text>
                <CDBBox
                  flex="column"
                  style={{ cursor: "pointer", padding: "0" }}
                >
                  <Link to="/men"> <CDBFooterLink>shirt</CDBFooterLink></Link>
                  <Link to="/men"> <CDBFooterLink>Tshirt</CDBFooterLink></Link>
                  <Link to="/men"> <CDBFooterLink>Jeans</CDBFooterLink></Link>
                </CDBBox>
              </CDBBox>

              <CDBBox>
                <Text className="h5 mb-4" style={{ fontWeight: "600" }}>
                  Kids
                </Text>
                <CDBBox
                  flex="column"
                  style={{ cursor: "pointer", padding: "0" }}
                >
                  <Link to="/kids"> <CDBFooterLink>shirt</CDBFooterLink></Link>
                  <Link to="/kids"> <CDBFooterLink>Tshirt</CDBFooterLink></Link>
                  <Link to="/kids"> <CDBFooterLink>Jeans</CDBFooterLink></Link>
                </CDBBox>
              </CDBBox><CDBBox>
                <Text className="h5 mb-4" style={{ fontWeight: "600" }}>
                  Care
                </Text>
                <CDBBox
                  flex="column"
                  style={{ cursor: "pointer", padding: "0" }}
                >
                  <Link to="/beauty"> <CDBFooterLink>Hair</CDBFooterLink></Link>
                  <Link to="/beauty"> <CDBFooterLink>Face</CDBFooterLink></Link>
                  <Link to="/shoes&bags"> <CDBFooterLink>Shoes</CDBFooterLink></Link>
                </CDBBox>
              </CDBBox>              
              <CDBBox>
                <Text className="h5 mb-4" style={{ fontWeight: "600" }}>
                  Help
                </Text>
                <CDBBox
                  flex="column"
                  style={{ cursor: "pointer", padding: "0" }}
                >
                 <CDBFooterLink >Support</CDBFooterLink>
                  <CDBFooterLink >Sign Up</CDBFooterLink>
                  <CDBFooterLink >Sign In</CDBFooterLink>
                </CDBBox>
              </CDBBox>
              
            </CDBBox>
            <Box border={"0px solid blue"} mt={15}>
                <Grid  gridTemplateColumns={'5fr 1fr'} >
                    <GridItem >
                        <Grid templateColumns='repeat(4, 1fr)' gap={3} >
                            <GridItem>
                                <Grid templateColumns='50px 1fr' gap={2} alignItems="center">
                                    <GridItem>
                                    <PhoneIcon w={"45px"} h={"45px"}/>
                                    </GridItem>
                                    <GridItem>
                                        <Text>Talk to us</Text>
                                        <Text>1800-123-1555</Text>
                                    </GridItem>
                                </Grid>
                            </GridItem>
                            <GridItem>
                                <Grid templateColumns='50px 1fr' gap={4} alignItems="center">
                                    <GridItem>
                                    <QuestionOutlineIcon w={"45px"} h={"45px"}/>
                                    </GridItem>
                                    <GridItem>
                                        <Text>Helpcenter</Text>
                                        <Text>help.lifestylestores.com</Text>
                                    </GridItem>
                                </Grid>
                            </GridItem>
                            <GridItem>
                                <Grid templateColumns='50px 1fr' gap={4} alignItems="center">
                                    <GridItem>
                                    <EmailIcon w={"45px"} h={"45px"}/>
                                    </GridItem>
                                    <GridItem>
                                        <Text>Write to us</Text>
                                        <Text>help@lifestylestores.com</Text>
                                    </GridItem>
                                </Grid>
                            </GridItem>
                           
                        </Grid>
                    </GridItem>


                    <GridItem>
                <CDBBox display="flex" justifyContent={"end"} className="mt-2">
                  <CDBBtn flat color="dark">
                    <CDBIcon fab icon="facebook-f" />
                  </CDBBtn>
                  <CDBBtn flat color="dark" className="mx-3">
                    <CDBIcon fab icon="twitter" />
                  </CDBBtn>
                  <CDBBtn flat color="dark" className="p-2">
                    <CDBIcon fab icon="instagram" />
                  </CDBBtn>
                </CDBBox></GridItem>
                </Grid>
            </Box>
            <Text className="text-center mt-5">
              &copy; 2022 RNA Intellectual Property Limited. Terms & Conditions
              - Privacy Policy
            </Text>
          </CDBBox>
        </CDBFooter>
      </Box>
    </Box>
  );
}

export default Footer;
