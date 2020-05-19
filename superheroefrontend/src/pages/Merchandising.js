//@ts-check
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/FanzineZoneHome/FanzineZoneHome.css";
import CaruselFotos from '../components/Carrousel/Carousel';
import TituloMerch from '../components/TituloMerch/TituloMerch';
import CaruselFotosAccesorios from '../components/Carrousel/CarouselAccesorios';
import CaruselFotosMovil from '../components/Carrousel/CarouselMovil';
import CaruselFotosRemeras from '../components/Carrousel/CarouselRemeras';
import CaruselFotosTazas from '../components/Carrousel/CarouselTazas';
import Pie from '../components/FanzineZoneHome/fotoFanzineHome/Pie.png';



function App() {
  return (

    <div >
      <div className='TituloMerch'>
        <div>
          <TituloMerch />
        </div>
      </div>

      <div className='MerchFondo'>
      <div>
        <h2 style={{fontFamily: 'monospace', textAlign: 'center', background: '#fedbe2'}}>
            COLECCIONABLES
            </h2>
            <br></br>
       <div>
       <p style={{textAlign: 'center', fontFamily: 'monospace', fontSize: '16', color: 'Black', padding: '10'}}> 
         En la seccion de Coleccionables encontras estatuas esculpidas por artistas famosos en colaboracion con Dc o Marvel, decora tu escritorio, libreria con la mas varia coleccion y diversos tamaños. </p>
         </div>
        </div>
        <div className='CarouselMerch'>
          <CaruselFotos />
        </div>
      </div>

      <div className='MerchFondo'>
      <div>
        <h2 style={{fontFamily: 'monospace', textAlign: 'center', background: '#fedbe2'}}>
            ACCESORIOS
            </h2>
            <br></br>
       <div>
       <p style={{textAlign: 'center', fontFamily: 'monospace', fontSize: '16', color: 'Black', padding: '10'}}> 
         En la seccion de Accesorios encontras estatuas esculpidas por artistas famosos en colaboracion con Dc o Marvel, decora tu escritorio, libreria con la mas varia coleccion y diversos tamaños. </p>
         </div>
            
        </div>
        <div className='CarouselMerch'>
          <CaruselFotosAccesorios />
        </div>
      </div>

      <div className='MerchFondo'>
      <div>
        <h2 style={{fontFamily: 'monospace', textAlign: 'center', background: '#fedbe2'}}>
            CARCASAS
            </h2>
            <br></br>
       <div>
       <p style={{textAlign: 'center', fontFamily: 'monospace', fontSize: '16', color: 'Black', padding: '10'}}> 
         En la seccion de Carcasas encontras estatuas esculpidas por artistas famosos en colaboracion con Dc o Marvel, decora tu escritorio, libreria con la mas varia coleccion y diversos tamaños. </p>
         </div>
        </div>
        <div className='CarouselMerch'>
          <CaruselFotosMovil />
        </div>
      </div>

      <div className='MerchFondo'>
      <div>
        <h2 style={{fontFamily: 'monospace', textAlign: 'center', background: '#fedbe2'}}>
            REMERAS
            </h2>
            <br></br>
       <div>
       <p style={{textAlign: 'center', fontFamily: 'monospace', fontSize: '16', color: 'Black', padding: '10'}}> 
         En la seccion de Remeras encontras estatuas esculpidas por artistas famosos en colaboracion con Dc o Marvel, decora tu escritorio, libreria con la mas varia coleccion y diversos tamaños. </p>
         </div>
        </div>
        <div className='CarouselMerch'>
          <CaruselFotosRemeras />
        </div>
      </div>

      <div className='MerchFondo'>
        <div>
        <h2 style={{fontFamily: 'monospace', textAlign: 'center', background: '#fedbe2'}}>
            TAZAS
            </h2>
            <br></br>
       <div>
       <p style={{textAlign: 'center', fontFamily: 'monospace', fontSize: '16', color: 'Black', padding: '10'}}> 
         En la seccion de Tazas encontras estatuas esculpidas por artistas famosos en colaboracion con Dc o Marvel, decora tu escritorio, libreria con la mas varia coleccion y diversos tamaños. </p>
         </div>
        </div>
        <div className='CarouselMerch'>
          <CaruselFotosTazas />
        </div>
        <div>
          <img className='img-fluid' src={Pie} alt="" />
        </div>
      </div>

    </div>
  );
}

export default App;