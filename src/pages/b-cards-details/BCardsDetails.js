import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import BCardImg from "../../images/business-cards.jpeg";
import Previews from "../../components/previews/Previews";

const BCardsDetails = () => {
    const classes = useStyles()
    return (
        <div className={classes.bCardWrap}>
            <div className={classes.leftContainer}>
                <img
                    src={BCardImg}
                    alt="business-cards"
                    className={classes.bCardImg}
                />
                <div>
                    <Previews />
                </div>
            </div>

            <div className={classes.rightContainer}>
                <h2 className={classes.bCardTitle}>business cards</h2>
                <div className={classes.bCardContent}>
                    <p><strong>Standard:</strong> Sizes Available – (55 x 85mm) &amp; (50 x 90mm).</p>
                    <p><strong>Customised:</strong> Cut to the selected size which doesn’t exceed (55mm x 85mm).</p>
                    <p>Printed on 350gsm silk/matt coated paper.</p>
                    <p>Printed digitally and requires 3-4 working days.</p>
                </div>

                 <div className={classes.priceSection}>
                    <p>Price:</p>
                    <div>£20</div>
                </div>

                <form className={classes.formWrap}>
                    <div className={classes.colorSection}>
                        <div className={classes.formColor}>Trimming</div>
                        <select className={classes.selectWrap}>
                            <option className={classes.selectOption}>
                                None
                            </option>
                            <option className={classes.selectOption}>
                                Rounded corners
                            </option>
                        </select>
                    </div>

                    <div className={classes.colorSection}>
                        <div className={classes.formColor}>Sides</div>
                        <select className={classes.selectWrap}>
                            <option className={classes.selectOption}>
                                1 Side
                            </option>
                            <option className={classes.selectOption}>
                                2 Sides
                            </option>
                        </select>
                    </div>

                     <div className={classes.colorSection}>
                        <div className={classes.formColor}>Lamination</div>
                        <select className={classes.selectWrap}>
                            <option className={classes.selectOption}>
                                None
                            </option>
                            <option className={classes.selectOption}>
                                Matt
                            </option>
                            <option className={classes.selectOption}>
                                Glossy
                            </option>
                            <option className={classes.selectOption}>
                                Soft Touch
                            </option>
                        </select>
                    </div>

                     <div className={classes.colorSection}>
                        <div className={classes.formColor}>Standard or Customised</div>
                        <select className={classes.selectWrap}>
                            <option className={classes.selectOption}>
                                Standard
                            </option>
                            <option className={classes.selectOption}>
                                Customised
                            </option>
                        </select>
                    </div>

                    <Grid container className={classes.quantityWrap}>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>

                        </Grid>
                         <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            None
                        </Grid>
                         <Grid item lg={4} md={4} sm={4} xs={4} className={classes.quantity}>
                            LAM 1 Side
                        </Grid>
                         <Grid item lg={4} md={4} sm={4} xs={4} className={classes.quantity}>
                            LAM 2 Sides
                        </Grid>

                         <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            100
                        </Grid>
                         <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £20
                        </Grid>
                         <Grid item lg={4} md={4} sm={4} xs={4} className={classes.qtyPrice}>
                            £25
                        </Grid>
                         <Grid item lg={4} md={4} sm={4} xs={4} className={classes.qtyPrice}>
                            £30
                        </Grid>

                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            200
                        </Grid>
                         <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £24
                        </Grid>
                         <Grid item lg={4} md={4} sm={4} xs={4} className={classes.qtyPrice}>
                            £30
                        </Grid>
                         <Grid item lg={4} md={4} sm={4} xs={4} className={classes.qtyPrice}>
                            £35
                        </Grid>

                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            400
                        </Grid>
                         <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £40
                        </Grid>
                         <Grid item lg={4} md={4} sm={4} xs={4} className={classes.qtyPrice}>
                            £47.5
                        </Grid>
                         <Grid item lg={4} md={4} sm={4} xs={4} className={classes.qtyPrice}>
                            £54
                        </Grid>

                         <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            500
                        </Grid>
                         <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}>
                            £42.5
                        </Grid>
                         <Grid item lg={4} md={4} sm={4} xs={4} className={classes.qtyPrice}>
                            £50
                        </Grid>
                         <Grid item lg={4} md={4} sm={4} xs={4} className={classes.qtyPrice}>
                            £57.5
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

export default BCardsDetails
