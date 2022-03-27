import * as actionTypes from '../constant';

const authReducer = (state ={authData: null},action) => {
    switch (action.type){
    case actionTypes.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, errors: null };


    case actionTypes.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };


    default:
      return state;
  }
};

export default authReducer;


