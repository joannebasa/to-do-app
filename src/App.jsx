import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Add from "./containers/Add";
import Filters from "./containers/Filters";
import Item from "./containers/Item";
import List from "./containers/List";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Add />
        <Filters />
        <List />
      </div>
    );
  }
}

export default App;
