import React from 'react';
import logoFanzine from './fotoFanzine/superHeroFanzine2.png';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TituloFanzine() {
  return (
    <div>
      <div>
      <img className='img-fluid' src={logoFanzine} alt=""/>
      </div>
      <br/>
      <div >
       <p style={{textAlign: 'center'}}>TE PRESENTAMOS SUPERHEROES, 
         LA TIENDA DE COMICS MAS GRANDE DE ARGENTINA, 
         EN ELLAS PODRAS COMPRAR, VENDER, BUSCAR INFO Y 
         TODO LO RELACIONADO CON LOS COMICS DE HOY. </p>
      </div>
   </div>
  );
}
