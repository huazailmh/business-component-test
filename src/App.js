import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    componentCount: 0
  };

  addComponent = function() {
    console.log("onclick");
    this.setState({ componentCount: this.state.componentCount + 1 });
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
    return React.createElement("div", {}, button)
  }
}

export default App;
