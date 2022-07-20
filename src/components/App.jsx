import { Box, ChakraProvider, Heading, Link, Switch } from "@chakra-ui/react";
import theme from "./Theme";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./Navbar";

import { initLocalStorage } from "./Storage";
import Discussions from "../pages/Discussions";
import DiscussionDetail from "../pages/DiscussionDetail";
import React from "react";

const linkStyles = {
  color: "#ffffffcc",
  transition: "color 0.15s",
  lineHeight: "24px",
  _hover: { color: "#ffffff" },
};

function Discussion() {
  const { id } = useParams();

  return (
    <Box color={"red"} maxW="920px" margin="auto" fontSize={"20px"}>
      Hola {id}
    </Box>
  );
}

function App() {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  initLocalStorage();
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} />
        {/* cosas dinamicas  */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/discussions" element={<Discussions />} />
          <Route
            path="/discussions/:idDiscussion"
            element={<DiscussionDetail />}
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
