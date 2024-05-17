import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Hackathon</h1>
      <hr />

      <p style={{ textAlign: "justify" }}>Automatic permissions and knowledge workflows ensure the right person gets the right information. Document automation helps you control over-sharing and secure information. Powered by M-Files GenAI technology, M-Files Aino, the platform helps organise information, understand the context of documents, and route documents.</p>
      <p style={{ textAlign: "justify" }}>Get feedback and share updates instantly, both internally and externally. With M-Files document automation, your teams can centralise, organise and manage documents in an information repository with intelligent document search capabilities.  </p>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hackathon.jpg" alt="" fill className={styles.hackathonImg} /></div>
  </div>;
};

export default Home; 