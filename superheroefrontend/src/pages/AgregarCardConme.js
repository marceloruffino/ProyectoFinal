//@ts-check
import React, { useEffect, useState } from 'react';
import AddList from '../components/AgregarComics/AgregarComics';
import { Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Pie from '../components/FanzineZoneHome/fotoFanzineHome/Pie.png';
import AddCardConme from '../components/AgregarCardConme/AgregarCardConme';





function App() {

  return (



    <div>
      <div>
        <AddCardConme />
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

export default App;