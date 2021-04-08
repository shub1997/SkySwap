import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import Logo from '../../Logo.png';
import './index.scss';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Drawer from './components/MenuDrawer';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
const Header = () => {

    const [drawer, setDrawer] = useState(false)
    return (
        <Grid className="header-container">
            <Drawer state={drawer} setState={setDrawer} />
            <Grid className="header-left-part">
                <Grid className="header-buy-button-container desktop-hidden">
                    <Grid className="header-menu-button" onClick={() => { setDrawer(!drawer) }}>
                        {drawer ? <CloseIcon className="menu-icon" /> : <MenuIcon className="menu-icon" />}
                    </Grid>
                </Grid>
                <Grid className="header-image-container">
                    <img src={Logo} className="header-image" alt="logo" />
                </Grid>
                <Grid className="header-buy-button-container mobile-hidden">
                    <Grid className="header-buy-button">
                        Buy<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="flex-shrink-0 ml-1 ml-xs-2_5 CurrencyAmountPickerView__arrowIcon"><path fillRule="evenodd" d="M2.707 4.293L8 9.585l5.293-5.292a1 1 0 111.414 1.414l-6 6a.996.996 0 01-.53.277l-.118.014h-.118a.997.997 0 01-.648-.29l-6-6a1 1 0 011.414-1.415z" clipRule="evenodd"></path></svg>
                    </Grid>
                </Grid>
                <Grid className="header-buy-button-container mobile-hidden">
                    <Grid className="header-sell-button">
                        Sell  <svg viewBox="0 0 16 16" id="icon-arrow-down"><path d="M2.7 4.3L8 9.6l5.3-5.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-6 6c-.1.2-.5.3-.7.3s-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4s1-.4 1.4 0z"></path></svg>
                    </Grid>
                </Grid>
                <Grid className="header-links mobile-hidden">
                    Create an Offer
                </Grid>
                <Grid className="header-links mobile-hidden">
                    Wallet
                </Grid>
                <Grid className="header-links mobile-hidden">
                    Become a Vendor
                </Grid>
            </Grid>
            <Grid className="header-right-part ">
                <Grid className="header-buy-button-container desktop-hidden">
                    <Grid className="header-menu-button" >
                        <PersonOutlineOutlinedIcon className="menu-icon" />
                    </Grid>
                </Grid>
                <Grid className="header-links login mobile-hidden">
                    Log In
                </Grid>
                <Grid className="header-buy-button-container mobile-hidden">
                    <Grid className="header-sell-button">
                        Create an Account
                    </Grid>
                </Grid>
                <Grid className="header-buy-button-container mobile-hidden">
                    <Grid className="header-sell-button header-globe-button">
                        <svg viewBox="0 0 16 16" id="icon-globe"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM1.8 8c0-.8.2-1.6.4-2.3.5.3 1.2.6 1.9.7C4 7 4 7.5 4 8s0 1 .1 1.6c-.7.1-1.4.4-1.9.7-.2-.7-.4-1.5-.4-2.3zm4 0c0-.4 0-.8.1-1.2.7.1 1.4.1 2.1.1s1.4 0 2.1-.1c0 .4.1.8.1 1.2s0 .8-.1 1.2c-.7-.1-1.4-.1-2.1-.1s-1.4 0-2.1.1c-.1-.4-.1-.8-.1-1.2zm6.1-1.6c.7-.2 1.3-.4 1.8-.7.3.7.5 1.5.5 2.3s-.2 1.6-.4 2.3c-.5-.3-1.1-.6-1.8-.7V8c0-.5 0-1-.1-1.6zm1-2.2c-.2.2-.6.3-1.2.5-.2-.8-.4-1.5-.7-2.1.7.3 1.3.9 1.9 1.6zM8 1.8c.1 0 .6.1 1.2 1.3.3.6.5 1.2.7 1.9-.6.1-1.2.1-1.9.1s-1.3 0-1.9-.1c.2-.7.4-1.3.6-1.8.7-1.3 1.2-1.4 1.3-1.4zm-2.9.7c-.3.7-.5 1.4-.7 2.2-.6-.2-1-.3-1.3-.5.6-.7 1.2-1.3 2-1.7zm-2 9.3c.2-.2.6-.3 1.2-.5.2.8.4 1.5.7 2.1-.7-.3-1.3-.9-1.9-1.6zM8 14.2c-.1 0-.6-.1-1.2-1.3-.3-.5-.5-1.1-.6-1.8.6-.1 1.2-.1 1.9-.1s1.3 0 1.9.1c-.2.7-.4 1.3-.6 1.8-.8 1.2-1.3 1.3-1.4 1.3zm2.9-.7c.3-.6.5-1.4.7-2.1.6.2 1 .3 1.2.5-.5.6-1.1 1.2-1.9 1.6z"></path></svg>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header