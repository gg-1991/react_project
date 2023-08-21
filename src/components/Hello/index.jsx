// 引入React下面的Component模块=React.Component
import React, { Component } from 'react';
import './index.css';

export default class Hello extends Component {
  render() {
    return (
      <div>
        <h2 className="title">hello words</h2>
      </div>
    )
  }
}