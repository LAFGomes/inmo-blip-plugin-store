import React from 'react';
import { Grid } from '@material-ui/core';
import clock from '../../assets/images/svg/clock.svg';
import inmoLogo from '../../assets/images/svg/inmo-rd-logo2.svg';

const PaymentAnalysis = () => (
    <div className="flex flex-column items-center justify-center bp-c-neutral-dark-city f5 w-75 h-100 mt4">
        <Grid container>
            <Grid item xs={6}>
                <bds-typo variant="fs-24" line-height="double" bold="extra-bold">Estamos verificando a sua assinatura. 😉</bds-typo>
            </Grid>
            <Grid item xs={6}>
                <img src={inmoLogo} className="inmo-logo" alt="logo" />
            </Grid>
            <Grid item xs={8}>
                <bds-typo variant="fs-14">Após a confirmação de pagamento, <b>você receberá um e-mail para iniciar a sua assinatura</b> e poderá retornar para essa página.<br /></bds-typo>
                <bds-typo variant="fs-14">Esse processo pode levar até 1(um) dia útil.</bds-typo>
            </Grid>
        </Grid>
        <div className="mt5">
            <img src={clock} className="clock-logo" alt="logo" />
        </div>

    </div>
);

export default PaymentAnalysis;