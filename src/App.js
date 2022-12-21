import logo from './logo.svg';
import './App.css';
//import planets from './planets';

function App() {
  const planets = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune'];

  const planetlist = planets.map(planet => <center><table><tr><td>{planet}</td></tr></table></center>);
  return (
    <div className="App">
      {
        planetlist
      }
    </div>
  );
}

export default App;
