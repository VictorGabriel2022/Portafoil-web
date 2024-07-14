import { useState } from "react";
import "./contact.css"
function Contact(){
    const [counter,setCounter] = useState(20);
    
    
    return(
        
              <div className="container">
                 
              
        <div className="contact-form-container">
            <form action="https://formsubmit.co/mazmorra13rol@gmail.com" method="POST" className="contact-form">
                <span className="form-header">Contact us</span>
                <input type="text" name="name" className="input" placeholder="Your Name" />
                <input type="email" name="email" className="input" placeholder="Your Email" />
                <textarea name=" message" cols="30" rows="5" placeholder="Enter Your message" className="input"
                    required></textarea>
                <button className="submit" type="submit" value="enviar">Submit</button>
                <input type="hidden" name="_next" value="https://portafoil-tito.netlify.app/"></input>
                <input type="hidden" name="_captcha" value="false"></input>
            </form>
        </div>
    </div>
        
    )
}
export default Contact