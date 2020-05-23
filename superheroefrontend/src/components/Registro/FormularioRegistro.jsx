//@ts-check
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormularioRegistro.css';

import {
    Form,
    Input,
    Button,
    Switch,
} from 'antd';



export default function FormularioRegistro() {
    const [componentSize, setComponentSize] = useState('small');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };        return (
            <div>
                <div >
                    
                    <div>
                        <Form
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 14 }}
                            layout="horizontal"
                            initialValues={{ size: componentSize }}
                            onValuesChange={onFormLayoutChange}
                            size={componentSize}
                        >
                            <Form.Item label="Nombre">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Apellido">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Email">
                                <Input />
                            </Form.Item>
                            <h5 style={{paddingLeft: '40px', paddingBottom: '20px'}}>Elige tu favorito:</h5>
                            <Form.Item label="DC Comics">
                                <Switch />
                            </Form.Item>
                            <Form.Item label="Marvel Comics">
                                <Switch />
                            </Form.Item>
                            <Form.Item label="Dark Horse Comics">
                                <Switch />
                            </Form.Item>
                            <Form.Item label="Image Comics">
                                <Switch />
                            </Form.Item>
                            <Form.Item label="Noticias de SUPERHEROE!">
                                <Switch />
                            </Form.Item>
                            <Form.Item label="Gracias!">
                                <Button>Enviar</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
