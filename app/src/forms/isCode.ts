import * as yup from 'yup';

export const isCode = yup.object().shape({
  code: yup.array().of(yup.number().integer().positive()).length(6).required(),
});
