//@ts-check
import React, { useState } from "react";
import { HeartOutlined , HeartFilled} from '@ant-design/icons';
import axios from 'axios';

export default function HeartLikes({initialValue, idComics}) {
  const [likes, setLikes] = useState(initialValue);
  const [updateLikes, setUpdateLikes] = useState(true);

  


  const handlelikes = (id) => {
  console.log("handlelikes -> id", id)
    
    const likestotales = likes + 1
    axios.put(`http://localhost:3000/articuloComics/likes/${idComics}`, {
      likes: likestotales

    })
      .then((res) => { setUpdateLikes(false); setLikes(likestotales)  })

      .catch((error) => {
        console.log(error.data);
      })
  };

  const handledislikes = (id) => {
  console.log("handledislikes -> id", id)
    
    const likestotales = likes - 1
    axios.put(`http://localhost:3000/articuloComics/likes/${idComics}`, {
      likes: likestotales

    })
      .then((res) => { setUpdateLikes(true); setLikes(likestotales) })

      .catch((error) => {
        console.log(error.data);
      })
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {updateLikes ? 
      <div style={{ marginRight: '5px', }}>
        <HeartOutlined onClick={() => { handlelikes() }} />
      </div> : 
      <div style={{ marginRight: '5px', }}>
        <HeartFilled style={{color: 'pink'}} onClick={() => { handledislikes() }} />
      </div>
      }
      <p style={{ paddingTop: '4px' }}>{likes}</p>
    </div>
  );
}


