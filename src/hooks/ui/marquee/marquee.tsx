"use client";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

const Marquee = () => {
  const router = useRouter();
  return (
    <div className={styles.marquee}>
      <div className={styles["marquee-box-one"]}>
        <div className={styles["marquee-content-one"]}>
          <h2
            className={styles["marquee-text"]}
            onClick={() => router.push("/Trade")}
          >
            Pay with Credit or Debit Card
          </h2>
          <h2
            className={styles["marquee-text"]}
            onClick={() => router.push("/Bridge")}
          >
            Bridge Tokens
          </h2>
          <h2
            className={styles["marquee-text"]}
            onClick={() => router.push("/Mint")}
          >
            Multichain NFTS
          </h2>
          <h2
            className={styles["marquee-text"]}
            onClick={() => router.push("/Tokenomics")}
          >
            Unified Tokenomics
          </h2>
          <h2
            className={styles["marquee-text"]}
            onClick={() => router.push("/Stake")}
          >
            Staking
          </h2>
          <h2
            className={styles["marquee-text"]}
            onClick={() => router.push("/Play")}
          >
            Minigames
          </h2>
          <h2
            className={styles["marquee-text"]}
            onClick={() => router.push("/Vesting")}
          >
            Vested Supply
          </h2>
          <h2
            className={styles["marquee-text"]}
            onClick={() => router.push("/FAQ")}
          >
            Web2 Support
          </h2>
          {/* content-duplicate */}

          <h2
            className={styles["marquee-text"]}
            onClick={() => router.push("/Trade")}
          >
            Pay with Credit or Debit Card
          </h2>
          <h2
            className={styles["marquee-text"]}
            onClick={() => router.push("/Bridge")}
          >
            Bridge Tokens
          </h2>
          <h2
            className={styles["marquee-text"]}
            onClick={() => router.push("/Mint")}
          >
            Multichain NFTS
          </h2>
          <h2
            className={styles["marquee-text"]}
            onClick={() => router.push("/Tokenomics")}
          >
            Unified Tokenomics
          </h2>
          <h2
            className={styles["marquee-text"]}
            onClick={() => router.push("/Stake")}
          >
            Staking
          </h2>
          <h2
            className={styles["marquee-text"]}
            onClick={() => router.push("/Play")}
          >
            Minigames
          </h2>
          <h2
            className={styles["marquee-text"]}
            onClick={() => router.push("/Vesting")}
          >
            Vested Supply
          </h2>
          <h2
            className={styles["marquee-text"]}
            onClick={() => router.push("/FAQ")}
          >
            Web2 Support
          </h2>
        </div>
        {/* ...repeat for other divs... */}
      </div>
    </div>
  );
};

export default Marquee;
