import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.mainBox}>
        <h1>A REST API for homeco app</h1> 
        To go to the homeco site click {"--->"} <a href="https://homeco.vercel.app">Homeco</a>
      </div>
    </>
  );
}
