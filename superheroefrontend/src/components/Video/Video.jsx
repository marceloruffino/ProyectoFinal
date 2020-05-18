//@ts-check
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormularioRegistro.css';

import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    DatePicker,
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
                            <Form.Item label="TAMAÑO DEL FORM" name="size" >
                                <Radio.Group>
                                    <Radio.Button value="small">Pequeño</Radio.Button>
                                    <Radio.Button value="middle">Mediano</Radio.Button>
                                    <Radio.Button value="large">Grande</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Nombre">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Apellido">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Sexo" >
                                <Select >
                                    <Select.Option value="masculino" className='TextoSubmenu'>Masculino</Select.Option>
                                    <Select.Option value="femenino" className='TextoSubmenu'>Femenino</Select.Option>
                                    <Select.Option value="nobinario" className='TextoSubmenu'>No binario</Select.Option>
                                    <Select.Option value="fluido" className='TextoSubmenu'>Género Fluido</Select.Option>
                                    <Select.Option value="vulcan" className='TextoSubmenu'>Vulcan</Select.Option>

                                </Select>
                            </Form.Item>
                            <Form.Item label="Fecha de Nacimiento">
                                <DatePicker />
                            </Form.Item>
                            <Form.Item label="Direccion">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Provincia">
                                <Input />
                            </Form.Item>
                            <Form.Item label="C.P">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Telefono">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Email">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Recibir Newsletters">
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
