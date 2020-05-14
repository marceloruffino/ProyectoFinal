//@ts-check
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const data = [
  {
    key: '1',
    name: 'Marcelo',
    lastname:'Ruffino',
    sex:'Masculino',
    age: '17 03 1970',
    address: 'Av. Central 3936',
    provincia: 'Tucuman',
    cp: '4.000',
    tel:'4345606',
    email:'marceloruffino@hotmail.com',
    news:'true',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

class TablaRegistro extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div  style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
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
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#F8ED89', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
        width: '10%',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Apellido',
        dataIndex: 'lastname',
        key: 'lastname',
        width: '10%',
        ...this.getColumnSearchProps('lastname'),
      },
      {
        title: 'Sexo',
        dataIndex: 'sex',
        key: 'sex',
        width: '10%',
        ...this.getColumnSearchProps('sex'),
      },
      {
        title: 'Fecha.Nac',
        dataIndex: 'age',
        key: 'age',
        width: '10%',
        ...this.getColumnSearchProps('age'),
      },
      {
        title: 'Direccion',
        dataIndex: 'address',
        key: 'address',
        width: '30%',
        ...this.getColumnSearchProps('address'),
      },
      {
        title: 'Provincia',
        dataIndex: 'provincia',
        key: 'provincia',
        width: '10%',
        ...this.getColumnSearchProps('provincia'),
      },
      {
        title: 'Cd. Postal',
        dataIndex: 'cp',
        key: 'cp',
        width: '10%',
        ...this.getColumnSearchProps('cp'),
      },
      {
        title: 'Telefono',
        dataIndex: 'tel',
        key: 'tel',
        width: '10%',
        ...this.getColumnSearchProps('tel'),
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: '10%',
        ...this.getColumnSearchProps('email'),
      },
      {
        title: 'Newsletters',
        dataIndex: 'news',
        key: 'news',
        width: '10%',
        ...this.getColumnSearchProps('news'),
      },


    ];
    return <Table columns={columns} dataSource={data} />;
  }
}
export default TablaRegistro;
