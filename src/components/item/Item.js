import React from 'react'
import useStyles from './styles'
import TShirtImg from '../../images/t-shirt.jpg'

const Item = () => {
    const classes = useStyles();
    return (
        <div className={classes.itemWrap}>
          <img src={TShirtImg} alt="t-shirt img" className={classes.itemImg} />
          <h5>T-Shirts</h5>
          <p>We produce visually stunning, customizable, quality printed t-shirts. Whether you’re looking for something that is printed with text or even featuring your own personal design or image, we can help you create the best looking t-shirts.</p>
          <div className={classes.itemBottom}>
              <div>
                <div>from</div>
                <div className={classes.itemPrice}>£6.90</div>
              </div>

              <div className={classes.orderBtn}>
                  Order now
              </div>
          </div>
        </div>
    )
}

export default Item
