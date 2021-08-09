import React from 'react'
import { Grid } from '@material-ui/core'
import Item from '../item/Item'
import useStyles from './styles'
import TShirtImg from '../../images/t-shirt.jpg'
import MugsImg from '../../images/mugs.jpg'
import BCardImg from '../../images/business-cards.jpeg'
import StampsImg from '../../images/stamps.jpg'
import DFlyersImg from '../../images/d-flyers.jpeg'
import EnvelopeImg from '../../images/envelope.png'

const Items = () => {
    const classes = useStyles();
    const tShirtContent = "We produce visually stunning, customizable, quality printed t-shirts. Whether you’re looking for something that is printed with text or even featuring your own personal design or image, we can help you create the best looking t-shirts."
    const mugsContent = "Your own personalized mugs, perfect for giving your business its own unique image. Whether it is for your office, event or campaign, we can help you choose between a wide variety of different quality, type and colours. All of our mugs are made using the highest quality material and are customizable to your preferences"
    const bCardContent = "Start conversations, grow your network and secure new clients, all with the perfect business card. Select your own artwork and create something unique to help you stand out from the competition. Explore our range of designs and variety of options available."
    const stampsContent = "Stamps are a great way to show your customers you care. Available in a wide range of sizes and with stock delivered free to your door, stamps have played a major role in administrative work, and continue to do more and more so even in today’s digital age."
    const dFlyersContent = "When it comes to promoting your business, or getting the message out about an event or special offer, our flyer and leaflet printing service lets you do it in style. Connect with customers – and reach out to prospects."
    const envelopeContent = "Printed envelopes from MBG Print – the perfect personal touch for your brand. Our high-quality envelopes can be personalised with your own message and logo, giving you a unique and custom look."
    return (
        <div className={classes.itemsWrap}>
            <Grid container className={classes.itemContainer}>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Item imgUrl={TShirtImg} altText="t-shirt img" title="T-Shirt" content={tShirtContent} price="£6.90" details="t-shirt-details"/>
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Item imgUrl={MugsImg} altText="mugs img" title="Mugs" content={mugsContent} price="£7.50" details="mugs-details"/>
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Item imgUrl={BCardImg} altText="business card img" title="Business Cards" content={bCardContent} price="£25" details="business-cards-details"/>
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Item imgUrl={StampsImg} altText="stamps img" title="Stamps" content={stampsContent} price="£14.25" details="stamps-details"/>
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Item imgUrl={DFlyersImg} altText="digital flyers img" title="Digital Flyers" content={dFlyersContent} price="£35" details="digital-flyers-details"/>
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Item imgUrl={EnvelopeImg} altText="envelope img" title="Envelopes" content={envelopeContent} price="£99" details="envelopes-details"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Items
