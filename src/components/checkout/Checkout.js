import React from 'react'
import useStyles from './styles'
import { useStateValue } from '../../context/StateProvider'
import CheckoutProduct from '../checkout-product/CheckoutProduct'
import Subtotal from '../subtotal/Subtotal'

const Checkout = () => {
    const classes = useStyles()
    const [{basket, user}, dispatch] = useStateValue()
    return (
        <div className={classes.checkout}>
            <div className={classes.leftSide}>
                <p>Hello {user ? `${user.email},` : 'Guest,'}</p>
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
                            quantity={item.quantity}
                            mugType={item.mugType}
                        />
                    ))
                }
            </div>

            <div className={classes.rightSide}>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
