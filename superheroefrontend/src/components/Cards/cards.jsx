//@ts-check
import React, { useState, useEffect } from 'react';
import { Card, } from 'antd';
import { InfoCircleOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Card.css';
import axios from 'axios';

const { Meta } = Card;

const Tarjeta = () => {

  const [respuestatarjeta, setRespuestatarjeta] = useState([]);
  console.log(respuestatarjeta);
  useEffect(() => {
    const getlistadodetarjetas = async () => {
      axios.get("http://localhost:3000/tarjeta")
        .then((res) => {
          console.log(res.data);
          setRespuestatarjeta(res.data.tarjeta)
        })
        .catch((error) => {
          console.log(error.data);
        })

    }
    getlistadodetarjetas();
  }, [])

  return (

    <div className='CardsContainer'> {

      respuestatarjeta.map((respuesta) => (

        <Card

          cover={
            <img
              alt="example"
              src={respuesta.imagen}
            />
          }
          actions={[
            <InfoCircleOutlined />,
            <InstagramOutlined />,
            <FacebookOutlined />,
          ]}
        >
          <Meta
            title={respuesta.titulo}
            description={respuesta.descripcion}
          />
          <br></br>
          <p>Cantidad: {respuesta.cantidad}</p>
          <p>Precio: ${respuesta.precio}</p>
        </Card>


      ))
    }
    </div>


  );


};
export default Tarjeta;
