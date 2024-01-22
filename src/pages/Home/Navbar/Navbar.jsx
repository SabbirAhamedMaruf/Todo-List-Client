import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import "../../../index.css";

const Navbar = () => {
  return (
    <Flex alignItems="center" px="10px" py="2px">
      {/* mobile menu */}
      <Menu>
        <MenuButton
          as={Button}
          size="sm"
          variant="ghost"
          display={{ base: "block", md: "none" }}
          fontSize={{ base: "14px" }}
        >
          <HiMenu />
        </MenuButton>

        <MenuList>
          <MenuItem _hover={{ bg: "#59e4a8", color: "white" }} command="⌘T">
            <NavLink to="/">Home</NavLink>
          </MenuItem>
          <MenuItem _hover={{ bg: "#59e4a8", color: "white" }} command="⌘N">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </MenuItem>
        </MenuList>
      </Menu>

      {/* desktop menu */}
      <Box display={{ base: "none", md: "block" }}>
        {/* Nav routes */}
        <List display="flex" id="navroutes" gap="10px">
          <ListItem>
            <NavLink to="/">Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </ListItem>
        </List>
      </Box>
      <Spacer />
      <Heading
        size={{ base: "sm", md: "md", lg: "lg" }}
        color="#59e4a8"
        fontFamily='Josefin Sans", sans-serif'
      >
        <NavLink to="/">Todolist</NavLink>
      </Heading>
      <Spacer />
      <HStack>
        {/* User info */}

        <Link to="/login">
          <Button
            size={{ base: "xs", md: "sm", lg: "md" }}
            bg="#59e4a8"
            color="white"
            rounded="full"
          >
            Login
          </Button>
        </Link>

        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov"></Avatar>
      </HStack>
    </Flex>
  );
};

export default Navbar;
