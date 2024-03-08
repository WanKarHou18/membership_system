//  third party
import * as Yup from 'yup';

export const validationSchema={

username: Yup.string()
  .max(100)
  .required('Username/Shop Name is required'),
}