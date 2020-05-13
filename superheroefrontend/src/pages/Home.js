//@ts-check
import React from 'react';
import CaruselFotos from '../components/Carrousel/Carousel';
import TituloLogo from '../components/TituloLogo/TituloLogo';
import TituloBookShop from '../components/TituloBookshop/TituloBookshop';



function App() {
  return (

    <body>
      <div className='TituloContainer'>
        <div>
          <TituloLogo />
        </div>
      </div>
  <div>
    <div className='MerchFondo'>
      <div className='CarouselMerch'>
        <CaruselFotos />
      </div>
    </div>
  </div>

  <div className='TituloContainer'>
    <div>
      <TituloBookShop />
    </div>
  </div>
</body >


);

}

export default App;