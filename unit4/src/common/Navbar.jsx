import { AddIcon, PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FoundationIcon from "@mui/icons-material/Foundation";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
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
import React, { useContext, useState } from "react";
import { Appcontext } from "../context/Appcontext";
import Loginsignup from "../component/Loginsignup";
import Cart from "../component/Cart";
let item = [];

function Navbar() {
  let { isauth, handleauth, handlelogout } = useContext(Appcontext);
  const [isShown, setIsShown] = useState({ status: false, id: "" });

  const [cartview, setCartview] = useState(false);

  const handlecartview = () => {
    setCartview(!cartview);
  };
  const { handledata } = useContext(Appcontext);
  return (
    <Box>
      <Flex
        px="10%"
        color={"white"}
        bg="blackAlpha.800"
        fontFamily={"sans-serif"}
      >
        <Box>
          <Button
            leftIcon={<LocalShippingIcon />}
            variant="ghost"
            fontSize={"12px"}
          >
            Free Shipping
          </Button>
        </Box>
        <Box>
          <Button
            leftIcon={<FoundationIcon />}
            variant="ghost"
            fontSize={"12px"}
          >
            Click & Collect
          </Button>
        </Box>
        <Box>
          <Button
            leftIcon={<FoundationIcon />}
            variant="ghost"
            fontSize={"12px"}
          >
            Return To Store
          </Button>
        </Box>
        <Spacer />
        <Box>
          <Button variant="ghost" fontSize={"12px"}>
            Download Our Apps
          </Button>
        </Box>
        <Box>
          <Button variant="ghost" fontSize={"12px"}>
            Store Locator
          </Button>
        </Box>
        <Box>
          <Button variant="ghost" fontSize={"12px"}>
            Help
          </Button>
        </Box>
      </Flex>

      {/* /// */}

      <Flex px={"10%"}>
        <Flex border="0px solid blue">
          <Flex>
            <Image
              w={60}
              src="https://vrchennai.com/UploadFile/Storeimage/Lifestyle-big.png"
            ></Image>
          </Flex>
          <Flex alignItems="center" fontSize={"xl"}>
            <Link to={"/women"}>
              <Button
                variant="ghost"
                w={"100%"}
                onMouseEnter={() =>
                  setIsShown({ ...isShown, status: true, id: "1" })
                }
              >
                Women
              </Button>
            </Link>

            <Link to={"/men"}>
              <Button
                variant="ghost"
                onMouseEnter={() =>
                  setIsShown({ ...isShown, status: true, id: "2" })
                }
              >
                Men
              </Button>
            </Link>

            <Link to={"/kids"}>
              <Button
                variant="ghost"
                onMouseEnter={() =>
                  setIsShown({ ...isShown, status: true, id: "3" })
                }
              >
                Kids
              </Button>
            </Link>

            <Link to={"/shoes&bags"}>
              <Button
                variant="ghost"
                onMouseEnter={() =>
                  setIsShown({ ...isShown, status: true, id: "4" })
                }
              >
                Shoes & Bags
              </Button>
            </Link>

            <Link to={"/beauty"}>
              <Button
                variant="ghost"
                onMouseEnter={() =>
                  setIsShown({ ...isShown, status: true, id: "5" })
                }
              >
                Beauty
              </Button>
            </Link>
          </Flex>

          <Flex flexGrow="1" px="5px" alignItems="center">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                variant="filled"
                placeholder="What are you looking for?"
                w={350}
              />
            </InputGroup>
          </Flex>
        </Flex>
        <Flex w="30%" border="0px solid blue" alignItems={"center"}>
          <Button
            variant="ghost"
            fontSize={"xl"}
            borderRadius={"0px"}
            borderRight={"1px solid #eef7f4"}
          >
            More
          </Button>

          <Loginsignup isauth={isauth} />

          <Button variant="ghost" padding={"15px"} fontSize={"xl"}>
            <FavoriteBorderIcon />
          </Button>
          <Button
            variant="ghost"
            padding={"15px"}
            fontSize={"xl"}
            onClick={handlecartview}
          >
            <ShoppingCartIcon />
          </Button>
        </Flex>
      </Flex>

      {isauth.status && isShown.status && isShown.id === "1" ? (
        <Box
          w={"100%"}
          h={120}
          px="200px"
          bg={"#eef7f4"}
          onMouseLeave={() =>
            setIsShown({ ...isShown, status: false, id: null })
          }
          zIndex="5"
          position="absolute"
          border={"0px solid red"}
        >
          <Flex direction="column" alignItems="flex-start">
            <Link to="/products">
              <Button variant="ghost" onClick={() => handledata("womenshirt")}>
                Shirt
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" onClick={() => handledata("womentshirt")}>
                Tshirt
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" onClick={() => handledata("womenjeans")}>
                Jeans
              </Button>
            </Link>
          </Flex>
        </Box>
      ) : (
        <Box></Box>
      )}
      {isauth.status && isShown.status && isShown.id === "2" ? (
        <Box
          w={"100%"}
          h={120}
          px="290px"
          bg={"#eef7f4"}
          onMouseLeave={() =>
            setIsShown({ ...isShown, status: false, id: null })
          }
          zIndex="5"
          position="absolute"
          border={"0px solid red"}
        >
          <Flex direction="column" alignItems="flex-start">
            <Link to="/products">
              <Button variant="ghost" onClick={() => handledata("menshirt")}>
                Shirt
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" onClick={() => handledata("mentshirt")}>
                Tshirt
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" onClick={() => handledata("menjeans")}>
                Jeans
              </Button>
            </Link>
          </Flex>
        </Box>
      ) : (
        <Box></Box>
      )}
      {isauth.status && isShown.status && isShown.id === "3" ? (
        <Box
          w={"100%"}
          h={120}
          px="355px"
          bg={"#eef7f4"}
          onMouseLeave={() =>
            setIsShown({ ...isShown, status: false, id: null })
          }
          zIndex="5"
          position="absolute"
          border={"0px solid red"}
        >
          <Flex direction="column" alignItems="flex-start">
            <Link to="/products">
              <Button variant="ghost" onClick={() => handledata("kidshirt")}>
                Shirt
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" onClick={() => handledata("kidtshirt")}>
                Tshirt
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" onClick={() => handledata("kidjeans")}>
                Jeans
              </Button>
            </Link>
          </Flex>
        </Box>
      ) : (
        <Box></Box>
      )}
      {isauth.status && isShown.status && isShown.id === "4" ? (
        <Box
          w={"100%"}
          h={120}
          px="425px"
          bg={"#eef7f4"}
          onMouseLeave={() =>
            setIsShown({ ...isShown, status: false, id: null })
          }
          zIndex="5"
          position="absolute"
          border={"0px solid red"}
        >
          <Flex direction="column" alignItems="flex-start">
            <Link to="/products">
              <Button variant="ghost" onClick={() => handledata("sports")}>
                Sports
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" onClick={() => handledata("casual")}>
                casual
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" onClick={() => handledata("slipper")}>
                Slipper
              </Button>
            </Link>
          </Flex>
        </Box>
      ) : (
        <Box></Box>
      )}
      {isauth.status && isShown.status && isShown.id === "5" ? (
        <Box
          w={"100%"}
          h={120}
          px="565px"
          bg={"#eef7f4"}
          onMouseLeave={() =>
            setIsShown({ ...isShown, status: false, id: null })
          }
          zIndex="5"
          position="absolute"
          border={"0px solid red"}
        >
          <Flex direction="column" alignItems="flex-start">
            <Link to="/products">
              <Button variant="ghost" onClick={() => handledata("facewash")}>
                Facewash
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" onClick={() => handledata("haircare")}>
                Haircare
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" onClick={() => handledata("cream")}>
                Cream
              </Button>
            </Link>
          </Flex>
        </Box>
      ) : (
        <Box></Box>
      )}

      {isauth.status && cartview ? (
        <Box
          w={"400px"}
          h={600}
          bg={"#eef7f4"}
          zIndex="5"
          position="absolute"
          right={1}
          overflow="scroll"
        >
          <Cart />
        </Box>
      ) : (
        ""
      )}

      <Box
        h="10"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#f9a61a"
      >
        DEAL OF THE DAY : Flat 50% off + Extra 10% off. Use Code: SALE10
      </Box>
    </Box>
  );
}

export default Navbar;
