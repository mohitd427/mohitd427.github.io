import React from 'react';
import {
  VStack,
  Flex,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import RBLogo from '../images/mklogo.png';
import './Header.css';
import ButtonList from './buttonList/ButtonList';
import MobileMenu from './mobileMenu/MobileMenu';
import { Divider } from 'antd';

const Header = () => {
  const Reload = () => {
    window.location.reload();
  };

  return (
    <>
      <HStack>
        <Box w="100%" display={'flex'} justifyContent={'space-between'}>
          <Image 
            onClick={Reload}
            boxSize={['8', '12', '14', '16']}
            borderRadius="full"
            src={RBLogo}
            className="myLogo"
          ></Image>
<Box className='spacer'></Box>
          <MobileMenu />
        </Box>
        <ButtonList />
      </HStack>
    </>
  );
};

export default Header;
