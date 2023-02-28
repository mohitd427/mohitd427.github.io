import { Box, Container, Flex, Image, Button } from '@chakra-ui/react';
import React from 'react';
import profilePic from '../images/mohit_pic-removebg-preview.png';
import Socials from './socials/Socials';
import About from './about/About';

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
              w={['60vw', '70vw', '40vw']}
              ml={['2', '3', '4', '4']}
              borderRadius="50%"
              bg={'yellow.200'}
              mt="100px"
            />
          </Box>
        </Container>
        <Container
          display={'flex'}
          flexDirection="column"
          alignItems={'center'}
          justifyContent="center"
        >
          <About />
          <Socials />
        </Container>
      </Flex>
      <a href={resume} download="fw20_0712-Mohit_Kumar_Resume">
        <Button m=" 40px 0px" fontSize={'20px'} colorScheme="teal">
          My Resume
        </Button>
      </a>
    </>
  );
};

export default Home;
