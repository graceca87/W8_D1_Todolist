import React from 'react'

let buttonStyle = {
    fontFamily: 'Amatic SC, cursive',
    background: '#e76f51',
    color: 'white',
    fontSize: '30px',
    padding: '2px'
}

export default function ToDoForm(props) {
  return (
    // when the submit event happens do the handleSubmit function
    <form onSubmit={props.handleSubmit}>
        <div className = 'form-group'>
            <input type= 'text' className = 'form-control' name= 'task' 
            placeholder= 'Enter Task' />
            <input type= 'submit' className= 'btn w-100' style={buttonStyle} value='Add Task' />
        </div>
    </form>
  )
}
