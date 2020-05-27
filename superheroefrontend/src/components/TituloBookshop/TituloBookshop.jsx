import React from 'react';
import logoBookshop from './fotoBookshop/superHeroBook3.png';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TituloBookShop() {
  return (
    <div>
      <div >
        <img className='img-fluid' src={logoBookshop} alt="" />

      </div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <p style={{ width: '1000px', paddingBottom: '30px', marginBottom: '10px', borderBottom: '1px solid' }}>EN NUESTRA TIENDA BOOKSHOP PODRAS ACCEDER AL STOCK MAS COMPLETO DE COMICS NACIONALES O IMPORTADOS, VER EL RANKING DE LOS MAS COMPRADOS Y PARTICIPAR. ENTRA YA! </p>
      </div>
    </div>
  );
}
