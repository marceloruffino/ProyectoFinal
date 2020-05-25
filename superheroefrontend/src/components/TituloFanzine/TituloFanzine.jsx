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
      <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}} >
       <p  style={{width:'800px', paddingBottom: '30px', marginBottom: '10px', borderBottom: '1px solid'}}>FANZINE ZONE DIVIERTETE ZAMBULLETE EN LAS NOTICIAS MAS ACTUALES, EN LOS COMICS DE PELEAS DE DC VS. MARVEL, LAS HISTORIAS MAS COMPLETAS DE EPICAS BATALLAS ENTRE NUESTROS SUPER HEROES. ÉSTA ES TU ZONA. </p>
      </div>
   </div>
  );
}
