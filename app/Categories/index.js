import React, { useState } from 'react';
import withStyles from 'react-jss';
import CategoriesTable from './CategoriesTable';
import CategoryDetails from './CategoryDetails';

const CategoriesUI = ({ classes, data }) => {
  // làm sao check data đúng format

  const [categoryDetails, setCategoryDetails] = useState();

  function onChangeCategoryDetails(categoryId) {
    const categoryCrr = categoryId && data.find((item) => item.id === categoryId);
    setCategoryDetails(categoryCrr);
  }

  return (
    <div className={classes.wrapper}>
      <CategoriesTable
        data={data}
        onChangeCategoryDetails={onChangeCategoryDetails}
      />
      <CategoryDetails data={categoryDetails}/>
    </div>
  );
};

const styles = {
  wrapper: {
    position: 'relative',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    '& table': {
      width: 'auto',
    }
  },
}

export default withStyles(styles)(CategoriesUI);

