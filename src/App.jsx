import './App.css';
// 引入React下面的Component模块=React.Component
import React, { Component } from 'react';
import Hello from './components/Hello';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
      </div>
    )
  }
}