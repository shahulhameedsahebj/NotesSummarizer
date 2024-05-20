import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

function formatDate(value){
 return new Date(value);
}
const columns = [
  { field: 'NoteID', headerName: 'ID', width: 90 },
  {
    field: 'NoteCreatedDate',
    headerName: 'Created Date',
    width: 200,
    editable: true,
    valueFormatter: (value) => formatDate(value),
  },
  {
    field: 'NoteComments',
    headerName: 'Note Comments',
    width: 600,
    editable: true,
  },

];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
function getRowId(row){
    //console.log("Row",row)
   return row.NoteID;
}
export default function NotesDataGrid({data, selectedValues}) {
    
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
        checkboxSelection
        
        onRowSelectionModelChange={(ids) => {
            selectedValues(ids.toString());
        }}
      />
    </Box>
  );
}
