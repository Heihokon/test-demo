import logo from './logo.svg';
import './App.css';
import { FlagshipProvider } from '@flagship.io/react-sdk';

function App() {

  const params = new URL(window.location).searchParams;
  const envId = params.get('envId');
  const apiKey = params.get('apiKey')

  return (
    <FlagshipProvider
      envId={envId}
      apiKey={apiKey}
    >
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
    </FlagshipProvider>

  );
}

export default App;
