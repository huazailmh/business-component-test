import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import { Table, Divider, Tag } from 'antd';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';
import { Row, Col } from 'antd';
import Report from "./Report";

const {
  Header, Content, Footer, Sider,
} = Layout;

const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];

class App extends Component {
  state = {
    componentCount: 0
  };
  myRef = React.createRef();

  addComponent = function() {
    console.log("onclick");
    this.setState({ componentCount: this.state.componentCount + 1 });

    var buttonProps = {onClick: this.addComponent.bind(this)};
    var childrend = "Add Component (" + this.state.componentCount + ")"
    var button = React.createElement(Button, buttonProps, childrend);

    var tarr = [];
    tarr.push(button);
    for(var i = 0; i < this.state.componentCount; i++) {
      var tableProps = {dataSource:dataSource, columns:columns};
      var table = React.createElement(Table, tableProps);

      tarr.push(table);
    }

    

    

    // ReactDOM.render(React.createElement("div", {id: "c100"}, tarr), document.getElementById('c100'));

    ReactDOM.render(React.createElement("div", {id: "c100", ref: this.myRef}, tarr), ReactDOM.findDOMNode(this.myRef.current));
    

  }

  render() {
    var ret = (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => { console.log(broken); }}
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <Row>
              <Col span={12}><Report /></Col>
              {/* <Col span={12}>col-12</Col> */}
            </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )



    return ret;
  }
}

export default App;
