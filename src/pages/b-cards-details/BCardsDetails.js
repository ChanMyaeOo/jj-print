import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import BCardImg from "../../images/business-cards.jpeg";
import Previews from "../../components/previews/Previews";
import { useStateValue } from "../../context/StateProvider";

const BCardsDetails = () => {
    const classes = useStyles()
    const [{ basket }, dispatch] = useStateValue();
    const [trimming, setTrimming] = useState('none')
    const [sides, setSides] = useState('1 side')
    const [lamination, setLamination] = useState('None')
    const [soc, setSoc] = useState('Standard')
    const [quantity, setQuantity] = useState(100)
    const [price, setPrice] = useState(20)
    const [lam, setLam] = useState('None')

     const addToBasket = (e) => {
        // dispatch item into the data layer
        e.preventDefault()
        dispatch({
        type: "ADD_TO_BASKET",
            item: {
                id: '1000123',
                title: 'Business Cards',
                image: BCardImg,
                trimming,
                sides,
                lamination,
                soc,
                lam,
                quantity,
                price,
            },
        });
    };
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
                        <select className={classes.selectWrap} onChange={(e) => {
                            setTrimming(e.target.value)
                        }}>
                            <option className={classes.selectOption} value="none">
                                None
                            </option>
                            <option className={classes.selectOption} value="Rounded corners">
                                Rounded corners
                            </option>
                        </select>
                    </div>

                    <div className={classes.colorSection}>
                        <div className={classes.formColor}>Sides</div>
                        <select className={classes.selectWrap} onChange={(e) => {
                            setSides(e.target.value)
                        }}>
                            <option className={classes.selectOption} value="1 side">
                                1 Side
                            </option>
                            <option className={classes.selectOption} value="2 sided">
                                2 Sided
                            </option>
                        </select>
                    </div>

                     <div className={classes.colorSection}>
                        <div className={classes.formColor}>Lamination</div>
                        <select className={classes.selectWrap} onChange={(e) => {
                            setLamination(e.target.value)
                        }}>
                            <option className={classes.selectOption} value="None">
                                None
                            </option>
                            <option className={classes.selectOption} value="Matt">
                                Matt
                            </option>
                            <option className={classes.selectOption} value="Glossy">
                                Glossy
                            </option>
                            <option className={classes.selectOption} value="Soft Touch">
                                Soft Touch
                            </option>
                        </select>
                    </div>

                     <div className={classes.colorSection}>
                        <div className={classes.formColor}>Standard or Customised</div>
                        <select className={classes.selectWrap} onChange={(e) => {
                            setSoc(e.target.value)
                        }}>
                            <option className={classes.selectOption} value="Standard">
                                Standard
                            </option>
                            <option className={classes.selectOption} value="Customised">
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
                         <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(100)
                                setPrice(20)
                                setLam('None')
                            }}
                         >
                            £20
                        </Grid>
                         <Grid item lg={4} md={4} sm={4} xs={4} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(100)
                                setPrice(25)
                                setLam('LAM 1 Side')
                            }}
                         >
                            £25
                        </Grid>
                         <Grid item lg={4} md={4} sm={4} xs={4} className={classes.qtyPrice}
                             onClick={() => {
                                setQuantity(100)
                                setPrice(30)
                                setLam('LAM 2 Sides')
                            }}
                         >
                            £30
                        </Grid>

                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            200
                        </Grid>
                         <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(200)
                                setPrice(24)
                                setLam('None')
                            }}
                         >
                            £24
                        </Grid>
                         <Grid item lg={4} md={4} sm={4} xs={4} className={classes.qtyPrice}
                             onClick={() => {
                                setQuantity(200)
                                setPrice(30)
                                setLam('LAM 1 Side')
                            }}
                         >
                            £30
                        </Grid>
                         <Grid item lg={4} md={4} sm={4} xs={4} className={classes.qtyPrice}
                             onClick={() => {
                                setQuantity(200)
                                setPrice(35)
                                setLam('LAM 2 Sides')
                            }}
                         >
                            £35
                        </Grid>

                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            400
                        </Grid>
                         <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                             onClick={() => {
                                setQuantity(400)
                                setPrice(40)
                                setLam('None')
                            }}
                         >
                            £40
                        </Grid>
                         <Grid item lg={4} md={4} sm={4} xs={4} className={classes.qtyPrice}
                             onClick={() => {
                                setQuantity(400)
                                setPrice(47.5)
                                setLam('LAM 1 Side')
                            }}
                         >
                            £47.5
                        </Grid>
                         <Grid item lg={4} md={4} sm={4} xs={4} className={classes.qtyPrice}
                             onClick={() => {
                                setQuantity(400)
                                setPrice(54)
                                setLam('LAM 2 Sides')
                            }}
                         >
                            £54
                        </Grid>

                         <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            500
                        </Grid>
                         <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                             onClick={() => {
                                setQuantity(500)
                                setPrice(42.5)
                                setLam('None')
                            }}
                         >
                            £42.5
                        </Grid>
                         <Grid item lg={4} md={4} sm={4} xs={4} className={classes.qtyPrice}
                             onClick={() => {
                                setQuantity(500)
                                setPrice(50)
                                setLam('LAM 1 Side')
                            }}
                         >
                            £50
                        </Grid>
                         <Grid item lg={4} md={4} sm={4} xs={4} className={classes.qtyPrice}
                             onClick={() => {
                                setQuantity(500)
                                setPrice(57.5)
                                setLam('LAM 2 Sides')
                            }}
                         >
                            £57.5
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

export default BCardsDetails
