import { combineReducers } from 'redux';

import rooms from './rooms';
import auth from './auth'
import data from './data'

export const reducers = combineReducers({ rooms, auth ,data});

