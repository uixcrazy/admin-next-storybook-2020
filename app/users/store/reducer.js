import { ACTION_TYPES } from './actions';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  error: false,
  placeholderData: null,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }

    case ACTION_TYPES.LOAD_USERS_FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case ACTION_TYPES.LOAD_USERS_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      }

    default:
      return state
  }
}

export default reducer;
