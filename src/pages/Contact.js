import React, {useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import Social from '../components/Social'
import emailjs from 'emailjs-com'
import '../CSS/contact.css'

const Contact = () => {

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [success, setSuccess] = useState("");


  const handleSubmit = (e) =>{
    e.preventDefault();
    
    if (
      (name === "") &
      (email === "") &
      (message === "")
    ) {
      setNameError("Name is required");
      setEmailError("Email is required");
      setMessageError("Message is required");
      setTimeout(() => {
        setNameError("");
        setEmailError("");
        setMessageError("");
      }, 5000);
    } else if (name === "") {
      setNameError("Please provide the name.");
      setTimeout(() => {
        setNameError("");
      }, 5000);
    } else if (email === "") {
      setEmailError("Please provide the email.");
      setTimeout(() => {
        setEmailError("");
      }, 5000);
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Please enter a valid email.");
      setTimeout(() => {
        setEmailError("");
      }, 5000);
    } else if (message === "") {
      setMessageError("Please tell us how we can help you.");
      setTimeout(() => {
        setMessageError("");
      }, 5000);
    } else {
      setSuccess(
        // emailjs.sendForm('service_l109aqk','template_zu4f1vg', e.target, 'qwrj3ArZ--hcGwKDV')
        // .then(res=>{alert('Message has been send successfully')
        // }).catch(err=>{alert('Message send Failed', err)})
        // setName("");
        // setEmail("");
        // setMessage("");
        setTimeout(() => {
        setSuccess("");
        }, 2000)
      )
        

     
    }





  }

        
 

  return (
    <>
      <div id="google_map_section">
        <div id="google_map">
          <iframe
            style={{ border: "0", width: "100% ", height: " 440px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57929.23355645912!2d67.01519255!3d24.8441321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e70a31f45a9%3A0x25e252450977ec12!2sSaddar%20Town%2C%20Karachi%2C%20Sindh!5e0!3m2!1sen!2s!4v1659915647291!5m2!1sen!2s"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="about-breadCrumb">
        <div className="container">
          <div className="about-breadCrumb1 mt-0">
            <NavLink to={"/"}>Home</NavLink>
            <span>/</span>Contact
          </div>
        </div>
      </div>

      <div id="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h3>CONTACT INFO</h3>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te
                feugait nulla facilisi. Nam liber tempor cum soluta nobis
                eleifend option congue nihil imperdiet doming id quod mazim
                placerat facer possim assum
              </p>

              <h4>Address</h4>
              <p>
                795 Fake Ave, Door 6 <br/>
                Wonderland, CA 94107, USA <br/>
                <Link to={'/contact'} className="contact-link">info@yourdomain.com</Link>
              </p>

              <h4>Phone</h4>
              <p>
                +440 875369208 <br/>
                +440 353363114 <br/>
              </p>
              <Social/>

            </div>
            <div className="col-sm-6">
              <h3>CONTACT FORM</h3>

              <form id="contact-form"  onSubmit={handleSubmit} >
                  <div className="form-group">
                    <input type="text" autoComplete="off" name="name" className="form-control" id="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <p className={"error-para"}>{nameError}</p>

                  <div className="form-group">
                    <input type="email" className="form-control" autoComplete="off" name="email" id="email" placeholder="E-mail Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <p className={"error-para"}>{emailError}</p>

                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea rows="7" className="form-control" autoComplete="off"  name="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}>Message</textarea>
                      </div>
                      <p className={"error-para"}>{messageError}</p>
                    </div>
                  </div>

                  <button type="submit" className="contact-btn">Send Message</button>

              </form>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;








   // const validate = (values) => {
    //     const errors = {}
    //     if(!values.userName){
    //         errors.userName = "Please Enter a Username"
    //     }
    //     if(!values.email){
    //         errors.email = "Please Enter an email"
    //     }
        
    //     if(!values.message){
    //         errors.message = "Enter a message"
    //     }
    //     return errors;
        
    // }