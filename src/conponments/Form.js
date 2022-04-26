import React from 'react'

const Form = ({setInputText,inputText,todos,setTodos}) => {
      const inputHandler = event => {
        setInputText(event.target.value)
      }

const submitHandler = event => {
    event.preventDefault();
    inputText=== "" ? alert("you havent wrote anything yet") : setTodos([...todos,{text:inputText , completed: false, id:Math.random()*1000}]);
    setInputText("") ;
}
    
    return (
        <div className="form">
           <form>
                <input value={inputText} onChange = {inputHandler} type="text" className="todo-input" />
                    <button  onClick = {submitHandler}className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                    </button>
    </form>
        </div>
    )
}

export default Form



