import React from 'react';
import "./Footer.css";
import { WeiboOutlined, TwitterOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';


export default function Footer() {
    return (

        <body>
            <div class="footer-dark">
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-md-3 item">
                                <h3>Servicios</h3>
                                <ul>
                                    <li><a href="#">Diseño Web</a></li>
                                    <li><a href="#">Desarrollo</a></li>
                                    <li><a href="#">Hosting</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-6 col-md-3 item">
                                <h3>Nosotros</h3>
                                <ul>
                                    <li><a href="#">Compañia</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Carrera</a></li>
                                </ul>
                            </div>
                            <div class="col-md-6 item text">
                                <h3>Super Heroe</h3>
                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                            </div>
                            <div class="col item social">
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
                        <p class="copyright">Super Heroe © 2020</p>
                    </div>
                </footer>
            </div>
        </body>

    );
}
