import React from 'react';
import ReactDOM from 'react-dom';
//import Button from 'antd/lib/button';
import { Button } from 'antd';
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
