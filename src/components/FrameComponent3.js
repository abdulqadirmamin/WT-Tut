import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.frame}>
        <div className={styles.frame1} />
      </div>
      <div className={styles.autoLayoutVertical}>
        <div className={styles.autoLayoutVertical1}>
          <div className={styles.autoLayoutVertical2}>
            <h1 className={styles.adventureCollectionIs}>
              Adventure collection is designed to keep up with your dynamic
              lifestyle, offering durability without compromising on style.
            </h1>
            <div className={styles.atMarklyWe}>
              At Markly, we believe in the power of a well-crafted bag to
              enhance your lifestyle. Explore our curated collection of premium
              bags that seamlessly blend style, functionality, and durability.
            </div>
          </div>
        </div>
        <button className={styles.typeprimaryColorblackSiz}>
          <div className={styles.signIn}>Shop Now!</div>
        </button>
      </div>
    </section>
  );
};

export default FrameComponent3;
