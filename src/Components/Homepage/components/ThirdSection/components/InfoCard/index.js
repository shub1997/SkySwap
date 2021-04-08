import React from 'react';
import { Grid } from '@material-ui/core';
import renderHTML from 'react-render-html';

const InfoCard = ({ item }) => {

    return (
        <Grid className="info-card">
            <Grid className="info-image">
                {renderHTML(item.image)}
            </Grid>
            <Grid className="info-right-part">
                <Grid className="info-number">{item.number}</Grid>
                <Grid className="info-text">{item.text}</Grid>
            </Grid>
        </Grid>
    )
}

export default InfoCard