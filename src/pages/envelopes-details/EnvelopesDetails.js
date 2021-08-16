import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import EnvelopeImg from '../../images/envelope.png'
import Previews from "../../components/previews/Previews";
import { useStateValue } from "../../context/StateProvider";

const EnvelopesDetails = () => {
    const classes = useStyles()
    const [{ basket }, dispatch] = useStateValue();
    const [options, setOptions] = useState('With Window');
    const [color, setColor] = useState('White Paper');
    const [size, setSize] = useState('DL');
    const [quantity, setQuantity] = useState(100);
    const [price, setPrice] = useState(99);

    const addToBasket = (e) => {
        // dispatch item into the data layer
        e.preventDefault()
        dispatch({
        type: "ADD_TO_BASKET",
            item: {
                id: '1000126',
                title: 'Envelopes',
                image: EnvelopeImg,
                color,
                price,
                size,
                options,
                quantity
            },
        });
    };

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
                        <select className={classes.selectWrap} onChange={(e) => {
                            setOptions(e.target.value)
                        }}>
                            <option className={classes.selectOption} value="With Window">
                                With Window
                            </option>
                            <option className={classes.selectOption} value="Without Window">
                                Without Window
                            </option>
                        </select>
                    </div>

                    <div className={classes.colorSection}>
                        <div className={classes.formColor}>Colour:</div>
                        <select className={classes.selectWrap} onChange={(e) => {
                            setColor(e.target.value)
                        }}>
                            <option className={classes.selectOption} value="White Paper">
                                White Paper
                            </option>
                            <option className={classes.selectOption} value="Self Seal">
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
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}
                            onClick={() => {
                                setSize('DL')
                                setQuantity(100)
                                setPrice(99)
                            }}
                        >
                            £99
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}
                            onClick={() => {
                                setSize('DL')
                                setQuantity(200)
                                setPrice(159)
                            }}
                        >
                            £159
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}
                            onClick={() => {
                                setSize('DL')
                                setQuantity(500)
                                setPrice(195)
                            }}
                        >
                            £195
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}
                            onClick={() => {
                                setSize('DL')
                                setQuantity(1000)
                                setPrice(225)
                            }}
                        >
                            £225
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}
                            onClick={() => {
                                setSize('DL')
                                setQuantity(2500)
                                setPrice(315)
                            }}
                        >
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
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}
                            onClick={() => {
                                setSize('C6/5')
                                setQuantity(2500)
                                setPrice(210)
                            }}
                        >
                            £210
                        </Grid>

                         <Grid ld={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            c5
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}
                            onClick={() => {
                                setSize('C5')
                                setQuantity(100)
                                setPrice(130)
                            }}
                        >
                            £130
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}
                            onClick={() => {
                                setSize('C5')
                                setQuantity(200)
                                setPrice(165)
                            }}
                        >
                            £165
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}
                            onClick={() => {
                                setSize('C5')
                                setQuantity(500)
                                setPrice(210)
                            }}
                        >
                            £210
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}
                            onClick={() => {
                                setSize('C5')
                                setQuantity(1000)
                                setPrice(230)
                            }}
                        >
                            £230
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}
                            onClick={() => {
                                setSize('C5')
                                setQuantity(2500)
                                setPrice(375)
                            }}
                        >
                            £375
                        </Grid>

                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            c4
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}
                            onClick={() => {
                                setSize('C4')
                                setQuantity(100)
                                setPrice(140)
                            }}
                        >
                            £140
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}
                            onClick={() => {
                                setSize('C4')
                                setQuantity(200)
                                setPrice(175)
                            }}
                        >
                            £175
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}
                            onClick={() => {
                                setSize('C4')
                                setQuantity(500)
                                setPrice(225)
                            }}
                        >
                            £225
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}
                            onClick={() => {
                                setSize('C4')
                                setQuantity(1000)
                                setPrice(250)
                            }}
                        >
                            £250
                        </Grid>
                        <Grid ld={2} md={2} sm={2} xs={2} className={classes.price}
                            onClick={() => {
                                setSize('C4')
                                setQuantity(2500)
                                setPrice(395)
                            }}
                        >
                            £395
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

export default EnvelopesDetails
