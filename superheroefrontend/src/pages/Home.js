//@ts-check
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import CaruselFotos from '../components/Carrousel/Carousel';
import TituloLogo from '../components/TituloLogo/TituloLogo';
import TituloBookShop from '../components/TituloBookshop/TituloBookshop';
import TituloFanzine from '../components/TituloFanzine/TituloFanzine';
import TituloMerch from '../components/TituloMerch/TituloMerch';
import Pie from '../components/FanzineZoneHome/fotoFanzineHome/Pie.png';
import Revista from '../components/FanzineZoneHome/fotoFanzineHome/revista003.jpg';
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
        <img className='img-fluid' src={Revista} alt="" />
        </div>
        <img className='img-fluid' src={Pie} alt="" style={{background: '#def2fe'}} />
        <div>
        </div>
      </div>



    </body >


  );

}

export default App;