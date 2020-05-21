//@ts-check
import React, { useState, useEffect, } from "react";
import { HeartOutlined } from '@ant-design/icons';
import axios from 'axios';

export default function Likes() {
  const [likes, setLikes] = useState(Number);
  const [updateLikes, setUpdateLikes] = useState(true);
  const id = '5ec311f14ab51d0c864b3878';

  const getlikes = () => {
    axios.get(`http://localhost:3000/tarjeta/${id}`)
      .then((res) => { setLikes(res.data.tarjeta.likes) })
      .catch((error) => {
        console.log(error.data);
      })

  };

  useEffect(() => {
 
    getlikes()

  }, [])
  const handlelikes = (id) => {
    const likestotales = likes + 1
    axios.put(`http://localhost:3000/tarjeta/${id}`, {
      likes: likestotales

    })
      .then((res) => { setUpdateLikes(false);  getlikes()})

      .catch((error) => {
        console.log(error.data);
      })
  };

  const handledislikes = (id) => {
    const likestotales = likes - 1
    axios.put(`http://localhost:3000/tarjeta/${id}`, {
      likes: likestotales

    })
      .then((res) => { setUpdateLikes(true); getlikes()})

      .catch((error) => {
        console.log(error.data);
      })
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {updateLikes ? 
      <div style={{ marginRight: '5px', }}>
        <HeartOutlined onClick={() => { handlelikes(id) }} />
      </div> : 
      <div style={{ marginRight: '5px', }}>
        <HeartOutlined onClick={() => { handledislikes(id) }} />
      </div>
      }
      <p style={{ paddingTop: '4px' }}>{likes}</p>
    </div>
  );
}


