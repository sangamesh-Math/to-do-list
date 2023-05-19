
import './App.css';
function App() {
 
  const planets = [{name: "earth", gasplanet: false}, {name: "uranus", gasplanet: true}, {name: "Saturn", gasplanet: false}, {name: "pluto", gasplanet: true}];
  return (
    <div>
    {planets.map((planet, key) => {
     if(planet.gasplanet)
      return <h1>{planet.name}</h1>;
      
      
    })}
     </div> 
    );
  }




export default App;
