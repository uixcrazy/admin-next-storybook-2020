export const BRANCH_NAME = 'Unsplash';

export const ACTION_TYPES = {
  LOAD_PHOTOS_REQUEST: `[${BRANCH_NAME}] LOAD_PHOTOS_REQUEST`,
  LOAD_PHOTOS_SUCCESS: `[${BRANCH_NAME}] LOAD_PHOTOS_SUCCESS`,
  LOAD_PHOTOS_FAILURE: `[${BRANCH_NAME}] LOAD_PHOTOS_FAILURE`,
}

export function loadPhotos() {
  return { type: ACTION_TYPES.LOAD_PHOTOS_REQUEST }
}

export function loadPhotosSuccess(data) {
  return {
    type: ACTION_TYPES.LOAD_PHOTOS_SUCCESS,
    data,
  }
}

export function loadPhotosFailure(error) {
  return {
    type: ACTION_TYPES.LOAD_PHOTOS_FAILURE,
    error,
  }
}
