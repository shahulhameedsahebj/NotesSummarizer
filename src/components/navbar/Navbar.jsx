import Link from "next/link";
import Links from "./links/Links"
import styles from "./navbar.module.css";
import NewspaperIcon from '@mui/icons-material/Newspaper';
const Navbar = () =>{
    return(
        <div className={styles.container}>
            <Link href="/" className={styles.logo} style={{display:'flex'}}><NewspaperIcon fontSize="large"/>&nbsp;Notes Summarizer</Link>
            <div>
                <Links/>
            </div>
        </div>
    )
}
export default Navbar