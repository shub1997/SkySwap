import React from 'react';
import {Grid} from '@material-ui/core'
import renderHTML from 'react-render-html'

const Card = ({item}) => {


    return(
        <Grid className="card">
            <Grid className="card-image">
                {renderHTML(item.image)}
            </Grid>
            <Grid className="card-heading">
                {item.heading}
            </Grid>
            <Grid className="card-description mobile-hidden">
                {item.text}
            </Grid>
        </Grid>
    )
}

export default Card;