// ----------------------------------------------------------------
import {
    UPDATE_SCORE_DEFAULT,
    UPDATE_SCORE_STARTED,
    UPDATE_SCORE_SUCCESS,
    UPDATE_SCORE_FAILURE_NETWORK,
    UPDATE_SCORE_FAILURE_VALIDATION,
} from '../actions/types';
// ----------------------------------------------------------------
const initialState = {
    rtype: UPDATE_SCORE_DEFAULT,
    userScore: null,
    error: null
};
export function scoreReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SCORE_STARTED:
            return { ...state, rtype: UPDATE_SCORE_STARTED };
        case UPDATE_SCORE_SUCCESS:
            return { ...state, rtype: UPDATE_SCORE_SUCCESS, userScore: action.payload, error: null };
        case UPDATE_SCORE_FAILURE_NETWORK:
            return { ...state, rtype: UPDATE_SCORE_FAILURE_NETWORK, userScore: null, error: action.payload.error };
        default:
            return state;
    }
}
  // ----------------------------------------------------------------