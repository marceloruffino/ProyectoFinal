//@ts-check
import React from 'react';
import ArticuloComicsConme from '../components/ArticuloComicsConme/ArticuloComicsConme'
import 'bootstrap/dist/css/bootstrap.min.css';

import Pie from '../components/FanzineZoneHome/fotoFanzineHome/Pie.png';



function ArticuloComicConmeFull() {

  return (
<>
    <div>
      <ArticuloComicsConme />

    </div>
    <div>
    <img style={{background: '#def2fe'}} className='img-fluid' src={Pie} alt="" />
  </div>
</>

  );
}

export default ArticuloComicConmeFull;