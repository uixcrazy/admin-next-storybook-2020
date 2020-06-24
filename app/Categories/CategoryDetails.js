import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { EditIcon } from 'icons/my-icons';

const CategoryDetails = ({ classes, data }) => {
  console.log('CategoryDetails', data);
  if (!data) return ''

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <p className={classes.title}>
          Category Details:{" "}
          <span className={classes.titleName}>
            id{data.id} - {data.name}
          </span>
        </p>
        <div className={classes.actions}>
          <button className={classes.btnEdit}><EditIcon /> Edit</button>
        </div>
      </div>
      <div className={classes.detailsCt}>
        <p className={classes.infoGr}>
          <span className={classes.label}>ID</span>
          <span>{data.id}</span>
        </p>
        <p className={classes.infoGr}>
          <span className={classes.label}>Name</span>
          <span>{data.name}</span>
        </p>
        <p className={classes.infoGr}>
          <span className={classes.label}>Slug</span>
          <span>{data.slug}</span>
        </p>
        <p className={classes.infoGr}>
          <span className={classes.label}>SEO title</span>
          <span>{data.seo_title}</span>
        </p>
        <p className={classes.infoGr}>
          <span className={classes.label}>SEO description</span>
          <span>{data.seo_description}</span>
        </p>
      </div>
    </div>
  );
};

CategoryDetails.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  slug: PropTypes.string,
  seo_title: PropTypes.string,
  //... content
};

const styles = {
  wrapper: {
    marginTop: '2rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    color: 'var(--color-label)',
    display: 'flex',
    fontSize: '1.25rem',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  titleName: {
    color: 'var(--color-text)',
    marginLeft: '.5rem'
  },
  infoGr: {
    display: 'flex',
    padding: '.5rem 0'
  },
  label: {
    width: '9',
    color: 'var(--color-label)',
    flex: '0 0 9rem',
  },
  actions: {
    flex: '0 0 auto',
  },
  btnEdit: {
    color: '#fff',
    backgroundColor: '#20a8d8',
    borderColor:' #20a8d8',
    padding: '.25rem .75rem',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'middle',
    borderRadius: '.2rem',
    '& svg': {
      fontSize: '0.75rem',
      marginRight: '.2rem',
    },
    '&:hover': {
      backgroundColor: '#1b8eb7',
      borderColor: '#1985ac',
    }
  }
}

export default withStyles(styles)(CategoryDetails);