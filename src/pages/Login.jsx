import { Box, Heading, Input, Button, Container } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormControl, FormLabel } from "@chakra-ui/react";
import { setUser } from "../components/Storage";

function Login() {
  const [name, setName] = useState("");
  const [userGmail, setUserGmail] = useState("");
  const navigate = useNavigate();

  const handleInput = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    let user = {
      username: name,
      email: userGmail,
    };
    setUser(user);
    navigate("/discussions", { replace: true });
  };

  const handleInput2 = (event) => {
    setUserGmail(event.target.value);
  };

  return (
    <Container my={"auto"} w={"500px"} bg={"white"} padding={"32px 16px"}>
      <Box
        maxW="450'px"
        margin="auto"
        padding="100px"
        bg={"white"}
        textAlign={"center"}
      >
        <Heading mb={"20px"} textAlign={"center"}>
          Welcome to chabelos
        </Heading>
        <FormControl>
          <Input
            value={name}
            onChange={handleInput}
            placeholder="Enter your username"
            type="email"
          />

          <Input
            marginY={"20px"}
            value={userGmail}
            onChange={handleInput2}
            placeholder="Enter your email"
            type="email"
          />
          <Button
            onClick={handleSubmit}
            marginTop={"15px"}
            align="center"
            colorScheme="red"
            w={"100%"}
          >
            Enter
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}
export default Login;
