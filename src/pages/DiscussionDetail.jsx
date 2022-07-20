import { Box, Container, Heading, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getAllDiscussions, getCurrentUser } from "../components/Storage";
import Reply from "../components/Reply";
function DiscussionDetail() {
  const { idDiscussion } = useParams();
  const [replies, setReplies] = useState([]);
  const [commentReply, setCommentReply] = useState("");
  const handleCommentReply = (event) => {
    setCommentReply(event.target.value);
  };
  const [discussion, setDiscussion] = useState(
    getAllDiscussions().find((disc) => disc.id == idDiscussion)
  );
  const addReply = () => {
    let newReply = {
      id: replies.length + 1,
      author: getCurrentUser().username,
      comment: commentReply,
      created_at: new Date().toLocaleDateString(),
      replies: [],
    };
    const newState = [newReply, ...replies];
    console.log(newState);
    setReplies(newState);
  };
  return (
    <Container
      width="100%"
      maxWidth="900px"
      padding-inline-end="1rem"
      background="white"
      margin="0px auto"
      padding="1em"
    >
      <Box justifyContent="center">
        <Heading textAlign="center">{discussion.title}</Heading>
        <span fontSize="15px" m="10px 625px 0px 0px">
          {discussion.author} - {discussion.created_at}
        </span>
        <br />
        <br />
        <p display="block" fontSize="15px" m="15px 0px 15px 0px">
          {discussion.body}
        </p>
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
        h="7rem"
        onChange={handleCommentReply}
      ></Textarea>
      <Button
        colorScheme="orange"
        m="10px 625px 0px 0px"
        w="100%"
        onClick={addReply}
      >
        REPLY
      </Button>
      <Box>
        {replies.map((reply) => (
          <Reply key={reply.id} reply={reply} />
        ))}
      </Box>
    </Container>
  );
}

export default DiscussionDetail;
