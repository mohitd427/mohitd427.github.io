import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import './About.css';
import 'animate.css';
import AnimativeName from './AnimativeText/AnimativeName';

const About = () => {


  return (
    <>
      <Box p={['3', '4', '4', '4']} mb="4" className="aboutContainer">
        <AnimativeName />
        <Heading
          fontSize={['1.2rem', '1.4rem', '1.6rem', '1.6rem']}
          color="whiteAlpha.700"
          mt="1"
          textAlign={['center', 'center', 'center', 'left']}
          className="fullstackdeveloper"
          id='typing'
        >
          Full Stack Web Developer
        </Heading>
       
      </Box>
    </>
  );
};

export default About;
