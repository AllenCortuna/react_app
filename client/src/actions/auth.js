
import {AUTH, FETCH_DATA} from '../constant';
import * as api from '../api/index';

export const getUsers = () => async (dispatch) => {
  try {
      const { data } = await api.fetchUsers();
      dispatch({ type: FETCH_DATA, payload: data });
      console.log('data: ',data);
  } catch (error) {
        console.log(error);
  }
};

export const signin = (formData, router) => 
    async (dispatch) => {
        try {
            const {data} = await api.signIn(formData);
            dispatch({type:AUTH, data});
            router('/roomManagement')
            console.log('signin complete');
        } catch (error) {
            console.log(error);
            alert(error,'Incorrect Password or make sure that your account is register. if not register below');
        }
    }

export const signup = (formData, router) => 
    async (dispatch) => {
        try {
            const {data} = await api.signUp(formData);
            dispatch({type:AUTH, data});
            router('/roomManagement')
        } catch (error) {
            console.log(error);
            alert(error, 'Make sure your account is not already register.please complte the information needed including the picture');
        }
    }
