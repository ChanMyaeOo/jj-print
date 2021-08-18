import React from 'react'
import useStyles from './styles'


const Hero = () => {
    const classes = useStyles();
    return (
        <div className={classes.heroWrap}>
            <div className={classes.heroContent}>
                {/* <h2>CUSTOM-MADE FLYERS</h2>
                <h3>Flyers available at excellent prices, in various different colours and paper types.</h3> */}
            </div> 
        </div>
    )
}

export default Hero
