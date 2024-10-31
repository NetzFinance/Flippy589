import styles from "./styles.module.css";

const BarLoader = ({ text1, text2 }: { text1: string; text2: string }) => (
  <div style={{ justifyContent: "center", textAlign: "center" }}>
    <div
      style={{
        color: "white",
        fontSize: "20px",
        textAlign: "center",
        margin: "auto",
        marginTop: "20px",
        marginBottom: "40px",
        maxWidth: "250px",
      }}
    >
      {text1}
    </div>
    <div className={styles.ball}></div>
    <div className={styles.ball}></div>
    <div className={styles.ball}></div>
    <div className={styles.ball}></div>
    <div className={styles.ball}></div>
    <div className={styles.ball}></div>
    <div className={styles.ball}></div>
    <div
      style={{
        color: "white",
        fontSize: "20px",
        textAlign: "center",
        margin: "auto",
        marginTop: "20px",
        marginBottom: "20px",
        maxWidth: "250px",
      }}
    >
      {text2}
    </div>
  </div>
);

export default BarLoader;
