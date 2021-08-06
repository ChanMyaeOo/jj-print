import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import PreviewItem from '../preview-item/PreviewItem'

const Previews = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.previewsWrap}>
                <Grid item lg={6} md={6} sm={6} className={classes.previewItemWrap}>
                    <PreviewItem />
                </Grid>

                <Grid item lg={6} md={6} sm={6} className={classes.previewItemWrap}>
                    <PreviewItem />
                </Grid>

                 <Grid item lg={6} md={6} sm={6} className={classes.previewItemWrap}>
                    <PreviewItem />
                </Grid>

                <Grid item lg={6} md={6} sm={6} className={classes.previewItemWrap}>
                    <PreviewItem />
                </Grid>

            </Grid>
        </div>
    )
}

export default Previews
