//@ts-check
import React, { useEffect, useState } from 'react';
import Tarjeta from '../components/Cards/Cards';
import { Layout } from 'antd';

const { Content } = Layout;

function BookShop() {

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

export default BookShop;