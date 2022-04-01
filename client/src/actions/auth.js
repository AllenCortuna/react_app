import {AUTH} from '../constant';
import * as api from '../api/index';

export const signin = (formData, router) => 
    async (dispatch) => {
        try {
            const {data} = await api.signIn(formData);
            dispatch({type:AUTH, data});
            router('/roomManagement')
            console.log('signin complete');
        } catch (error) {
            console.log('incomplete /actions/auth');
            console.log(error);
        }
    }

export const signup = (formData, router) => 
    async (dispatch) => {
        try {
            const {data} = await api.signUp(formData);
            dispatch({type:AUTH, data});
            console.log("signup complete");
            router('/roomManagement')
        } catch (error) {
            console.log("incomplete signup  /actions/auth");
            console.log(error.message);
        }
    }
