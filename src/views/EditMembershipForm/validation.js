//  third party
import { current } from 'immer';
import * as Yup from 'yup';

export const isEmailValid = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

export const isCurrentPointValid = (currentPoint, pointsToReach) =>{
  return pointsToReach >= currentPoint;
}

export const isPointsToReachValid = (currentPoint, pointsToReach) =>{
  return pointsToReach >= currentPoint;
}

export const validationSchema={

editCustomerName: Yup.string()
  .max(255)
  .required('Customer Name is required'),

editCurrentPoint: Yup.number()
  .integer('Please enter a valid integer')
  .typeError('Please enter a valid integer')
  .required('This field is required')
  .test('isCurrentPointValid', 'Current point must be less or equal to points to reach', function (
    value
  ) {
    const pointsToReach = this.parent.editPointsToReach || 0;
    return isCurrentPointValid(value, pointsToReach);
  }),

editPointsToReach: Yup.number()
  .integer('Please enter a valid integer')
  .typeError('Please enter a valid integer')
  .required('This field is required')
  .test('isPointsToReachValid', 'Points to reach must be greater than or equal to current points', function (
    value
  ) {
    const currentPoint = this.parent.editCurrentPoint || 0;
    return isPointsToReachValid(currentPoint, value);
  }),

editReward: Yup.string()
  .max(255)
  .required('Reward is required'),
}
