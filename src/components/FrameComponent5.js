import styles from "./FrameComponent5.module.css";

const FrameComponent5 = () => {
  return (
    <section className={styles.cardGroup}>
      <div className={styles.textBlock}>
        <div className={styles.rectangle} />
        <div className={styles.frameGroup} />
        <div className={styles.autoLayoutVGroup}>
          <div className={styles.autoLayoutHGroup}>
            <div className={styles.rectangle1}>
              
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            </div>
            <div className={styles.exploreCollections}>
              <div className={styles.urbanExplorer}>
                <img className={styles.groupIcon} alt="" src="/group.svg" />
                <img
                  className={styles.ellipseIcon}
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
                
                <img
                  className={styles.typeBigSizeDesktop}
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <div className={styles.propertyDesktop}>
              <div className={styles.weBelieveIn}>
                We believe in the power of a well-crafted bag to enhance your
                lifestyle. Explore our curated collection of premium bags that
                seamlessly blend style, functionality, and durability.
              </div>
            </div>
            <div className={styles.autoLayoutVGroupHeader}>
              <button className={styles.typeprimaryColorwhiteSiz}>
                <div className={styles.signIn}>Shop Now</div>
              </button>
            </div>
          </div>
          <header className={styles.typedesktopColorwhite}>
            <div className={styles.figmaStack}>
              <div className={styles.property1white}>
                <img
                  className={styles.rectShapeBox}
                  loading="lazy"
                  alt=""
                  src="/frame-2@2x.png"
                />
                <div className={styles.markly}>Markly</div>
              </div>
              <div className={styles.autoLayoutHorizontal} />
              <div className={styles.frameWrapperGroup}>
                <div className={styles.home}>Home</div>
                <div className={styles.bags}>Bags</div>
                <div className={styles.accesories}>Accesories</div>
                <div className={styles.blog}>Blog</div>
                <div className={styles.contact}>Contact</div>
              </div>
            </div>
            <img
              className={styles.shoppingBag03Icon}
              loading="lazy"
              alt=""
              src="/shoppingbag03.svg"
            />
          </header>
        </div>
        <div className={styles.cardBorderedOnly}>
          <div className={styles.textLabelName}>
            <div className={styles.elevateYourStyle}>
              Elevate Your Style with Exceptional Bags!
            </div>
            <div className={styles.typesecondColorwhiteSize}>
              <div className={styles.signUp}>SCROLL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
