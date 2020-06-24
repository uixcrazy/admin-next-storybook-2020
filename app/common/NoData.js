import React from "react";
import PropTypes from "prop-types";
import withStyles from 'react-jss';

const NoData = ({classes, className, style, children}) => {
  const wrapperClass = [classes.nodata];
  if (className) wrapperClass.push(className);

  return (
    <div className={wrapperClass.join(" ")} style={style}>
      {children || "Data not available"}
    </div>
  );
}

NoData.propTypes = {
  classes: PropTypes.object,
  style: PropTypes.shape({}),
};

const styles = {
  nodata: {
    fontSize: 'initial',
    // margin: "auto",
    // textAlign: 'center',
    color: "#999",
    fontSize: 22,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
}

export default withStyles(styles)(NoData);
