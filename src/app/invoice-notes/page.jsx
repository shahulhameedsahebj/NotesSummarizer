"use client"
import InvoicesDataGrid from "@/components/datagrid/InvoicesDataGrid";
import NotesDataGrid from "@/components/datagrid/NotesDataGrid";
import { Autocomplete, Button, Dialog, DialogTitle, Divider, Switch, TextField } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";

const InvoiceNotes = () => {
    const urlGetClients = "https://gcolapi.azurewebsites.net/getClients";
    const urlGetNotes = "https://gcolapi.azurewebsites.net/getNotesByClient";
    const urlGetInvoices = "https://gcolapi.azurewebsites.net/getInvoiceDetailsByClient";
    const urlGetSummary = "https://gcolapi.azurewebsites.net/getSummaryForNotes/";
   // const urlGetSummary = "https://gcolapi.azurewebsites.net/getSummaryForNotesTest/";
    const [clients, setClients] = useState([]);
    const [notes, setNotes] = useState([]);
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        loadClients();
    }, []);

    const loadClients = async () => {
        //let countryClients = await getClients();
        return fetch(urlGetClients)
            .then((res) => res.json())
            .then((d) => { setClients(d) })
    }
    const loadInvoices = async (ClientCode) => {
        axios.get(`${urlGetInvoices}?ClientCode=${ClientCode}`)
            .then(function (response) {
                setInvoices(response);
            })
    }
    const loadNotes = async (ClientCode) => {
        axios.get(`${urlGetNotes}?ClientCode=${ClientCode}`)
            .then(function (response) {
                setNotes(response);
            })

        // axios.post(urlGetNotes, {
        //     ClientCode: ClientID
        // }).then(function (response) {
        //     setNotes(response);
        //     console.log(response);
        // }).finally(function (error) {
        //     console.log(error);
        // })
    }
    const [open, setOpen] = useState(false);
    const [noteSummaryInput, setNoteSummaryInput] = useState();
    const [noteSummaryOuput, setNoteSummaryOutput] = useState();
    const [selectedNotes, setSelectedNotes] = useState([]);
    const [checked, setChecked] = useState(false);
    const getSummaryDetails = async () => {
        if (selectedNotes.length > 5) {
            alert("Maximum 5 notes can be selected!")
            return false;
        }
        setNoteSummaryInput("Loading...");
        setNoteSummaryOutput("");
        axios.get(`${urlGetSummary}?Noteids=${selectedNotes.toString()}`)
            .then(function (response) {
                console.log(response);
                setNoteSummaryInput(response.data.inputtext);
                setNoteSummaryOutput(response.data.summary);
            })
            .catch(function (error){
                setNoteSummaryOutput(error.response);
            })
        setOpen(true);
    }
    const handleChange = (event) => {
        setChecked(event.target.checked);
    }


    const handleClick = () => {
        getSummaryDetails();

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
                        <li {...props} key={option.ClientID}>{option.ClientName + "(" + option.ClientID + ")"}</li>
                    )
                }}
                onChange={(event, value) => {
                    if (value) {
                        loadNotes(value.ClientID)
                        loadInvoices(value.ClientID)
                    }
                }}

            ></Autocomplete>
                <div style={{ color: '#0d0c22', fontWeight: 'bold' }}>Show Invoices: <Switch checked={checked} onChange={handleChange} /></div>

                <Dialog onClose={handleClose} open={open} PaperProps={{
                    sx: {
                        width: "50%",
                        height: 400,
                        maxHeight: 600
                    }
                }}>
                    <DialogTitle sx={{ backgroundColor: "#0d0c22", color: "white" }}>Notes Summary</DialogTitle>
                    <div style={{padding:'10px'}}><b>Input text:</b> {noteSummaryInput}</div>
                    <Divider/>
                    <div style={{padding:'10px'}}><b>Output text:</b> {noteSummaryOuput}</div>
                </Dialog>

                <Button variant="contained" onClick={handleClick}>Show Summary</Button>
            </div>
            {notes.data && !checked && <NotesDataGrid data={notes.data} selectedValues={setSelectedNotes} />}
            {invoices.data && checked && <InvoicesDataGrid data={invoices.data} selectedValues={setSelectedNotes} />}
        </div>

    )
}

export default InvoiceNotes