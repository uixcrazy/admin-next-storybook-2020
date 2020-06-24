import React, { PureComponent } from 'react';
import withStyles from 'react-jss';
import Dialog from '../Dialog/Dialog';
import ClearIcon from '../../helpers/icons/material-icons/Clear';

class TrackTrace extends PureComponent {
  state = {
    dialogContent: null,
  };

  handleClose = () => {
    this.setState({ dialogContent: null });
  };

  openDialog = () => {
    const {classes} = this.props;
    this.setState({ dialogContent:
      <div className={classes.dialog}>
        <button className={classes.btnClose} onClick={this.handleClose}>
          <ClearIcon />
        </button>
        <div className={classes.content}>
          <p>This function is still developing.</p>
          <p>Please return later or contact <a href="vseafreight@gmail.com" className="btn-link">vseafreight@gmail.com</a></p>
        </div>
      </div> });
  }

  render() {
    const {classes} = this.props;
    return (
      <>
        <button className={classes.btn} onClick={this.openDialog}>
          Track &amp; Trace
        </button>
        <Dialog onClose={this.handleClose}>
          {this.state.dialogContent}
        </Dialog>
      </>
    )
  }
}

export default withStyles({
  dialog: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    width: '100%',
    padding: 0,
    margin: '20px auto',

    border: '1px solid var(--color-border)',
    boxShadow: '0 6px 24px 0 rgba(49,54,56,.1)',
    borderRadius: 2,
    backgroundColor: '#fff',
    position: 'relative',
  },
  content: {
    padding: '30px 30px 25px',
  },
  btnClose: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    color: '#8b949c',
    '&:hover': {
      color: '#424950',
    },
  },
  btn: {
    marginLeft: 5,
    marginRight: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    padding: '.5rem',
    textTransform: 'uppercase',
    borderRadius: 2,
    height: 36,
    minWidth: 130,
    transitionDuration: '.1s',
    transitionProperty: 'color,box-shadow',
    transitionTimingFunction: 'ease-in',
    background: 'var(--color-primary-lighter)',
    color: '#fff',
    '&:hover': {
      background: 'var(--color-primary)',
    },
    '&:focus': {
      boxShadow: '0 0 0 0 #db2c66, 0 0 0 0 #b81d5b, 0 0 transparent, 0 0 0 0.375rem #e4e9f2',
    }
  }
})(TrackTrace);