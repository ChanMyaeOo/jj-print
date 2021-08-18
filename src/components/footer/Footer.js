import React from 'react'
import { Link } from 'react-router-dom'
// import LogoImg from '../../images/logo.png'
import LogoImg from '../../images/jj-headerlogo.png'
import StripeImg from '../../images/stripe.png'
import useStyles from './styles'

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footerSection}>
            <div className={classes.footerWrap}>
                <Link to="/">
                    <img src={LogoImg} alt="logo" className={classes.footerLogo} />
                </Link>

                <div className={classes.footerContact}>
                    <p className={classes.fContact}>Contact Us</p>
                    <p className={classes.fTitle}>JJ DESIGN &amp; PRINT</p>
                    <p>368 Caledonian Rd London N1 1DU</p>
                    <p className={classes.fText}>For an instant quote, reach us through:</p>
                    <p>Tel: +442038387246</p>
                    <p>Email: info@jjdesignprint.com</p>
                </div>

                <div className={classes.footerPayment}>
                    <img src={StripeImg} alt="stripe img" />
                </div>
            </div>

            <div className={classes.copyright}>Copyright 2021 &copy; JJ Design & Print</div>
        </div>
    )
}

export default Footer
