import styles from "./TypeBigSizeDekstop.module.css";

const TypeBigSizeDekstop = ({ frame, header, loremIpsumHasBeenTheIndus }) => {
  return (
    <div className={styles.typebigSizedekstop}>
      <img
        className={styles.groupFrameEllipse}
        loading="lazy"
        alt=""
        src={frame}
      />
      <div className={styles.autoLayoutVertical}>
        <div className={styles.autoLayoutVertical1}>
          <h3 className={styles.header}>{header}</h3>
          <div className={styles.loremIpsumHas}>
            {loremIpsumHasBeenTheIndus}
          </div>
        </div>
        <div className={styles.readMore}>Read More</div>
      </div>
    </div>
  );
};

export default TypeBigSizeDekstop;
