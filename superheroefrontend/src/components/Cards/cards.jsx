import React from 'react';
import { Card, Avatar } from 'antd';
import { InfoCircleOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import './Card.css';

const { Meta } = Card;

const Tarjeta = props => {
    return (
                <div>
                <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
        <InfoCircleOutlined />,
        <InstagramOutlined />,
        <FacebookOutlined />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
  </Card>,
 
 </div>
);
           
    
};
export default Tarjeta
