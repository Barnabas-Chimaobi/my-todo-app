//Todo
import React, {Component} from 'react';
import TodoItems from './TodoItems';
import Header from './Header';
import { notEqual } from 'assert';

class Todo extends Component {
  state = {
   todoItems: ['cook ',  'eat ', 'rela ', 'bath ','sleep'],
   //display and add to array
   newTodo: '',
  }
   
  handleChange = (e) =>{
  this.setState({newTodo:e.target.value})
 }

  handleSubmit = (e) =>{
    this.setState( state =>{const todoItems= this.state.todoItems.concat(this.state.newTodo)
      return{
        todoItems,
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