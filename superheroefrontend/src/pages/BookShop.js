//@ts-check
import React from 'react';
import Tarjeta from '../components/Cards/cards';
import { Layout } from 'antd';

const { Content } = Layout;

function App() {
  return (
    <Layout>
<Content>
    
    <div >
     <Tarjeta />
    </div>
    </Content>
    </Layout>
  );
}

export default App;