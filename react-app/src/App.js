import React, {Component} from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InventoryList from './InventoryList';
import InventoryEdit from './InventoryEdit';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' exact={true} element={<Home/>} />
          <Route path='/inventories' exact={true} element={<InventoryList/>} />
          <Route path='/inventories/:id' element={<InventoryEdit/>} />
          <Route path="/inventories/new" element={<InventoryEdit />} />
          <Route path="/inventories/edit/:id" element={<InventoryEdit />} />
        </Routes>
      </Router>
    )
  }
}

export default App;