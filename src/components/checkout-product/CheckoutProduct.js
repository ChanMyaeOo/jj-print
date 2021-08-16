import React from 'react'
import useStyles from './styles'
import { useStateValue } from '../../context/StateProvider'

const CheckoutProduct = ({ id, title, image, color, price, size, quantity, mugType, trimming, sides, lamination, soc, lam}) => {
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

                {
                    color ? (
                        <p><strong>Color:</strong> {color}</p>
                    ) : (
                        null
                    )
                }
                

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

                {
                    trimming ? (
                        <p><strong>Trimming:</strong> {trimming}</p>
                    ) : (
                        null
                    )
                }

                {
                    sides ? (
                        <p><strong>Sides:</strong> {sides}</p>
                    ) : (
                        null
                    )
                }

                {
                    lamination ? (
                        <p><strong>Lamination:</strong> {lamination}</p>
                    ) : (
                        null
                    )
                }

                {
                    soc ? (
                        <p><strong>Standard or Customised:</strong> {soc}</p>
                    ) : (
                        null
                    )
                }

                {
                    lam ? (
                        <p><strong>LAM:</strong> {lam}</p>
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
