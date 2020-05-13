import React from 'react';
import logo from './fotoLogo/superHeroLogo.png';


export default function TituloLogo() {
  return (
   <div>
       <img src={logo} alt=""/>
       <p>TE PRESENTAMOS SUPERHEROES, 
         LA TIENDA DE COMICS MAS GRANDE DE ARGENTINA, 
         EN ELLAS PODRAS COMPRAR, VENDER, BUSCAR INFO Y 
         TODO LO RELACIONADO CON LOS COMICS DE HOY. </p>
   </div>
  );
}
