import React from 'react'
import { Link } from 'react-router-dom'
// import LeatherCoverImg from '../../images/leather-cover.jpg'
import useStyles from './styles'

const PreviewItem = ({ imgUrl, title, price, details, altText }) => {
    const classes = useStyles();
    return (
        <div className={classes.previewItemWrap}>
            <Link to={`${details}`}><img src={imgUrl} alt={altText} className={classes.leatherCoverImg} /></Link>
            <div className={classes.titleWrap}><Link to={`${details}`} className={classes.previewTitle}>{title}</Link></div>
            <div>From: <span className={classes.previewPrice}>{price}</span></div>
            <Link className={classes.previewOrder}>Order Now</Link>
        </div>
    )
}

export default PreviewItem
