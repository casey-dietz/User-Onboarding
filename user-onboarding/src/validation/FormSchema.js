import * as yup from 'yup'

const FormSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required(),
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .required('Please Enter your password')
        .min(6, "Password must be at least 6 characters"),
    terms: yup
        .boolean()
        .oneOf([true], "Please agree to terms of use")
})

export default FormSchema