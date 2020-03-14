import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Body from './components/Body'
import { Container } from 'reactstrap'
import store from './store';
import { Provider } from 'react-redux';
import { loadUser } from './actions/authActions';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  
  render(){
    return (
      <Provider store={store}>
      <div className="App"> 
        <AppNavbar />
        <Body />
      </div>
      </Provider>
    );
  }
}

export default App;
