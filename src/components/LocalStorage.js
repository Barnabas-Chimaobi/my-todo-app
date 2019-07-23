import React, {Component} from 'react'
import Header from './Header'

class LocalStorage extends Component {
  render () {
    const person = {
      name: 'Barnabas',
      age: '18'
    }
    const personToJSON = JSON.stringify(person);
    localStorage.setItem("newPerson", personToJSON);
    const getPerson = localStorage.getItem("newPerson");
    const personParse = JSON.parse(getPerson)
    return (
      <div>
        <Header title='My Apps Local Storage'/>
        <h3>the stringify version is:</h3>
        <p>{getPerson}</p>
        <p>hello</p>
        <h3>the parse version is:</h3>
        <p>{personParse.name} and {personParse.age}</p>
      </div>
     
    )
  }
} 
export default LocalStorage