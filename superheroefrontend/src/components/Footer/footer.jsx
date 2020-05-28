import React from 'react';
import "./Footer.css";
import { WeiboOutlined, TwitterOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';


export default function Footer() {
    return (

        
            <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Servicios</h3>
                                <ul>
                                    <li><a href="#">Diseño Web</a></li>
                                    <li><a href="#">Desarrollo</a></li>
                                    <li><a href="#">Hosting</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Nosotros</h3>
                                <ul>
                                    <li><a href="#">Compañia</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Carrera</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>Super Heroe</h3>
                                <p>Nuestra tienda, creada para suplir a los mas exigentes lectores, fans de comics, locos por sus novedades y materiales ineditos. Una cadena dependiente de Dc y Marvel Nueva york.</p>
                            </div>
                            <div className="col item social">
                                <a href="#">
                                <FacebookOutlined />
                                </a>
                                <a href="#">
                                <InstagramOutlined />
                                </a>
                                <a href="#">
                                <TwitterOutlined />
                                </a>
                                <a href="#">
                                <WeiboOutlined />
                                </a>
                            </div>
                        </div>
                        <p className="copyright">Super Heroe © 2020</p>
                    </div>
                </footer>
            </div>
        

    );
}
