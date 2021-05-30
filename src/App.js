import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {


  useEffect(() => {
    axios.get('https://blogbackend12345.azurewebsites.net/sports').then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        Sonu Here
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
