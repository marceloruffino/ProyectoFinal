import React from 'react';
import logoMerch from './fotoMerch/superHeroMerch.png';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TituloMerch() {
  return (
   <div>
       <img className='img-fluid mx-auto d-block' src={logoMerch} alt=""/>
       <p>TE PRESENTAMOS SUPERHEROES, 
         LA TIENDA DE COMICS MAS GRANDE DE ARGENTINA, 
         EN ELLAS PODRAS COMPRAR, VENDER, BUSCAR INFO Y 
         TODO LO RELACIONADO CON LOS COMICS DE HOY. </p>
   </div>
  );
}
