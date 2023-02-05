import { Box, Flex, Image, Text } from '@chakra-ui/react';
import './About.css';

export function About() {
  return (
    <>
      <Box display={'flex'} h='100vh'>
        <Box
          flex={1}
          color="white"
          fontSize={['sm', 'md', 'lg']}
          pt={['2', '2', '3', '4']}
        >
          <Text
            m="30px"
            textAlign={'center'}
            fontSize="30px"
            textDecoration={'underline'}
          >
            About Me
          </Text>
          <Text textAlign={'center'} w={'80%'}  paddingTop='20px'>
            Hi, There! I'm <span id="name">Mohit Kumar.</span> A Full Stack
            Developer. I have done B.tech in Mechanical Engineering from{' '}
            <span id="name">Amity University </span>, Uttar Pradesh, India. I
            love to build cool projects using frameworks I like react . Whenever
            I build or learn something new, I share it with other people.
          </Text>
        </Box>
        <Box flex={1} display='flex'  alignItems='center' justifyContent={'center'}  >
          <Image src="https://media2.giphy.com/media/Y4ak9Ki2GZCbJxAnJD/giphy.gif?cid=ecf05e47hp47ejf8mm4sw4pjlimwmfiztru3tl1hrbas0hf5&rid=giphy.gif&ct=g" />
        </Box>
      </Box>
    </>
  );
}
