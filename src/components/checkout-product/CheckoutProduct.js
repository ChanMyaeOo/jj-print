import React from 'react'
import useStyles from './styles'
import StampsImg from '../../images/stamps.jpg'

const CheckoutProduct = ({ id, title, image, color, price, size}) => {
    const classes = useStyles()
    return (
        <div className={classes.checkoutProduct}>
            <img src={image} alt="checkout img" className={classes.cpImage}/>

            <div className={classes.cpContent}>
                <h3>{title}</h3>
                <p><strong>Color:</strong> {color}</p>
                <p><strong>Size:</strong> {size}</p>
                <p><strong>Price:</strong> £{price}</p>
                <button>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
