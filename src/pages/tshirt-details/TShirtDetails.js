import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import TShirtImg from '../../images/t-shirt.jpg'

const TShirtDetails = () => {
    const classes = useStyles();
    const handleSubmit = () => {
    }
    return (
        <div className={classes.tShirtWrap}>
            <div>
                <img src={TShirtImg} alt="t-shirt" />
                <div>
                    <div>Item1</div>
                    <div>Item2</div>
                </div>
                
            </div>

            <div>
                <div className={classes.rightContainer}>
                    <h2 className={classes.tshirtTitle}>T-Shirts</h2>
                    <ul className={classes.tshirtList}>
                        <li>For bulk t-shirt orders: Minimum quantity to order is 10 &amp; must all be the same artwork</li>
                        <li>For football shirts or shorts: (Name &amp; number) | Customer supplied shirt/short.</li>
                        <li>2 Colours Flex Cut</li>
                        <li>3 Colours Flex Cut</li>
                        <li>Full Colour + Flex Cut (1 Col)</li>
                        <li>Full Colour + Flex Cut (2 Col)</li>
                        <li>Full Colour + Flex Cut (3 Col)</li>
                        <li>Polo t-shirt (white/colour)</li>
                        <li>Customer supplied t-shirt/waistcoat: £2 off the above prices.</li>
                        <li>Full colour printing size of artwork up to A4.</li>
                    </ul>

                    <div className={classes.priceSection}>
                        <p>Price:</p>
                        <div>£6.90</div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className={classes.colorSection}>
                            <div className={classes.formColor}>Color:</div>
                            <select className={classes.selectWrap}>
                                <option>White</option>
                                <option>Dark</option>
                            </select>
                        </div>

                        <Grid container className={classes.quantityWrap}>
                            <Grid item lg={2} md={2} className={classes.quantity}>

                            </Grid>
                            <Grid item lg={5} md={5} className={classes.quantity}>
                                Single Side
                            </Grid>
                            <Grid item lg={5} md={5} className={classes.quantity}>
                                Double Side
                            </Grid>

                            <Grid item lg={2} md={2} className={classes.quantity}>
                                1
                            </Grid>
                            <Grid item lg={5} md={5} className={classes.qtyPrice}>
                                £14
                            </Grid>
                            <Grid item lg={5} md={5} className={classes.qtyPrice}>
                                £19
                            </Grid>

                            <Grid item lg={2} md={2} className={classes.quantity}>
                                10-20
                            </Grid>
                            <Grid item lg={5} md={5} className={classes.qtyPrice}>
                                £8.90
                            </Grid>
                            <Grid item lg={5} md={5} className={classes.qtyPrice}>
                                £12.90
                            </Grid>

                            <Grid item lg={2} md={2} className={classes.quantity}>
                                21-49
                            </Grid>
                            <Grid item lg={5} md={5} className={classes.qtyPrice}>
                                £7.90
                            </Grid>
                            <Grid item lg={5} md={5} className={classes.qtyPrice}>
                                £11
                            </Grid>

                            <Grid item lg={2} md={2} className={classes.quantity}>
                                50+
                            </Grid>
                            <Grid item lg={5} md={5} className={classes.qtyPrice}>
                                £6.90
                            </Grid>
                            <Grid item lg={5} md={5} className={classes.qtyPrice}>
                                £9.90
                            </Grid>
                        </Grid>

                        <button type="submit" className={classes.cardBtn}>Add to Card</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TShirtDetails
