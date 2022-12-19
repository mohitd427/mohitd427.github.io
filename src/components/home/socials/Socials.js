import React from 'react';
import { Flex, IconButton, Link } from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import './Socials.css';

const Socials = () => {
  return (
    <>
      <Flex
        justify={['center', 'center', 'center', 'left']}
        gap={['2', '3', '4', '4']} 
      >
        <Link href="https://www.linkedin.com/in/mohit-kumar-78911323a/" isExternal>
          <IconButton
            icon={<FaLinkedinIn />}
            isRound="true"
            _hover={{
              background: 'black',
              color: 'white',
              border: '2px solid white',
            }}
          ></IconButton>
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100003187415854" isExternal>
          <IconButton
            icon={<FaFacebook />}
            isRound="true"
            _hover={{
              background: 'black',
              color: 'white',
              border: '2px solid white',
            }}
          ></IconButton>
        </Link>
        <Link href="https://github.com/mohitd427" isExternal>
          <IconButton
            icon={<FaGithub />}
            isRound="true"
            _hover={{
              background: 'black',
              color: 'white',
              border: '2px solid white',
            }}
          ></IconButton>
        </Link>
        <Link href="https://www.instagram.com/_mohit_kk/" isExternal>
          <IconButton
            icon={<FaInstagram />}
            isRound="true"
            _hover={{
              background: 'black',
              color: 'white',
              border: '2px solid white',
            }}
          ></IconButton>
        </Link>
      </Flex>
    </>
  );
};

export default Socials;
