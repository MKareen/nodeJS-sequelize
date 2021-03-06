import {ADMIN_AUTH, REQUIRED} from '../../../configs/constants';

export default {
    saveFirm: {
        parseFormData: true,
        authentication: true,
        authenticationType: ADMIN_AUTH,
        validation: {
            firmName: {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('firmName')
                }
            },
            entityNumber: {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('entityNumber')
                }
            }
        }
    },
    firm: {
        authentication: true,
        authenticationType: ADMIN_AUTH
    }
}
