import { VStack, Image, Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './ProjectCard.css';

const ProjectCard = props => {
  return (
    <>
      <VStack className="project_card" gap="1" color="white">
        <LazyLoadImage width={'100%'} src={props.imgSrc} id="image" />     

        <Box
          className="description"
          textAlign="center"
          bg="rgb(40,36,40)"
          width="100%"
        >
          {props.name}
        </Box>
      </VStack>
    </>
  );
};

export default ProjectCard;
