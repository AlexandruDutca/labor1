import logo from './logo.svg';
import './App.css';
import { DatePicker } from 'antd';
import ReactDOM from 'react-dom';
let mountNode = document.getElementById("root");

ReactDOM.render(<DatePicker/>, mountNode);

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
