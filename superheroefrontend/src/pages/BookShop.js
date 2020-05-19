//@ts-check
import React, { useEffect, useState } from 'react';
import Tarjeta from '../components/Cards/Cards';
import TituloBookShop from '../components/TituloBookshop/TituloBookshop';


function BookShop() {

  return (
  
    <div>
      <div className='TituloBookshop'  >
        <TituloBookShop />
    </div >
    <div>
     <Tarjeta />
    </div>
    </div>
  );
}

export default BookShop;