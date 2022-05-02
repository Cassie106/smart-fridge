import logo from "./logo.svg";
import apple from "./apple.jpeg";
import banana from "./banana.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/*<img src={apple} className="apple-pic" alt="apple"/>*/}
        {/*<img src={banana} className="banana-pic" alt="banana"/>*/}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check the food Database
        </a>

      </header>
    </div>
  );
}

export default App;
