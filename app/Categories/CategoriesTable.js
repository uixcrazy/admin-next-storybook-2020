import React, { useMemo } from 'react';
import moment from 'moment';
import CustomTable from 'base-components/common/Table';
import Nodata from 'base-components/common/NoData';

// CategoriesTable
export default ({ data, onChangeCategoryDetails }) => {

  if (!data) {
    return <Nodata />
  }

  return (
    <CustomTable
      data={data}
      showPagination={false}
      sortBy={[{ id: "id", desc: false }]}
      columns={useMemo(
        () => [
          {
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "Name",
            accessor: "name",
            Cell: ({ cell: { value, row } }) => (
              <button
                type="button"
                className="btn-link"
                onClick={() => {
                  onChangeCategoryDetails(row.original.id);
                }}
              >
                {value}
              </button>
            ),
          },
          {
            Header: "Slug",
            accessor: "slug",
          },

          {
            Header: "SEO title",
            accessor: "seo_title",
          },
          {
            Header: 'SEO description',
            accessor: 'seo_description',
            Cell: ({ cell: { value }}) => (
              <div style={{
                maxWidth: '250px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>{ value }</div>
            )
          },
          {
            Header: "Updated date",
            accessor: "updated_at",
            Cell: ({ cell: { value } }) => moment(value).format("DD/MM/YYYY"),
          },
          {
            Header: "Status",
            accessor: "status",
          },
        ],
        []
      )}
    />
  );
};
