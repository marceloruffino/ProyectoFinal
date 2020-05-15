//@ts-check
import React, { useEffect, useState } from 'react';
import FormularioRegistro from '../components/Registro/FormularioRegistro';
import Avatar from '../components/Avatar/Avatar';
import '../components/Registro/FormularioRegistro.css';



function Registrar() {

  return (
  
    
    <div className='FormularioRegistro'>
      <h3 className='TituloRegistro'>
            Registrarse
            </h3>
                    <div className='AvatarRegistro'>
    <Avatar />
    </div>
     <FormularioRegistro />
    </div>
    
  );
}

export default Registrar;