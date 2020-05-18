//@ts-check
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/AgregarComics/AdminCards.css";
import { Button } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';


function App() {

  return (
    <div>
      <div className='TituloAdministrar'>
        <h2 >
          Administrar Pagina
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
        <Link to="adminregistros">
          <Button shape="round" icon={<FileAddOutlined />} >
            Administrar Registros
            </Button>
        </Link>
      </div>
    </div>
  );
}

export default App;