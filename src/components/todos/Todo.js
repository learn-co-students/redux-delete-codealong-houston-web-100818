import React from 'react'

const Todo = props => {
  return (
    <div>
      <span>{props.todo.text}</span><button onClick={() => props.delete(props.todo.id)}>DELET THIS</button>
    </div>
  )
}

export default Todo;
