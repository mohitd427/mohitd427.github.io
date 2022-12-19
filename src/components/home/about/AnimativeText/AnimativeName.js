import React from 'react'
import { Heading } from '@chakra-ui/react';
import "./TextAnimation.css";

const AnimativeName = () => {
  return (
    <Heading
          fontSize={['2rem', '2.4rem', '2.6rem', '2.8rem']}
          color="orangered"
          id="text-drop"
        >
          <div className='r'>M</div>
          <div className='w'>o</div>
          <div className='i'>h</div>
          <div className='t'>i</div>
          <div className='e'>t</div>
         
          <div className='space'></div>
          <div className='b'>K</div>
          <div className='e'>u</div>
          <div className='e'>m</div>

          <div className='r'>a</div>
          <div className='a'>r</div>

        </Heading>
  )
}

export default AnimativeName