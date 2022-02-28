import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// import Routes from './routes';
import Home from './pages/Home';
import i18n from './translate';

import { getCurrentLanguageAsync } from './services/application-service';
import { withLoadingAsync, showToast } from './services/common-service';
import BlipPortalToastTypes from './constants/blip-portal-toast-types';

const DEFAULT_LANGUAGE = 'pt';

const App = () => {
    const { t } = useTranslation();

    useEffect(() => {
        getInitialInfoAsync();
        // eslint-disable-next-line
	}, []);

    const getInitialInfoAsync = async () => {
        await withLoadingAsync(async () => {
            await getLanguageAsync();

            showToast({
                type: BlipPortalToastTypes.SUCCESS,
                message: t('success.loaded')
            });
        });
    };

    const getLanguageAsync = async () => {
        const language = await getCurrentLanguageAsync();
        if (!!language && language !== DEFAULT_LANGUAGE) {
            i18n.changeLanguage(language);
        }
    };

    return <Home/>;
};

export default App;








// import React, { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// // import Routes from './routes';
// import Home from './pages/Home';


// import i18n from './translate';

// import { getCurrentLanguageAsync } from './services/application-service';
// import { withLoadingAsync, showToast } from './services/common-service';
// import { checkBucketFileExistenceAsync } from './services/blip-commands-service';
// import BlipPortalToastTypes from './constants/blip-portal-toast-types';

// const DEFAULT_LANGUAGE = 'pt';
// const CONFIG_FILE_NAME = 'client-config-fileww';
// const PAYMENT_FLAG_NAME = 'client-config-fileww';

// const App = () => {
//     const { t } = useTranslation();

//     useEffect(() => {
//         getInitialInfoAsync();
//         // eslint-disable-next-line
// 	}, []);

//     const getInitialInfoAsync = async () => {
//         await pluginActivationState();
//         await withLoadingAsync(async () => {
//             await getLanguageAsync();

//             showToast({
//                 type: BlipPortalToastTypes.SUCCESS,
//                 message: t('success.loaded')
//             });
//         });
//     };

//     const getLanguageAsync = async () => {
//         const language = await getCurrentLanguageAsync();

//         if (!!language && language !== DEFAULT_LANGUAGE) {
//             i18n.changeLanguage(language);
//         }
//     };

//     const pluginActivationState = async () => {

//         let isPluginAlreadyConfigured = await checkBucketFileExistenceAsync(CONFIG_FILE_NAME);
//         if (!isPluginAlreadyConfigured){
//             let hasPaymentFlag = await checkBucketFileExistenceAsync(PAYMENT_FLAG_NAME);
//             activationState = hasPaymentFlag ? '1' : '0';
//             break;
//         }
//         console.log(activationState);
//     };
//     console.log(activationState);

//     return <Home activationState={activationState}/>;
//     // return <Routes activationState={activationState} />;
// };

// export default App;
