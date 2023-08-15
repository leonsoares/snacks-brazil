import { Outlet, Link } from "react-router-dom";
import Menu from '../modules/Menu'
import Footer from '../modules/Footer'


import './products.scss'

const Orders = () => {
  return (
    
      
    <div className="App">
    <div style={{'width': '100%', 'marginLeft': 'auto', 'marginRight': 'auto','display': 'flex', 'justifyContent': 'center'}}>
      
    </div>
    <Menu></Menu>      
    <div className='menu-block'></div>
    <div style={{width:'50%', marginTop:"auto", marginBottom:'auto'}}>
    <h1>Coming Soon</h1>
    <h5>Soon you will be able to place your online order for your favorite snacks from brazil.</h5>
    
    </div>
   
    
    
    <Footer></Footer>
      
    </div>
     

      
    
  )
};

export default Orders;