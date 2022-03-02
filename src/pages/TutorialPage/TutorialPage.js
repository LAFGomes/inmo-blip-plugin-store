import React from 'react';
import { Grid } from '@material-ui/core';
import inmoLogo from '../../assets/images/svg/inmo-rd-logo2.svg';

const TutorialPage = () => (
    <div className="flex flex-column items-center justify-center bp-c-neutral-dark-city f5 w-75 h-100 mt4">
        <Grid container>
            <Grid item xs={6}>
                <bds-typo variant="fs-24" line-height="simple" bold="extra-bold">Agradeços pela sua assinatura! Vamos realizar as configurações iniciais do Intrigg?</bds-typo>
            </Grid>
            <Grid item xs={6}>
                <div className="ml5">
                    <img src={inmoLogo} className="inmo-logo" alt="logo" />
                </div>
            </Grid>
            <Grid item xs={12}>
                <bds-typo variant="fs-14">1. A nossa equipe de desenvolvimento precisará de acesso ao seu chatbot para realizar as configurações de integração entre Blip, Intrigg e RD Station.</bds-typo>
            </Grid>
        </Grid>
    </div>
);

export default TutorialPage;