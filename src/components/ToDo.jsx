import React, { useState } from 'react';
import ToDoForm from './ToDoForm'
import ToDoCard from './ToDoCard';
import GetDate from './GetDate';


let headerStyle = {
  fontFamily: 'Amatic SC, cursive'
}

export default function ToDo() {
    // we're setting on the ToDo function the 
    const [tasks, setTasks] = useState([]);
    function updateTasks(e){
        e.preventDefault();
        let newTask =e.target.task.value;
        setTasks([...tasks, newTask]);
        // clear the form each time:
        e.target.task.value = '';
    }
  return (
    <>
    <h1 className='text-center pt-4' style={headerStyle}>Things To Do:</h1>
    <GetDate />
    {/* updateTasks is the function and handleSubmit is the property */}
    <ToDoForm handleSubmit={updateTasks}/>
    <div className='row mt-5'>
      {tasks.map((task, idx) => <ToDoCard task={task} key={idx} />)}
    </div>
    </>
  )
}
