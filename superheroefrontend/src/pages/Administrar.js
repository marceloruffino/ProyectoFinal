//@ts-check
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/AgregarComics/AdminCards.css";
import { Button } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
import BotonCorazon from '../components/BotonCorazon/BotonCorazon';
import Pie from '../components/FanzineZoneHome/fotoFanzineHome/Pie.png';



function App() {

  return (
    <div>
      <div className='TituloAdministrar'>
        <h2 >
          PANEL DE ADMINISTRACION
            </h2>
      </div>
      <div className='botonAgregar'>
        <Link to="agregarcomics">
          <Button shape="round" icon={<FileAddOutlined />} >
            Agregar Comics
            </Button>
        </Link>
      </div>
      <div className='botonAgregar'>
        <Link to="modificarcomics">
          <Button shape="round" icon={<FileAddOutlined />} >
            Administrar Comics
            </Button>
        </Link>
      </div>
      <div className='botonAgregar'>
        <Link to="adminregistros">
          <Button shape="round" icon={<FileAddOutlined />} >
            Administrar Registros
            </Button>
        </Link>
      </div>
      <div className='botonAgregar'>
        <Link to="agregarcardcome">
          <Button shape="round" icon={<FileAddOutlined />} >
            Administrar Cards Conmemorativas
            </Button>
        </Link>
      </div>
     
      <div>
          <img style={{background: '#ffc1cc'}} className='img-fluid' src={Pie} alt="" />
        </div>
    </div>
  );
}

export default App;