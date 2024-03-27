import styles from "./Frame.module.css";

const Frame = () => {
  return (
    <section className={styles.frame}>
      <div className={styles.rectangle} />
      <div className={styles.ellipseParent}>
        <div className={styles.ellipse} />
        <img className={styles.imageIcon} alt="" src="/image-2@2x.png" />
      </div>
      <div className={styles.whetherYoureSeekingClassicWrapper}>
        <h1 className={styles.whetherYoureSeeking}>
          Whether you're seeking classic sophistication, urban chic, or a
          companion for you, Markly has the perfect bag for every occasion.
        </h1>
      </div>
      <div className={styles.autoLayoutVertical}>
        <div className={styles.discoverOurCurrent}>
          Discover our current best-sellers and customer favorites. Each product
          is a testament to Markly's commitment to combining style, durability,
          and functionality.
        </div>
        <button className={styles.autoLayoutHorizontal}>
          <div className={styles.typeprimaryColorblackSiz}>
            <div className={styles.signIn}>Shop Now</div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Frame;
