import React from 'react';
import withStyles from 'react-jss';

// Confirmation
export default withStyles({
  dialogConfirmation: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 700,
    width: '100%',
    padding: 0,
    margin: '20px auto',
    overflowY: 'scroll',
    maxHeight: '100%',

    border: '1px solid var(--color-border)',
    boxShadow: '0 6px 24px 0 rgba(49,54,56,.1)',
    borderRadius: 2,
    backgroundColor: '#fff',
    [`@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)`]: {
      margin: '20px 0'
    }
  },
  content: {
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 16,
  },
  label: {
    opacity: .75,
    marginRight: 5,
  },
  commonInfo: {
    color: 'var(--color-text-darker)',
    letterSpacing: '0.5px',
    lineHeight: 1.5,
    textTransform: 'uppercase',
  },
  ctGr: {
    paddingTop: 15,
    lineHeight: 1.5,
  },
  title: {
    color: 'var(--color-primary)',
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'var(--color-primary-darker)',
    fontWeight: '500',
  },
  infoGr: {
    display: 'flex',
    '& $label': {
        width: 160,
    },
  },
  term: {
    backgroundColor: '#f7f9fc',
    marginTop: 15,
    padding: 15,
    borderRadius: '2px',
    border: '1px solid var(--color-border)',
    lineHeight: 1.25,
  },
  btnGr: {
    marginTop: 20,
    marginBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    marginLeft: 5,
    marginRight: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    padding: '.5rem 1.25rem',
    textTransform: 'uppercase',
    borderRadius: 2,
    minWidth: 100,
    height: 36,
    transitionDuration: '.1s',
    transitionProperty: 'color,box-shadow',
    transitionTimingFunction: 'ease-in',
    '&:focus': {
        boxShadow: '0 0 0 0 #db2c66, 0 0 0 0 #b81d5b, 0 0 transparent, 0 0 0 0.375rem #e4e9f2',
    }
  },
  btnCancel: {
    composes: '$button',
    color: '#798086',
    border: '2px solid #798086',
    '&:hover': {
      background: '#798086',
      borderColor: '#798086',
      color: '#fff',
    },
  },

})(({ classes, booking, handleCancel }) => {
  return (
    <div className={classes.dialogConfirmation}>
      {!booking &&
        <div className="boxHeader">
          <h1 className="box-title">REVIEW YOUR BOOKING</h1>
        </div>
      }

        {booking &&
            <React.Fragment>
                <div className="boxHeader">
                    <h1 className="box-title">{`BOOKING ID ${booking.id}`}</h1>
                </div>
                <div className={classes.content}>
                    <div className={classes.commonInfo}>
                        {`The following Booking Request was processed by VSF on ${booking.requestDate}`}
                    </div>
                </div>
            </React.Fragment>
        }

        <div className={classes.content}>
            <div className={classes.commonInfo}>
                {booking &&
                    <p><span className={classes.label}>VSF Booking ID:</span>{booking.id}</p>
                }
                <p><span className={classes.label}>Carrier:</span>{booking.shippingLineName}</p>
                <p><span className={classes.label}>VESSEL:</span>{booking.vesselVoyage}</p>
                <p><span className={classes.label}>VOYAGE #:</span>{booking.voyageNo}</p>
            </div>

            <div className={classes.ctGr}>
                <p className={classes.title}>CARGO</p>
                <p className={classes.subTitle}>
                    {`${booking.shipmentContainersList[0].noContainers} X ${booking.shipmentContainersList[0].containerTypeName} from ${booking.polCode}  to ${booking.podCode} `}
                </p>
                <p className={classes.infoGr}><span className={classes.label}>Commodity:</span>{booking.commodity}</p>
                <p className={classes.infoGr}><span className={classes.label}>Weight:</span>{`${booking.shipmentContainersList[0].weightPerContainer} tonnes per ${booking.shipmentContainersList[0].containerTypeName}`}</p>
                <p className={classes.infoGr}><span className={classes.label}>Free time at POL:</span>{`${booking.polDem} DEM & ${booking.polDet}  DET`}</p>
                <p className={classes.infoGr}><span className={classes.label}>Free time at POD:</span>{`${booking.podDem} DEM & ${booking.podDet}  DET`}</p>
            </div>

            <div className={classes.term}>
                <p>Port to Port </p>
                <p>SUBJECT TO EQUIPMENT/SPACE AVAILABILITY</p>
                <p>Subject to carrier approvals, Subject to carrier’s space and capacity</p>
                <p>Excludes any destination, THC, customs formalities & local charges</p>
                <p>{`Valid: ${booking.validity}`}</p>
            </div>

            <div className={classes.ctGr}>
                <p><span className={classes.label}>
                    PLACE OF RECEIPT</span>{`City:  ${booking.polName}`}
                </p>
                <p><span className={classes.label}>
                    ESTIMATED SAILING DATE:</span>{booking.sailingDate}
                </p>
                <p><span className={classes.label}>
                    TOTAL:</span><b>{`${booking.currencyCode} ${booking.total.format(2, 3, ',', '.')}`}</b>
                </p>
            </div>
        </div>
        <div className={classes.btnGr}>
            <button
                className={classes.btnCancel}
                onClick={handleCancel}
            >
                Close
            </button>
        </div>
    </div>
  );
});
