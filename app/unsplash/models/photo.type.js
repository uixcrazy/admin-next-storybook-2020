import PropTypes from 'prop-types';

export default {
  id: PropTypes.string,
  alt_description: PropTypes.string,
  urls: PropTypes.shape({
    full: PropTypes.string,
    raw: PropTypes.string,
    regular: PropTypes.string,
    small: PropTypes.string,
    thumb: PropTypes.string,
  }),
  updated_at: PropTypes.string,
  created_at: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  likes: PropTypes.number,
  color: PropTypes.string
}
