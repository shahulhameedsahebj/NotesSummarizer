import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

function formatDate(value){
 return new Date(value);
}
const columns = [
  {
    field: 'InvoiceNumber',
    headerName: 'Invoice Number',
    width: 200,
    editable: false,
    
  },
  {
    field: 'InvoiceDate',
    headerName: 'Invoice Date',
    width: 270,
    valueFormatter: (value) => formatDate(value),

  },
  {
    field: 'InvoiceAmount',
    headerName: 'Invoice Amount',
    width: 200,
    editable: false,
  },
  {
    field: 'DueDate',
    headerName: 'Due Date',
    width: 200,
    editable: false,
  },
];


function getRowId(row){
    //console.log("Row",row)
   return row.InvoiceNumber;
}
export default function InvoicesDataGrid({data, selectedValues}) {
    
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={getRowId}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
       
        
        onRowSelectionModelChange={(ids) => {
            selectedValues(ids.toString());
        }}
      />
    </Box>
  );
}
