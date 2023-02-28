import './contacts.css';
import { BsWhatsapp } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { Text } from '@chakra-ui/react';
import Socials from './home/socials/Socials';
export function Contact() {
  return (
    <>
      <div id="contact">
        <h1 style={{ color: 'white', fontSize: '20px', paddingTop: '20px' }}>
          Let's go in touch
        </h1>
        <div className="contacts_div">
          <form
            className="contacts_div"
            action="https://getform.io/f/e65a78f4-acd7-43f1-9400-7ca642a0f1fa"
            method="POST"
          >
            <div id="div-form">
              <div>
                <input type="text" name="name" placeholder="Enter your name" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                />
                <textarea
                  name="message"
                  id="text-area"
                  placeholder="...."
                ></textarea>
              </div>
              <div>
                <button type="submit" link="">
                  Send Message
                </button>
              </div>
            </div>
          </form>
          <div id="contact-ways">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '20px',
              }}
            >
              <BsWhatsapp color="white" name="logo-whatsapp" />
              <Text fontSize={'20px'} color={'white'}>
                +918004509568
              </Text>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FiMail
                color="white"
                name="logo-email"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
              <a
                href="mailto:mohitofficial045@gmail.com"
                alt="githublink"
                target="_blank"
                rel="noreferrer"
              >
                <Text fontSize={'20px'} color={'white'}>
                  mohitofficial045@gmail.com
                </Text>
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
