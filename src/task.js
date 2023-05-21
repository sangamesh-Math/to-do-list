export const Comp = (props) => {
    return (
    <div style = {{backgroundColor: props.completed ? "green" : "white"}}>
       
   
    
    <h3 style = {{color: "black"}}>{props.taskName}</h3>
    <button onClick = {() => props.deleteTask(props.id)}>delete</button>
    <button onClick = {() => props.complete(props.id)}>complete</button>
        
    </div>);
};