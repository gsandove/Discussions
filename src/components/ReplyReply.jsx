import React from "react";
import { Box, Heading, Textarea, Button } from "@chakra-ui/react";

function ReplyReply({ reply }) {
  return (
    <Box w="100%" h="2rem" marginTop="1rem" padding="3rem">
      <span>
        {reply.author} - {reply.created_at}
      </span>
      <br />
      <Heading fontSize="1rem" color="rgb(57, 80, 103)" marginBottom="1rem">
        {reply.comment}
      </Heading>
    </Box>
  );
}

export default ReplyReply;
