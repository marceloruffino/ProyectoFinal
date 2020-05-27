//@ts-check
import React from 'react';
import ArticuloComics from '../components/ArticuloComics/ArticuloComics';
import Pie from '../components/FanzineZoneHome/fotoFanzineHome/Pie.png';




function ArticuloComicFull() {

  return (
    <>
    <div>
      <ArticuloComics />
    </div>
      <div>
      <img style={{background: '#def2fe'}} className='img-fluid' src={Pie} alt="" />
    </div>
   </>
  );
}

export default ArticuloComicFull;