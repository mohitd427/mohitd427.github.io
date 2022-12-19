import { Box, Container, Flex, Image, Button } from '@chakra-ui/react';
import React from 'react';
import profilePic from '../images/IMG-20220430-WA0025.jpg';
import Socials from './socials/Socials';
import About from './about/About';
import Graph from './github_graph/Graph';

import resume from '../header/buttonList/MOHIT_KUMAR_Resume (1).pdf';

const Home = () => {
  return (
    <>
      <Flex w="100vw" flexWrap="wrap">
        <Container>
          <Box boxSize={['sm', 'md', 'md', 'md']} m={['4', '4', '4', '8']}>
            <Image
              src={profilePic}
              alt="Mohit Kumar"
              w={['80vw', '85vw', '90vw', '40vw']}
              ml={['2', '3', '4', '4']}
              borderRadius="50%"
            />
          </Box>
        </Container>
        <Container>
          <About />
          <Socials />
        </Container>
      </Flex>
      <a href={resume} download="Mohit_Kumar_Resume">
        <Button mt="40px" fontSize={'20px'} colorScheme="blue">
          Resume
        </Button>
      </a>
      <Graph />
    </>
  );
};

export default Home;
