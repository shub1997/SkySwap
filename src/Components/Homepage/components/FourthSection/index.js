import React from 'react';
import {Grid} from '@material-ui/core';
import {fourthSectionInfo} from '../../../../data';
import UspCard from './Components/UspCard';

const FourthSection = () => {

    return(
        <Grid container className="fourth-section">
            <Grid className="heading-description">
                <Grid className="heading-section">
                    {fourthSectionInfo.heading}
                </Grid>
                <Grid className="description-section">
                    {fourthSectionInfo.description}
                </Grid>
            </Grid>
            <Grid className="usp-section">
                {fourthSectionInfo.info.map((item, index) => {
                    return <UspCard item={item} key={index}></UspCard>
                })}
            </Grid>
        </Grid>
    )
}

export default FourthSection