import * as yup from 'yup';

import i18next from '../localization/i18n';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(i18next.t('common.emialInvalid'))
    .required(i18next.t('common.emailRequired')),
  password: yup.string().required(i18next.t('common.passwordRequired')),
});
