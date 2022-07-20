import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { DiscussionsContext } from "../Context/DiscussionsContext";
import { getCurrentUser } from "./Storage";

function ModalDiscussion() {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [titleDiscussion, setTitleDiscussion] = useState("");
  const [bodyDiscussion, setBodyDiscussion] = useState("");
  const handleTitle = (event) => {
    setTitleDiscussion(event.target.value);
  };
  const handleBody = (event) => {
    setBodyDiscussion(event.target.value);
  };

  const addNewDiscussion = (cb, discussions) => {
    let newDiscussion = {
      id: discussions.length + 1,
      author: getCurrentUser().username,
      title: titleDiscussion,
      body: bodyDiscussion,
      created_at: new Date().toLocaleDateString(),
      replies: [],
    };
    const newState = [...discussions, newDiscussion];
    console.log(newState);

    cb(newState);
    onClose();
  };

  return (
    <Box
      textAlign="center"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Button
        position="fixed"
        colorScheme="orange"
        size="lg"
        bottom="2rem"
        right="2rem"
        width="4rem"
        height="4rem"
        borderRadius="40px"
        onClick={onOpen}
      >
        <AddIcon w={5} h={5} />
      </Button>
      <DiscussionsContext.Consumer>
        {({ discussions, setDiscussions }) => {
          return (
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input
                      ref={initialRef}
                      onChange={handleTitle}
                      placeholder="Title"
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Body</FormLabel>
                    <Textarea
                      placeholder="Body"
                      onChange={handleBody}
                      size="sm"
                      resize="none"
                    />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={() =>
                      addNewDiscussion(setDiscussions, discussions)
                    }
                  >
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          );
        }}
      </DiscussionsContext.Consumer>
    </Box>
  );
}

export default ModalDiscussion;
