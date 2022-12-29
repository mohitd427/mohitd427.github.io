import './contacts.css';
import { BsWhatsapp } from 'react-icons/bs';
import { Text } from '@chakra-ui/react';
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
              <button>
                Send Message <ion-icon name="send"></ion-icon>
              </button>
            </div>
          </div>
          <div id="contact-ways">
            <div>
              <BsWhatsapp  color="white" name="logo-whatsapp" />
            </div>
            <div>
              <Text color={'white'}>+918004509568</Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
