import "./style/login.css";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import loginBg from "../../assets/Login.jpg";
import Navbar from "../Home/Navbar/Navbar";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box>
      <Navbar />
      <Flex
        w={{ base: "95vw", md: "90vw" }}
        mx="auto"
        alignItems="center"
        justify="space-around"
        gap="5vw"
        flexDir={{ base: "column", lg: "row" }}
        paddingBottom={{ base: "5vh", lg: "0vh" }}
      >
        <Box flex="1">
          <Image src={loginBg} alt="Login"></Image>
        </Box>
        <Box flex="1" px={{ base: "10px", md: "0px" }} width={{ base: "full" }}>
          <Heading
            textAlign={"center"}
            fontSize={{ base: "20px", md: "25px", lg: "30px" }}
            paddingBottom={{ base: "6vh" }}
          >
            Login
          </Heading>
          <form id="loginform">
            <label className="loginLabel" htmlFor="email">
              Email
            </label>
            <input
              className="loginInput"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <label className="loginLabel" htmlFor="email">
              Password
            </label>
            <input
              className="loginInput"
              type="password"
              name="pas"
              placeholder="Enter your password"
            />
            <input className="loginButton" type="submit" value="Submit" />
          </form>
          <Box
            style={{ fontSize: "14px", paddingTop: "10px" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Text>
              Not registered?{" "}
              <Link style={{ fontWeight: 600, color: "#59e4a0" }}>
                Click Here
              </Link>
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
