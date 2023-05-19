
import './App.css';

function App() {
  // const name = <h1>Hello, Sangamesh</h1>;
  const name = [{nam: "sangamesh" ,age: 18},{nam: "sagar" ,age: 21}, {nam: "suraj" ,age: 23},];
  return (<div>
    {name.map((user, key) => {
      return <User name = {user.nam} age = {user.age}/>
    
})}
    </div>
  );
  
}
const User = (props) =>
  {
    return (
    <div>
      <h2 style={{color: "red"}}>{props.name} {props.age}</h2>
    </div> );
  };


export default App;
