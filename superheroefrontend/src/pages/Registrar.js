//@ts-check
import React, { useEffect, useState } from 'react';
import FormularioRegistro from '../components/Registro/FormularioRegistro';
import Avatar from '../components/Avatar/Avatar';
import '../components/Registro/FormularioRegistro.css';
import Pie from '../components/FanzineZoneHome/fotoFanzineHome/Pie.png';




function Registrar() {

  return (
  
    <div>
    <div className='FormularioRegistro'>
      <h3 className='TituloRegistro'>
            Registro para NewsLetters
            </h3>
                    <div className='AvatarRegistro'>
    <Avatar />
    </div>
     <FormularioRegistro />
    </div>
    <div>
          <img style={{background: '#ffc1cc'}} className='img-fluid' src={Pie} alt="" />
        </div>
    </div>
  );
}

export default Registrar;