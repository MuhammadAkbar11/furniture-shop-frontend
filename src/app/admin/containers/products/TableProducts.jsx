import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import image from '../../../../assets/img/products/1.png';
/* eslint-disable */

const TableProducts = () => {
  const rows = [
    { id: 1, image: 'Hello', title: 'World', price: 'Rp. 100.000' },
    { id: 2, image: 'XGrid', title: 'is Awesome', price: 'Rp. 100.000' },
    { id: 3, image: 'Material-UI', title: 'is Amazing' },
  ];

  const columns = [
    {
      field: 'image',
      headerName: 'Image',
      width: 150,
      renderCell: params => {
        return <img src={image} height='100%' alt='' />;
      },
    },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} pagination columns={columns} />
    </div>
  );
};

export default TableProducts;
