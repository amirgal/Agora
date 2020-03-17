import React, { Component } from 'react';
import Market from './components/Market'
import './App.css';
import { observer } from 'mobx-react'

@observer
class App extends Component{

  render() {
    return (
      <div>
        <Market store={this.props.inventory}/>
      </div>
    );
  }
}

export default App;
