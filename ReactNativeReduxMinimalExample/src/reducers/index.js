import { combineReducers } from 'redux';
import * as appReducer from './appReducer';

export default combineReducers({
    appReducer: appReducer.reducer,
});