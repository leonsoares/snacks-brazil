import { Outlet, Link } from "react-router-dom";
import Menu from '../modules/Menu'
import Footer from '../modules/Footer'
import RetailersForm from '../modules/retailers-form'
import instagranIcon from '../images/instagram.svg'
import facebookIcon from '../images/facebook.svg'
import './contact.scss'
const Contact = () => {
  return (
         
    <div className="App">
   
    <Menu></Menu>      
    <div className='menu-block'></div>
    <div className='content-container-c'>
      <div className="application-title-c">
        <h1 className="brand-color text-big ">TALK TO US. </h1>
        <div className="strike-t"></div>

        <div  className="contact-info-container" >
 
              <div className="contact-info-sub-container" >
                
                <div className="contact-info-social-contain" >
                  <h5 className="contact-info-text" >FOLLOW US</h5>
                  <div >
                    <img className="contact-icon"
                        src={instagranIcon}>
                    </img>
                    <img className="contact-icon"
                        src={facebookIcon}>
                    </img>
                  </div>
                  
                </div>
                
                <div className="contact-info-contain">
                    <h5 className="contact-text">GET IN TOUCH</h5>
                    <span>snacksbrazil@gmail.com</span>
                    <span >917-780-9186</span>
                </div>
                

              </div>
              
        </div>
      </div>
      <div className="form-container">
      <RetailersForm/>
      </div>
      
    </div>
    
    <Footer></Footer>
      
    </div>
  )
};

export default Contact;