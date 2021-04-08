import React from 'react';
import { Grid } from '@material-ui/core';
import BuySellForm from './components/BuySellForm';
import RightCompound from './components/RightCompound';
import RightCompoundMobile from './components/RightCompoundMobile';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import FifthSection from './components/FifthSection';
import './index.scss';

const HomePage = () => {
    return (<Grid>
        <Grid className="first-section">
            <Grid className=" desktop-hidden first-section-right ">
                <RightCompoundMobile />
            </Grid>
            <Grid className="first-section-left">
                <BuySellForm />
            </Grid>
            <Grid className="first-section-right">
                <RightCompound />
            </Grid>
        </Grid>
        <Grid container className="second-section">
            <SecondSection></SecondSection>
        </Grid>
        <Grid container className="third-section">
            <ThirdSection />
        </Grid>
        <Grid container className="fourth-section">
            <FourthSection />
        </Grid>
        <Grid container className="fifth-section">
            <FifthSection />
        </Grid>
    </Grid>
    )
}

export default HomePage;