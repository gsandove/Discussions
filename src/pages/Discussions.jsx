import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import Discussion from "../components/Discussion";
import { getAllDiscussions } from "../components/Storage";

function Discussions() {
  return (
    <Box>
      <UnorderedList display="flex" alignItems="center" flexDirection="column">
        {getAllDiscussions().map((discussion) => (
          <Discussion key={discussion.id} discussion={discussion} />
        ))}
      </UnorderedList>
    </Box>
  );
}

export default Discussions;
