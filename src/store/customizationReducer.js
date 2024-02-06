// action - state management
import * as actionTypes from './actions';

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

export const initialState = {
  isOpen: 'dashboard', //for active default menu
  navType: '',
  
  /**
   * Login, Logout, Sign Up
   */
  logout:false,
};

const customizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      return {
        ...state,
        isOpen: action.isOpen
      };
    case actionTypes.MENU_TYPE:
      return {
        ...state,
        navType: action.navType
      };
    case actionTypes.LOGOUT:
      return{
        ...state,
        logout: action.payload
      }
    default:
      return state;
  }
};

export default customizationReducer;
