//@ts-check
import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import './AdminCards.css'

export default function AddList() {
  const [picture, setPicture] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [cantidad, setCantidad] = useState(false);
  const [precio, setPrecio] = useState(false);

  const [loading, setLoading] = useState(false);
  const [respuestaMensaje, setRespuestaMensaje] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const payload = new FormData();
      payload.append("imagen", picture);
      payload.append("titulo", titulo.toString());
      payload.append("descripcion", descripcion.toString());
      payload.append("cantidad", cantidad.toString());
      payload.append("precio", precio.toString());






      const response = await axios.post(
        'http://localhost:3000/tarjeta/',
        payload
      );
      setRespuestaMensaje(response.data.mensaje);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePicture = (e) => {
    setPicture(e.target.files[0]);
  };

  const imageURL = picture && URL.createObjectURL(picture);

  return (
    <div>
       <div className='TituloAdministrar'>
                <h2>
                    Agregar Comics
                </h2>
            </div>
            <div>

            </div>
    <div >
      <form
        className='FormularioAgregar'
        onSubmit={handleSubmit}>
          <label >Agregar Imagen</label>
            {picture && <img src={imageURL} style={{ width: 200 }} />}
          <input
          type="file"
          onChange={handlePicture}
        />
        <br></br>
        <label >Titulo</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <br></br>
        <label>Descripcion</label>
        <textarea
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Texto Descriptivo"
          required
        ></textarea>
        <br></br>
        <label >Cantidad</label>
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          required
        />
        <br></br>
        <label >Precio</label>
            <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
        <br></br>
 
        {loading ? (
          <span >Loading...</span>
        ) : (
          <button className=" bg-blue-700 rounded p-2" type="submit">
            Agregar
          </button>
        )}
        <p className="text-white">{respuestaMensaje}</p>
        
      </form>
    </div>
    </div>
  );
}
