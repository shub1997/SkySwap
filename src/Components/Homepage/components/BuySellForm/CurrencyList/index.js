import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CurrencyList } from '../../../../../data';
const CurrencyListComponent = ({selectCurrency, setShowList}) => {

    const onClickCurrency = (currency) => {
        setShowList(false)
        selectCurrency(currency)
    }
    return(
        <Grid className="currency-list-container">
            {CurrencyList.map((currency, index) => {
                return <Grid className="currency-tab" key={index} onClick={() => onClickCurrency(currency)}>
                    <Typography className="currency-name">{currency.name}</Typography>
                    <Grid className="currency-sumbol-container">
                        <Grid className="currency-sumbol-paper">
                            <Typography className="currency-symbol">{currency.code}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            })}
        </Grid>
    )
}

export default CurrencyListComponent