//@ts-check
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/AgregarComics/AdminCards.css";
import { Button } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
import Pie from '../components/FanzineZoneHome/fotoFanzineHome/Pie.png';




function App() {

  return (
    <div>
    <div className="AdminDark img-fluid">
     
        <h2 >
          PANEL DE ADMINISTRACION
            </h2>
      <div >
        <Link to="agregarcomics">
          <Button style={{height: '30px', fontFamily: 'monospace', background: 'black', color:'white'}}shape="round" icon={<FileAddOutlined />} >
            Agregar Comics
            </Button>
        </Link>
      </div>
      <div >
        <Link to="administrarcomics">
          <Button style={{height: '30px', fontFamily: 'monospace', background: 'black', color:'white'}}shape="round" icon={<FileAddOutlined />} >
            Administrar Comics
            </Button>
        </Link>
      </div>
      <div >
        <Link to="adminregistros">
          <Button style={{height: '30px', fontFamily: 'monospace', background: 'black', color:'white'}}shape="round" icon={<FileAddOutlined />} >
            Administrar Registros
            </Button>
        </Link>
      </div>
      <div >
        <Link to="agregarcardconme">
          <Button style={{height: '30px', fontFamily: 'monospace', background: 'black', color:'white'}}shape="round" icon={<FileAddOutlined />} >
            Agregar Comics Conmemorativos
            </Button>
        </Link>
      </div>
      <div >
        <Link to="administrarcomicsconme">
          <Button style={{height: '30px', fontFamily: 'monospace', background: 'black', color:'white'}} shape="round" icon={<FileAddOutlined />} >
            Administrar Comics Conmemorativos
            </Button>
        </Link>
      </div>
      <div >
        <Link to="agregarnoticia">
          <Button style={{height: '30px', fontFamily: 'monospace', background: 'black', color:'white'}}shape="round" icon={<FileAddOutlined />} >
            Agregar Noticia
            </Button>
        </Link>
      </div>
      <div >
        <Link to="adminitrarnoticia">
          <Button style={{height: '30px', fontFamily: 'monospace', background: 'black', color:'white'}}shape="round" icon={<FileAddOutlined />} >
            Administrar Noticia
            </Button>
        </Link>
      </div>
    </div>
      <div>
          <img  style={{background: 'black', fontFamily: 'monospace'}}className='img-fluid' src={Pie} alt="" />
        </div>
   </div>   
  );
}

export default App;