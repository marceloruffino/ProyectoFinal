import React from 'react';
import logoBookshop from './fotoBookshop/superHeroBook2.png';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TituloBookShop() {
  return (
   <div >
       <img className='img-fluid' src={logoBookshop} alt=""/>
       <p>TE PRESENTAMOS SUPERHEROES, 
         LA TIENDA DE COMICS MAS GRANDE DE ARGENTINA, 
         EN ELLAS PODRAS COMPRAR, VENDER, BUSCAR INFO Y 
         TODO LO RELACIONADO CON LOS COMICS DE HOY. </p>
   </div>
  );
}
