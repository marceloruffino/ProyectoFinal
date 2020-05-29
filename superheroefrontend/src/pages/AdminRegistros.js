//@ts-check
import React from 'react';
import TablaRegistro from '../components/TablaRegistro/TablaRegistro';
import '../components/TablaRegistro/TablaRegistro.css';
import '../components/AgregarComics/AdminCards.css'
import { Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Pie from '../components/FanzineZoneHome/fotoFanzineHome/Pie.png';


function AdminRegistros() {

  return (
<div>
    <div>
      <div className='TituloAdministrar'>
        <h2>
          Administrar Registros
        </h2>
    </div>
      <div className='TablaRegistro'>
        <TablaRegistro />
      </div>
    </div>

    <div className='botonAgregar'>
      <Link to="administrar">
        <Button shape="round" icon={<RollbackOutlined />} >
          Volver
</Button>

      </Link>
    </div>
    <div>
          <img style={{background: '#ffc1cc'}} className='img-fluid' src={Pie} alt="" />
        </div>
    </div>
  );
}

export default AdminRegistros;