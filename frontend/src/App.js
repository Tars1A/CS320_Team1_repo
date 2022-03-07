import logo from './ukglogo.png';
import profilepic from './profilepic.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="rectangle" alt="rectangle"/>
        <img src={profilepic} className="App-profilepic" alt="profilepic" />
      </header>
    </div>
  );
}

export default App;
