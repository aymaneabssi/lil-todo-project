import React from 'react'
const Todo = ({text,todo,todos,setTodos}) => {
    const checkCompleted = () => {
       setTodos(todos.map(item => {
        if(item.id===todo.id){
            return { ...item, completed:!item.completed
         }
       };
       return item;
       }))
    }
    const deleteTodo = () => {
        setTodos(todos.filter(item => item.id !== todo.id 
            ));
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed? "completed" :""}`}>{text}</li>
            <button onClick={checkCompleted} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick ={deleteTodo} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo
