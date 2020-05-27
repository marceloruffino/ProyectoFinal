//@ts-check
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const TablaComicsConme = () => {
  const [respuestacomics, setRespuestacomics] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const searchInput = useRef()
  console.log(respuestacomics);
  useEffect(() => {
    const getlistadodetarjetasconm = async () => {
      axios.get('http://localhost:3000/articulocomicsconme')
        .then((res) => {
          console.log(res.data);
          setRespuestacomics(res.data.articuloComicsConme)
        })
        .catch((error) => {
          console.log(error.data);
        })
    }
    getlistadodetarjetasconm();
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

  const columns = [
    {
      title: 'Titulo',
      dataIndex: 'titulo',
      key: 'titulo',
      width: '10%',
      ...getColumnSearchProps('titulo'),
    },
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
      width: '10%',
      ...getColumnSearchProps('fecha'),
    },
    {
      title: 'Autor',
      dataIndex: 'autor',
      key: 'autor',
      width: '10%',
      ...getColumnSearchProps('autor'),
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
      // ...getColumnSearchProps('imagen'),
      render: (imagen2) =>{
        return <img src={imagen2} alt="" style={{maxWidth: '150px'}}/>
      }
    },
    {
      title: 'Texto 2',
      dataIndex: 'descripcion2',
      key: 'descripcion2',
      width: '30%',
      ...getColumnSearchProps('descripcion2'),
    },
    {
    title: 'Modificar Comics',
    dataIndex: '',
    key: 'x',
    render: () => <a>Modificar</a>,
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

export default TablaComicsConme;
