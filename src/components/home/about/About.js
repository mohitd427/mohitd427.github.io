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
        <Box
          color="white"
          className="aboutMe"
          ml={['0.5', '0.5', '-0.5', '-20']}
          fontSize={['sm', 'md', 'lg']}
          pt={['2', '2', '3', '4']}
          textAlign="justify"
        >
          <p style={{paddingTop:'20px'}}>
            Hi, There! I'm <span id="name">Mohit Kumar.</span> A Full Stack
            Developer. I have done B.tech in Mechanical Engineering from <span id="name">Amity University </span>, Uttar Pradesh, India. I
            love to build cool projects using frameworks I like react . Whenever I
            build or learn something new, I share it with other people.
          </p>
          <br />
          
          <br />
          <p>Check out the social links below to connect.</p>
        </Box>
      </Box>
    </>
  );
};

export default About;
