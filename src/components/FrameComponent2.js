import Card2ColorLineOnly from "./Card2ColorLineOnly";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <section className={styles.autoLayoutVerticalWrapper}>
      <div className={styles.autoLayoutVertical}>
        <div className={styles.autoLayoutVerticalInner}>
          <div className={styles.frameParent}>
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/frame-3@2x.png"
            />
            <h1 className={styles.whyChooseMarkly}>Why Choose Markly?</h1>
          </div>
        </div>
        <div className={styles.autoLayoutHorizontalParent}>
          <div className={styles.autoLayoutHorizontal}>
            <div className={styles.discoverOurCurrent}>
              Discover our current best-sellers and customer favorites. Each
              product is a testament to Markly's commitment to combining style,
              durability, and functionality.
            </div>
            <div className={styles.autoLayoutHorizontal1}>
              <div className={styles.autoLayoutHorizontal2}>
                <div className={styles.autoLayoutHorizontal3}>
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group-1.svg"
                  />
                </div>
                <div className={styles.autoLayoutHorizontal4}>
                  <img
                    className={styles.groupIcon1}
                    loading="lazy"
                    alt=""
                    src="/group-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.autoLayoutHorizontal5}>
            <div className={styles.card1ColorlineOnly}>
              <div className={styles.rectangle} />
              <div className={styles.autoLayoutVertical1}>
                <img
                  className={styles.colorblackType1Icon}
                  loading="lazy"
                  alt=""
                  src="/colorblack-type1.svg"
                />
                <div className={styles.autoLayoutVertical2}>
                  <div className={styles.autoLayoutVertical3}>
                    <div className={styles.loremIpsumThe}>
                      Quality Craftsmanship
                    </div>
                    <div className={styles.loremIpsumHasContainer}>
                      <span>
                        Meticulously crafted using premium materials, our bags
                        are a testament to enduring quality.ensuring you're
                        always prepared for any journey.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Card2ColorLineOnly
              colorBlackType2="/colorblack-type2.svg"
              loremIpsumTheIndustrysSta="Versatility"
              loremIpsumHasBeenTheIndus="From the office to weekend getaways, Markly bags seamlessly blend style with practicality, ensuring you're always prepared for any journey."
              propWidth="187px"
            />
            <Card2ColorLineOnly
              colorBlackType2="/colorblack-type3.svg"
              loremIpsumTheIndustrysSta="Sustainability"
              loremIpsumHasBeenTheIndus="We're committed to eco-friendly practices, sourcing materials responsibly and crafting bags that stand the test of time."
              propWidth="134px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
