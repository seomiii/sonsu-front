import logo from './logo.svg';
import './App.css';
import Study from './component/Study';

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
          {/* 지현이의 테스트입니다. */}
          {/* 정윤이의 테스트입니다. */}

          <Study />
          
        </a>
      </header>
    </div>
  );
}

export default App;
