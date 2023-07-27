import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Menu } from "./components/Menu/Menu";
import "@govbr-ds/core/dist/core.min.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Menu />
        </p>
        <Button />
        {/* 
        <p>
          Edits <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
