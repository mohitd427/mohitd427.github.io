import React from 'react';
import { HStack, Link as LinkChakra} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ButtonList = () => {
  return (
    <div className="button_list">
      <HStack mt="4" mr="2" className="button_stack">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/projects">
          <button>Projects</button>
        </Link>
        <LinkChakra href="" isExternal>
          {' '}
         
        </LinkChakra>
        <a 
        href="https://drive.google.com/file/d/1SAgnF2mgVBxDEoqZkJsfc3Ofv061nlTf/view?usp=sharing"
        download={'Mohit_Kumar_Resume(1).pdf'}        
        ><button>Resume</button></a>
      </HStack>
    </div>
  );
};

export default ButtonList;
