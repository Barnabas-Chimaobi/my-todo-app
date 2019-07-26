import React from 'react';
import { NavLink} from 'react-router-dom'
import headerStyles from '../styles/header.module.css'
import '../App.css'

const Header = (props)=>{
  return (
    <div className={headerStyles.headerContainer}>
      <h2>{props.title}</h2>
      <ul>
        <li>
         <NavLink exact activeClassName='am-active' to='/'>
           Todo App
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='am-active' to='/likesApp'>
            Likes App
          </NavLink>
        </li>
        <li>
         <NavLink activeClassName='am-active' to='/localstorage'>
           Local Storage
         </NavLink>
        </li>
      </ul>
      
    </div>
  );
}
export default Header;
