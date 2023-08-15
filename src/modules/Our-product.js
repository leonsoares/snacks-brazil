import bgimage from '../images/coxinhas-img.jpg'

import { Outlet, Link } from "react-router-dom";
import "./Our-products.scss";

const backgroundimg = {
    backgroundImage: `url(${bgimage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

const link ={
  textDecoration: "none",
  textAlign: "center",
  color: "inherit",
  display: "flex",
  textSize:"25vw"
}

const logoContainer = {
  marginRight: "20px"
}

const menuItem = {
  marginTop: "auto",
  marginBottom: "auto",
  marginLeft:'5px',
  marginRight:' 5px',
  display:"inline-block",
  whiteSpace:'nowrap'
}

const hightLightedBtn = {
  color:"white",
  backgroundColor: "black",
  padding:'10px 15px',
  borderRadius:"15px"
}



function BgVideo() {
  return (
    <div style={{width: '100%'}}>
      
      <div className='featured-item-container-p'>
       <video muted loop autoPlay className='video-display'>
          <source src={require('../images/snacks-brazil-part-2.mp4')}></source>
          <img
            src={bgimage}>
          </img>
        </video>
        
        <div className='featured-text-container-b'>
          <div className='featured-text-p'>
            <span className='brand-color'>
            OUR PRODUCTS
            </span>
            
            <span >
            </span>
          </div>
          
          <div className='featured-item-action-container'>
            <h4 className='action-title'>
              LEARN MORE ABOUT OUR PRODUCTS
            </h4>
              
            <Link  to="/products">
              <div style={{...menuItem, ...hightLightedBtn}}>LEARN MORE</div>
            </Link>
          </div>
          
          
        </div>
        </div>
      
        
    </div>
  );
}

export default BgVideo;