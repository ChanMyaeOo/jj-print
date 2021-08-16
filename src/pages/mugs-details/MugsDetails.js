import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import MugsImg from '../../images/mugs.jpg'
import Previews from "../../components/previews/Previews";
import { useStateValue } from "../../context/StateProvider";

const MugsDetails = () => {
    const classes = useStyles()
    const [{ basket }, dispatch] = useStateValue();
    const [color, setColor] = useState('white')
    const [mugType, setMugType] = useState('White Mug')
    const [price, setPrice] = useState(12.5)

    const addToBasket = (e) => {
        // dispatch item into the data layer
        e.preventDefault()
        dispatch({
        type: "ADD_TO_BASKET",
            item: {
                id: '1000122',
                title: 'Mugs',
                image: MugsImg,
                color,
                price,
                mugType
            },
        });
    };

    const handleChange = (e) => {
        setColor(e.target.value)
    }
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
                        <select className={classes.selectWrap} onChange={handleChange}>
                            <option className={classes.selectOption} value="white">
                                White
                            </option>
                            <option className={classes.selectOption} value="dark">
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

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice} 
                        onClick={() => {
                            setMugType('White Mug')
                            setPrice(12.5)
                        }}>
                            £12.50
                        </Grid>

                        <Grid item lg={9} md={9} sm={9} xs={9} className={classes.mugColor}>
                            COLOURED MUG
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice}
                            onClick={() => {
                            setMugType('Coloured Mug')
                            setPrice(14.5)
                        }}
                        >
                            £14.50
                        </Grid>

                        <Grid item lg={9} md={9} sm={9} xs={9} className={classes.mugColor}>
                            GOLD / SILVER MUG
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice}
                            onClick={() => {
                            setMugType('Gold/Silver Mug')
                            setPrice(15.9)
                        }}
                        >
                            £15.90
                        </Grid>

                        <Grid item lg={9} md={9} sm={9} xs={9} className={classes.mugColor}>
                            MAGIC MUG
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice}
                            onClick={() => {
                            setMugType('Magic Mug')
                            setPrice(16)
                        }}
                        >
                            £16
                        </Grid>

                        <Grid item lg={9} md={9} sm={9} xs={9} className={classes.mugColor}>
                            COASTERS - SET OF 4
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice}
                            onClick={() => {
                            setMugType('Coasters - Set of 4')
                            setPrice(14)
                        }}
                        >
                            £14
                        </Grid>

                        <Grid item lg={9} md={9} sm={9} xs={9} className={classes.mugColor}>
                            COASTERS - SET OF 6
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice}
                            onClick={() => {
                            setMugType('Coasters - Set of 6')
                            setPrice(19)
                        }}
                        >
                            £19
                        </Grid>

                        <Grid item lg={9} md={9} sm={9} xs={9} className={classes.mugColor}>
                            COASTERS - INDIVIDUAL IMAGE
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice}
                            onClick={() => {
                            setMugType('Coasters - Individual Image')
                            setPrice(5.5)
                        }}
                        >
                            £5.50
                        </Grid>

                        <Grid item lg={9} md={9} sm={9} xs={9} className={classes.mugColor}>
                            PLACEMATS - SET OF 6
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice}
                            onClick={() => {
                            setMugType('Placemats - Set of 6')
                            setPrice(19.9)
                        }}
                        >
                            £19.90
                        </Grid>

                        <Grid item lg={9} md={9} sm={9} xs={9} className={classes.mugColor}>
                            PLACEMATS - INDIVIDUAL IMAGE
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xs={3} className={classes.mugPrice}
                            onClick={() => {
                            setMugType('Placemats - Individual Image')
                            setPrice(7.5)
                        }}
                        >
                            £7.50
                        </Grid>
                    </Grid>

                    <button type="submit" className={classes.cardBtn} onClick={addToBasket}>
                        Add to Card
                    </button>
                </form>
            </div>
        </div>
    )
}

export default MugsDetails
