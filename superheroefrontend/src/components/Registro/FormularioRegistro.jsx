//@ts-check
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormularioRegistro.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import {
    Form,
    Input,
    Button,
    Switch,
} from 'antd';



export default function FormularioRegistro() {
    const history = useHistory();
    const [componentSize, setComponentSize] = useState('small');
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [dcComics, setDcComics] = useState(false);
    const [marvelComics, setMarvelComics] = useState(false);
    const [horseComics, setHorseComics] = useState(false);
    const [imageComics, setImageComics] = useState(false);
    const [newsLetter, setNewsLetter] = useState(false);

    const [loading, setLoading] = useState(false);
    const [respuestaMensaje, setRespuestaMensaje] = useState("");


    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);


            const response = await axios.post(
                'http://localhost:3000/registro', {
                nombre,
                apellido,
                email,
                dcComics,
                marvelComics,
                horseComics,
                imageComics,
                newsLetter,
            });
            setRespuestaMensaje(response.data.mensaje);
        } catch (error) {
            console.error(error.data);
        } finally {
            setLoading(false);
            history.push('/home')
        }
    };

    return (
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
                            <Input
                                value={nombre}

                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item label="Apellido">
                            <Input
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </Form.Item>
                        <h5 style={{ paddingLeft: '40px', paddingBottom: '20px' }}>Elige tu favorito:</h5>
                        <Form.Item label="DC Comics">
                            <Switch
                                onChange={(e) => setDcComics(true)}

                            />
                        </Form.Item>
                        <Form.Item label="Marvel Comics">
                            <Switch
                                onChange={(e) => setMarvelComics(true)}
                            />
                        </Form.Item>
                        <Form.Item label="Dark Horse Comics">
                            <Switch
                                onChange={(e) => setHorseComics(true)}

                            />
                        </Form.Item>
                        <Form.Item label="Image Comics">
                            <Switch
                                onChange={(e) => setImageComics(true)}

                            />
                        </Form.Item>
                        <Form.Item label="Noticias de SUPERHEROE!">
                            <Switch
                                onChange={(e) => setNewsLetter(true)}

                            />
                        </Form.Item>
                        <Form.Item label="Gracias!">
                            <Button
                                onClick={handleSubmit}
                            >Enviar</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}
