import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import desktopBanner from "../../../assets/desktopbanner.jpg";
import { Player } from "@lottiefiles/react-lottie-player";
import buttonAnimation from "/public/button";
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <Flex justifyContent="space-around" alignItems="center" w="90vw" mx="auto">
      {/* Banner content */}
      <Flex
        flexDir="column"
        justifyContent="center"
        gap="5vh"
        flex="30%"
        textAlign="center"
        display={{ base: "none", lg: "block" }}
      >
        {/* Banner text */}
        <Heading
          fontFamily="Josefin Sans, sans-serif"
          fontSize={{ md: "60px" }}
          zIndex="10"
        >
          Your <span style={{ color: "#59e4a8" }}>Success</span> Is <br />
          One Step Away
        </Heading>

        {/* Banner button */}
        <Button variant="none" w="200px" p="0px" mx="auto">
          <NavLink>
            <Box>
              <Player
                style={{
                  height: "200px",
                  width: "200xp",
                }}
                src={buttonAnimation}
                autoplay="true"
                loop={true}
              />
            </Box>
          </NavLink>
        </Button>
      </Flex>
      <Box flex="70%">
        <Image src={desktopBanner} alt="banner" />
      </Box>
    </Flex>
  );
};

export default Banner;
