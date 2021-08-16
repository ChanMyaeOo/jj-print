import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import useStyles from "./styles";
import { useStateValue } from "../../context/StateProvider";
import CheckoutProduct from "../checkout-product/CheckoutProduct";
import { getBasketTotal } from "../../context/Reducer";
import axios from '../../axios/Axios'

const Payment = () => {
    const classes = useStyles();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [{ basket }, dispatch] = useStateValue();
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [basket]);

    console.log("Client secret key is ===>", clientSecret);

    const handleChange = () => {};
    return (
        <div className={classes.payment}>
            <h3>
                Checkout{" "}
                <Link to="/checkout" className={classes.checkoutLink}>
                    ({basket.length} Items)
                </Link>
            </h3>

            <div className={classes.reviewItems}>
                <h3>Review Your Items</h3>

                {basket.map((item) => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        color={item.color}
                        size={item.size}
                        price={item.price}
                        quantity={item.quantity}
                        mugType={item.mugType}
                    />
                ))}
            </div>

            <div className={classes.billingDetails}>
                <h3>Billing Details</h3>

                <form className={classes.form}>
                    <input
                        type="text"
                        placeholder="Email Address"
                        className={classes.formInput}
                    />
                    <input
                        type="text"
                        placeholder="Full Name"
                        className={classes.formInput}
                    />
                    <select className={classes.formInput}>
                        <option>United Kingdom (UK)</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Street Address"
                        className={classes.formInput}
                    />
                    <input
                        type="text"
                        placeholder="Town / City"
                        className={classes.formInput}
                    />
                    <input
                        type="text"
                        placeholder="State / Country"
                        className={classes.formInput}
                    />
                    <input
                        type="text"
                        placeholder="Postcode / ZIP"
                        className={classes.formInput}
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        className={classes.formInput}
                    />
                    <textarea
                        placeholder="Notes about your order, e.g. special notes for delivery"
                        className={classes.formInput}
                    ></textarea>
                </form>
            </div>

            <div className={classes.paymentMethod}>
                <h3>Payment Method</h3>

                <form>
                    <CardElement
                        onChange={handleChange}
                        className={classes.cardElement}
                    />
                    <div className={classes.paymentContainer}>
                        <CurrencyFormat
                            renderText={(value) => (
                                <h3>Order total: {value}</h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeperator={true}
                            prefix={"£"}
                        />
                        <button disabled={processing || disabled || succeeded}>
                            <span>
                                {processing ? <p>Processing</p> : "Order Now"}
                            </span>
                        </button>
                    </div>
                    {error && <div>{error}</div>}
                </form>
            </div>
        </div>
    );
};

export default Payment;
