//@ts-check
import React, { useState, useEffect } from 'react';
import './CardsHome.css';
import { EyeOutlined, HeartOutlined, WechatOutlined } from '@ant-design/icons';
import axios from 'axios';



export default function TarjetaConmemorativa() {
    const [respuestatarjetaconm, setRespuestatarjetaConm] = useState([]);
    console.log(respuestatarjetaconm);
    useEffect(() => {
        const getlistadodetarjetasconm = async () => {
            axios.get("http://localhost:3000/tarjetaConmemorativa")
                .then((res) => {
                    console.log(res.data);
                    setRespuestatarjetaConm(res.data.tarjetaConme)
                })
                .catch((error) => {
                    console.log(error.data);
                })

        }
        getlistadodetarjetasconm();
    }, [])

    return (

        <div> {
            respuestatarjetaconm.map((respuesta) => (

                <figure key={respuesta._id}className="snip1253">
                    <div className="image"><img src={respuesta.imagen} alt="" /></div>
                    <figcaption>
                        <div className="date"><span className="day">{respuesta.fecha}</span><span className="month">Ene</span></div>
                        <h3>{respuesta.titulo}</h3>
                        <p>
                            {respuesta.descripcion}
                        </p>
                    </figcaption>
                    <footer>
                        <div className="views"><EyeOutlined />928</div>
                        <div className="love"><HeartOutlined />{respuesta.likes}</div>
                        <div className="comments"><WechatOutlined />23</div>
                    </footer><a href="#"></a>
                </figure>
            ))
        }
        </div>


    );
}