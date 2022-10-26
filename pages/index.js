import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(null);
  useEffect(() => {
    axios.get("http://numbersapi.com/random/trivia").then((res) => {
      const list_of_strs = res.data.split(" ");
      setNumber(list_of_strs[0]);
      list_of_strs.shift();
      setText(list_of_strs.join(" "));
    });
  }, []);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Random Info about Number</title>
      </Head>
      <div className="glass">
        <span className="glass-text number">{number}</span> 
        <h3 className="glass-text">{text}</h3>
        
      </div>
    </div>
  );
}
