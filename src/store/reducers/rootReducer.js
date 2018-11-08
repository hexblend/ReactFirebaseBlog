import { combineReducers } from 'redux';

// All Reducers
import authReducer from './authReducer';
import postReducer from './postReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;