import React from 'react'

const TodoItems = (props)=> {
  //destructuring props items
  const {individualItem, handleRemoveOneItem} = props
  return (
    // <h2>I render individual items</h2>
    
        <div>
          {individualItem}
          <button onClick= {(e) => {
            handleRemoveOneItem(individualItem)
          }}>Remove</button>
    
         
          
        </div>
      
  )
}
export default TodoItems;