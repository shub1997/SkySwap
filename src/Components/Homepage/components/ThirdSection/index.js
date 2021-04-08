import React from 'react';
import {Grid, Button} from '@material-ui/core';
import {thirdSectionInfo} from '../../../../data';
import InfoCard from './components/InfoCard';

const ThirdSection = () => {

    return(
        <Grid container className="third-section">
            <Grid className="heading-description">
                <Grid className="heading-section">
                    {thirdSectionInfo.heading}
                </Grid>
                <Grid className="description-section">
                    {thirdSectionInfo.description}
                </Grid>
            </Grid>
            <Grid className="info-container">
                {
                    thirdSectionInfo.info.map((item,index) => {
                        return <Grid className="info-card-paper" key={index}>
                            <InfoCard item={item}></InfoCard>
                        </Grid>
                    })
                }
            </Grid>
            <Grid className="offer-button-container" >
                <Button className="offer-button">
                    Become a Vendor
                </Button>
            </Grid>
        </Grid>
    )
}

export default ThirdSection