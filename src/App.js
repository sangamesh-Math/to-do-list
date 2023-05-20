import {useState} from 'react';
import './App.css';
function App() {
  const [age, setAge] = useState(5);
  
  const increaseAge = () => {
  // age = age + 1;
  setAge(age+5);
  }

 return (<div>{age}<button onClick={increaseAge}>Increment</button></div>);

  }




export default App;
