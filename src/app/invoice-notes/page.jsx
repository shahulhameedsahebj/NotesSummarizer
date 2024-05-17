"use client"
import { Autocomplete, TextField } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";

const InvoiceNotes = () => {
    const urlGetClients = "https://gcolapi.azurewebsites.net/getClients";
    const urlGetNotes = "https://gcolapi.azurewebsites.net/getNotesByClient";

    const [clients, setClients] = useState([]);
    const [notes, setNotes] = useState([]);

    useEffect(()=>{
        loadClients();
    },[]);

    const loadClients = async () => {
        //let countryClients = await getClients();
        return fetch(urlGetClients)
        .then((res) => res.json())
        .then((d) => {setClients(d)})
    }
        const loadNotes = async (ClientID) => {
            axios.post(urlGetNotes, {
                ClientCode: ClientID
            }).then(function (response) {
                console.log(response);
            }).finally(function (error) {
                console.log(error);
            })
        }
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
        <div>Invoice Notes

<div style={{width:'100%', height:'calc(60vh)', display:"flex", padding:"20px", backgroundColor:'white', justifyContent:"flex-start", flexDirection:"column"}}>
    <Autocomplete disablePortal id='callcardClients' options={clients}
    getOptionLabel = {(option) => option.ClientName}
    sx ={{width:300}}
    renderInput={(params) => (
        <TextField {...params}
        label ='Select Client'/>
    )}

    renderOption={(props, option) =>{
        return (
            <li {...props} key={option.ClientID}>{option.ClientName}</li>
        )
    }}
onChange={(event, value)=>{
    if(value){
        loadNotes(value.ClientID)

    }
}}

    ></Autocomplete>
</div>

        </div>
    )
}

export default InvoiceNotes