import React from 'react'
import useStyles from './styles'
import { useStateValue } from '../../context/StateProvider'
import CheckoutProduct from '../checkout-product/CheckoutProduct'

const Checkout = () => {
    const classes = useStyles()
    const [{basket}, dispatch] = useStateValue()
    return (
        <div className={classes.checkout}>
            <div className={classes.leftSide}>
                <p>Hello Guest</p>
                <h3>Your Shopping Basket</h3>

                {
                    basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            color={item.color}
                            size={item.size}
                            price={item.price}
                        />
                    ))
                }
            </div>

            <div className={classes.rightSide}>
                <p>Subtotal (0 items): <strong>£0</strong></p>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Checkout
