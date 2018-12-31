import React from 'react';
import ReactDOM from 'react-dom';
//import Button from 'antd/lib/button';
import { Button } from 'antd';
import { Table, Divider, Tag } from 'antd';
import 'antd/dist/antd.css';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Button type="danger">Button</Button>, document.getElementById('root'));

// ReactDOM.render(
//     <div>
//       <Button type="primary" size="large">Primary</Button>
//       <Button>Default</Button>
//       <Button type="dashed">Dashed</Button>
//       <Button type="danger">Danger</Button>
//     </div>,
//     document.getElementById('root')
//   );
/* 
var button1Props = {type: "primary", size: "large"};
var button1 = React.createElement(Button, button1Props, "Button1");

var button2Props = {};
var button2 = React.createElement(Button, button2Props, "Button2");

var button3Props = {type: "dashed"}
var button3 = React.createElement(Button, button3Props, "Button3");

var button4Props = {type: "danger"}
var button4 = React.createElement(Button, button4Props, "Button4");

var button5OnClick = function(event) {
    console.log("event.target: " + event.target);
    console.log("event.target.type: " + event.target.type);
    console.log("event.target.size: " + event.target.size);
}
var button5Props = {type: "danger", size: "large", onClick: button5OnClick};

var button5 = React.createElement(Button, button5Props, "Button5");

var reactElement = React.createElement("div", {}, [button1,button2,button3,button4, button5]);

ReactDOM.render(reactElement, document.getElementById('root'));
 */

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];

var props = {columns: columns, dataSource: data};
var reactElement = React.createElement(Table, props)
ReactDOM.render(reactElement, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
