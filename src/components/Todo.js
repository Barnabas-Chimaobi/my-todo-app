//Todo
import React, {Component} from 'react';
import TodoItems from './TodoItems';
import Header from './Header';

class Todo extends Component {
  state = {
   todoItems: [],
   //display and add to array
   newTodo: '',
  }

  componentDidUpdate (prevProps, prevState){
     if(prevState.todoItems.length !== this.state.todoItems.length){
       const jsonState = JSON.stringify(this.state.todoItems)
       localStorage.setItem('todoItems', jsonState)
     }
  }

  componentDidMount(){
     const itemsFromLocalStorage = localStorage.getItem("todoItems")
     const todoItems = JSON.parse(itemsFromLocalStorage)

     if(todoItems){
      this.setState(()=>({
        todoItems
       }))
    }
     
  }

  handleRemoveOneItem = (itemToBeRemoved) => {
      this.setState((prevState) => ({
        todoItems: prevState.todoItems.filter(todoItem =>todoItem !== itemToBeRemoved)
      }))
  }

  handleRemoveAllItems = () => {
    this.setState((prevState)=>({
      todoItems: []
    }))
  }  

                                                            
  handleChange = (e) =>{
   this.setState({newTodo:e.target.value})
  } 

  handleSubmit = (e) =>{

    const duplicateItem = this.state.todoItems.filter(todoItem =>{
      if(isNaN(todoItem)) {
        return todoItem.toUpperCase() === this.state.newTodo.toUpperCase();
      }else {
        return todoItem === this.state.newTodo
      }
      })

      if(this.state.newTodo && duplicateItem.length === 0){
        this.setState((prevState)=>{
          return {
            todoItems: [...prevState.todoItems, this.state.newTodo],
            newTodo: ''
          }
        })
      }

      
    e.preventDefault()
    
  }

  render(){
    const {todoItems, newTodo} = this.state
    return (
      
      <div>
      <Header title = 'MY TODO TITLE'/>
      
      <h1>welcome TO My Todo App</h1>
       {todoItems.map(item =>(<TodoItems key={item} handleRemoveOneItem={this.handleRemoveOneItem} individualItem = {item}/>) )}

        <form onSubmit = {this.handleSubmit}>
          <h3><label>Todo Items</label></h3><br/>
          <input type="text" value={newTodo} onChange={this.handleChange}/><br/>
          <button>Submit</button>
          
        </form>
        <button onClick={this.handleRemoveAllItems} style={{display: todoItems.length===0?'none':'block'}}>Remove All</button>
        
      </div>
    )
  }
}
export default Todo;