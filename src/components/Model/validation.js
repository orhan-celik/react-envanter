import * as Yup from 'yup';

const validationSchema = Yup.object({
    title: Yup.string()
        .min(2, 'En az 2 karakter olmalıdır.')
        .max(15, 'En fazla 15 karakter olmalıdır.')
        .required('Gerekli'),
    brand: Yup.number()
        .required('Gerekli')
        .integer('Listeden seçim yapınız')
        .positive('Listeden seçim yapınız')
});

export default validationSchema;