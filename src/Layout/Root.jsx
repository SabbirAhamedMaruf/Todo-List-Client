import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <Box fontSize={{ base: "13px", md: "15px", lg: "17px" }}>
      <Outlet />
    </Box>
  );
};

export default Root;
