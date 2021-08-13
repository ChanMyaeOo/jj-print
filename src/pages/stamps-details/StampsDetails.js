import React, { useState} from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import StampsImg from '../../images/stamps.jpg'
import Previews from "../../components/previews/Previews";
import { useStateValue } from "../../context/StateProvider";

const StampsDetails = () => {
    const classes = useStyles()
    const [{ basket }, dispatch] = useStateValue();
    const [price, setPrice] = useState(14.95)
    const [color, setColor] = useState('black')
    const [size, setSize] = useState('14x66mm')

    const addToBasket = (e) => {
        // dispatch item into the data layer
        e.preventDefault()
        dispatch({
        type: "ADD_TO_BASKET",
            item: {
                id: '1000124',
                title: 'Stamps',
                image: StampsImg,
                color,
                price,
                size
            },
        });
    };

    const handleChange = (e) => {
        setColor(e.target.value)
    }

    return (
        <div className={classes.stampsWrap}>
            <div className={classes.leftContainer}>
                <img
                    src={StampsImg}
                    alt="stamps-img"
                    className={classes.stampsImg}
                />
                <div>
                    <Previews />
                </div>
            </div>

            <div className={classes.rightContainer}>
                <h2 className={classes.stampsTitle}>stamps</h2>
                <div className={classes.stampsList}>
                    <p>Stamps are a great way to show your customers you care. Available in a wide range of sizes and with stock delivered free to your door, your eye-catching stamp will keep your customers coming back for more.</p>
                    <p>Stamps have played a major role in administrative work, and continue to do so even in today’s digital age.</p>
                    <p>You can create your own customised design and shape – in any language – and we will do the rest.</p>
                    <p>Once created, the product can be used for years without any problems.</p>
                    <ul className={classes.listWrap}>
                        <li>Self-inking stamp for daily use in the office.</li>
                        <li>Photo quality allows you to stamp photos and shades.</li>
                        <li>Choose from four different ink colours (subject to availability):</li>
                        <li>Blue</li>
                        <li>Black</li>
                        <li>Red</li>
                        <li>Green</li>
                    </ul>
                </div>

                <div className={classes.priceSection}>
                    <p>Price:</p>
                    <div>£14.95</div>
                </div>

                <form className={classes.formWrap}>
                    <div className={classes.colorSection}>
                        <div className={classes.formColor}>Color:</div>
                        <select className={classes.selectWrap} onChange={handleChange}>
                            <option className={classes.selectOption} value="Black" >
                                Black
                            </option>
                            <option className={classes.selectOption} value="Red">
                                Red
                            </option>
                            <option className={classes.selectOption} value="Green">
                                Green
                            </option>
                            <option className={classes.selectOption} value="Blue">
                                Blue
                            </option>
                        </select>
                    </div>

                    <Grid container className={classes.quantityWrap}>
                        <Grid item lg={8} md={8} sm={8} xs={8} className={classes.size}>

                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={4} className={classes.size}>
                            price
                        </Grid>

                        <Grid item lg={8} md={8} sm={8} xs={8} className={classes.size}>
                            size 14x66mm
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={4} className={classes.price} onClick={() => {
                            setSize('14x66mm')
                            setPrice(14.95)
                        }}>
                            £14.95
                        </Grid>

                        <Grid item lg={8} md={8} sm={8} xs={8} className={classes.size}>
                            size 14x38mm
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={4} className={classes.price} onClick={() => {
                            setSize('14x38mm')
                            setPrice(17.58)
                        }}>
                            £17.58
                        </Grid>

                        <Grid item lg={8} md={8} sm={8} xs={8} className={classes.size}>
                            size 18x50mm
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={4} className={classes.price} onClick={() => {
                            setSize('18x50mm')
                            setPrice(21.38)
                        }}>
                            £21.38
                        </Grid>

                        <Grid item lg={8} md={8} sm={8} xs={8} className={classes.size}>
                            size 22x60mm
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={4} className={classes.price} onClick={() => {
                            setSize('22x60mm')
                            setPrice(26.5)
                        }}>
                            £26.56
                        </Grid>

                        <Grid item lg={8} md={8} sm={8} xs={8} className={classes.size}>
                            size 34x58mm
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={4} className={classes.price} onClick={() => {
                            setSize('34x58mm')
                            setPrice(31.1)
                        }}>
                            £31.1
                        </Grid>

                        <Grid item lg={8} md={8} sm={8} xs={8} className={classes.size}>
                            size 27x70mm
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={4} className={classes.price} onClick={() => {
                            setSize('27x70mm')
                            setPrice(32.18)
                        }}>
                            £32.18
                        </Grid>
                    </Grid>

                    <button className={classes.cardBtn} onClick={addToBasket}>
                        Add to Card
                    </button>
                </form>
            </div>
        </div>
    )
}

export default StampsDetails
