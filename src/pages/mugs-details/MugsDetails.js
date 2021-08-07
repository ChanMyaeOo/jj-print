import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import MugsImg from '../../images/mugs.jpg'
import Previews from "../../components/previews/Previews";

const MugsDetails = () => {
    const classes = useStyles()
    return (
        <div className={classes.mugsWrap}>
            <div className={classes.leftContainer}>
                <img
                    src={MugsImg}
                    alt="mugs-img"
                    className={classes.mugImg}
                />
                <div>
                    <Previews />
                </div>
            </div>

            <div className={classes.rightContainer}>
                <h2 className={classes.mugTitle}>Mugs</h2>
                <ul className={classes.mugsList}>
                    <li>
                       White mug 11oz
                    </li>
                    <li>
                        Coloured mug 11oz
                    </li>
                    <li>China mug 10oz</li>
                    <li>Gold / Silver mug 11oz</li>
                    <li>Magic mug 11oz Size of artwork 192 x 82mm)</li>
                    <li>Coasters – Set of 4 (Same image)</li>
                    <li>Coasters – Set of 6 (Same image)</li>
                    <li>Coasters – Individual image</li>
                    <li>
                       Placemats – Set of 6 (Same image)
                    </li>
                    <li>Placemats – Individual image</li>
                </ul>

                <div className={classes.priceSection}>
                    <p>Price:</p>
                    <div>£12.50</div>
                </div>

                <form className={classes.formWrap}>
                    <div className={classes.colorSection}>
                        <div className={classes.formColor}>Color:</div>
                        <select className={classes.selectWrap}>
                            <option className={classes.selectOption}>
                                White
                            </option>
                            <option className={classes.selectOption}>
                                Dark
                            </option>
                        </select>
                    </div>

                    <Grid container className={classes.quantityWrap}>
                        <Grid item lg={9} md={9} sm={9} xs={9} className={classes.mugColor}>

                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice}>
                            price
                        </Grid>

                         <Grid item lg={9} md={9} sm={9} xs={9} className={classes.mugColor}>
                            WHITE MUG
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice}>
                            £12.50
                        </Grid>

                        <Grid item lg={9} md={9} sm={9} xs={9} className={classes.mugColor}>
                            COLOURED MUG
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice}>
                            £14.50
                        </Grid>

                        <Grid item lg={9} md={9} sm={9} xs={9} className={classes.mugColor}>
                            GOLD / SILVER MUG
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice}>
                            £15.90
                        </Grid>

                        <Grid item lg={9} md={9} sm={9} xs={9} className={classes.mugColor}>
                            MAGIC MUG
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice}>
                            £16
                        </Grid>

                        <Grid item lg={9} md={9} sm={9} xs={9} className={classes.mugColor}>
                            COASTERS - SET OF 4
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice}>
                            £14
                        </Grid>

                        <Grid item lg={9} md={9} sm={9} xs={9} className={classes.mugColor}>
                            COASTERS - SET OF 6
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice}>
                            £19
                        </Grid>

                        <Grid item lg={9} md={9} sm={9} xs={9} className={classes.mugColor}>
                            COASTERS- INDIVIDUAL IMAGE
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice}>
                            £5.50
                        </Grid>

                        <Grid item lg={9} md={9} sm={9} xs={9} className={classes.mugColor}>
                            PLACEMATS - SET OF 6
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice}>
                            £19.90
                        </Grid>

                        <Grid item lg={9} md={9} sm={9} xs={9} className={classes.mugColor}>
                            PLACEMATS - INDIVIDUAL IMAGE
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice}>
                            £7.50
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

export default MugsDetails
