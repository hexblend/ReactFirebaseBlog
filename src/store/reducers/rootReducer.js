import { combineReducers } from 'redux';

// All Reducers
import authReducer from './authReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer
});

export default rootReducer;