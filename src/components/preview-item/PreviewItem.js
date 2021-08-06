import React from 'react'
import { Link } from 'react-router-dom'
import LeatherCoverImg from '../../images/leather-cover.jpg'
import useStyles from './styles'

const PreviewItem = () => {
    const classes = useStyles();
    return (
        <div className={classes.previewItemWrap}>
            <img src={LeatherCoverImg} alt="leather cover" className={classes.leatherCoverImg} />
            <p className={classes.previewTitle}>Leather Cover Menu</p>
            <div>From: <span className={classes.previewPrice}>£22.25</span></div>
            <Link className={classes.previewOrder}>Order Now</Link>
        </div>
    )
}

export default PreviewItem
