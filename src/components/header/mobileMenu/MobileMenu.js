import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Link as LinkChakra,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './MobileMenu.css';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  return (
    <div className="mobile_menu">
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<GiHamburgerMenu />}
          aria-label="Options"
          variant="outline"
          bg="white"
          _hover={{
            background: 'black',
            color: 'white',
            border: '2px solid white',
          }}
          _active={{
            background: 'black',
            color: 'white',
            border: '2px solid white',
          }}
        />
        <MenuList bg="brand.100" color="white">
          <Link to="/">
            <MenuItem
            color={'black'}
            >
              Home
            </MenuItem>
          </Link>
          <Link to="/about">
            <MenuItem
            color={'black'}
              _focus={{ bg: 'whitesmoke', color: 'black' }}
              _hover={{ bg: 'whitesmoke', color: 'black' }}
            >
              About Me
            </MenuItem>
          </Link>
          <Link to="/skills">
            <MenuItem
            color={'black'}
              _focus={{ bg: 'whitesmoke', color: 'black' }}
              _hover={{ bg: 'whitesmoke', color: 'black' }}
            >
              Skills
            </MenuItem>
          </Link>
          <Link to="/projects">
            <MenuItem color={'black'} _hover={{ bg: 'whitesmoke', color: 'black' }}>
              {' '}
              Projects
            </MenuItem>
          </Link>
          <Link to="/githubStats">
            <MenuItem
            color={'black'}
              _focus={{ bg: 'whitesmoke', color: 'black' }}
              _hover={{ bg: 'whitesmoke', color: 'black' }}
            >
              Github Stats
            </MenuItem>
          </Link>
          <Link to="/">
            <MenuItem
            color={'black'}
            >
              Contacts
            </MenuItem>
          </Link>
          <LinkChakra
            href="https://drive.google.com/file/d/1SAgnF2mgVBxDEoqZkJsfc3Ofv061nlTf/view?usp=sharing"
            target=""
            color={'black'}
          >
            <MenuItem>Resume</MenuItem>
          </LinkChakra>
        </MenuList>
      </Menu>
    </div>
  );
};

export default MobileMenu;
