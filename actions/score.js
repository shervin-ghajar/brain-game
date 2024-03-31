import {
    UPDATE_SCORE_DEFAULT,
    UPDATE_SCORE_STARTED,
    UPDATE_SCORE_SUCCESS,
    UPDATE_SCORE_FAILURE_NETWORK,
} from './types';
// ----------------------------------------------------------------
export const updateScore = (userScore) => {
    return dispatch => {
        dispatch(setNewScoreStarted());
        dispatch(setNewScoreSuccess(userScore))
    };
};

const setNewScoreStarted = () => ({
    type: UPDATE_SCORE_STARTED
});

const setNewScoreSuccess = data => ({
    type: UPDATE_SCORE_SUCCESS,
    payload: data
});

const setNewScoreFailure = error => ({
    type: UPDATE_SCORE_FAILURE_NETWORK,
    payload: {
        error
    }
});
// ----------------------------------------------------------------