import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import EnvelopeImg from '../../images/envelope.png'
import Previews from "../../components/previews/Previews";

const EnvelopesDetails = () => {
    const classes = useStyles()
    return (
        <div className={classes.envelopeWrap}>
            <div className={classes.leftContainer}>
                <img
                    src={EnvelopeImg}
                    alt="envelope-img"
                    className={classes.envelopeImg}
                />
                <div>
                    <Previews />
                </div>
            </div>

            <div className={classes.rightContainer}>
                <h2 className={classes.envelopeTitle}>Envelopes</h2>
                <div className={classes.envelopeList}>   
                    <p>Paper-based post still remains highly attractive, which emphasises the importance for businesses to ensure they convey a professional image when printing envelopes.</p><br/>
                    <p>Our top quality envelopes can be personalised with your own message and logo.</p><br/>
                    <p>Printed on white paper/self seal: 90gsm.</p>
                    <p>Optional paper: 100gsm, 120gsm or coloured (please consult us).</p>
                    <p>For a new design, please ask a member of our staff. Printing order turnaround time 6-8 working days*.</p>
                    <ol className={classes.listWrap}>
                        <li>Printing will begin after the design has been confirmed and the artwork is ready (provide your own design).</li>
                        <li>The full payment is clear.</li>
                    </ol>
                </div>

                <div className={classes.priceSection}>
                    <p>Price:</p>
                    <div>£99</div>
                </div>

                <form className={classes.formWrap}>
                    <div className={classes.colorSection}>
                        <div className={classes.formColor}>Options:</div>
                        <select className={classes.selectWrap}>
                            <option className={classes.selectOption}>
                                With Window
                            </option>
                            <option className={classes.selectOption}>
                                Without Window
                            </option>
                        </select>
                    </div>

                    <div className={classes.colorSection}>
                        <div className={classes.formColor}>Colour:</div>
                        <select className={classes.selectWrap}>
                            <option className={classes.selectOption}>
                                White Paper
                            </option>
                            <option className={classes.selectOption}>
                                Self Seal
                            </option>
                        </select>
                    </div>

                    <Grid container className={classes.quantityWrap}>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.quantity}>

                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            100
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            200
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            500
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            1000
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            2500
                        </Grid>

                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            dl
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £99
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £159
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £195
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £225
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £315
                        </Grid>

                         <Grid ld={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            c6/5
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £-
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £-
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £-
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £-
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £210
                        </Grid>

                         <Grid ld={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            c5
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £130
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £165
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £210
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £230
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £375
                        </Grid>

                         <Grid ld={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            c4
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £140
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £175
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £225
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £250
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}>
                            £395
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

export default EnvelopesDetails
