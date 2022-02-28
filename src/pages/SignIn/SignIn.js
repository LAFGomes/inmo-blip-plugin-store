import React from 'react';
import { Grid } from '@material-ui/core';
import { setPaymentFlagAsync } from '../../services/blip-commands-service';
import inmoLogo from '../../assets/images/svg/inmo-rd-logo1.svg';

const proccessSignInRequest = async () => {
    await setPaymentFlagAsync();
};

const SignIn = () => (
    <div className="w-75 flex flex-column items-center justify-center bp-c-neutral-dark-city f5 h-100 mt4">
        <Grid container>
            <Grid item xs={6}>
                <bds-typo variant="fs-24" bold="extra-bold">Você está a um passo de usar o RD Station (Ativo) com o Intrigg</bds-typo>
                <bds-typo variant="fs-14">O Intrigg é uma ferramenta desenvolvida pela <b>Inmo</b> e contratada por assinatura mensal do plano Inmo+.<br /><br /></bds-typo>
                <bds-typo variant="fs-14">A habilitação da ferramenta é feita por onboarding com o time Inmo após confirmação da assinatura.<br /><br /></bds-typo>
                <bds-typo variant="fs-14">Cancele quando quiser, sem taxas. ✅<br /><br /></bds-typo>
                <bds-typo variant="fs-14">Para dúvidas ou mais informações, envie e-mail para contato@inmo.work ou WhatsApp para +55 31 9437-0162<br /><br /></bds-typo>
                <bds-typo variant="fs-14">A única responsável pelo suporte e funcionamento desta extensão é a Inmo.<br /><br /></bds-typo>
                <bds-typo variant="fs-14">Realize a sua assinatura pela nossa plataforma validada de pagamentos no botão abaixo. <b>Você receberá um e-mail</b> para iniciar a sua assinatura em <b>até 1(um) dia útil após a confirmação de pagamento.</b><br /><br /></bds-typo>
                <bds-button onClick={() => proccessSignInRequest()} size='standard' variant='primary' className="w-100">ASSINAR O INMO+ POR R$ 299,00/mês</bds-button>
                <bds-typo variant="fs-14">O valor de R$299 corresponde ao plano Start (único plano disponível atualmente). Ao assinar, você concorda com os <b>Termos de Uso e Contratação</b> do Inmo Plus. </bds-typo>
            </Grid>
            <Grid item xs={6}>
                <div className="mt6 ml4">
                    <img src={inmoLogo} className="inmo-logo" alt="logo" />
                </div>
            </Grid>
        </Grid>
    </div>
);

export default SignIn;