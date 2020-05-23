//@ts-check
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const TablaNoticias = () => {
  const [respuestacomics, setRespuestacomics] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const searchInput = useRef()
  console.log(respuestacomics);
  useEffect(() => {
    const getlistadodecomics = async () => {
      axios.get('http://localhost:3000/Tarjeta/')
        .then((res) => {
          console.log(res.data);
          setRespuestacomics(res.data.tarjeta)
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

  const columns = [
    {
      title: 'Imagen',
      dataIndex: 'imagen',
      key: 'imagen',
      width: '10%',
      // ...getColumnSearchProps('imagen'),
      render: (imagen) =>{
        return <img src={imagen} alt="" style={{maxWidth: '150px'}}/>
      }
    },
    {
      title: 'Titulo',
      dataIndex: 'titulo',
      key: 'titulo',
      width: '10%',
      ...getColumnSearchProps('titulo'),
    },
    {
      title: 'Descripcion',
      dataIndex: 'descripcion',
      key: 'descripcion',
      width: '30%',
      ...getColumnSearchProps('descripcion'),
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
  ];
  return <Table columns={columns} dataSource={data} />;
}

export default TablaNoticias;
