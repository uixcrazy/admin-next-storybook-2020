import React from 'react';
import withStyles from 'react-jss';
import moment from 'moment';

const QuoteOverview = ({classes, data}) => {
  if (!data) {
    return <React.Fragment />
  }
  return (
    <div className={classes.wrapper}>
      <p className={classes.requestId}>Request ID: <strong className="txt--primary">{data.idString}</strong></p>
      <div className={classes.groupInfo}>
        <label className={classes.label}>Port of loading</label>
        <span className={classes.val}>{data.pol.code}</span>
      </div>
      <div className={classes.groupInfo}>
        <label className={classes.label}>Port of destination</label>
        <span className={classes.val}>{data.pod.code}</span>
      </div>
      <div className={classes.groupInfo}>
        <label className={classes.label}>Container type</label>
        <span className={classes.val}>{data.containerType.type} </span>
      </div>
      <div className={classes.groupInfo}>
        <label className={classes.label}>Number of containers</label>
        <span className={classes.val}> {data.noContainers} </span>
      </div>
      <div className={classes.groupInfo}>
        <label className={classes.label}>Commodity</label>
        <span className={classes.val}>{data.commodity}</span>
      </div>
      <div className={classes.groupInfo}>
        <label className={classes.label}>Preferred sailing date</label>
        <span className={classes.val}> {moment(data.preferredSailingDate).format("DD/MM/YYYY")} </span>
      </div>
      <div className={classes.groupInfo}>
        <label className={classes.label}>D&amp;D free time - POL</label>
        <div className={classes.rowDDFreeTime}>
          <span className={classes.val}>{data.polDem}</span>
          <span className={`${classes.val} ml-5`}>{data.polDet}</span>
        </div>
        <label className={classes.unitLabel}>Days</label>
      </div>
      <div className={classes.groupInfo}>
        <label className={classes.label}>D&amp;D free time - POD</label>
        <div className={classes.rowDDFreeTime}>
          <span className={classes.val}>{data.podDem}</span>
          <span className={`${classes.val} ml-5`}>{data.podDet}</span>
        </div>
        <label className={classes.unitLabel}>Days</label>
      </div>
      <div className={classes.groupInfo}>
        <label className={classes.label}>Weight container (estimate)</label>
          <span className={classes.val}>{data.weightPerContainer}</span>
          <label className={classes.unitLabel}>Tons</label>
      </div>
      <div className={classes.groupInfo}>
        <label className={classes.label}>Rate validity</label>
        <span className={classes.val}>{data.rateValidity}</span>
      </div>
    </div>
  );
};

export default withStyles({
  wrapper: {},
  label: {
    color: 'var(--color-label)',
  },
  val: {},
  unitLabel: {
    color: 'var(--color-label)',
    paddingLeft: 5,
  },
  requestId: {
    fontSize: 18,
    marginBottom: 10,
  },
  groupInfo: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    '& $label': {
      width: 150,
      flexShrink: 0,
      flexBasis: 150,
    },
    '& $val': {
      backgroundColor: '#f4f6f8', // '#edf1f7'
      flex: '1',
      padding: '6px 10px 4px',
    },
  },
  rowDDFreeTime: {
    display: 'flex',
    alignItems: 'center',
    width: 100,
    flexShrink: 0,
    flexBasis: 100,
    '& span': {
      flex: '0 0 50%',
      maxWidth: '50%',
    },
  },
})(QuoteOverview);
