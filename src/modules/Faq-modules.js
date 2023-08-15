import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Faq-modules.scss'
function FaqModule() {
  return (
    <div className='faq-container'>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <div className='faq-group'>
            <h2 className='faq-question'>Do you offer any Gluten Free/Vegan options?</h2>
            <h4 className='faq-answer'>As of now, Snacks Brazil has no gluten free or vegan menu items.</h4>
        </div>

        <div className='faq-group'>
            <h2 className='faq-question'>Do your Brazilian Snacks contain nuts or any other top allergens?</h2>
            <h4 className='faq-answer'>No, our Brazilian Snacks do not contain any nuts. However, Brazilian Snacks are made in a commercial kitchen facility that handles nut products.</h4>
        </div>
        
        <div className='faq-group'>
            <h2 className='faq-question'>Do you have a storefront?</h2>
            <h4 className='faq-answer'>Snacks Brazil does not have a storefront. You can order online for pickup from Long Island, or visit one of our participating retailers.</h4>
        </div>

        <div className='faq-group'>
            <h2 className='faq-question'>Do you ship your cookies?</h2>
            <h4 className='faq-answer'>As of now, Snacks Brazil does not ship yet.</h4>
        </div>
      
    </div>
       
    
  );
}

export default FaqModule;