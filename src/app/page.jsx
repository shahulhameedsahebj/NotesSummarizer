import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Hackathon</h1>
      <hr />

      <p style={{ textAlign: "justify" }}>The Collection Notes Summarizer is a tool designed to summarize past collection follow-up details. Leveraging the power of LLM and NLP techniques, it analyzes collection notes and documents from previous interactions between collectors and customers.</p>
      <p style={{ textAlign: "justify" }}>By processing a large amount of information within seconds, it captures key details such as a previous promise to pay, the potential for a dispute, the reason for delays in payment etc. Additionally, it provides a succinct summary of each note  to assist the collectors with their follow-up activities.</p>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hackathon.jpg" alt="" fill className={styles.hackathonImg} /></div>
  </div>;
};

export default Home; 