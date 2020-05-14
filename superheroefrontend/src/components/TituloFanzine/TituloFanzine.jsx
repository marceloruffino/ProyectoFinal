import React from 'react';
import logoFanzine from './fotoFanzine/superHeroFanzine.png';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TituloFanzine() {
  return (
   <div >
       <img className='img-fluid' src={logoFanzine} alt=""/>
       <p>TE PRESENTAMOS SUPERHEROES, 
         LA TIENDA DE COMICS MAS GRANDE DE ARGENTINA, 
         EN ELLAS PODRAS COMPRAR, VENDER, BUSCAR INFO Y 
         TODO LO RELACIONADO CON LOS COMICS DE HOY. </p>
   </div>
  );
}
