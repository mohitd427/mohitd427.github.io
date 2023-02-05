import './contacts.css';
import { BsWhatsapp } from 'react-icons/bs';
import { Text } from '@chakra-ui/react';
import Socials from './home/socials/Socials';
export function Contact() {
  return (
    <>
      <div id="contact">
        <h1 style={{ color: 'white', fontSize: '20px' }}>Let's go in touch</h1>
        <div>
          <div id="div-form">
            <div>
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter email address" />
              <textarea
                name="messege"
                id="text-area"
                placeholder="...."
              ></textarea>
            </div>
            <div>
              <button >
                Send Message
              </button>
            </div>
          </div>
          <div id="contact-ways">
            <div style={{margin:'20px'}}>
              <BsWhatsapp  color="white" name="logo-whatsapp"  />
            </div>
            <div>
              <Text color={'white'}>+918004509568</Text>
            </div>
           
          </div>
          <div style={{ marginLeft:'40%'}}><Socials /></div>
        </div>
      </div>
    </>
  );
}
