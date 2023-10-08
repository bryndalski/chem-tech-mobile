import i18next from 'i18next';
import * as Yup from 'yup';

export const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
      i18next.t('resetPassword.passwordRequirements'),
    ),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], i18next.t('resetPassword.confirmPassword')),
});
