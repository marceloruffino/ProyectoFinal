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




function App() {
  return (

    <body>
      <div className='TituloContainer'>
        <div>
          <TituloLogo />
        </div>
      </div>

      <div className='TituloContainer '>
        <div>
          <TituloBookShop />
        </div>
      </div>
      <div>
        
      <div className='TituloContainer'>
        <div>
          <TituloMerch />
        </div>
      </div>

        <div className='MerchFondo'>
          <div className='CarouselMerch'>
            <CaruselFotos />
          </div>
        </div>
      </div>

      <div className='TituloContainer'>
        <div>
          <TituloFanzine />
        </div>
        <div>
          <FanzineZoneHome />
        </div>
        <div>
        <img className='img-fluid' src={Pie} alt=""/>
        </div>
      </div>
      


    </body >


  );

}

export default App;