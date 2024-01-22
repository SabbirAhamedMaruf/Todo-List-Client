import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Layout/Root";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider  >
      <RouterProvider router={routes}>
        <Root />
      </RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
);
