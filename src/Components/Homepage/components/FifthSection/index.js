import React from 'react';
import {Grid, Button} from '@material-ui/core';
import {fifthSectionInfo} from '../../../../data';
import LastImage from '../../../../last-image.png';
const FifthSection = () => {

    return(
        <Grid container className="fifth-section">
            <Grid className="heading-description">
                <Grid className="heading-section">
                    {fifthSectionInfo.heading}
                </Grid>
                <Grid className="description-section">
                    {fifthSectionInfo.description}
                </Grid>
            </Grid>
            <Grid className="offer-button-container" >
                <Button className="offer-button">
                    Create Account
                </Button>
            </Grid>
            <img src={LastImage} className="fifth-section-image" alt="bottom-banner" />
        </Grid>
    )
}

export default FifthSection