import React from 'react'
import useStyles from './styles'
import { useStateValue } from '../../context/StateProvider'

const CheckoutProduct = ({ id, title, image, color, price, size, quantity, mugType}) => {
    const classes = useStyles()
    const [{basket}, dispatch] = useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id,
        });
    };
    return (
        <div className={classes.checkoutProduct}>
            <img src={image} alt="checkout img" className={classes.cpImage}/>

            <div className={classes.cpContent}>
                <h3>{title}</h3>
                <p><strong>Color:</strong> {color}</p>
                

                {
                    size ? (
                        <p><strong>Size:</strong> {size}</p>
                    ) : (
                        null
                    )
                }

                {
                    quantity ? (
                        <p><strong>Quantity:</strong> {quantity}</p>
                    ) : (
                        null
                    )
                }

                {
                    mugType ? (
                        <p><strong>Type:</strong> {mugType}</p>
                    ) : (
                        null
                    )
                }
                
                <p><strong>Price:</strong> £{price}</p>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
