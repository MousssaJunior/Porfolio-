import './App.css';
import Navbar from './navbar';
import Main from './main';
import Propos from './propos';
import Tecno from './tecno';
import Projets from './projet';


function App() {
  return (

    <div className="App">
      <div className="container">
      <Navbar />
      <header className="App-header">
        <Main />
      </header>
      
      <Propos />
      <Tecno />      
      <Projets />

      </div>

    </div>
  );
}

export default App;
