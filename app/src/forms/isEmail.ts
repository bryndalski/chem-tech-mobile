import * as yup from 'yup';

import i18next from '../localization/i18n';

export const isEmail = yup.object().shape({
  email: yup.string().email(i18next.t('common.emialInvalid')),
});
