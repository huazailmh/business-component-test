import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import { Table, Divider, Tag } from 'antd';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';
import { Row, Col } from 'antd';
import { List } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class CruxList extends Component {
  
  constructor(props) {
    super(props);
    this.refresh = this.refresh.bind(this);

  }
  
  refresh () {
    console.log("refresh: " + JSON.stringify(this.props));
  }
  

  render() {
    //Table means pure UI component
    //here this component is a container

    


    return (
      <div>
        <Button onClick={this.refresh}>Refresh</Button>
        <Button>Export</Button>
        <List dataSource={data} 
        renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    );
  }
}

export default CruxList;
