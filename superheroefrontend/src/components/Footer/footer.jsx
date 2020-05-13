import React from 'react';
import { Layout } from 'antd';
import "./Footer.css";
import { WeiboOutlined, TwitterOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';

const { Content } = Layout;

export default function Footer() {
  return (
   <Content>
           <body >

    <div className="footer-dark">
        <footer>
            <div className="footerAmarillo">
                <div >
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                    <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                        </div>
                    <div className="col item social">
                        <a href="#">
                            <i className="icon"><FacebookOutlined /></i>
                        </a>
                        <a href="#">
                            <i className="icon"><InstagramOutlined /></i>
                        </a>
                        <a href="#">
                        <i className="icon"><TwitterOutlined /></i>
                        </a>
                        <a href="#">
                        <i className="icon"><WeiboOutlined /></i>
                        </a>
                    </div>
                </div>
                <p className="copyright">SuperHERO © 2020</p>
            </div>
        </footer>
    </div>
</body>
   </Content>
  );
}
