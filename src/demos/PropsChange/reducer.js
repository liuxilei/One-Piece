import { CHANGENUMBER } from './actionTypes';

const defaultNumber = {
    number: 1
};

export default (state = defaultNumber, action) => {
    switch(action.type) {
        case CHANGENUMBER: 
            return {
                ...state,
                number: action.number
            }
        default:
            return state
    }
}