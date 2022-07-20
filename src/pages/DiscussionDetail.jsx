import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Discussions from "./Discussions";
function DiscussionDetail() {
  const { idDiscussion } = useParams();

  return (
    <Container
      width="100%"
      maxWidth="900px"
      padding-inline-end="1rem"
      background="white"
      margin="0px auto"
      padding="1em"
    >
      <Box>
        <Heading>How to build the future today</Heading>
        <Heading fontSize="15px" m="10px 625px 0px 0px">
          How to build the future today
        </Heading>
        <Heading display="block" fontSize="15px" m="15px 0px 15px 0px">
          Some body in the sky
        </Heading>
      </Box>
    </Container>
  );
}

export default DiscussionDetail;
