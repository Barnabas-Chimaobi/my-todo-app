
import React from 'react'
import Todo from '../components/Todo'
import Likes from '../components/Likes'
import LocalStorage from '../components/LocalStorage'
import NotFoundPage from '../components/NotFoundPage'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

const TodoRouter = () => 
<BrowserRouter>
<Switch>
  <Route exact path='/' component={Todo}/>
  <Route path='/likesApp' component={Likes}/>
  <Route path='/localstorage' component={LocalStorage}/>
  <Route  component={NotFoundPage}/>
</Switch>  

</BrowserRouter>


export default TodoRouter