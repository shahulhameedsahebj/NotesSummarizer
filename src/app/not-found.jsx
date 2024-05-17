import Link from "next/link"

const Error = () =>{
    return (
        <div>
            <h2>Not found</h2>
            <p>Sorry, the page you are looking for doesnot exists</p>
            <Link href="/">Return to home page</Link>
        </div>
    )
}
export default Error