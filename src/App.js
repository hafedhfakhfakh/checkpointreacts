import logo from './logo.svg';
import './App.css';
import Nav from './Components/nav';
import image from './img/hafedh.jpg'
import Login from './Components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App"style={{ backgroundImage:`url(${image})`}} >
      {/* <header className="App-header">
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
      </header> */}
      <h1>Hello</h1>
      <Nav></Nav>
      <Login></Login>
    </div>

  );
}

export default App;
