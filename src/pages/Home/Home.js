import React, { useState } from 'react';
import { checkBucketFileExistenceAsync } from '../../services/blip-commands-service';
import PluginConfig from '../../constants/plugin-config';
import SignIn from '../SignIn';
import PaymentAnalysis from '../PaymentAnalysis';
import Header from '../../components/PageHeader';

const PAGE_TITLE = 'Pagamento - RD Station (Ativo)';
const PAGE_ICON = 'payment-card';

const Home = () => {

    const [activationState, setActivationState] = useState();

    const header = <Header title={PAGE_TITLE}icon={PAGE_ICON}/>;
    
    const getPluginActivationState = async () => {

        const isPluginAlreadyConfigured = await checkBucketFileExistenceAsync(PluginConfig.BUCKET_CONFIG_FILE_NAME);
        if (!isPluginAlreadyConfigured) {
            const hasPaymentFlag = await checkBucketFileExistenceAsync(PluginConfig.PAYMENT_FLAG_NAME);
            const state = hasPaymentFlag ? PluginConfig.PAYMENT_UNDER_ANALYSIS_STATE : PluginConfig.SIGNIN_STATE;
            setActivationState(state);
        }
        else {
            setActivationState(PluginConfig.CONFIGURED_STATE);
        }
    };

    const definePageToBeDisplayed = () => {

        getPluginActivationState();

        if (activationState === PluginConfig.SIGNIN_STATE) {
            const body = (<div className="flex flex-column items-center justify-center ph1 ph4-m ph5-ns pb2">
                {header}
                <SignIn />
            </div>);
            return body;
        }
        
        if (activationState === PluginConfig.PAYMENT_UNDER_ANALYSIS_STATE) {
            const body = (<div className="flex flex-column items-center justify-center ph1 ph4-m ph5-ns pb2">
                {header}
                <PaymentAnalysis />
            </div>);
            return body;
        }

        if (activationState === PluginConfig.CONFIGURED_STATE) {
            const body = (<div className="flex flex-column items-center justify-center ph1 ph4-m ph5-ns pb2">
                {header}
                <p>Under Development</p>
            </div>);
            return body;
        }

        const body = (<div className="flex flex-column items-center justify-center ph1 ph4-m ph5-ns pb2">
            {header}
            <p>Loading...</p>
        </div>);

        return body;
    };

    const page = definePageToBeDisplayed();
    
    return page;
};



// const Home = () => (
//     <div className="ph1 ph4-m ph5-ns pb2">
//         <Header
//             title={PAGE_TITLE}
//             icon={PAGE_ICON}
//         />
//         {/* <div className="w-75 flex flex-column items-center justify-center bp-c-neutral-dark-city f5 h-100 mt4">
//             <Grid container>
//                 <Grid item xs={6}>
//                     <bds-typo variant="fs-24" bold="extra-bold">Você está a um passo de usar o RD Station (Ativo) com o Intrigg</bds-typo>
//                     <bds-typo variant="fs-14">O Intrigg é uma ferramenta desenvolvida pela <b>Inmo</b> e contratada por assinatura mensal do plano Inmo+.<br/><br/></bds-typo>
//                     <bds-typo variant="fs-14">A habilitação da ferramenta é feita por onboarding com o time Inmo após confirmação da assinatura.<br/><br/></bds-typo>
//                     <bds-typo variant="fs-14">Cancele quando quiser, sem taxas. ✅<br/><br/></bds-typo>
//                     <bds-typo variant="fs-14">Para dúvidas ou mais informações, envie e-mail para contato@inmo.work ou WhatsApp para +55 31 9437-0162<br/><br/></bds-typo>
//                     <bds-typo variant="fs-14">A única responsável pelo suporte e funcionamento desta extensão é a Inmo.<br/><br/></bds-typo>
//                     <bds-typo variant="fs-14">Realize a sua assinatura pela nossa plataforma validada de pagamentos no botão abaixo. <b>Você receberá um e-mail</b> para iniciar a sua assinatura em <b>até 1(um) dia útil após a confirmação de pagamento.</b><br/><br/></bds-typo>
//                     <bds-button size='standard' variant='primary' className="w-100">ASSINAR O INMO+ POR R$ 299,00/mês</bds-button>
//                     <bds-typo variant="fs-14">O valor de R$299 corresponde ao plano Start (único plano disponível atualmente). Ao assinar, você concorda com os <b>Termos de Uso e Contratação</b> do Inmo Plus. </bds-typo>
//                 </Grid>
//                 <Grid item xs={6}>
//                     <div className="mt6 ml4">
//                         <img src={inmoLogo} className="inmo-logo" alt="logo" />
//                     </div> 
//                 </Grid>
//             </Grid>
//         </div> */}

//         <div className="flex flex-column items-center justify-center bp-c-neutral-dark-city f5 w-75 h-100 mt4 ml6">
//             <Grid container>
//                 <Grid item xs={6}>
//                     <bds-typo variant="fs-24" line-height="double" bold="extra-bold">Estamos verificando a sua assinatura. 😉</bds-typo>
//                 </Grid>
//                 <Grid item xs={6}>
//                     <img src={inmoLogo} className="inmo-logo" alt="logo" />
//                 </Grid>
//                 <Grid item xs={8}>
//                     <bds-typo variant="fs-14">Após a confirmação de pagamento, <b>você receberá um e-mail para iniciar a sua assinatura</b> e poderá retornar para essa página.<br /></bds-typo>
//                     <bds-typo variant="fs-14">Esse processo pode levar até 1(um) dia útil.</bds-typo>

//                 </Grid>
//             </Grid>
//             <div className="mt5">
//                 <img src={clock} className="clock-logo" alt="logo" />
//             </div>

//         </div>
//     </div>
// );

export default Home;