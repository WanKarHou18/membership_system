//  third party
import * as Yup from 'yup';

export const isEmailValid = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };


export const validationSchema={
email: Yup.string()
    .required('Email is required')
    .test('email', 'Invalid email address', isEmailValid)
    ,
password: Yup.string().max(255).required('Password is required'),
customerName: Yup.string().max(255),
}