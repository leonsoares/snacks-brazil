import { Outlet, Link } from "react-router-dom";
import Menu from '../modules/Menu'
import bgimage from '../images/snacks-brazil-007.jpg'
import Footer from '../modules/Footer'
import RetailersForm from '../modules/retailers-form'
import coxinha from '../images/snacks-brazil-coxinha.jpg'
import cheeseball from '../images/snacks-brazil-Cheese-Ball.jpg'
import pepperonni from '../images/snacks-brazil-Pepperoni-Croquette.jpg'
import churros from '../images/snacks-brazil-churros.jpg'

import './products.scss'

const Products = () => {
  return (
    
      
    <div className="App">
    <div style={{'width': '100%', 'marginLeft': 'auto', 'marginRight': 'auto','display': 'flex', 'justifyContent': 'center'}}>
      
    </div>
    <Menu></Menu>      
    <div className='menu-block'></div>
    <h1>Products</h1>
    <div className="products-container">
    <div className="product-item"> 
        <div className="product-image" style={{ backgroundImage: `url(${coxinha})`}}></div>
        
    
        <div className="product-description-container">
            <h1 className="product-title">Chicken Croquette / AKA "Coxinha"</h1>
            <p className="product-description">
            Stuffed with shredded chicken with a special mix of quality spices, covered with delicious dough in the shape of a tear of joy.
            </p>
        </div>
    </div>

    <div className="product-item"> 
        <div className="product-image" style={{ backgroundImage: `url(${cheeseball})`}}></div>
        
    
        <div className="product-description-container">
            <h1 className="product-title">Cheese Ball</h1>
            <p className="product-description">
            Combination of five different cheeses mixed with aromatic spices topped with delicious dough.
            </p>
        </div>
    </div>

    <div className="product-item"> 
        <div className="product-image" style={{ backgroundImage: `url(${pepperonni})`}}></div>
        
    
        <div className="product-description-container">
            <h1 className="product-title">Pepperoni Croquette</h1>
            <p className="product-description">
            Mixture of pepperoni, cheese and special seasonings, topped with delicious pillow-shaped dough.
            </p>
        </div>
    </div>

    <div className="product-item"> 
        <div className="product-image" style={{ backgroundImage: `url(${churros})`}}></div>
        
    
        <div className="product-description-container">
            <h1 className="product-title">Churros</h1>
            <p className="product-description">
                Delicious dessert made with sweet delicious dough finished with a mixture of powdered sugar and cinnamon. Served with dulce de leche dipping sauce.
            </p>
        </div>
    </div>
    </div>
    
    
    <Footer></Footer>
      
    </div>
     

      
    
  )
};

export default Products;