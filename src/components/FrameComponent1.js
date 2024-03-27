import TypeBigSizeDekstop from "./TypeBigSizeDekstop";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.urbanExplorerAdventureSeekeWrapper}>
        <div className={styles.urbanExplorerAdventureSeeke}>
          <div
            className={styles.urbanExplorer}
          >{`Urban Explorer & Adventure Seeker`}</div>
          <h1 className={styles.exploreOurCarefully}>
            Explore our carefully curated collections
          </h1>
        </div>
      </div>
      <div className={styles.ellipseWrapper}>
        <div className={styles.ellipse}>
          <div className={styles.group}>
            <div className={styles.autoLayoutHorizontal} />
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src="/image-3@2x.png"
            />
          </div>
          <div className={styles.autoLayoutHorizontal1}>
            <div className={styles.exploreOurCollections}>
              Explore our collections, embrace quality craftsmanship, and make a
              statement with Markly. Your perfect bag is just a click away.
            </div>
            <div className={styles.autoLayoutHorizontal2}>
              <div className={styles.autoLayoutHorizontal3}>
                <div className={styles.autoLayoutHorizontal4}>
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group-1.svg"
                  />
                </div>
                <div className={styles.autoLayoutHorizontal5}>
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
        </div>
      </div>
      <div className={styles.blog}>
        <div className={styles.blog1}>Blog</div>
        <h1 className={styles.rheLatestTrends}>Rhe Latest Trends</h1>
      </div>
      <div className={styles.autoLayoutHorizontal6}>
        <TypeBigSizeDekstop
          frame="/frame-4@2x.png"
          header="Styling Your Markly Bag"
          loremIpsumHasBeenTheIndus="Explore the beauty of simplicity and learn how to make a statement with minimalistic styling featuring Markly bags"
        />
        <TypeBigSizeDekstop
          frame="/frame-5@2x.png"
          header="Must-Have Bags for the Season"
          loremIpsumHasBeenTheIndus="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
        />
        <TypeBigSizeDekstop
          frame="/frame-6@2x.png"
          header="Travel Essentials for Jet-Setters"
          loremIpsumHasBeenTheIndus="Embark on a journey with us as we explore travel tips and essential accessories for the modern jet-setter."
        />
      </div>
    </section>
  );
};

export default FrameComponent1;
