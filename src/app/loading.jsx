import Image from "next/image"

const Loading = () =>{
    return (
        <div style={{textAlign:"center"}}><Image src="/loading.gif" alt="" width={100} height={100}  /></div>
    )
}
export default Loading