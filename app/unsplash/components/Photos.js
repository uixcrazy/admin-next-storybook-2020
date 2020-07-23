import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getCleanUrl } from "utils";
import photoType from "../models/photo.type";
import Photo from './Photo';

const Photos = ({ classes, data }) => {
  return (
    <div className={classes.masonry}>
      {data.map(photo => {

        return (
          <div className={classes.brick} key={photo.id}>
            <Photo data={photo} downloadUrl={getCleanUrl(photo.urls.raw)}/>
          </div>
        )
      })}
    </div>
  );
};

Photos.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(photoType))
};
const styles = {
  masonry: {
    margin: '1.5rem',

    transition: 'all .5s ease-in-out',
    columnGap: '1.5rem',
    columnFill: 'initial',
  },
  brick: {
    marginBottom: '1.5rem',
    // display: 'inline-block',
    // verticalAlign: 'top',
    '& > div': {
      transition: 'all .5s ease-in-out',
      backfaceVisibility: 'hidden',
    }
  },
  [`@media only screen and (min-width: 768px) and (max-width: 1023px)`]: {
    masonry: {
      columnCount: 2,
    }
  },
  [`@media only screen and (min-width: 1024px)`]: {
    masonry: {
      columnCount: 3,
    }
  },
}

export default withStyles(styles)(Photos);