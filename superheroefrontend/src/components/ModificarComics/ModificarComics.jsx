//@ts-check
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const TablaComics = () => {
  const history = useHistory();

  const [respuestacomics, setRespuestacomics] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const searchInput = useRef()
  console.log(respuestacomics);
  useEffect(() => {
    const getlistadodecomics = async () => {
      axios.get('http://localhost:3000/articuloComics')
        .then((res) => {
          console.log(res.data);
          setRespuestacomics(res.data.articuloComics)
        })
        .catch((error) => {
          console.log(error.data);
        })
    }
    getlistadodecomics();
  }, [])


  const data = respuestacomics



  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node =>
            searchInput.current = node
          }
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#def2fe' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current.select());
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#F8ED89', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
          text
        ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('')
  };
  const handleEdit = (id) => {
  console.log("handleEdit -> id", id)
    
    history.push(`/editarcomics/${id}`)
  };

  const columns = [
    {
      title: 'Titulo',
      dataIndex: 'titulo',
      key: 'titulo',
      width: '10%',
      ...getColumnSearchProps('titulo'),
    },
    {
      title: 'Imagen Principal',
      dataIndex: 'imagen',
      key: 'imagen',
      width: '10%',
      // ...getColumnSearchProps('imagen'),
      render: (imagen) =>{
        return <img src={imagen} alt="" style={{maxWidth: '150px'}}/>
      }
    },
    {
      title: 'Autor',
      dataIndex: 'autor',
      key: 'autor',
      width: '10%',
      ...getColumnSearchProps('autor'),
    },
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
      width: '10%',
      ...getColumnSearchProps('fecha'),
    },
 
    {
      title: 'Texto 1',
      dataIndex: 'descripcion1',
      key: 'descripcion1',
      width: '30%',
      ...getColumnSearchProps('descripcion1'),
    },
    {
      title: 'Imagen Secundaria',
      dataIndex: 'imagen2',
      key: 'imagen2',
      width: '10%',
      render: (imagen2) =>{
        return <img src={imagen2} alt="" style={{maxWidth: '150px'}}/>
      }
    },
    {
      title: 'Cantidad',
      dataIndex: 'cantidad',
      key: 'cantidad',
      width: '10%',
      ...getColumnSearchProps('cantidad'),
    },
    {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio',
      width: '10%',
      ...getColumnSearchProps('precio'),
    },
    {
      title: 'Likes',
      dataIndex: 'likes',
      key: 'likes',
      width: '10%',
      ...getColumnSearchProps('likes'),
    },
    {
      title: 'Modificar Comics',
      dataIndex: '_id',
      key: 'x',
      width: '10%',
      
      render: (_id) => <a onClick={() => {handleEdit(_id)}}>Modificar</a>,
    
    },
    {
      title: 'Borrar Comics',
      dataIndex: '',
      key: 'x',
      render: () => <a>Borrar</a>,

    },
  ];
  return <Table columns={columns} dataSource={data} />;
}

export default TablaComics;
