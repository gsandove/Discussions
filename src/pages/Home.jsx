import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import Member from "../components/Member";

function Home() {
  return (
    <Box
      textAlign="center"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Heading>
        <h2>Team Chabelos Bootcamp X</h2>
      </Heading>
      <Box
        display="flex"
        height="25rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <Member
          urlImage="https://ca.slack-edge.com/T03MZDDF40N-U03NXP1U4G0-6ed49aa75022-512"
          name="George Sandoval"
          linkPage="https://github.com/georgeSandovalEstela"
        />
        <Member
          urlImage="https://ca.slack-edge.com/T03MZDDF40N-U03NACZT7E0-6404e58b01b6-512"
          name="Vladimir Rodriguez"
          linkPage="https://github.com/vladi02"
        />
        <Member
          urlImage="https://ca.slack-edge.com/T03MZDDF40N-U03NXP24U4Q-27983a45a347-512"
          name="Ronaldo Delgado"
          linkPage="https://github.com/Ronaldoa1698"
        />
      </Box>
    </Box>
  );
}

export default Home;
