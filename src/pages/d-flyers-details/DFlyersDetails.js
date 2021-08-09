import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import DFlyerImg from "../../images/d-flyers.jpeg";
import Previews from "../../components/previews/Previews";

const DFlyersDetails = () => {
    const classes = useStyles()
    return (
        <div className={classes.dFlyerWrap}>
            <div className={classes.leftContainer}>
                <img
                    src={DFlyerImg}
                    alt="digital-flyers"
                    className={classes.dFlyerImg}
                />
                <div>
                    <Previews />
                </div>
            </div>

            <div className={classes.rightContainer}>
                <h2 className={classes.dFlyerTitle}>digital flyers</h2>
                <div className={classes.dFlyerContent}>
                    <p>If you need to get the word out about an upcoming event, promote a new menu in your restaurant or advertise a service on behalf of your business, our flyers and leaflets are the ideal marketing tool.</p>
                    <h5>Get customers’ attention with handy sized flyers and leaflets.</h5>
                    <p>Flyers are a cost-effective marketing method to advertise your product/services.</p>
                    <p>Printed on 150gsm gloss coated or 170gsm silk coated.</p>
                    <p>Will be despatched within next day.</p><br/>

                    <p><strong>VAT Warning:</strong> Flyers are generally zero-rated for VAT.</p>
                    <p>Our print team is on hand to help you realise your marketing vision and get your high-quality finished artwork and messaging out of the door and to you as quickly as possible so you’re not held up. This flyer printing service is perfect for restaurant promotions or menus or to get the message out about a new product or event – its handy, makes it extremely practical. If you’re in retail, you could even create small notes for gift packs.</p>
                    <br/>
                    <p>Available in a range of paper stocks and with the option of double-sided printing, we’re confident you’ll be happy with your purchase.</p>
                </div>

                 <div className={classes.priceSection}>
                    <p>Price:</p>
                    <div>£20</div>
                </div>

                <form className={classes.formWrap}>
                    <div className={classes.colorSection}>
                        <div className={classes.formColor}>Printed Sides</div>
                        <select className={classes.selectWrap}>
                            <option className={classes.selectOption}>
                                1 Side
                            </option>
                            <option className={classes.selectOption}>
                                2 Sided
                            </option>
                        </select>
                    </div>

                    <div className={classes.colorSection}>
                        <div className={classes.formColor}>Digital or Litho</div>
                        <select className={classes.selectWrap}>
                            <option className={classes.selectOption}>
                                Digital Printing
                            </option>
                        </select>
                    </div>

                     <div className={classes.colorSection}>
                        <div className={classes.formColor}>Paper</div>
                        <select className={classes.selectWrap}>
                            <option className={classes.selectOption}>
                                150gsm Gloss
                            </option>
                            <option className={classes.selectOption}>
                                170gsm Silk
                            </option>
                        </select>
                    </div>

                    <Grid container className={classes.quantityWrap}>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>

                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            A6
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            DL
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            A5
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            A4
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            A3
                        </Grid>

                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            25
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £35
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £41
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £46
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £49
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £59
                        </Grid>

                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            50
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £40
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £43
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £50
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £59
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £72
                        </Grid>

                         <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            100
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £45
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £48
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £59
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £75
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £99
                        </Grid>

                         <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            250
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £50
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £56
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £69
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £90
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £169
                        </Grid>
                    </Grid>
                    

                    <button type="submit" className={classes.cardBtn}>
                        Add to Card
                    </button>
                </form>
            </div>
        </div>
    )
}

export default DFlyersDetails
