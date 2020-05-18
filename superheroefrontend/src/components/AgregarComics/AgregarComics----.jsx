//@ts-check
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminCards.css'
import { Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import {
    Form,
    Input,

} from 'antd';
import { Link } from 'react-router-dom';


export default function AgregarTarjeta() {
    const [componentSize, setComponentSize] = useState('small');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    }; return (
        <div >
            <div className='TituloAdministrar'>
                <h2>
                    Agregar Comics
                </h2>
            </div>
            <div className='FormularioRegistro'>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    initialValues={{ size: componentSize }}
                    onValuesChange={onFormLayoutChange}
                    size={componentSize}
                >

                    <Form.Item label="Imagen">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Titulo">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Descripcion">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Cantidad">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Precio">
                        <Input />
                    </Form.Item>

                </Form>
                <div className='botonAgregar'>
                    <div>
        <Link to="administrar">
          <Button shape="round" icon={<RollbackOutlined />} >
            Volver
            </Button>

        </Link>
        </div>
      </div>
            </div>
        </div>
    );
}
