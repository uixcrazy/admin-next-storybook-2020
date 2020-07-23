import { ACTION_TYPES } from './actions';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  error: false,
  photos: null,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }

    case ACTION_TYPES.LOAD_PHOTOS_FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case ACTION_TYPES.LOAD_PHOTOS_SUCCESS:
      return {
        ...state,
        ...{ photos: action.data },
      }

    default:
      return state
  }
}

export default reducer;
