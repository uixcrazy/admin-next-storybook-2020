import React, { useState } from 'react';
import withStyles from 'react-jss';
import moment from 'moment';
import Table from "../common/Table";
import TrackTrace from "./TrackTrace";
import Dialog from '../Dialog/Dialog';
import BookingDetail from "./Detail";
import Nodata from "../common/NoData";

const Bookings = ({
  classes,
  data,
  onSeeDetails,
}) => {

  const [dialogContent, setDialogContent] = useState(null)

  function handleCloseDialog() {
    setDialogContent(null)
  };

  function openDialog(booking) {
    if (booking) {
      setDialogContent(
        <BookingDetail
          booking={booking}
          handleCancel={handleCloseDialog}
        />
      );
    }
  }

  if (!data) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Nodata />
      </div>
    )
  }
  return (
    <React.Fragment>
    <Table
      data={data}
      onSeeDetails={onSeeDetails}
      sortBy={[{ id: 'requestDate', desc: true }]}
      columns={React.useMemo(
        () => [
          {
            Header: 'Booking ID',
            accessor: 'id',
            Cell: ({ cell: { value, row } }) => (
              <button
                type="button"
                className={`btn-link ${classes.btnRequest}`}
                onClick={(e) => {
                  onSeeDetails(row.original, openDialog);
                }}
              >
                {value}
              </button>
            )
          },
          {
            Header: 'Request date',
            accessor: 'requestDate',
            Cell: ({ cell: { value } }) => moment(value).format("DD/MM/YYYY"),
          },
          {
            Header: 'Sailing date',
            accessor: 'sailingDate',
            Cell: ({ cell: { value } }) => moment(value).format("DD/MM/YYYY"),
          },
          {
            Header: 'Description',
            accessor: 'description',
            Cell: ({ cell: { value, row } }) => {
              return (
                <span>
                  {row.original.shippingLineName}, 
                  {row.original.polCode} to {row.original.podCode}, 
                  {row.original.shipmentContainersList[0].containerTypeName}, 
                  {row.original.commodity}, 
                  validity: {row.original.validity}
                </span>
              )
            },
          },
          {
            Header: 'Total',
            accessor: 'total',
            Cell: ({ cell: { value, row } }) => {
              return (
                <span>
                  {row.original.currencyCode} {value.format(2, 3, ',', '.')}
                </span>
              )
            },
          },
          {
            Header: 'Payment status',
            accessor: 'paymentStatus',
          },
          {
            Header: 'Container number',
            accessor: 'containerNumber',
            Cell: ({ cell: { value, row } }) => {
              return (
                <ul className={classes.containerNo}>
                  {row.original.shipmentContainersList[0].containerNumber.split(',').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )
            },
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Shipment Update',
            accessor: 'shipmentUpdate',
            Cell: ({ cell: { value, row } }) => {
              return (
                value ? value : ''
              )
            },
          },
        ],
        []
      )}
    />
    <Dialog onClose={handleCloseDialog}>
      {dialogContent}
    </Dialog>
    </React.Fragment>
  );
};

export default withStyles({
  containerNo: {
    position: 'relative',
  },
  btnRequest: {
    display: 'block',
    width: '100%',
    textAlign: 'left',
    backgroundColor: 'transparent',
  }


})(Bookings);
