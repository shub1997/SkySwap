import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { cryptoCurrencyDetails } from '../../../../data';
import renderHTML from 'react-render-html';
import CurrencyListComponent from './CurrencyList';
import Axios from "axios";

const BuySellForm = () => {



    const [tab, selectTab] = useState('buy')
    const [cryptoCurrency, selectCryptoCurrency] = useState()
    const [currency, selectCurrency] = useState()
    const [showList, setShowList] = useState(false);
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        Axios({
            method: "GET",
            url: `https://free.currconv.com/api/v7/convert?q=USD_${currency ? currency.code : "USD"}&compact=ultra&apiKey=c3dcf80dd00fce6b60ab`
        })
            .then((response) => {
                let rate = response && response.data && response.data[`USD_${currency ? currency.code : "USD"}`];
                let cryptoPrice = cryptoCurrency? cryptoCurrency.price : 0
                let newPrice = rate * cryptoPrice;
                setPrice(newPrice);
            })
            .catch((error) => {
            })
    }, [currency, cryptoCurrency]);

    const amountEntered = (e) => {
        let newAmount = e.target.value;
        setAmount(newAmount)
    }

    return (<Grid className="buy-sell-form">
        <Grid container className="form-header">
            <Grid onClick={() => selectTab('buy')} className={(tab === "buy" ? "selected-tab" : "") + " tab"}>
                Buy
            </Grid>
            <Grid onClick={() => selectTab('sell')} className={(tab === "sell" ? "selected-tab" : "") + " tab"}>
                Sell
            </Grid>
        </Grid>
        <Grid className="form">
            <Grid className="form-heading">
                CruptoCurrency
            </Grid>
            <Grid className="crypto-tab-container">
                {cryptoCurrencyDetails.map((crypto, index) => {
                    return (
                        <Grid className="crypto-tab-inline" key={index}>
                            <Grid container onClick={() => selectCryptoCurrency(crypto)} className={(cryptoCurrency && cryptoCurrency.name === crypto.name ? " selected-crypto-tab " : " unselected-crypto-tab ") + " crypto-tab"}>
                                <Grid item xl={4} md={4} xs={3}>
                                    {renderHTML(crypto.image)}
                                </Grid>
                                <Grid item xl={7} md={7} xs={7}>
                                    {crypto.name}
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid className="price-container">
                <Grid className="info-logo">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-gray-500 mr-2 cursor-pointer" id="targetId" data-cy="targetId"><path fillRule="evenodd" d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                </Grid>
                <Grid className="info-price-container">
                    <Typography className="info-about"> 1 {cryptoCurrency && cryptoCurrency.notation} = </Typography><Typography className="info-price"> {cryptoCurrency && price} {currency ? currency.code : "USD"} </Typography>
                </Grid>
            </Grid>
            <Grid className="form-heading">
                {tab === "buy" ? "Payment Method" : "Get Paid In"}
            </Grid>
            <Grid container className="payment-input-box">
                <Typography className="payment-method-typo"> All Payment Methods </Typography>
                <Grid className="Showall-button-container">
                    <Grid className="Showall-button">
                        Show All
                    </Grid>
                </Grid>
            </Grid>
            <Grid className="form-heading">
                {tab === "buy" ? "You Pay" : "You Get"}
            </Grid>
            <Grid container className="payment-input-box">
                <input value={amount} className="payment-method-typo" type="number" placeholder="Any Amount" onChange={(e) => amountEntered(e)} />
                <Grid className="Showall-button-container">
                    <Grid className={(showList ? "showall-button-clicked" : "Showall-button")} onClick={() => setShowList(!showList)}>
                        {currency ? currency.code : "All Currency"} <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="flex-shrink-0 ml-1 ml-xs-2_5 CurrencyAmountPickerView__arrowIcon"><path fillRule="evenodd" d="M2.707 4.293L8 9.585l5.293-5.292a1 1 0 111.414 1.414l-6 6a.996.996 0 01-.53.277l-.118.014h-.118a.997.997 0 01-.648-.29l-6-6a1 1 0 011.414-1.415z" clipRule="evenodd"></path></svg>
                    </Grid>
                    <Grid className={(showList ? "show" : "hide")}>
                        <CurrencyListComponent selectCurrency={selectCurrency} setShowList={setShowList} />
                    </Grid>
                </Grid>
            </Grid>
            {amount !== 0 && amount && cryptoCurrency && <Grid className="form-heading fade-grey">
                {tab === "buy" ? "You’ll get approximately":"You’ll pay approximately"}<br />
                {amount/price} {cryptoCurrency.notation}
            </Grid>}
            <Grid className="offer-button-container" >
                <Button className="offer-button width-100">
                    Find Offers  
                </Button>
            </Grid>
        </Grid>
    </Grid>
    )
}

export default BuySellForm;