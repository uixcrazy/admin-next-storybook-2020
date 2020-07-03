const prefix = '[typicode users]';
// LOAD_POSTS_REQUEST: 'LOAD_POSTS_REQUEST',
// LOAD_POSTS_FAILURE: 'LOAD_POSTS_FAILURE',
// LOAD_POSTS_SUCCESS: 'LOAD_POSTS_SUCCESS',
export const ACTION_TYPES = {
  LOAD_USERS_REQUEST: `${prefix} LOAD_USERS_REQUEST`,
  LOAD_USERS_SUCCESS: `${prefix} LOAD_USERS_SUCCESS`,
  LOAD_USERS_FAILURE: `${prefix} LOAD_USERS_FAILURE`,
}

export function loadUsers() {
  return { type: ACTION_TYPES.LOAD_USERS_REQUEST }
}

export function loadUsersSuccess(data) {
  return {
    type: ACTION_TYPES.LOAD_USERS_SUCCESS,
    data,
  }
}

export function loadUsersFailure(error) {
  return {
    type: ACTION_TYPES.LOAD_USERS_FAILURE,
    error,
  }
}
