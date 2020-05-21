//@ts-check
import React, { useState } from 'react';
import axios from "axios";
import './AdminCards.css'

export default function AddCardConme() {
  const [imagen, setImagen] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [likes, setLikes] = useState("");

  const [loading, setLoading] = useState(false);
  const [respuestaMensaje, setRespuestaMensaje] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const payload = new FormData();
      payload.append("imagen", imagen);
      payload.append("titulo", titulo.toString());
      payload.append("descripcion", descripcion.toString());
      payload.append("fecha", fecha.toString());
      payload.append("likes", likes.toString());






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
    setImagen(e.target.files[0]);
  };

  const imageURL = imagen && URL.createObjectURL(imagen);

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
            {imagen && <img src={imageURL} style={{ width: 200 }} />}
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
        <label >Fecha</label>
        <input
          type="text"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
        <br></br>
        <label >Likes</label>
            <input
          type="text"
          value={likes}
          onChange={(e) => setLikes(e.target.value)}
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
