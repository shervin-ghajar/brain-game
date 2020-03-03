import { combineReducers } from 'redux';
// ----------------------------------------------------------------
import { scoreReducer } from './score';
// ----------------------------------------------------------------
const appReducer = combineReducers({
    scoreReducer,
});

const initialState = appReducer({}, {})

const rootReducer = (state, action) => {
    //   if (action.type === 'LOGOUT_SUCCESS' || action.type === 'VERIFY_DEL_ACCOUNT_SUCCESS') {
    //     state = initialState
    //   }
    return appReducer(state, action)
}

export default rootReducer;
// ----------------------------------------------------------------