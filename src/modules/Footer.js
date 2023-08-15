import instagranIcon from '../images/instagram.svg'
import facebookIcon from '../images/facebook.svg'
import bgimage from '../images/snacks-brazil-logo-vers12-01.svg'
import './footer.scss'

const itemStyle = {
    minWidth: '90px',
    marginRight: '30px'

}
function MiddleItems() {
  return (
    <div  className="footer-container" >
       <img className="footer-image" 
            src={bgimage}>
          </img>
          <div className="footer-info-container" >
            
            <div className="footer-social-contain" >
            <h5 className="footer-social-text" >FOLLOW US</h5>
                <div className="footer-social-icons-contain" >
                  <img className="footer-icon" 
                      src={instagranIcon}>
                  </img>
                  <img className="footer-icon"
                      src={facebookIcon}>
                  </img>
                </div>
               
            </div>
            
            <div className="footer-contact-container" >
                <h5 className="footer-contact-text">GET IN TOUCH</h5>
                <span>snacksbrazil@gmail.com</span>
                <span >917-780-9186</span>
            </div>
            

          </div>
          
    </div>
  );
}

export default MiddleItems;