import {
  GridItem,
  Text,
  Grid,
  Center,
  Link,
  Button,
  Container,
  Flex,
  Image,
  Heading,
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
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

const Projects = () => {

  useEffect(() => {
    Aos.init({duration:2000});
  }, [])
  const imageIcons = [
    {
      url: 'https://img.icons8.com/ultraviolet/512/react.png',
      alt: 'React Logo',
    },
    {
      url: 'https://img.icons8.com/color/512/redux.png',
      alt: 'Redux Logo',
    },
    {
      url: 'https://png2.cleanpng.com/sh/3e9a1cbd154d56d598382f350b0ec7d1/L0KzQYm3VMI3N5RBfZH0aYP2gLBuTfZqepZneeVuLXPvf8brTf1me6Rmf9t3Zz3qf7FujPUubJZ7fd54cHX1g376jBZ1f5J3RadqZUHnSbfrgcQ6PGEARqkCMEm0SYmAUcUzPGg6SKo9NUa6RIK1kP5o/kisspng-firebase-cloud-messaging-google-developers-softwar-5ae1d9fda49409.7709198715247508456741.png',
      alt: 'Firebase Logo',
    },
    {
      url: 'https://www.pngitem.com/pimgs/m/31-316472_react-native-firebase-logo-png-transparent-react-js.png',
      alt: 'Firebase Authentication Logo',
    },
    {
      url:"https://image.pngaaa.com/704/7959704-middle.png",
      alt:'chakra ui logo'
    }
  ];

  return (
    <>
      <div className="projects">
        <Text
          fontSize="7xl"
          fontWeight="semibold"
          textAlign="center"
          color="white"
        >
          PROJECTS
        </Text>

        <Center w="100vw" border={'1px solid white'} background="orange.500">
          <Grid
            textAlign={'center'}
            className="projects_grid"
            m="30"
            w={{ sm: '400px', md: '600px', lg: '1000px' }}
          >
            {/* ----------- 1 ----------- */}
            <GridItem textAlign={'center'} data-aos="fade-right">
              <ProjectCard imgSrc={mywardrobe_Img} name="Mywardrobe" />

              <Text w={'80%'} color={'white'} m="20px 40px">
                This project is clone of MyGlam E-commerce site. This project is
                build with collaboration of 4 members. This site basically
                belong to women.
              </Text>
              <Flex color={'white'} m="20px 40px">
                <Heading fontSize={'2xl'}>TECH STACKS : </Heading>
                {imageIcons.map(el => {
                  return <Image w={'40px'} src={el.url} alt={el.alt} />;
                })}
              </Flex>
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
            {/* --------------- 2 ------------------- */}
            <GridItem data-aos="fade-left">
              <ProjectCard
                text={''}
                imgSrc={Shopping_Bazzar_Img}
                name="Shopping Bazzar"
                githubLink=""
                netlifyLink=""
              />
              <Text w={'80%'} color={'white'} m="20px 40px">
                This project is clone of Myntra Ecommerce site. This project is
                build with collaboration of 4 members. This site provide
                products related to clothing and footwear.
              </Text>
              <Flex color={'white'} m="20px 40px" gap={'5px'}>
                <Heading fontSize={'2xl'}>TECH STACKS : </Heading>
                <Image
                  w={'40px'}
                  src="https://img.icons8.com/ultraviolet/512/react.png"
                  alt="React logo"
                />
                <Image
                  w={'40px'}
                  src="https://img.icons8.com/color/512/redux.png"
                  alt="React Redux logo"
                />
                <Image
                  w={'40px'}
                  src="https://static-00.iconduck.com/assets.00/file-type-styled-icon-512x512-kmuegrph.png"
                  alt="styled components logo"
                />
              </Flex>
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
            {/* -------------- 3 --------------- */}
            <GridItem data-aos="fade-right">
              <ProjectCard imgSrc={twiik_img} name="Twiik App" />

              <Text w={'80%'} color={'white'} m="20px 40px">
                This project is clone twiik fitness app. This project is build
                with collaboration of 4 members. It track all the sport events
                of the user.
              </Text>
              <Flex color={'white'} m="20px 40px" gap={'5px'}>
                <Heading fontSize={'2xl'}>TECH STACKS : </Heading>
                <Image
                  w={'40px'}
                  src="https://p7.hiclipart.com/preview/410/100/57/web-development-html-responsive-web-design-logo-javascript-html.jpg"
                  alt="html logo"
                />
                <Image
                  w={'40px'}
                  src="https://www.pngitem.com/pimgs/m/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png"
                  alt="css logo"
                />
                <Image
                  w={'40px'}
                  src="https://e7.pngegg.com/pngimages/780/695/png-clipart-javascript-comment-html-logo-international-conference-on-missions-node-js-icon-angle-text.png"
                  alt="js logo"
                />
              </Flex>
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
            {/* ---------------- 4 ------------------- */}
            <GridItem data-aos="fade-left">
              <ProjectCard imgSrc={CoscheduleImg} name="CoSchedule App" />

              <Text w={'80%'} color={'white'} m="20px 40px">
                This project is clone of Coschedule app. It offers business
                related tools to scale up the business on the larger scale.
              </Text>
              <Flex color={'white'} m="20px 40px" gap={'5px'}>
                <Heading fontSize={'2xl'}>TECH STACKS : </Heading>
                <Image
                  w={'40px'}
                  src="https://p7.hiclipart.com/preview/410/100/57/web-development-html-responsive-web-design-logo-javascript-html.jpg"
                  alt="html logo"
                />
                <Image
                  w={'40px'}
                  src="https://www.pngitem.com/pimgs/m/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png"
                  alt="css logo"
                />
               
              </Flex>
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
