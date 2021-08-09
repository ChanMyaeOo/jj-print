import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import PreviewItem from '../preview-item/PreviewItem'
import StampsImg from '../../images/stamps.jpg'
import DFlyersImg from '../../images/d-flyers.jpeg'
import EnvelopesImg from '../../images/envelope.png'
import BCardsImg from '../../images/business-cards.jpeg'

const Previews = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.previewsWrap}>
                <Grid item lg={6} md={6} sm={6} className={classes.previewItemWrap}>
                    <PreviewItem imgUrl={StampsImg} altText="stamps img" title="Stamps" price="£14.25" details="stamps-details"/>
                </Grid>

                <Grid item lg={6} md={6} sm={6} className={classes.previewItemWrap}>
                    <PreviewItem imgUrl={DFlyersImg} altText="digital flyers img" title="Digital Flyers" price="£35" details="digital-flyers-details"/>
                </Grid>

                 <Grid item lg={6} md={6} sm={6} className={classes.previewItemWrap}>
                    <PreviewItem imgUrl={EnvelopesImg} altText="envelopes img" title="Envelopes" price="£99" details="envelopes-details"/>
                </Grid>

                <Grid item lg={6} md={6} sm={6} className={classes.previewItemWrap}>
                    <PreviewItem imgUrl={BCardsImg} altText="business cards img" title="Business Cards" price="£25" details="business-cards-details"/>
                </Grid>

            </Grid>
        </div>
    )
}

export default Previews
