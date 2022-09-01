import React from 'react'
let cardStyle = {
    fontFamily: 'Amatic SC, cursive',
    background: '#2a9d8f'
}


export default function ToDoCard(props) {
  return (
    <div className='card w-50 m-3' style={cardStyle}>
      <div className="card-body">
        <h3 className="card-title text-center text-white">{props.task}</h3>
      </div>
    </div>
  )
}
