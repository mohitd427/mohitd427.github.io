import { GridItem, Text, Grid, Center, Link } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import './projects.css';

// Project Images
import twiik_img from './Project_Images/twiik_img.png';
import Shopping_Bazzar_Img from './Project_Images/Shopping BAzar.png';
import CoscheduleImg from './Project_Images/CoscheduleImg.png';
import mywardrobe_Img from './Project_Images/Mywardrobe.png';
import hubSpotImg from './Project_Images/hubspotImg.png';

const Projects = () => {
  return (
    <>
      <div className="projects">
        <Text
          fontSize="2xl"
          fontWeight="semibold"
          textAlign="center"
          color="white"
        >
          Projects
        </Text>
        "center"
        <Center w="100vw">
          <Grid className="projects_grid" m="10">
            <Link
              href="https://clever-nougat-a72f71.netlify.app/"
              isExternal
            >
              <GridItem>
                <ProjectCard imgSrc={mywardrobe_Img} name="Mywardrobe" />
              </GridItem>
            </Link>

            <Link href="https://shoppingbazzar.vercel.app/" isExternal>
              <GridItem>
                <ProjectCard imgSrc={Shopping_Bazzar_Img} name="Shopping Bazzar" />
              </GridItem>
            </Link>

            <Link href="https://github.com/vikalp1999/cosmic-toy-4083" isExternal>
              <GridItem>
                <ProjectCard imgSrc={twiik_img} name="Twiik App" />
              </GridItem>
            </Link>

            <Link
              href="https://github.com/mohitd427/cozy-passenger-4798"
              isExternal
            >
              <GridItem>
                <ProjectCard imgSrc={CoscheduleImg} name="CoSchedule App" />
              </GridItem>
            </Link>

            <Link
              href="https://github.com/rwiteshbera/URL-Shortener"
              isExternal
            >
              <GridItem>
                <ProjectCard imgSrc={hubSpotImg} name="HubSpot App" />
              </GridItem>
            </Link>
            
          </Grid>
        </Center>
      </div>
    </>
  );
};

export default Projects;
