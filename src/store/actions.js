// action - account reducer
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const USER = 'USER';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const MENU_TYPE = '@customization/MENU_TYPE';

export const SET_USER_EMAIL = 'SET_USER_EMAIL';
// Action Creators
// export const updateData = (data) => ({
//     type: LOGOUT,
//     payload: data,
//   });

export const setUserEmail = (userData) => ({
  type: SET_USER_EMAIL,
  payload: userData,
});
