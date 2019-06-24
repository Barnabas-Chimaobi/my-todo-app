import React, {Component} from 'react'

const TodoItems = (props)=> {
  return (
    // <h2>I render individual items</h2>
    
        <div>
          {props.individualItem}
          <p>obi is boy</p>
        </div>
      
  )
}
export default TodoItems;