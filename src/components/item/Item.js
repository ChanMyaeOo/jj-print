import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'


const Item = ({ imgUrl, altText, title, content, price, details }) => {
    const classes = useStyles();
    return (
        <div className={classes.itemWrap}>
          <Link to={`/${details}`}>
            <img src={imgUrl} alt={altText} className={classes.itemImg} />
          </Link>

          
          <h5><Link to={`/${details}`} className={classes.itemTitle}>{title}</Link></h5>
          
          <p>{content}</p>
          <div className={classes.itemBottom}>
              <div>
                <div>from</div>
                <div className={classes.itemPrice}>{price}</div>
              </div>

              <div className={classes.orderBtn}>
                  Order now
              </div>
          </div>
        </div>
    )
}

export default Item
