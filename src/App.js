import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import AddScreen from './components/AddScreen';
import DetailScreen from './components/DetailScreen';




class App extends Component {
  render() {
    return( 
    <div>
      <Route path="/" exact component={HomeScreen} /> 
      <Route path="/add/" component={AddScreen} />
      <Route path="/detail/:id" component={DetailScreen} />
     </div> 
    );
    }

}
export default App;
