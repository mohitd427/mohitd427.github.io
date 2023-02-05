import {
  GridItem,
  Text,
  Grid,
  Center,
  Link,
  Button,
  Container,
} from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import './projects.css';
import { BsFillEyeFill, BsGithub } from 'react-icons/bs';

// Project Images
import twiik_img from './Project_Images/twiik_img.png';
import Shopping_Bazzar_Img from './Project_Images/Shopping BAzar.png';
import CoscheduleImg from './Project_Images/CoscheduleImg.png';
import mywardrobe_Img from './Project_Images/Mywardrobe.png';

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

        <Center w="100vw">
          <Grid textAlign={'center'} className="projects_grid" m="30" w={{ 'sm': '400px',md:'600px',lg:'1000px' }}>
            <GridItem textAlign={'center'}>
              <Text w={'100%'} color={'white'} mb="20px">
                This project is clone of MyGlam E-commerce site. This project is
                build with collaboration of 4 members. This site basically
                belong to women.
              </Text>

              <ProjectCard imgSrc={mywardrobe_Img} name="Mywardrobe" />

              <Link href="https://github.com/mohitd427/My-Wardrobe" isExternal>
                <Button>
                  <BsGithub />
                </Button>
              </Link>
              <Link href="https://my-wardrobe.netlify.app/" isExternal>
                <Button ml="20px">
                  <BsFillEyeFill />
                </Button>
              </Link>
            </GridItem>

            <GridItem>
              <Text color={'white'} mb="20px">
                This project is clone of Myntra Ecommerce site. This project is
                build with collaboration of 4 members. This site provide
                products related to clothing and footwear.
              </Text>
              <ProjectCard
                text={''}
                imgSrc={Shopping_Bazzar_Img}
                name="Shopping Bazzar"
                githubLink=""
                netlifyLink=""
              />

              <Link
                href="https://github.com/imsukhdevhansda/shopping-bazaar"
                isExternal
              >
                <Button>
                  <BsGithub />
                </Button>
              </Link>
              <Link href="https://shoppingbazzar.vercel.app/" isExternal>
                <Button ml="20px">
                  <BsFillEyeFill />
                </Button>
              </Link>
            </GridItem>

            <GridItem>
              <Text color={'white'} width="100%" mb="20px">
                This project is clone twiik fitness app. This project is build
                with collaboration of 4 members. It track all the sport events
                of the user. User can track all his fitness related data like
                health, cardio, heart rate ect with a detailed graph view.
              </Text>

              <ProjectCard imgSrc={twiik_img} name="Twiik App" />

              <Link
                href="https://github.com/vikalp1999/cosmic-toy-4083"
                isExternal
              >
                <Button>
                  <BsGithub />
                </Button>
              </Link>
              <Link
                href="https://dainty-pavlova-3db9fb.netlify.app/"
                isExternal
              >
                <Button ml="20px">
                  <BsFillEyeFill />
                </Button>
              </Link>
            </GridItem>

            <GridItem>
              <Text color={'white'} mb="20px">
                This project is clone of Coschedule app. It offers business
                related tools to scale up the business on the larger scale.
              </Text>

              <ProjectCard imgSrc={CoscheduleImg} name="CoSchedule App" />

              <Link
                href="https://github.com/mohitd427/cozy-passenger-4798"
                isExternal
              >
                <Button>
                  <BsGithub />
                </Button>
              </Link>
              <Link
                href="https://dreamy-entremet-570cae.netlify.app/login"
                isExternal
              >
                <Button ml="20px">
                  <BsFillEyeFill />
                </Button>
              </Link>
            </GridItem>
          </Grid>
        </Center>
      </div>
    </>
  );
};

export default Projects;
