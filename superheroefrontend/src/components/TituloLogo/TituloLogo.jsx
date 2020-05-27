import React from 'react';
import logo from './fotoLogo/superHeroLogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TituloLogo() {
  return (
    <div>
      <div>
      <img className='img-fluid mx-auto d-block' src={logo} alt=""/>
      </div>
      <br></br>
   <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
       <p style={{width:'1000px', paddingBottom: '30px', marginBottom: '10px'}}>TE PRESENTAMOS SUPERHEROES, 
         LA TIENDA DE COMICS MAS GRANDE DE ARGENTINA, 
         EN ELLAS PODRAS COMPRAR, VENDER, BUSCAR INFO Y 
         TODO LO RELACIONADO CON LOS COMICS DE HOY. </p>
   </div>
    </div>
  );
}
