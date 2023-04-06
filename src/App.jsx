import { Button, ChakraProvider, useDisclosure } from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider>
      <Button>Open</Button>
    </ChakraProvider>
  );
}

export default App;
