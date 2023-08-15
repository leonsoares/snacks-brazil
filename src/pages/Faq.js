import { Outlet, Link } from "react-router-dom";
import Menu from '../modules/Menu'
import bgimage from '../images/snacks-brazil-007.jpg'
import Footer from '../modules/Footer'
import FaqModule from '../modules/Faq-modules'
import './retailers.scss'
const Faq = () => {
  return (
    
      
    <div className="App">
      <div style={{'width': '100%', 'marginLeft': 'auto', 'marginRight': 'auto','display': 'flex', 'justifyContent': 'center'}}>
        
      </div>
      <div className='menu-block'></div>
      <Menu></Menu>      
        <FaqModule></FaqModule>
      <Footer></Footer>
      
    </div>
     
  )
};

export default Faq;