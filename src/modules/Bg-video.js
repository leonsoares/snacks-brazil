import bgimage from '../images/coxinhas-img.jpg'
import "./Bg-video.scss";
import { Outlet, Link } from "react-router-dom";

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
      <div className='menu-block'></div>
      <div className='featured-item-container'>
        <div className='featured-text-container'>
          <div className='featured-text'>
            <span className='brand-color'>
            WHOLESALE
            </span>
            <span className='brand-color'>
            DISTRIBUTORS
            </span>
            <span className='featured-text-complement'>
            
            SELLING NEW YORK'S 
            
            BEST
            <br></br>SNACKS BRAZIL 
            </span>
          </div>
          
          <div className='featured-item-action-container'>
            <h4 className='action-title'>
              INTERESTED IN BECOMING A RETAILER?
            </h4>
              
            <Link  to="/retailers">
              <div style={{...menuItem, ...hightLightedBtn}}>LEARN MORE</div>
            </Link>
          </div>
          
          
        </div>
        <video  muted loop autoPlay className='video-display'>
          <source src={require('../images/snack-brazil-lower-bit.mp4')}></source>
          <img
            src={bgimage}>
          </img>
        </video>
       
      </div>
        
    </div>
  );
}

export default BgVideo;