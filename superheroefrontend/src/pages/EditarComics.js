//@ts-check
import React from 'react';
import EditarComics from '../components/EditarComics/EditarComics';
import { Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import Pie from '../components/FanzineZoneHome/fotoFanzineHome/Pie.png';





function App() {
const history = useHistory();

const handleVolver = () => {
  history.push('/administrarcomics');
}

  return (
    <div>
      <div className='TituloAdministrar'>
        <h2>
          Editar Comics
                </h2>
      </div>


      <div>
        <EditarComics />
      </div>
      <div className='botonAgregar'>
        
          <Button onClick={handleVolver} shape="round" icon={<RollbackOutlined />} >
            Volver
          </Button>

        
      </div>
      <div>
          <img style={{background: '#ffc1cc'}} className='img-fluid' src={Pie} alt="" />
        </div>
    </div>

  );
}

export default App;