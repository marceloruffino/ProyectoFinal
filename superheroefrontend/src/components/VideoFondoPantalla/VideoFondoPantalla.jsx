import React from 'react';
import './VideoFondoPantalla.css';
import Video1 from './videos/fondoPantalla2.mov'
import Logo from './videos/superHeroLogo3.png'
export default function VideoPantallaCompleta() {
  return (
    <>
    <div className='header'>
        <div className='absolute overlay'>
            <img src={Logo} alt=""/>
        </div>
    <video className='video' autoPlay loop >
    <source src={Video1}/>
    </video>
    </div>
    </>
  );
}
