import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import OrderImg1 from '../../images/order1.png'
import OrderImg2 from '../../images/order2.png'
import OrderImg3 from '../../images/order3.png'
import OrderImg4 from '../../images/order4.png'

const HomeOrder = () => {
    const classes = useStyles();
    return (
        <div className={classes.homeOrderWrap}>
            <h2 className={classes.orderTitle}>how to order</h2>
            <Grid container className={classes.orderWrap}>
                <Grid item lg={3} md={3} sm={6} xs={12} className={classes.orderGrid} >
                    <div className={classes.orderImgWrap}>
                        <div>
                            <img src={OrderImg1} alt="order img" className={classes.orderImg} />
                        </div>
                    </div>
                    <p className={classes.orderText}>1. Custom your print</p>
                </Grid>

                <Grid item lg={3} md={3} sm={6} xs={12} className={classes.orderGrid}>
                    <div className={classes.orderImgWrap}>
                        <div>
                            <img src={OrderImg2} alt="order img" className={classes.orderImg} />
                        </div>
                    </div>

                    <p className={classes.orderText}>2. upload your artwork</p>
                </Grid>

                <Grid item lg={3} md={3} sm={6} xs={12} className={classes.orderGrid}>
                    <div className={classes.orderImgWrap}>
                        <div>
                            <img src={OrderImg3} alt="order img" className={classes.orderImg} />
                        </div>
                    </div>

                    <p className={classes.orderText}>3. fast &amp; secure checkout</p>
                </Grid>

                <Grid item lg={3} md={3} sm={6} xs={12}>
                    <div className={classes.orderImgWrap}>
                        <div>
                            <img src={OrderImg4} alt="order img" className={classes.orderImg} />
                        </div>
                    </div>
                    <p className={classes.orderText}>dispatch &amp; delivery</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeOrder
