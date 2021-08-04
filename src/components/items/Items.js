import React from 'react'
import { Grid } from '@material-ui/core'
import Item from '../item/Item'
import useStyles from './styles'

const Items = () => {
    const classes = useStyles();
    return (
        <div className={classes.itemsWrap}>
            <Grid container className={classes.itemContainer}>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Item />
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Item />
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Item />
                </Grid>
            </Grid>
        </div>
    )
}

export default Items
