import { combineReducers } from 'redux';

// All Reducers
import authReducer from './authReducer';
import postReducer from './postReducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    firestore: firestoreReducer
});

export default rootReducer;