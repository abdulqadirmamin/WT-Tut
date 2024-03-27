import { useMemo } from "react";
import styles from "./Card2ColorLineOnly.module.css";

const Card2ColorLineOnly = ({
  colorBlackType2,
  loremIpsumTheIndustrysSta,
  loremIpsumHasBeenTheIndus,
  propWidth,
}) => {
  const colorBlackType2IconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.card2ColorlineOnly}>
      <div className={styles.rectangle} />
      <div className={styles.autoLayoutVertical}>
        <img
          className={styles.colorblackType2Icon}
          loading="lazy"
          alt=""
          src={colorBlackType2}
          style={colorBlackType2IconStyle}
        />
        <div className={styles.autoLayoutVertical1}>
          <div className={styles.autoLayoutVertical2}>
            <div className={styles.loremIpsumThe}>
              {loremIpsumTheIndustrysSta}
            </div>
            <div className={styles.loremIpsumHas}>
              {loremIpsumHasBeenTheIndus}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2ColorLineOnly;
