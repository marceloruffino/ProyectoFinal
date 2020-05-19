//@ts-check
import React from 'react';
import { Layout, Carousel } from 'antd';

import './Carousel.css';
import carousel001 from './fotoCarousel3/acces001.jpg'
import carousel002 from './fotoCarousel3/acces002.jpg'
import carousel003 from './fotoCarousel3/acces003.jpg'
import carousel004 from './fotoCarousel3/acces004.jpg'
import carousel005 from './fotoCarousel3/acces005.jpg'
import carousel006 from './fotoCarousel3/acces006.jpg'





export default function CaruselFotosAccesorios() {
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
