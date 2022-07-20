import { Box, UnorderedList } from "@chakra-ui/react";
import React, { useState } from "react";
import Discussion from "../components/Discussion";
import { getAllDiscussions } from "../components/Storage";
import ModalDiscussion from "../components/ModalDiscussion";
import { DiscussionsContext } from "../Context/DiscussionsContext";

function Discussions() {
  const [discussions, setDiscussions] = useState(getAllDiscussions());
  return (
    <DiscussionsContext.Provider value={{ discussions, setDiscussions }}>
      <Box>
        <UnorderedList
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          {discussions.map((discussion) => (
            <Discussion key={discussion.id} discussion={discussion} />
          ))}

          {/* {getAllDiscussions().map((discussion) => (
          <Discussion key={discussion.id} discussion={discussion} />
        ))} */}
        </UnorderedList>
        <ModalDiscussion />
      </Box>
    </DiscussionsContext.Provider>
  );
}

export default Discussions;

/*
export function logOut(){

  return(
    onClick={handleLogOut}
  );

}
*/
