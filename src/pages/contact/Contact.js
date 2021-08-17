import React from 'react'
import useStyles from './styles'

const Contact = () => {
    const classes = useStyles()
    return (
       <div className={classes.contact}>
           <h2>Get In Touch</h2>
           <p>Contact us today:</p>
           <p>- 020 7289 9000</p>
           <p>- info@jjprint.com</p>

           <form className={classes.contactForm}>
               <input type="text" placeholder="Your Name (required)" />
               <input type="email" placeholder="Your Email (required)" />
               <textarea placeholder="Your Message (required)" className={classes.formTextarea}></textarea>
               <button type="submit" className={classes.formBtn}>Submit</button>
           </form>
       </div>
    )
}

export default Contact
