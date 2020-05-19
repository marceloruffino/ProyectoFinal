//@ts-check
import React from 'react';
import TituloFanzine from '../components/TituloFanzine/TituloFanzine';
import FanzineZoneHome from '../components/FanzineZoneHome/FanzineZoneHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pie from '../components/FanzineZoneHome/fotoFanzineHome/Pie.png';
import Divisorio from '../components/FanzineZoneHome/fotoFanzineHome/divisorio.png';
import BatmanDivisorio from '../components/FanzineZoneHome/fotoFanzineHome/batmanDivisorio.jpg';
import SpidermanDivisorio from '../components/FanzineZoneHome/fotoFanzineHome/spidermanDivisorio.jpg';
import DcVsMarvel from '../components/FanzineZoneHome/fotoFanzineHome/DcVsMarvel.jpg';
import Video001 from '../components/assets/videos/DcVideo.mov';
import Video002 from '../components/assets/videos/MarvelVideo.mov';
import { Player } from 'video-react';
import "../components/FanzineZoneHome/FanzineZoneHome.css";


import "../App.css"
import TarjetaConmemorativa from '../components/Cards/CardsConmemorativos';

function App() {
  return (


    <div >

      <div className='TituloFanzineZone'>
        <TituloFanzine />
      </div>

      <div className='TituloFanzineZone'>
        <FanzineZoneHome />
      </div>

      <div >
        <img className='img-fluid' src={Divisorio} alt="" style={{ background: '#def2fe' }} />
      </div>
      <div className='fondoDcVsMarvel'>
        <h2 className='tituloDcVsMarvel'>
          Marvel Vs. Dc  
                </h2>
                <p className='textoDcVsMarvel'>Marvel Comics versus DC fue un crossover de miniserie de cómics publicado por DC Comics y Marvel Comics de abril a mayo de 1996. La serie fue escrita por Ron Marz y Peter David, con arte de Dan Jurgens y Claudio Castellini. [2]
La serie crossover especial enfrentó a los superhéroes de Marvel Comics contra sus contrapartes de DC en la batalla. El resultado de cada batalla fue determinado por la votación del lector, que se distribuyó por adelantado a las tiendas de cómics.</p>
      </div>
      <div style={{ background: 'black' }}>
        <div >
          <img className='img-fluid' src={DcVsMarvel} alt="" />
        </div>

        <div >
          <img className='img-fluid' src={BatmanDivisorio} alt="" />
        </div>

        <div>
          <Player>
            <source src={Video001} />
          </Player>
        </div>

        <div >
          <img className='img-fluid' src={SpidermanDivisorio} alt="" style={{ background: 'black' }} />
        </div>

        <div>
          <Player>
            <source src={Video002} />
          </Player>
        </div>
        <div className='fondoDcVsMarvel'>
        <h2 className='tituloDcVsMarvel'>
          Nuestros Comics Conmemorativos  
                </h2>
                <p className='textoDcVsMarvel'>Dos Hermanos divinos que personifican los universos DC y Marvel cada uno se dan cuenta de la existencia del otro y se desafían entre sí a una serie de duelos que involucran a los respectivos superhéroes de cada universo. El universo perdedor dejaría de existir. La historia tenía un componente "fuera del universo" en que los resultados de las batallas primarias estaban determinados por los votos de los lectores.</p>
      </div>
      <div >
        <div className='CardsConmemorativos'>
        <TarjetaConmemorativa />
        </div>
      </div>
        <div >
          <img className='img-fluid' src={Pie} alt="" style={{ background: 'black' }} />
        </div>

      </div>
    </div>

  );
}

export default App;