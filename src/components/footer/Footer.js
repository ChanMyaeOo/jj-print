import React from 'react'
import LogoImg from '../../images/logo.png'
import PaymentImg from '../../images/payment.jpg'
import StripeImg from '../../images/stripe.png'
import useStyles from './styles'

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footerSection}>
            <div className={classes.footerWrap}>
                <img src={LogoImg} alt="logo" className={classes.footerLogo} />

                <div className={classes.footerContact}>
                    <p className={classes.fContact}>Contact Us</p>
                    <p className={classes.fTitle}>MBG Print</p>
                    <p>282 Harrow Road, London W2 5ES</p>
                    <p className={classes.fText}>For an instant quote, reach us through:</p>
                    <p>Tel: 02072899000</p>
                    <p>Email: info@mbgprint.co.uk</p>
                </div>

                <div className={classes.footerPayment}>
                    <img src={StripeImg} alt="stripe img" />
                </div>
            </div>

            <div className={classes.copyright}>Copyright 2021 &copy; MBG Print</div>
        </div>
    )
}

export default Footer
