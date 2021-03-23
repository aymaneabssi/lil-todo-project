import React,{useState} from "react";
import './App.css';
import Form from "./conponments/Form"
import TodoList from "./conponments/todoList"
function App() {
 const [inputText,setInputText] = useState("");
 const [todos,setTodos]= useState([]);
  return (
    <div className="App">
      <h1>To do list</h1>
      <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
