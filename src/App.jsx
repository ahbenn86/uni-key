import React from "react";
import { Container, Box } from "@chakra-ui/react";
import Header from "../components/Header";

const App = () => {
  return (
    <Box bg={"whitesmoke"} color="black" height="100vh" paddingTop={130}>
      <Container maxW='3xl' centerContent>
        <Header/>
      </Container>
    </Box>
  );
};

export default App;
