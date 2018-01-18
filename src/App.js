import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      cryptos : []
    };

  }

  componetDidMount(){
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC,XRP,ETH,XLM&tsyms=CDN,USD,BTC')
      .then(res => {
        const cryptos = res.data;
        console.og(cryptos);
        this.setState({cryptos: cryptos});
       } )   
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
