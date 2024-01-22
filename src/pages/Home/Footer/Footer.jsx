import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      justify="space-around"
      alignItems="center"
      h={{ base: "auto", md: "40vh" }}
      bg="#59e4a8"
      textAlign="center"
    >
      <Box>
        <Button
          variant="none"
          fontSize={{ base: "18px", md: "25px", lg: "40px" }}
          fontWeight="bold"
        >
          Todolist
        </Button>
        <Text fontSize={{ base: "12px", md: "14px", lg: "15px" }}>
          DevsNest LLC
        </Text>
        <Text fontSize={{ base: "12px", md: "14px", lg: "15px" }}>
          Q9F7+M37, Ring Rd, Dhaka
        </Text>
      </Box>
      <List textAlign={{ base: "center", md: "Left" }}>
        <Heading size="16px">Services</Heading>

        <Flex flexDirection={{ base: "row", md: "column" }} gap="5px">
          <ListItem fontSize={{ base: "12px", md: "14px", lg: "15px" }}>
            <Link>Branding</Link>
          </ListItem>
          <ListItem fontSize={{ base: "12px", md: "14px", lg: "15px" }}>
            <Link>Design</Link>
          </ListItem>
          <ListItem fontSize={{ base: "12px", md: "14px", lg: "15px" }}>
            <Link>Marketing</Link>
          </ListItem>
          <ListItem fontSize={{ base: "12px", md: "14px", lg: "15px" }}>
            <Link>Advertisement</Link>
          </ListItem>
        </Flex>
      </List>

      <List textAlign={{ base: "center", md: "Left" }}>
        <Heading size="16px">Company</Heading>

        <Flex flexDirection={{ base: "row", md: "column" }} gap="5px">
          <ListItem fontSize={{ base: "12px", md: "14px", lg: "15px" }}>
            <Link>Privacy Policy</Link>
          </ListItem>
          <ListItem fontSize={{ base: "12px", md: "14px", lg: "15px" }}>
            <Link>Terms of use</Link>
          </ListItem>
          <ListItem fontSize={{ base: "12px", md: "14px", lg: "15px" }}>
            <Link>Cookie Policy</Link>
          </ListItem>
          <ListItem fontSize={{ base: "12px", md: "14px", lg: "15px" }}>
            <Link>Legal</Link>
          </ListItem>
        </Flex>
      </List>

      <List
        textAlign={{ base: "center", md: "Left" }}
        paddingBottom={{ base: "27px", lg: "25px" }}
      >
        <Heading size="16px">Services</Heading>

        <Flex flexDirection={"column"} gap="5px">
          <Box>
            <ListItem fontSize={{ base: "12px", md: "14px", lg: "15px" }}>
              About Us
            </ListItem>
            <ListItem fontSize={{ base: "12px", md: "14px", lg: "15px" }}>
              Contact
            </ListItem>
          </Box>
          <HStack justify="left" gap="10px">
            <Link>
              <FaFacebookSquare />
            </Link>
            <Link>
              <FaGithub />
            </Link>
            <Link>
              <FaLinkedin />
            </Link>
            <Link>
              <FaGlobeAsia />
            </Link>
          </HStack>
        </Flex>
      </List>
    </Flex>
  );
};

export default Footer;
