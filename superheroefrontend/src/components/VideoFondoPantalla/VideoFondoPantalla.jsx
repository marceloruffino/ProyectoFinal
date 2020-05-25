import React from 'react';
import './VideoFondoPantalla.css';
import Video1 from './videos/fondoPantalla2.mov'
import Logo from './videos/superHeroLogo3.png'
import { useHistory } from 'react-router-dom';


export default function VideoPantallaCompleta() {
  const history = useHistory()

  const irhome = () => {
history.push('/home')
  }

  return (
    <>
    <div className='header'>
        <div className='absolute overlay'>
            <img onClick={irhome} src={Logo} alt="" style={{cursor: 'pointer'}}/>
        </div>
    <video className='video' autoPlay loop >
    <source src={Video1}/>
    </video>
    </div>
    </>
  );
}
