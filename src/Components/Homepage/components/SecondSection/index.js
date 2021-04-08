import React, { useState } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { secondSectionInfo } from '../../../../data';
import renderHTML from 'react-render-html';
import Card from './components/Card';

const SecondSection = () => {

    const [tab, selectTab] = useState('buy');

    return (
        <Grid container>
            <Grid container className="features-section">
                {secondSectionInfo.features.map((feature, index) => {
                    return <Grid item md={3} sm={12} key={index}>
                        <Grid className="feature-image-container">{renderHTML(feature.image)}</Grid>
                        <Grid className="feature-text-container">
                            <Typography className="feature-text">{feature.text}</Typography>
                        </Grid>
                    </Grid>
                })}
            </Grid>
            <Grid className="heading-description">
                <Grid className="heading-section">
                    {secondSectionInfo.heading}
                </Grid>
                <Grid className="description-section">
                    {secondSectionInfo.description}
                </Grid>
            </Grid>
            <Grid className="tabs-container">
                <Grid onClick={() => selectTab("sell")} className={(tab === "sell" ? "selected-tab" : " unselected-tab") + " tab"}>Sell Bitcoin</Grid>
                <Grid onClick={() => selectTab("buy")} className={(tab === "buy" ? "selected-tab" : " unselected-tab") + " tab"}>Buy Bitcoin</Grid>
            </Grid>
            <Grid className={(tab === "sell" ? "show" : "hide") + " card-container"}>
                {
                    secondSectionInfo.sell_bitcoin.map((item, index) => {
                        return <Grid className="card-paper" key={index}>
                            <Card item={item} />
                        </Grid>
                    })
                }
            </Grid>
            <Grid className={(tab === "buy" ? "show" : "hide") + " card-container"}>
                {
                    secondSectionInfo.buy_bitcoin.map((item, index) => {
                        return <Grid className="card-paper" key={index}>
                            <Card item={item} />
                        </Grid>
                    })
                }
            </Grid>
            <Grid className="offer-button-container" >
                <Button className="offer-button">
                    View All Offers
                </Button>
            </Grid>
        </Grid>
    )
}

export default SecondSection;