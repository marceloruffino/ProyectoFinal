//@ts-check
import React from 'react';
import { Layout, Carousel } from 'antd';

import './Carousel.css';
import carousel001 from './fotoCarousel/Aquaman2.jpg'
import carousel002 from './fotoCarousel/BatmanDoll2.jpg'
import carousel003 from './fotoCarousel/Wonderwoman2.jpg'
import carousel004 from './fotoCarousel/Flash.jpg'
import carousel005 from './fotoCarousel/Nedroid.jpg'
import carousel006 from './fotoCarousel/Superman.jpg'


const { Content } = Layout;



export default function CaruselFotos() {
    return (
        <div>
            <div >
                <Carousel autoplay>
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
                    <img
                            alt="foto4"
                            src={carousel004}
                        />
                        
                    </div>
                    <div>
                    <img
                            alt="foto5"
                            src={carousel005}
                        />
                        
                    </div>
                    <div>
                    <img
                            alt="foto6"
                            src={carousel006}
                        />
                        
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
