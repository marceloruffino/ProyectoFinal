import React from 'react';
import logoBookshop from './fotoBookshop/superHeroBook2.png';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TituloBookShop() {
  return (
    <div>
   <div >
       <img className='img-fluid' src={logoBookshop} alt=""/>
       
   </div>
   <br/>
   <div>
   <p style={{textAlign: 'center'}}>EN NUESTRA TIENDA BOOKSHOP PODRAS ACCEDER AL STOCK MAS COMPLETO DE COMICS NACIONALES O IMPORTADOS, VER EL RANKIG DE LOS MAS COMPRADOS Y PARTICIPAR. ENTRA YA! </p>

   </div>
   </div>
  );
}
