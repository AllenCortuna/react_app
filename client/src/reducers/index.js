import { combineReducers } from 'redux';

import rooms from './rooms';
import auth from './auth'

export const reducers = combineReducers({ rooms, auth});

