import { Grid, SwipeableDrawer } from '@material-ui/core'
import React from 'react'
import { cryptoCurrencyDetails } from '../../../../data';
import renderHTML from 'react-render-html';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const MenuDrawer = ({ state, setState }) => {

    const voidFunction = () => {

    }
    return (
        <SwipeableDrawer className="drawer" open={state} onClose={() => setState(false)} onOpen={() => voidFunction()}>
            <Grid className="drawer-container">
                {
                    cryptoCurrencyDetails.map((crypto, index) => {
                        return <Grid className="drawer-item" key={index}>
                            <Grid className="drawer-item-name"> Buy {crypto.name}</Grid>
                            <Grid className="drawer-item-image"> {renderHTML(crypto.image)}</Grid>
                        </Grid>
                    })
                }
                {
                    cryptoCurrencyDetails.map((crypto, index) => {
                        return <Grid className="drawer-item" key={index}>
                            <Grid className="drawer-item-name"> Sell {crypto.name}</Grid>
                            <Grid className="drawer-item-image"> {renderHTML(crypto.image)}</Grid>
                        </Grid>
                    })
                }
                <Grid className="drawer-item" >
                    <Grid className="drawer-item-name"> Create an Offer</Grid>
                    <Grid className="drawer-item-image"> {renderHTML('<svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="MobileMenuItem__bigIcon" data-darkreader-inline-fill="" style="--darkreader-inline-fill:none;"><path fill="var(--icons-secondary, #ff9357)" fillRule="evenodd" d="M2 5a3 3 0 013-3h28a3 3 0 013 3v38a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v38a1 1 0 001 1h28a1 1 0 001-1V5a1 1 0 00-1-1H5z" clipRule="evenodd"></path><rect width="17" height="2" x="8" y="18" fill="var(--icons-secondary, #ff9357)" rx="1"></rect><rect width="17" height="2" x="8" y="24" fill="var(--icons-secondary, #ff9357)" rx="1"></rect><rect width="17" height="2" x="8" y="30" fill="var(--icons-secondary, #ff9357)" rx="1"></rect><rect width="17" height="2" x="8" y="36" fill="var(--icons-secondary, #ff9357)" rx="1"></rect><path fill="var(--icons-secondary, #ff9357)" d="M16 18a2 2 0 012-2h18v22H18a2 2 0 01-2-2V18z" opacity="0.15"></path><rect width="24" height="22" x="21" y="11" fill="var(--icons-bg-fill, #ffffff)" rx="2"></rect><path fill="#ea4335" fill-opacity="0.2" d="M21 14h19a2 2 0 012 2v17H21V14z" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#25bbff;"></path><path fill="var(--icons-primary, #ea4335)" fillRule="evenodd" d="M20 13a3 3 0 013-3h20a3 3 0 013 3v18a3 3 0 01-3 3H23a3 3 0 01-3-3V13zm3-1a1 1 0 00-1 1v18a1 1 0 001 1h20a1 1 0 001-1V13a1 1 0 00-1-1H23z" clipRule="evenodd"></path><rect width="2" height="10" x="32" y="17" fill="var(--icons-primary, #ea4335)" rx="1"></rect><rect width="10" height="2" x="28" y="21" fill="var(--icons-primary, #ea4335)" rx="1"></rect></svg>')}</Grid>
                </Grid>
                <Grid className="drawer-item grey-background" >
                    <Grid className="drawer-item-name"> Wallet </Grid>
                    <Grid className="drawer-item-image"> 
                        <Grid className="drawer-button">
                            <ArrowForwardIosIcon className="drawer-button-arrow" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="drawer-item grey-background" >
                    <Grid className="drawer-item-name"> Create an account </Grid>
                    <Grid className="drawer-item-image"> 
                        <Grid className="drawer-button">
                            <ArrowForwardIosIcon className="drawer-button-arrow" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="drawer-item grey-background" >
                    <Grid className="drawer-item-name"> Contact Support </Grid>
                    <Grid className="drawer-item-image"> 
                        <Grid className="drawer-button">
                            <ArrowForwardIosIcon className="drawer-button-arrow" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </SwipeableDrawer>
    )
}

export default MenuDrawer;