import { CURRENT_USER } from '../actions/session_actions'
import merge from 'lodash/merge';

const usersReducer = (stateIn = {}, action) => {
    Object.freeze(stateIn);
    let stateOut = merge({}, stateIn)
    switch (action.type) {
        case CURRENT_USER:
            stateOut = merge(stateOut, { [action.currentUser.id]: action.currentUser })
            break;
        default:
            break;
    }
    return stateOut;
};

export default usersReducer;