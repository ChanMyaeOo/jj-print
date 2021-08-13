import React from 'react'
import useStyles from './styles'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../context/StateProvider'
import { getBasketTotal } from '../../context/Reducer'

const Subtotal = () => {
    const classes = useStyles()
    const [{basket}, dispatch] = useStateValue()
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
            <button>
                Proceed to Checkout
            </button>
        </div>
    )
}

export default Subtotal
