"use client"
import NotesDataGrid from "@/components/datagrid/NotesDataGrid";
import { Autocomplete, Button, Dialog, DialogTitle, TextField } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";

const InvoiceNotes = () => {
    const urlGetClients = "https://gcolapi.azurewebsites.net/getClients";
    const urlGetNotes = "https://gcolapi.azurewebsites.net/getNotesByClient";
    const urlGetSummary = "https://gcolapi.azurewebsites.net/getSummaryForNotes";

    const [clients, setClients] = useState([]);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        loadClients();
    }, []);

    const loadClients = async () => {
        //let countryClients = await getClients();
        return fetch(urlGetClients)
            .then((res) => res.json())
            .then((d) => { setClients(d) })
    }
    const loadNotes = async (ClientID) => {
        axios.post(urlGetNotes, {
            ClientCode: ClientID
        }).then(function (response) {
            setNotes(response);
        }).finally(function (error) {
            console.log(error);
        })
    }
    const [open, setOpen] = useState(false);
    const [noteSummary, setNoteSummary] = useState();
    const [selectedNotes, setSelectedNotes] = useState();
    const getSummaryDetails = async() =>{
        axios.get(`${urlGetSummary}?Noteids=${selectedNotes}`)
        .then (function (response){
            setNoteSummary(response);})
    }

    const handleClick = () => {
         getSummaryDetails();
         setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };
    /*
            const data = [
                {ClientID:43433,
                    ClientName:"test"
                },
                {ClientID:43333,
                    ClientName:"test1"
                },
            ]
            setClients(data);*/

    return (
        <div style={{ width: '100%', height: 'calc(80vh)', display: "flex", padding: "20px", backgroundColor: 'white', justifyContent: "flex-start", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><Autocomplete disablePortal id='callcardClients' options={clients}
                getOptionLabel={(option) => option.ClientName}
                sx={{ width: 300 }}
                loading
                renderInput={(params) => (
                    <TextField {...params}
                        label='Select Client' />
                )}

                renderOption={(props, option) => {
                    return (
                        <li {...props} key={option.ClientID}>{option.ClientName + "("+ option.ClientID +")"}</li>
                    )
                }}
                onChange={(event, value) => {
                    if (value) {
                        loadNotes(value.ClientID)

                    }
                }}

            ></Autocomplete>
                <Dialog onClose={handleClose} open={open} PaperProps={{
                    sx: {
                        width: "50%",
                        height:400,
                        maxHeight: 600
                    }
                }}>
                    <DialogTitle sx={{backgroundColor:"#0d0c22", color:"white"}}>Notes Summary</DialogTitle>
                   {noteSummary}
                </Dialog>

                <Button variant="contained" onClick={handleClick}>Show Summary</Button>
            </div>
            {notes.data && <NotesDataGrid data={notes.data} selectedValues={setSelectedNotes} />}
        </div>

    )
}

export default InvoiceNotes