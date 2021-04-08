import React from 'react';
import {Grid} from '@material-ui/core';
import renderHTML from 'react-render-html';

const UspCard = ({item}) => {

    return(
        <Grid className="usp-card">
            <Grid className="usp-card-image">{renderHTML(item.image)}</Grid>
            <Grid className="usp-card-heading">{item.heading}</Grid>
            <Grid className="usp-card-text">{item.description}</Grid>
        </Grid>
    )
}

export default UspCard