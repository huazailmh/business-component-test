import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import { Table, Divider, Tag } from 'antd';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';

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
    //const cc = this.state.componentCount;

/*     return (
      <div className="App">
        <Button onClick={this.addComponent.bind(this)}>Add Component ({this.state.componentCount})</Button>
      </div>
    ); */

    var buttonProps = {onClick: this.addComponent.bind(this)};
    var childrend = "Add Component (" + this.state.componentCount + ")"
    var button = React.createElement(Button, buttonProps, childrend);
    return React.createElement("div", {id: "c100", ref: this.myRef}, button)
  }
}

export default App;
