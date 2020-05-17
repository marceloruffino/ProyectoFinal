//@ts-check
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Table, Input, Button, Space, Switch } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const TablaRegistro = () => {
  const [respuestaregistro, setRespuestaregistro] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const searchInput = useRef()
  console.log(respuestaregistro);
  useEffect(() => {
    const getlistadoderegistro = async () => {
      axios.get('http://localhost:3000/Registro/')
        .then((res) => {
          console.log(res.data);
          setRespuestaregistro(res.data.registro)
        })
        .catch((error) => {
          console.log(error.data);
        })
    }
    getlistadoderegistro();
  }, [])


  const data = respuestaregistro



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

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
      width: '10%',
      ...getColumnSearchProps('nombre'),
    },
    {
      title: 'Apellido',
      dataIndex: 'apellido',
      key: 'apellido',
      width: '10%',
      ...getColumnSearchProps('apellido'),
    },
    {
      title: 'Sexo',
      dataIndex: 'sexo',
      key: 'sexo',
      width: '10%',
      ...getColumnSearchProps('sexo'),
    },
    {
      title: 'Fecha.Nac',
      dataIndex: 'fechaNacimiento',
      key: 'fechaNacimiento',
      width: '10%',
      ...getColumnSearchProps('fechaNacimiento'),
    },
    {
      title: 'Direccion',
      dataIndex: 'direccion',
      key: 'direccion',
      width: '30%',
      ...getColumnSearchProps('direccion'),
    },
    {
      title: 'Provincia',
      dataIndex: 'provincia',
      key: 'provincia',
      width: '10%',
      ...getColumnSearchProps('provincia'),
    },
    {
      title: 'Cd. Postal',
      dataIndex: 'codigoPostal',
      key: 'codigoPostal',
      width: '10%',
      ...getColumnSearchProps('codigoPostal'),
    },
    {
      title: 'Telefono',
      dataIndex: 'telefono',
      key: 'telefono',
      width: '10%',
      ...getColumnSearchProps('telefono'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '10%',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Newsletters',
      dataIndex: 'newsLetter',
      key: 'newsLetter',
      width: '10%',
      render: (value) => {
      
    
      return <Switch checked={value} />

      },
      
    },


  ];
  return <Table columns={columns} dataSource={data} />;
}

export default TablaRegistro;
