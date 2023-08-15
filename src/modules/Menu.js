import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "./Menu.scss";

import logo from '../images/logo.png'
import { Sling as Hamburger } from 'hamburger-react'
import useWindowDimensions from './WindowDimentions'

function Menu() {
  const [isOpen, setOpen] = useState(false)
  const { height, width } = useWindowDimensions();
  
 
  
  let displayBtns = isOpen ? 'flex' :'none'
  displayBtns = width <= 800 && !isOpen ? 'none' : 'flex'
  let homeBtn
  let products

  if (isOpen) {
    homeBtn = <Link className="menu-link"to="/">
    <div className="menu-item" >HOME</div></Link>;
    products = <Link className="menu-link"to="/products">
    <div className="menu-item" >PRODUCTS</div></Link>;
  } else {
    homeBtn ="";
    products = ""
  }
  let color = isOpen ? 'white' : 'black'

  return (
    <div className="drop-menu-container">
      <div className='hamburger-menu'>
      <Hamburger color={color} toggled={isOpen} toggle={setOpen} />
      </div>
      
      <Link className="logo-container menu-link"  to="/">
        <div className="bg-logo-image" style={{backgroundImage: `url(${logo})`}}></div>
        {/* <img className="logo-img" src={logo} alt="Snacks Brazil logo"></img> */}
      </Link>
      
      
      <div className="regular-menu-btn" style={{display: displayBtns}}>
        {homeBtn}
        {products}
        <Link className="menu-link"to="/ourstory">
          <div className="menu-item" >OUR STORY</div>
        </Link>
          
        <Link  className="menu-link"  to="/retailers">
          <div className="menu-item" >RETAILERS</div>
        </Link>
        {/* <Link style={{...link, ...logoContainer}} to="/">
          <div style={menuItem}>WHERE TO BUY</div>
        </Link> */}
        <Link className="menu-link" to="/faq">
          <div className="menu-item" >FAQ</div>
        </Link>
        <Link className="menu-link" to="/contact">
          <div  className="menu-item" >CONTACT US</div>
        </Link>
       
      </div>
      
        
      <div className="highlighted-btns-container">
        <Link className="menu-link" to="/orders">
        <div className="hightLightedBtn" >ORDER ONLINE</div>
        </Link>
        <Link  className="menu-link" to="/retailers">
          <div className="hightLightedBtn">WHOLESALE</div>
          </Link>
      </div>
        
    </div>
  );
}

export default Menu;