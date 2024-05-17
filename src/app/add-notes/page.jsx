import Image from "next/image"
import styles from "./addNotes.module.css"
const AddNotes = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/debit-credit-note.jpg" alt="" fill className={styles.img}></Image>
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                <h1 className={styles.title}>Add New Notes</h1>
                    <input type="text" placeholder="Client" />
                    <input type="text" placeholder="Invoices" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Notes"></textarea>
                    <button>Add</button>
                </form>
            </div>
        </div>
    )
}
export default AddNotes;