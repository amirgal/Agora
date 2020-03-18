import React, { Component } from 'react';
import Market from './components/Market'
import './App.css';
import { observer, inject } from 'mobx-react'

@inject('inventory')
@observer
class App extends Component{

  render() {
    return (
      <div>
        <Market />
      </div>
    );
  }
}

export default App;
