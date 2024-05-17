import Link from "next/link"
import styles from "./links.module.css"
import NavLink from "./navLink/navLink"

const links = [
    { title: "Home Page",
      path: "/",
    },
    {
        title: "Add Notes",
        path: "/add-notes",
    },
    { title: "Invoice Notes",
    path: "/invoice-notes",
  },   
]
const Links = () =>{


    return (
        <div className={styles.links}>
            {links.map((link=>(
                <NavLink item={link} key={link.title}></NavLink>
            )))}
        </div>
    )
}
export default Links