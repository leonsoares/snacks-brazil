import { Outlet, Link } from "react-router-dom";
import Menu from '../modules/Menu'
import bgimage from '../images/snacks-brazil-007.jpg'
import Footer from '../modules/Footer'
import RetailersForm from '../modules/retailers-form'

import './retailers.scss'
const Retailers = () => {
  return (
    
      
    <div className="App">
    {/* <div style={{'width': '100%', 'marginLeft': 'auto', 'marginRight': 'auto','display': 'flex', 'justifyContent': 'center'}}>
      
    </div> */}
    <Menu></Menu>      
    <div className='menu-block'></div>
    <div className='content-container'>
      <div className="application-title">
        <h1 className="brand-color text-big">BECOME 
          <h1 className="title-black">A RETAILER</h1>
        </h1>
        <p>Fill out the application form and someone will get back to you ASAP.</p>
      </div>
      <div className="form-container">
      <RetailersForm/>
      </div>
      
    </div>
    
    <Footer></Footer>
      
    </div>
     

      
    
  )
};

export default Retailers;