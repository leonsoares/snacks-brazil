import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './retailers-form.scss'
import { useState } from "react";

function RetailersForm() {
    const form = useRef();
    const [displayMessage, setOpen] = useState({
        display: false,
        error: false
    })

    let errorMessage = <h1 className='sent-msg-title error-sent'>Oops! <span className='sent-form-message'>Sorry, something went wrong.</span></h1> 
    let successMessage = <h1 className='sent-msg-title'>Thank you! <span className='sent-form-message'>We will get back to you ASAP!</span></h1>
    let message = displayMessage.error ? errorMessage : successMessage;


    let renderMessage = ''
    if(displayMessage.display){
        renderMessage = <div className='display-form-message'> {message}</div>}
   

    function sendEmail(e) {
        e.preventDefault();
        // this.displayMessage = true
        emailjs.sendForm('service_5f0bcuc', 'template_5c6hx3e', form.current, '2BU5OuMkhzM6rFixV')
          .then((result) => {
              console.log(result.text);
            //   message = successMessage
              e.target.reset()
            //   message = successMessage
            //   this.displayMessage = true
            setOpen({
                display: true,
                error: false
            })
          }, (error) => {
              console.log(error.text);
              setOpen({
                display: true,
                error: true
            })
          });
          console.log(displayMessage)
          
      };

  return (
    
        <Form className="form-container"ref={form} onSubmit={sendEmail}>
            {renderMessage}
            <Form.Group className="mb-3" controlId="validationCustomName">
                <Form.Label>First Name*</Form.Label>
                <Form.Control name="user_name" required type="text" placeholder="e.g. John" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustomLastName">
                <Form.Label>Last Name*</Form.Label>
                <Form.Control  name="user_last_name" required type="text" placeholder="e.g. Smith" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control name="user_email" required type="email" placeholder="e.g. Smith" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Phone Number*</Form.Label>
                <Form.Control name="user_phone" required type="tel" placeholder="e.g. 555 206 5660" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Give us some details</Form.Label>
                <Form.Control name="message" as="textarea" rows={3} />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    
    
  );
}

export default RetailersForm;