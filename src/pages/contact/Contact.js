import React, { useState } from 'react'
import useStyles from './styles'
import emailjs from "emailjs-com";

const Contact = () => {
    const classes = useStyles()
    const YOUR_SERVICE_ID = "service_5m85ds8";
    const YOUR_TEMPLATE_ID = "template_7ba417a";
    const YOUR_USER_ID = "user_RkTGrhaITdH06kQWFMNPu";

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function sendMail(e) {
        e.preventDefault();

        emailjs
            .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_USER_ID)
            .then(
                (result) => {
                    setFormData({
                        user_name: "",
                        user_email: "",
                        message: "",
                    });
                    alert("Success!");
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                    alert("Error");
                }
            );
    }
    return (
       <div className={classes.contact}>
           <h2>Get In Touch</h2>
           <p>Contact us today:</p>
           <p>- 020 7289 9000</p>
           <p>- info@jjprint.com</p>

           <form className={classes.contactForm} onSubmit={sendMail}>
               <input type="text" value={formData.user_name} placeholder="Your Name (required)" name="user_name" required onChange={handleChange}/>
               <input type="email" value={formData.user_email} placeholder="Your Email (required)" name="user_email" onChange={handleChange} required/>
               <textarea placeholder="Your Message (required)" value={formData.message} onChange={handleChange} name="message" required className={classes.formTextarea}></textarea>
               <button type="submit" className={classes.formBtn}>Submit</button>
           </form>
       </div>
    )
}

export default Contact
