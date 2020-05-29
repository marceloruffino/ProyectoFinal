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
    useEffect(() => {
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
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/Registro/${id}`)
      .then(() => {
        getlistadoderegistro();
      })
      .catch((error) => {
        console.log(error);
      })

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
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '10%',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Dc Comics',
      dataIndex: 'dcComics',
      key: 'dcComics',
      width: '10%',
      render: (value) => {
        return <Switch checked={value} />
      },
    },
    {
      title: 'Marvel Comics',
      dataIndex: 'marvelComics',
      key: 'marvelComics',
      width: '10%',
      render: (value) => {
        return <Switch checked={value} />
      },
    },
    {
      title: 'Dark Horse Comics',
      dataIndex: 'horseComics',
      key: 'horseComics',
      width: '10%',
      render: (value) => {
        return <Switch checked={value} />
      },
    },
    {
      title: 'Image Comics',
      dataIndex: 'imageComics',
      key: 'imageComics',
      width: '10%',
      render: (value) => {
        return <Switch checked={value} />
      },
    },
    {
      title: 'Noticias',
      dataIndex: 'newsLetter',
      key: 'newsLetter',
      width: '10%',
      render: (value) => {
      return <Switch checked={value} />
      },
    },
 
    {
      title: 'Borrar Registro',
      dataIndex: '_id',
      key: 'x',
      render: (_id) => <a onClick={() => { handleDelete(_id) }}>Borrar</a>,

    },
    
  ];
  return <Table columns={columns} dataSource={data} />;
}

export default TablaRegistro;
