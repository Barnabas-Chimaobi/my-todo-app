import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LocalStorage from './components/LocalStorage'
import * as serviceWorker from './serviceWorker';

import Todo from './components/Todo'
import Likes from './components/Likes'
import TodoItems from './components/TodoItems'
import TodoRouter from './routes/TodoRouter'

ReactDOM.render(<TodoRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();