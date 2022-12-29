import { GridItem, Text, Grid, Center, Link, Button } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import './projects.css';
import { BsGithub } from 'react-icons/bs';

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
        "center"
        <Center w="100vw">
          <Grid textAlign={'center'} className="projects_grid" m="30">
            <GridItem textAlign={'center'}>
              <Text w={'500px'} color={'white'}>
                This project is clone of MyGlam E-commerce site. This project is
                build with collaboration of 4 members. This site basically
                belong to women as it contains all products related to women
                need such as makeup, carry bags, purse, footwears etc.
              </Text>

              <Link href="https://my-wardrobe.netlify.app/" isExternal>
                <ProjectCard imgSrc={mywardrobe_Img} name="Mywardrobe" />
              </Link>
              <Link href="https://github.com/mohitd427/My-Wardrobe" isExternal>
                <Button>
                  <BsGithub />
                </Button>
              </Link>
            </GridItem>

            <GridItem>
              <Text color={'white'}>
                This project is clone of Myntra Ecommerce site. This project is
                build with collaboration of 4 members. This site provide
                products related to clothing and footwear.
              </Text>
              <Link href="https://shoppingbazzar.vercel.app/" isExternal>
                <ProjectCard
                  text={''}
                  imgSrc={Shopping_Bazzar_Img}
                  name="Shopping Bazzar"
                  githubLink=""
                  netlifyLink=""
                />
              </Link>
              <Link
                href="https://github.com/imsukhdevhansda/shopping-bazaar"
                isExternal
              >
                <Button>
                  <BsGithub />
                </Button>
              </Link>
            </GridItem>

            <GridItem>
              <Text color={'white'}>
                This project is clone twiik fitness app. This project is build
                with collaboration of 4 members. It track all the sport events
                of the user. User can track all his fitness related data like
                health, cardio, heart rate ect with a detailed graph view.
              </Text>
              <Link
                href="https://dainty-pavlova-3db9fb.netlify.app/"
                isExternal
              >
                <ProjectCard imgSrc={twiik_img} name="Twiik App" />
              </Link>
              <Link
                href="https://github.com/vikalp1999/cosmic-toy-4083"
                isExternal
              >
                <Button>
                  <BsGithub />
                </Button>
              </Link>
            </GridItem>

            
              <GridItem>
                <Text color={'white'}>
                This project is clone of Coschedule app.
                It offers business related tools to scale up the business on the larger scale.
              </Text>
              <Link
              href="https://dreamy-entremet-570cae.netlify.app/login"
              isExternal
            >
                <ProjectCard imgSrc={CoscheduleImg} name="CoSchedule App" />
                </Link>
                <Link href="https://github.com/mohitd427/cozy-passenger-4798" isExternal>
                  <Button>
                    <BsGithub />
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
