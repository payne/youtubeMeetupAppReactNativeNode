import {
  LOGIN,
} from './actions';

const INITIAL_STATE = {
  logged: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logged: true,
      };
    default:
      return state;
  }
};
