//@ts-check
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Pie from '../components/FanzineZoneHome/fotoFanzineHome/Pie.png';
import AddNews from '../components/AgregarNoticia/AgregarNoticia';





function App() {

  return (



    <div>
      <div>
        <AddNews />
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