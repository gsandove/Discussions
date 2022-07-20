import React, { useState } from "react";
import { Box, Heading, Textarea, Button } from "@chakra-ui/react";
import { getCurrentUser } from "./Storage";
import ReplyReply from "./ReplyReply";

function Reply({ reply }) {
  const [rreplies, setRReplies] = useState([]);
  const [commentRreply, setCommentRreply] = useState("");
  const handleCommentReply = (event) => {
    setCommentRreply(event.target.value);
  };
  const addRReply = () => {
    let newRreply = {
      id: rreplies.length + 1,
      author: getCurrentUser().username,
      created_at: new Date().toLocaleDateString(),
      comment: commentRreply,
    };
    let newRrplies = [newRreply, ...rreplies];
    setRReplies(newRrplies);
  };
  return (
    <Box w="100%" marginTop="1rem">
      <span>
        {reply.author} - {reply.created_at}
      </span>
      <br />
      <Heading fontSize="1.5rem" color="rgb(57, 80, 103)" marginBottom="1rem">
        {reply.comment}
      </Heading>
      <Textarea
        name=""
        id=""
        cols="30"
        rows="10"
        width="100%"
        height="6rem"
        placeholder="Write Reply"
        onChange={handleCommentReply}
      ></Textarea>
      <Button
        marginTop="1rem"
        colorScheme="orange"
        width="10rem"
        onClick={addRReply}
      >
        Reply
      </Button>
      <Box>
        {rreplies.map((rreply) => (
          <ReplyReply key={rreply.id} reply={rreply} />
        ))}
      </Box>
    </Box>
  );
}

export default Reply;
