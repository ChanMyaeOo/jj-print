import React from 'react'
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { useStateValue } from '../../context/StateProvider'
import { getBasketTotal } from '../../context/Reducer'
import useStyles from './styles'

const Subtotal = () => {
    const classes = useStyles()
    const history = useHistory()
    const [{basket, user}, dispatch] = useStateValue()
    return (
        <div className={classes.subtotal}>
            <CurrencyFormat
                renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket?.length} items): <strong>{value}</strong>
                    </p>
                </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"£"}
            />
            {/* <button onClick={(e) => history.push("/payment")} disabled={basket.length === 0}>
                Proceed to Checkout
            </button> */}

            <button onClick={(e) => {
                user ? history.push("/payment") : history.push("/sign-in")
            }} disabled={basket.length === 0}>
                Proceed to Checkout
            </button>
        </div>
    )
}

export default Subtotal
