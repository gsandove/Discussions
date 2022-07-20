import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import React from "react";
import Discussion from "../components/Discussion";
import { getAllDiscussions } from "../components/Storage";

function Discussions() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <Box>
      <UnorderedList display="flex" alignItems="center" flexDirection="column">
        {getAllDiscussions().map((discussion) => (
          <Discussion key={discussion.id} discussion={discussion} />
        ))}
      </UnorderedList>
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
              <Input ref={initialRef} placeholder="Title" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Body</FormLabel>
              <Textarea placeholder="Body" size="sm" resize="none" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Discussions;
