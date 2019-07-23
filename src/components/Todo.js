//Todo
import React, {Component} from 'react';
import TodoItems from './TodoItems';
import Header from './Header';
import { notEqual } from 'assert';

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

                                                            
  handleChange = (e) =>{
  this.setState({newTodo:e.target.value})
 }

  handleSubmit = (e) =>{
      this.setState((prevState)=>{
        return {
          todoItems: [...prevState.todoItems, this.state.newTodo],
          newTodo: ''
        }
      })
    
    e.preventDefault()
    console.log(this.state.newTodo)
  }
  render(){
   
    return (
      <div>
      <Header title = 'MY TODO TITLE'/>
      
      <h1>welcome here</h1>
       {this.state.todoItems.map(item =>(<TodoItems individualItem = {item}/>) )}

        <form onSubmit = {this.handleSubmit}>
          <h3><label>Todo Items</label></h3><br/>
          <input type="text" value={this.state.newTodo} onChange={this.handleChange}/><br/>
          <button>Submit</button>
          {/* <h1>{this.state.submit}</h1> */}
        </form>
      </div>
    )
  }
}
export default Todo;