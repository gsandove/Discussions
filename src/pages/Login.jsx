import { Box, Heading, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

function Login() {
  const [name, setName] = useState("");
  const [userGmail, setUserGmail] = useState("");

  const handleInput = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    let user = {
      username: name,
      email: userGmail
    }
  };

  const handleInput2 = (event) => {
    setUserGmail(event.target.value);
  };

  return (
    <Box>
      <Box maxW="450'px" margin="auto" padding="100px" bg={"white"}>
        <Heading mb={"20px"}>Welcome to chabelos</Heading>
        <FormControl>
          <FormLabel></FormLabel>
          <Input
            value={name}
            onChange={handleInput}
            placeholder="Enter your username"
            type="email"
          />
          <FormLabel></FormLabel>
          <Input
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
          >
            Enter
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}
export default Login;
