import React from 'react';
import { HStack, Link as LinkChakra} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Aos from "aos"
import 'aos/dist/aos.css'
import resume from '../../../Resume/MOHIT_KUMAR_Resume_.pdf';


const ButtonList = () => {
  return (
    <div className="button_list">
      <HStack mt="4" mr="1" className="button_stack">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/skills">
          <button>Skills</button>
        </Link>
        <Link to="/projects">
          <button>Projects</button>
        </Link>

        <Link to="/Contacts">
          <button>Contacts</button>
        </Link>
        <a
          onClick={() => {
            window.open(
              'https://drive.google.com/file/d/102LuUUUuiTYcQ7neah-wH6wiUwwmEQSK/view?usp=share_link',
              'blank'
            );
          }}
          href={resume}
          download="fw20_0712-Mohit_Kumar_Resume"
        >
          <button>Resume</button>
        </a>
      </HStack>
    </div>
  );
};

export default ButtonList;
