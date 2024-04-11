import './App.css';
import Navbar from './navbar';
import Main from './main';
import Propos from './propos';
import Tecno from './tecno';


function App() {
  return (

    <div className="App">
      <Navbar />
      <div className="container">
      <header className="App-header">
        <Main />
      </header>
      
      <Propos />
      <Tecno />
      </div>

    </div>
  );
}

export default App;
