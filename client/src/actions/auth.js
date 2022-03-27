import {AUTH} from '../constant';
import * as api from '../api/index';

export const signin = (formData, router) => 
    async (dispatch) => {
        try {
            const {data} = await api.signIn(formData);
            dispatch({type:AUTH, data});
            router.push('/')
            console.log('signin complete');
        } catch (error) {
            //bug
            console.log('signin incomplete');
            console.log(error);
        }
    }

export const signup = (formData, router) => 
    async (dispatch) => {
        try {
            const {data} = await api.signUp(formData);
            dispatch({type:AUTH, data});
            console.log("signup complete");
            router.push('/')
        } catch (error) {
            console.log("signup incomplete");
            console.log(error);
        }
    }
