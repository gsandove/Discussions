import { Box, Image, Link } from "@chakra-ui/react";
import React from "react";

function Member({ urlImage, name, linkPage }) {
  return (
    <Box width="15rem" height="15rem" margin="1rem">
      <Image borderRadius="full" boxSize="15rem" src={urlImage} alt={name} />
      <Link href={linkPage} isExternal>
        @{name}
      </Link>
    </Box>
  );
}

export default Member;
