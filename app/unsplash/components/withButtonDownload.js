import React from 'react';
import withStyles from 'react-jss';

function withButtonDownload(WrappedComponent) {
  return withStyles({
    wrapper: {
      position: 'relative'
    },
    btnDownloaded: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      padding: '5px 10px',
      background: '#fff',
      color: '#587d8b',
      textDecoration: 'none'
    }

  })(({ classes, data, downloadUrl }) => {
    return (
      <div className={classes.wrapper}>
        <WrappedComponent {...{data}} />
        <a href={downloadUrl}
          className={classes.btnDownloaded}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          download
        </a>
      </div>
    );
  });
}

export default withButtonDownload;
