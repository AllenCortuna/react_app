import {AUTH} from '../constant';
import * as api from '../api/index.js';

export const signin = (formData, router) => 
    async (dispatch) => {
        try {
            const {data} = await api.signIn(formData);
            dispatch({type:AUTH, data});
            router.push('/')
            console.log('signin complete');
        } catch (error) {
            //bug
            console.log('incompletei /actions/auth');
            console.log(error);
        }
    }

export const signup = (formData, router) => 
    async (dispatch) => {
        try {
            const {data} = await api.signUp(formData);
            dispatch({type:AUTH, data});
            console.log("signup complete");
            router.navigate('/')//BUG push
        } catch (error) {
            console.log("incomplete /auth/actions");
            console.log(error);
        }
    }
