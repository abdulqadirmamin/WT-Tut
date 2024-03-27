import styles from "./FrameComponent4.module.css";

const FrameComponent4 = () => {
  return (
    <section className={styles.ellipseShapeSymbol}>
      <div className={styles.verticalAlignParent}>
        <div className={styles.textDarkType}>
          <div className={styles.loremFillerText}>
            <div className={styles.yourPerfectFit}>Your Perfect Fit</div>
            <div className={styles.exploreCallNodes}>
              <h1 className={styles.weBelieveIn}>
                We believe in fashion that cares for the planet. Our commitment
                to sustainability goes beyond creating stylish bags – it's about
                making a positive impact
              </h1>
            </div>
            <div className={styles.choosingTheRight}>
              Choosing the right size is crucial when it comes to bags. Use our
              comprehensive size guide to ensure your Markly bag is not only
              stylish but also perfectly suited to your needs. From compact
              crossbodies to spacious totes, we've got the right size for every
              occasion.
            </div>
          </div>
        </div>
        <div className={styles.continueButtonNode}>
          <div className={styles.frame}>
            <div className={styles.frame1}>
              <div className={styles.rectangle} />
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
