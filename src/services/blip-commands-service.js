import { IframeMessageProxy as IMP } from 'iframe-message-proxy';
import IMPConstants from '../constants/iframe-message-proxy-container';
import PluginConstans from '../constants/plugin-config';

const MSGING_DOMAIN = 'postmaster@msging.net';
const BUCKET_PATH = '/buckets';
const APPLICATION_JSON_TYPE = 'application/json';


const checkBucketFileExistenceAsync = async (fileName) => {
    try {
        await IMP.sendMessage({
            action: IMPConstants.Actions.SEND_COMMAND,
            content: {
                destination: IMPConstants.Destinations.MESSAGING_HUB_SERVICE,
                command: {
                    to: MSGING_DOMAIN,
                    method: IMPConstants.CommandMethods.GET,
                    uri: `${BUCKET_PATH}/${fileName}`
                }
            }
        });

        return true;
    } catch (err) {

        return false;
    }
};

const setPaymentFlagAsync = async () => {
    try {
        const now = Date().toLocaleString();

        await IMP.sendMessage({
            action: IMPConstants.Actions.SEND_COMMAND,
            content: {
                destination: IMPConstants.Destinations.MESSAGING_HUB_SERVICE,
                command: {
                    to: MSGING_DOMAIN,
                    method: IMPConstants.CommandMethods.SET,
                    uri: `${BUCKET_PATH}/${PluginConstans.PAYMENT_FLAG_NAME}?expiration=${PluginConstans.DEFAULT_FLAG_EXPIRATION_TIME}`,
                    type: APPLICATION_JSON_TYPE,
                    resource: {
                        creationDate: `${now}`
                    }
                }
            }
        });

    } catch (err) {
        console.log(err);
        return false;
    }
};

export {
    checkBucketFileExistenceAsync,
    setPaymentFlagAsync
};