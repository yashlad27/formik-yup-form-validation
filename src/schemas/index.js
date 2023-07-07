import * as yup from 'yup';

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),

    age: yup.number().required().positive().integer(),

    password: yup
        .string()
        .required()
        .min(8)
        .matches(passwordRules, "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"),

    confirmPassword: yup
        .string()
        .required()
        .oneOf([yup.ref("password"), null], "Passwords must match")
});