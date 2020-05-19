//@ts-check
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import CaruselFotos from '../components/Carrousel/Carousel';
import TituloLogo from '../components/TituloLogo/TituloLogo';
import TituloBookShop from '../components/TituloBookshop/TituloBookshop';
import TituloFanzine from '../components/TituloFanzine/TituloFanzine';
import TituloMerch from '../components/TituloMerch/TituloMerch';
import FanzineZoneHome from '../components/FanzineZoneHome/FanzineZoneHome';
import Pie from '../components/FanzineZoneHome/fotoFanzineHome/Pie.png';
import CardsHome from '../components/Cards/CardsHome';




function App() {
  return (

    <body>
      <div className='TituloPrincipal'>
        <TituloLogo />
      </div>
      <div className='TituloBookshop'  >
        <TituloBookShop />
        <div className='BookshopFondo'>
          <CardsHome />
        </div>
      </div>

      <div className='TituloMerch'>
        <div>
          <TituloMerch />
        </div>
      </div>

      <div className='MerchFondo'>
        <div className='CarouselMerch'>
          <CaruselFotos />
        </div>
      </div>


      <div className='TituloFanzineZone'>
        <div>
          <TituloFanzine />
        </div>
        <div>
          <FanzineZoneHome />
        </div>
        <div>
          <img className='img-fluid' src={Pie} alt="" />
        </div>
      </div>



    </body >


  );

}

export default App;