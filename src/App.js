import React,{useState} from "react";
import './App.css';
import Form from "./conponments/Form"
import TodoList from "./conponments/todoList"
function App() {
 const [inputText,setInputText] = useState("");
 const [todos,setTodos]= useState([]);
 const [tasksRemaining, setTasksRemaining] = useState(0);
  console.log(typeof tasksRemaining);
  return (
    <div className="App">
      <h1>To do list</h1>
      <h2>{tasksRemaining !== 0 ? `Tasks remaining ${tasksRemaining}`: `No tasks remaining`}</h2> 
      <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} setTasksRemaining={setTasksRemaining} />
    </div>
  );
}

export default App;
