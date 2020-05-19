//@ts-check
import React from 'react';
import TituloFanzine from '../components/TituloFanzine/TituloFanzine';
import FanzineZoneHome from '../components/FanzineZoneHome/FanzineZoneHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pie from '../components/FanzineZoneHome/fotoFanzineHome/Pie.png';


import "../App.css"

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
          <img className='img-fluid' src={Pie} alt="" style={{background: '#def2fe'}} />
        </div>
    
    </div>
    
  );
}

export default App;