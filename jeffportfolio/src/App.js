import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Nav />
      <Header/>
  
      

      <Footer />
    </div>
  );
}

export default App;

/*

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        
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

*/