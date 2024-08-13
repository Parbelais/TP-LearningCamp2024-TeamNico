import React, { useState } from 'react';
import './Navbar.css'
import logo from '../Images/logo.svg'
import cart_icon from '../Images/cart_icon.png'

const Navbar = () => {

    const [menu,setMenu] = useState('shop');

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>Green Market</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu('about')}}>About us{menu==='about'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('productos')}}>Productos{menu==='productos'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('womens')}}>FAQ{menu==='womens'?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button
            className='bg-vanilla hover:bg-sand text-white font-bold py-2 px-4 rounded-full'>
                Login
            </button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar