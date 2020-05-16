//@ts-check
import React, { useState, useEffect } from 'react';
import './CardsHome.css';
import Card001 from './fotoCards2/card 001.jpg'
import Card002 from './fotoCards2/card 002.jpg'
import Card003 from './fotoCards2/card 003.jpg'
import Card004 from './fotoCards2/card 004.jpg'
import { EyeOutlined, HeartOutlined, WechatOutlined } from '@ant-design/icons';



export default function CardsHome() {
  return (
   
       <div>
                <figure className="snip1253">
                    <div className="image"><img src={Card001} alt=""/></div>
                    <figcaption>
                        <div className="date"><span className="day">01</span><span className="month">Ene</span></div>
                        <h3>La locura de Batman comienza.</h3>
                        <p>
                        I don't need to compromise my principles, they don't have the slightest bearing on what happens to me anyway.
                        </p>
                    </figcaption>
                    <footer>
                        <div className="views"><EyeOutlined />928</div>
                        <div className="love"><HeartOutlined />198</div>
                        <div className="comments"><WechatOutlined />23</div>
                    </footer><a href="#"></a>
                </figure>
                <figure className="snip1253">
                    <div className="image"><img src={Card002} alt=""/></div>
                    <figcaption>
                        <div className="date"><span className="day">01</span><span className="month">Dec</span></div>
                        <h3>Flecha verde a la horca.</h3>
                        <p>
                        I don't need to compromise my principles, they don't have the slightest bearing on what happens to me anyway.
                        </p>
                    </figcaption>
                    <footer>
                    <div className="views"><EyeOutlined />928</div>
                        <div className="love"><HeartOutlined />198</div>
                        <div className="comments"><WechatOutlined />23</div>
                    </footer><a href="#"></a>
                </figure>
                <figure className="snip1253">
                    <div className="image"><img src={Card003} alt=""/></div>
                    <figcaption>
                        <div className="date"><span className="day">01</span><span className="month">Dec</span></div>
                        <h3>La venganza del rey agua.</h3>
                        <p>
                        I don't need to compromise my principles, they don't have the slightest bearing on what happens to me anyway.
                        </p>
                    </figcaption>
                    <footer>
                    <div className="views"><EyeOutlined />928</div>
                        <div className="love"><HeartOutlined />198</div>
                        <div className="comments"><WechatOutlined />23</div>
                    </footer><a href="#"></a>
                </figure>
                <figure className="snip1253">
                    <div className="image"><img src={Card004} alt=""/></div>
                    <figcaption>
                        <div className="date"><span className="day">01</span><span className="month">Dec</span></div>
                        <h3>Su origen comienza aqui!.</h3>
                        <p>
                        I don't need to compromise my principles, they don't have the slightest bearing on what happens to me anyway.
                        </p>
                    </figcaption>
                    <footer>
                    <div className="views"><EyeOutlined />928</div>
                        <div className="love"><HeartOutlined />198</div>
                        <div className="comments"><WechatOutlined />23</div>
                    </footer><a href="#"></a>
                </figure>
        </div>

    
  );
}

