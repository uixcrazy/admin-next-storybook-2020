export const BRANCH_NAME = 'TypicodeUsers';
// LOAD_POSTS_REQUEST: 'LOAD_POSTS_REQUEST',
// LOAD_POSTS_FAILURE: 'LOAD_POSTS_FAILURE',
// LOAD_POSTS_SUCCESS: 'LOAD_POSTS_SUCCESS',
export const ACTION_TYPES = {
  LOAD_USERS_REQUEST: `[${BRANCH_NAME}] LOAD_USERS_REQUEST`,
  LOAD_USERS_SUCCESS: `[${BRANCH_NAME}] LOAD_USERS_SUCCESS`,
  LOAD_USERS_FAILURE: `[${BRANCH_NAME}] LOAD_USERS_FAILURE`,
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
