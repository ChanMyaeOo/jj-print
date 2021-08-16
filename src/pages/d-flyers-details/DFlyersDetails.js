import React, {useState} from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import DFlyerImg from "../../images/d-flyers.jpeg";
import Previews from "../../components/previews/Previews";
import { useStateValue } from "../../context/StateProvider";

const DFlyersDetails = () => {
    const classes = useStyles()
    const [{ basket }, dispatch] = useStateValue();
    const [sides, setSides] = useState('1 Side')
    const [dot, setDot] = useState('Digital Printing')
    const [paper, setPaper] = useState('150gsm Gloss')
    const [quantity, setQuantity] = useState(25)
    const [size, setSize] = useState('A6')
    const [price, setPrice] = useState(35)

    const addToBasket = (e) => {
        // dispatch item into the data layer
        e.preventDefault()
        dispatch({
        type: "ADD_TO_BASKET",
            item: {
                id: '1000125',
                title: 'Digital Flyers',
                image: DFlyerImg,
                price,
                size,
                sides,
                dot,
                paper,
                quantity
            },
        });
    };

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
                    <div>£35</div>
                </div>

                <form className={classes.formWrap}>
                    <div className={classes.colorSection}>
                        <div className={classes.formColor}>Printed Sides</div>
                        <select className={classes.selectWrap} onChange={(e) => {
                            setSides(e.target.value)
                        }}>
                            <option className={classes.selectOption} value="1 Side">
                                1 Side
                            </option>
                            <option className={classes.selectOption} value="2 Sided">
                                2 Sided
                            </option>
                        </select>
                    </div>

                    <div className={classes.colorSection}>
                        <div className={classes.formColor}>Digital or Litho</div>
                        <select className={classes.selectWrap} onChange={(e) => {
                            setDot(e.target.value)
                        }}>
                            <option className={classes.selectOption} value="Digital Printing">
                                Digital Printing
                            </option>
                        </select>
                    </div>

                    <div className={classes.colorSection}>
                        <div className={classes.formColor}>Paper</div>
                        <select className={classes.selectWrap} onChange={(e) => {
                            setPaper(e.target.value)
                        }}>
                            <option className={classes.selectOption} value="150gsm Gloss">
                                150gsm Gloss
                            </option>
                            <option className={classes.selectOption} value="170gsm Silk">
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
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(25)
                                setSize('A6')
                                setPrice(35)
                            }}
                        >
                            £35
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(25)
                                setSize('DL')
                                setPrice(41)
                            }}
                        >
                            £41
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(25)
                                setSize('A5')
                                setPrice(46)
                            }}
                        >
                            £46
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(25)
                                setSize('A4')
                                setPrice(49)
                            }}
                        >
                            £49
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(25)
                                setSize('A3')
                                setPrice(59)
                            }}
                        >
                            £59
                        </Grid>

                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            50
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(50)
                                setSize('A6')
                                setPrice(40)
                            }}
                        >
                            £40
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(50)
                                setSize('DL')
                                setPrice(43)
                            }}
                        >
                            £43
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(50)
                                setSize('A5')
                                setPrice(50)
                            }}
                        >
                            £50
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(50)
                                setSize('A4')
                                setPrice(59)
                            }}
                        >
                            £59
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(50)
                                setSize('A3')
                                setPrice(72)
                            }}
                        >
                            £72
                        </Grid>

                         <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            100
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(100)
                                setSize('A6')
                                setPrice(45)
                            }}
                        >
                            £45
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(100)
                                setSize('DL')
                                setPrice(48)
                            }}
                        >
                            £48
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(100)
                                setSize('A5')
                                setPrice(59)
                            }}
                        >
                            £59
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(100)
                                setSize('A4')
                                setPrice(75)
                            }}
                        >
                            £75
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(100)
                                setSize('A3')
                                setPrice(99)
                            }}
                        >
                            £99
                        </Grid>

                         <Grid item lg={2} md={2} sm={2} xs={2} className={classes.quantity}>
                            250
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(250)
                                setSize('A6')
                                setPrice(50)
                            }}
                        >
                            £50
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(250)
                                setSize('DL')
                                setPrice(56)
                            }}
                        >
                            £56
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(250)
                                setSize('A5')
                                setPrice(69)
                            }}
                        >
                            £69
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(250)
                                setSize('A4')
                                setPrice(90)
                            }}
                        >
                            £90
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity(250)
                                setSize('A3')
                                setPrice(169)
                            }}
                        >
                            £169
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

export default DFlyersDetails
