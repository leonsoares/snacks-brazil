import { Outlet, Link } from "react-router-dom";
import Menu from '../modules/Menu'
import "./Our-Story.scss";
import bgimage from '../images/snacks-brazil-007.jpg'
import MiddleItems from '../modules/Footer'

const OurStory = () => {
  return (
    <div className="App">
   
      <Menu></Menu>      
      <div className='menu-block'></div>

        <div className="our-story-container">
          <div className="header-container">
            <h1 className="brand-color text-big">OUR <span className="title-black">STORY</span></h1>
          </div>
          <div className="out-story-content">
            <div className="our-story-main-img" style={{ backgroundImage: `url(${bgimage})`}}></div>
            <p className="out-story-content-parag">
                We are a company created by three partners, one Brazilian and two Americans.  
                We combined the deep knowledge and experience of our Brazilian partner with regards to authentic snacks from Brazil, 
                his access to the best machinery for production and his passion for outstanding food with the skills and talents of the American partners who own a successful BBQ restaurant called Sempre Fame in Floral Park, NY.
                In this union of friends, Snacks Brazil Corporation was created with the intention of opening a new niche in the market for delicacies created in Brazil and adapted for our customers in the USA.
            </p>
          </div>
          <div className="our-story-banner"> 
              <h1 className="our-story-banner-text">NEW YORKS'S BEST BRAZILIAN SNACK</h1>
          </div>
        </div>
        <MiddleItems></MiddleItems>
      </div>
        
      
    
  );
};

export default OurStory;