import {useState} from 'react';
import './App.css';
import {Comp} from './task.js';
function App() {
  
  const [newTask, setTask] = useState({});
  const [todoList, settodoList] = useState([]);
    const buttonStyle = {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px ',
      borderRadius: '5px',
      fontSize: '16px',
      margin : '10px'
    };
    const buttonSt = {
      backgroundColor: 'red',
      color: 'black',
      padding: '5px 10px ',
      borderRadius: '5px',
      fontSize: '10px',
      margin : '5px'
    };
    const handleChange = (event) =>{
      setTask(event.target.value);
      // console.log(newTask);

    };
    const addTask = () => {
      const task = {
        id : todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName : newTask,
        completed : false
      };
      settodoList([...todoList, task]);
    };
    const deleteTask = (id) => {
    settodoList(todoList.filter((task) => id !== task.id));
    };
    const complete = (id) => {
      return (settodoList(todoList.map((task) => {
        if(task.id === id) return {...task, completed: true};
        return {task};

      })));

      
    };
    return (
     <div>
        <div className="input">
        <input style = {{padding: '10px 20px', margin:'10px', borderRadius: '5px', color: 'black'}} onChange = {handleChange} type='text' /> 
        <button onClick = {addTask} style = {buttonStyle}>Add task</button>
        </div>

        <div className = "display">
        {todoList.map((task) => {
          return <Comp taskName = {task.taskName} id = {task.id} deleteTask = {deleteTask} settodoList = {settodoList} complete = {complete} completed = {task.completed} />;
        })}
        </div>
     </div>
);
  

 

  }




export default App;
