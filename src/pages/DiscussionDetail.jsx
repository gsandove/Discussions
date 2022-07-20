import { Box, Container, Heading, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getAllDiscussions } from "../components/Storage";
function DiscussionDetail() {
  const { idDiscussion } = useParams();
  const [discussion, setDiscussion] = useState(
    getAllDiscussions().find((disc) => disc.id == idDiscussion)
  );
  console.log(discussion);
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
        <Heading>{discussion.title}</Heading>
        <Heading fontSize="15px" m="10px 625px 0px 0px">
          {discussion.author} - {discussion.created_at}
        </Heading>
        <Heading display="block" fontSize="15px" m="15px 0px 15px 0px">
          {discussion.body}
        </Heading>
        <Heading width="100%">
          -----------------------------------------------------------
        </Heading>
      </Box>
      <Textarea
        placeholder="Write Reply"
        background="none"
        border="1px solid rgb(234, 234, 234)"
        border-radius="0.25rem"
        box-sizing="border-box"
        display="block"
        font-size="1rem"
        padding="0.5rem"
        color="rgb(52, 73, 94)"
        width="100%"
        resize="none"
        h="10rem"
      ></Textarea>
      <Button colorScheme="orange" m="10px 625px 0px 0px" w="100%">
        REPLY
      </Button>
    </Container>
  );
}

export default DiscussionDetail;
