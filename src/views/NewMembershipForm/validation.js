//  third party
import * as Yup from 'yup';
import dayjs from 'dayjs';

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

customerName: Yup.string()
  .max(255)
  .required('Customer Name is required'),

currentPoint: Yup.number()
  .integer('Please enter a valid integer')
  .typeError('Please enter a valid integer')
  .required('current point is required')
  .test('isCurrentPointValid', 'Current point must be less or equal to points to reach', function (
    value
  ) {
    const pointsToReach = this.parent.pointsToReach || 0;
    return isCurrentPointValid(value, pointsToReach);
  }),

pointsToReach: Yup.number()
  .integer('Please enter a valid integer')
  .typeError('Please enter a valid integer')
  .required('Points to reach is required')
  .test('isPointsToReachValid', 'Points to reach must be greater than or equal to current points', function (
    value
  ) {
    const currentPoint = this.parent.currentPoint || 0;
    return isPointsToReachValid(currentPoint, value);
  }),

reward: Yup.string()
  .max(255)
  .required('Reward is required'),
}