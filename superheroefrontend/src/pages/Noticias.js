//@ts-check
import React from 'react';
import Noticias from '../components/Noticias/Noticias';
import 'bootstrap/dist/css/bootstrap.min.css';

import Pie from '../components/FanzineZoneHome/fotoFanzineHome/Pie.png';





function NoticiasFanzine() {

  return (
    <>
<div>   
      <Noticias />
  </div>
    <div>
    <img style={{background: '#def2fe'}} className='img-fluid' src={Pie} alt="" />
  </div>
   </>
  );
}

export default NoticiasFanzine;