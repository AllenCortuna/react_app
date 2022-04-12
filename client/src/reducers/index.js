import { combineReducers } from 'redux';

import rooms from './rooms';
import auth from './auth'
import users from './data'

export const reducers = combineReducers({ rooms, auth , users});

