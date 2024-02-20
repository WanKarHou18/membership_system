//  third party
import * as Yup from 'yup';

export const isEmailValid = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };


export const validationSchema={

customerName: Yup.string()
  .max(255)
  .required('Customer Name is required'),

currentPoint: Yup.number()
  .integer('Please enter a valid integer')
  .typeError('Please enter a valid integer')
  .required('This field is required'),

pointsToReach: Yup.number()
  .integer('Please enter a valid integer')
  .typeError('Please enter a valid integer')
  .required('This field is required'),
}