import * as actionType from '../constant';

export default (state ={authData: null},action) => {
    switch (action.type){

    case actionType.AUTH:
        localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            console.log('reducers ok');
      return { ...state, authData: action.data, loading: false, errors: null };


    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };


    default:
      return state;
  }
};

//export default authReducer;


