import React from 'react';
import { NavLink} from "react-router-dom"
import './Style.css';

const Header = () => { 
  return (
    <>
    <div className='Header' >
      <div className='headDiscription'>
        <div className='head-discription'>
        <h2>Students performance sheet.</h2>
        </div>
        <div className='list-decoration'>
        {
        <>
        <NavLink exact activeClassName="active-class" to="/">Studnet-detials </NavLink>
        <NavLink exact activeClassName="active-class"  to="Performance">Performance </NavLink>
        <NavLink exact activeClassName="active-class"  to="status">Status </NavLink>
        <NavLink exact activeClassName="active-class"  to="pastrecords">Past-Record </NavLink> 
        </>
        }
        </div>
        </div>      
    </div>
    </>
  )
}

export default Header;
