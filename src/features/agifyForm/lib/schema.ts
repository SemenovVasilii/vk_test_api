import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string()
        .required('Заполните поле ввода')
        .matches(/^[A-Za-z]+$/, 'Только английские буквы разрешены'),
});