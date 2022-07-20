import { Box, Divider, ListItem } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Discussion({ discussion }) {
  return (
    <Box>
      <ListItem
        listStyleType="none"
        width="900px"
        height="5rem"
        backgroundColor="white"
        paddingLeft="2rem"
        paddingTop="1rem"
        borderRadius="5px"
      >
        <Link to={"/Discussions/" + discussion.id}>{discussion.title}</Link>
        <Box fontSize="0.85rem" color="rgb(148, 142, 133)">
          <span>by {discussion.author}</span>
          <span>{discussion.created_at}</span>
          <span> | {discussion.replies.length} comments</span>
        </Box>
      </ListItem>
      <Divider orientation="horizontal" />
    </Box>
  );
}

export default Discussion;
