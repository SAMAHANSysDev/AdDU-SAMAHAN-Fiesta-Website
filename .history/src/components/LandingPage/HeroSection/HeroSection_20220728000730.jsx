import Image from "next/image";
import styles from "./HeroSection.module.scss";
import NowHappening from "./NowHappening/NowHappening";

const HeroSection = () => {
  return (
    <div className={styles["HeroSection"]}>
      <div className={styles["grid-container"]}>
        <div className={`${styles["grid-item"]} ${styles["one"]}`}>
          <div className={styles["img_wrapper"]}>
            <Image
              src="/addu-logo.png"
              alt="AdDU Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
        <div className={`${styles["grid-item"]} ${styles["two"]}`}>
          <h1>SIDLAKAN 22</h1>
        </div>
        <div className={`${styles["grid-item"]} ${styles["three"]}`}>
          <NowHappening />
        </div>
        <div className={`${styles["grid-item"]} ${styles["four"]}`}>
          <div className={styles["img_wrapper"]}>
            <Image
              src="/cheer.png"
              alt="Cheer don't jeer"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
    </div>
    </div>
  )
}

export default HeroSection