import * as yup from 'yup';

const emailSchema = yup.object().shape({
  email: yup
    .string()
    .required('Digite seu e-mail.')
    .email('Digite um e-mail válido.'),
});

export default emailSchema;
