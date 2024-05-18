"use client"
import Image from "next/image"
import styles from "./addNotes.module.css"
import { useState } from "react"
import axios from "axios";
const AddNotes = () => {
    const urlSaveNotes = "https://gcolapi.azurewebsites.net/saveNoteForClient";
    const [clientCode, setClientCode]= useState("");
    const [invoices, setInvoices] = useState("");
    const [noteComment, setNoteComment] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post(urlSaveNotes, {
            ClientCode: clientCode,
            Invoices: invoices,
            NoteComment: noteComment,
        }).then(function (response) {
            alert(response);
        }).catch(function (error) {
            console.log(error);
        })
    }
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/debit-credit-note.jpg" alt="" fill className={styles.img}></Image>
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Add New Notes</h1>
                    <input type="text" placeholder="Client" value={clientCode} onChange={(e)=>setClientCode(e.target.value)} />
                    <input type="text" placeholder="Invoices" value={invoices} onChange={(e)=>setInvoices(e.target.value)} />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Notes" value={noteComment} onChange={(e)=>setNoteComment(e.target.value)} ></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}
export default AddNotes;