//@ts-check
import React from 'react';
import { Layout, Carousel } from 'antd';

import './Carousel.css';
import carousel001 from './fotoCarousel/Aquaman2.jpg'
import carousel002 from './fotoCarousel/BatmanDoll2.jpg'
import carousel003 from './fotoCarousel/Wonderwoman2.jpg'


const { Content } = Layout;



export default function CaruselFotos() {
    return (
        <div>
            <div >
                <Carousel>
                    <div>
                        <img
                            alt="foto1"
                            src={carousel001}
                        />
                        
                    </div>
                    <div>
                    <img
                            alt="foto2"
                            src={carousel002}
                        />
                        
                    </div>
                    <div>
                    <img
                            alt="foto3"
                            src={carousel003}
                        />
                        
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
