import { VStack, Image, Box, HStack } from '@chakra-ui/react';
import React from 'react';
import './ProjectCard.css';

const ProjectCard = props => {
  return (
    <>
      <Box className="project_card" gap="1" color="white" >
        <Image
          width={'90%'}
          margin='auto'
          src={props.imgSrc}
          id="image"
          borderTopRadius={'20px'}
        />

        <Box
          className="description"
          textAlign="center"
          bg="rgb(40,36,40)"
          width="90%"
          m={'auto'}
          borderBottomRadius={'20px'}
        >
          {props.name}
        </Box>
      </Box>
    </>
  );
};

export default ProjectCard;
