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
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { InfoCircleFilled } from '@ant-design/icons';






function App() {
  return (

    <body>
      <div className='TituloPrincipal'>
        <TituloLogo />
      </div>
      <div className='TituloBookshop'  >
        <TituloBookShop />
        <div className='BookshopFondo' style={{paddingBottom: '30px'}}>
          <CardsHome />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Link to="bookshop">
          <Button shape="round" icon={<InfoCircleFilled />} style={{ display: 'flex', justifyContent: 'center', paddingTop: '6px'}}>
          Mas Info
            </Button>
        </Link>
        </div>
      </div>

      <div className='TituloMerch'>
        <div>
          <TituloMerch />
        </div>
        
      </div>

      <div className='MerchFondo' style={{paddingBottom: '10px'}}>
        <div className='CarouselMerch'>
          <CaruselFotos />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Link to="merchandising">
          <Button shape="round" icon={<InfoCircleFilled />} style={{ display: 'flex', justifyContent: 'center', paddingTop: '6px'}}>
          Mas Info
            </Button>
        </Link>
        </div>
      </div>


      <div className='TituloFanzineZone'>
        <div>
          <TituloFanzine />
        </div>
        <div>
        <img className='img-fluid' src={Revista} alt="" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Link to="fanzinezone">
          <Button shape="round" icon={<InfoCircleFilled />} style={{ display: 'flex', justifyContent: 'center', paddingTop: '6px'}}>
          Mas Info
            </Button>
        </Link>
        </div>
        <img className='img-fluid' src={Pie} alt="" style={{background: '#def2fe'}} />
        <div>
        </div>
      </div>



    </body >


  );

}

export default App;