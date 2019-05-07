import {CURRENT_USER, SESSION_ERRORS} from '../actions/session_actions';

const sessionErrorsReducer = (stateIn = [], action) => {
    Object.freeze(stateIn);
    let stateOut = stateIn.map(error => error)
    switch(action.type) {
        case CURRENT_USER:
            stateOut = [];
            break;
        case SESSION_ERRORS:
            stateOut = action.errors.map(error => error);
            break;
        default:
            break;
    }
    return stateOut;
};

export default sessionErrorsReducer;