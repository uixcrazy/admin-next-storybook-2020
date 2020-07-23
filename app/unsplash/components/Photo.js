import React from 'react';
import withStyles from 'react-jss';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import photoType from "../models/photo.type";
import withButtonDownload from './withButtonDownload';

const Img = dynamic(
  () => import('core/base-components/common/Image'),
  { ssr: false }
);

const Photo = withStyles({
  img: {
    maxWidth: '100%',
    verticalAlign: 'middle',
  }

  })(({ classes, data }) => {
  return (
    <Img
      className={classes.img}
      src={data.urls.regular}
      alt={data.alt_description}
    />
  );
});

Photo.propTypes = {
  data: PropTypes.shape(photoType)
};

export default withButtonDownload(Photo);
