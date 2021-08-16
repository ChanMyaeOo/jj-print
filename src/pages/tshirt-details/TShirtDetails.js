import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import TShirtImg from "../../images/t-shirt.jpg";
import Previews from "../../components/previews/Previews";
import { useStateValue } from "../../context/StateProvider";


const TShirtDetails = () => {
    const [{ basket }, dispatch] = useStateValue();
    console.log('Basket ==>' ,basket)
    const classes = useStyles();
    const handleSubmit = () => {};
    const [price, setPrice] = useState(6.9)
    const [color, setColor] = useState('white')
    const [size, setSize] = useState('Single Side')
    const [quantity, setQuantity] = useState('1')

    const addToBasket = (e) => {
        // dispatch item into the data layer
        e.preventDefault()
        dispatch({
        type: "ADD_TO_BASKET",
            item: {
                id: '1000121',
                title: 'T-Shirts',
                image: TShirtImg,
                color,
                price,
                size,
                quantity
            },
        });
    };

    const handleChange = (e) => {
        setColor(e.target.value)
    }
    return (
        <div className={classes.tShirtWrap}>
            <div className={classes.leftContainer}>
                <img
                    src={TShirtImg}
                    alt="t-shirt"
                    className={classes.shirtImg}
                />
                <div>
                    <Previews />
                </div>
            </div>

            <div className={classes.rightContainer}>
                <h2 className={classes.tshirtTitle}>T-Shirts</h2>
                <ul className={classes.tshirtList}>
                    <li>
                        For bulk t-shirt orders: Minimum quantity to order is 10
                        &amp; must all be the same artwork
                    </li>
                    <li>
                        For football shirts or shorts: (Name &amp; number) |
                        Customer supplied shirt/short.
                    </li>
                    <li>2 Colours Flex Cut</li>
                    <li>3 Colours Flex Cut</li>
                    <li>Full Colour + Flex Cut (1 Col)</li>
                    <li>Full Colour + Flex Cut (2 Col)</li>
                    <li>Full Colour + Flex Cut (3 Col)</li>
                    <li>Polo t-shirt (white/colour)</li>
                    <li>
                        Customer supplied t-shirt/waistcoat: £2 off the above
                        prices.
                    </li>
                    <li>Full colour printing size of artwork up to A4.</li>
                </ul>

                <div className={classes.priceSection}>
                    <p>Price:</p>
                    <div>£6.90</div>
                </div>

                <form onSubmit={handleSubmit} className={classes.formWrap}>
                    <div className={classes.colorSection}>
                        <div className={classes.formColor}>Color:</div>
                        <select className={classes.selectWrap} onChange={handleChange}>
                            <option className={classes.selectOption} value="White">
                                White
                            </option>
                            <option className={classes.selectOption} value="Dark">
                                Dark
                            </option>
                        </select>
                    </div>

                    <Grid container className={classes.quantityWrap}>
                        <Grid
                            item
                            lg={2}
                            md={2}
                            sm={2}
                            xs={2}
                            className={classes.quantity}
                        ></Grid>
                        <Grid
                            item
                            lg={5}
                            md={5}
                            sm={5}
                            xs={5}
                            className={classes.quantity}
                        >
                            Single Side
                        </Grid>
                        <Grid
                            item
                            lg={5}
                            md={5}
                            sm={5}
                            xs={5}
                            className={classes.quantity}
                        >
                            Double Side
                        </Grid>

                        <Grid
                            item
                            lg={2}
                            md={2}
                            sm={2}
                            xs={2}
                            className={classes.quantity}
                        >
                            1
                        </Grid>
                        <Grid
                            item
                            lg={5}
                            md={5}
                            sm={5}
                            xs={5}
                            className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity('1')
                                setPrice(14)
                                setSize('Single Side')
                            }}
                        >
                            £14
                        </Grid>
                        <Grid
                            item
                            lg={5}
                            md={5}
                            sm={5}
                            xs={5}
                            className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity('1')
                                setPrice(19)
                                setSize('Double Side')
                            }}
                        >
                            £19
                        </Grid>

                        <Grid
                            item
                            lg={2}
                            md={2}
                            sm={2}
                            xs={2}
                            className={classes.quantity}
                        >
                            10-20
                        </Grid>
                        <Grid
                            item
                            lg={5}
                            md={5}
                            sm={5}
                            xs={5}
                            className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity('10-20')
                                setPrice(8.9)
                                setSize('Single Side')
                            }}
                        >
                            £8.90
                        </Grid>
                        <Grid
                            item
                            lg={5}
                            md={5}
                            sm={5}
                            xs={5}
                            className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity('10-20')
                                setPrice(12.9)
                                setSize('Double Side')
                            }}
                        >
                            £12.90
                        </Grid>

                        <Grid
                            item
                            lg={2}
                            md={2}
                            sm={2}
                            xs={2}
                            className={classes.quantity}
                        >
                            21-49
                        </Grid>
                        <Grid
                            item
                            lg={5}
                            md={5}
                            sm={5}
                            xs={5}
                            className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity('21-49')
                                setPrice(7.9)
                                setSize('Single Side')
                            }}
                        >
                            £7.90
                        </Grid>
                        <Grid
                            item
                            lg={5}
                            md={5}
                            sm={5}
                            xs={5}
                            className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity('21-49')
                                setPrice(11)
                                setSize('Double Side')
                            }}
                        >
                            £11
                        </Grid>

                        <Grid
                            item
                            lg={2}
                            md={2}
                            sm={2}
                            xs={2}
                            className={classes.quantity}
                        >
                            50+
                        </Grid>
                        <Grid
                            item
                            lg={5}
                            md={5}
                            sm={5}
                            xs={5}
                            className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity('50+')
                                setPrice(6.9)
                                setSize('Single Side')
                            }}
                        >
                            £6.90
                        </Grid>
                        <Grid
                            item
                            lg={5}
                            md={5}
                            sm={5}
                            xs={5}
                            className={classes.qtyPrice}
                            onClick={() => {
                                setQuantity('50+')
                                setPrice(9.9)
                                setSize('Double Side')
                            }}
                        >
                            £9.90
                        </Grid>
                    </Grid>

                    <button type="submit" className={classes.cardBtn} onClick={addToBasket}>
                        Add to Card
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TShirtDetails;
