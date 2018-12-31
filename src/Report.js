import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import { Table, Divider, Tag } from 'antd';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';
import { Row, Col } from 'antd';
import CruxList from "./CruxList";

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

class Report extends Component {
  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    //component should be retrieved by report name
    //report name comes from props
    var timestamp = new Date();
    this.state = {
      reportName: timestamp,
      componentArr: [
        {
          "type": CruxList,
          "props": {
            "dataSourceUrl": "xxx"
          }
        }
      ]
    };
  }

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
    //Table means pure UI component
    //here this component is a container

    var tableProps = {dataSource:dataSource, columns:columns};
    var table = React.createElement(Table, tableProps);

    
    var com = this.state.componentArr[0]
    var comProps = com.props;
    var type = com.type;
    var comIns = React.createElement(type, comProps);
    ;
    return React.createElement("div", {}, [React.createElement("h2", {}, this.state.reportName.toDateString()), comIns]);
  }
}

export default Report;
