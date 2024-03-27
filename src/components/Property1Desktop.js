import styles from "./Property1Desktop.module.css";

const Property1Desktop = () => {
  return (
    <footer className={styles.property1desktop}>
      <div className={styles.autoLayoutHorizontal}>
        <div className={styles.autoLayoutVertical}>
          <div className={styles.property1black}>
            <img
              className={styles.headerTextIcon}
              loading="lazy"
              alt=""
              src="/frame-7@2x.png"
            />
            <div className={styles.markly}>Markly</div>
          </div>
          <div className={styles.weBelieveIn}>
            We believe in the power of a well-crafted bag to enhance your
            lifestyle. Explore our curated collection of premium bags that
            seamlessly blend style, functionality, and durability.
          </div>
        </div>
        <div className={styles.autoLayoutHorizontal1}>
          <div className={styles.autoLayoutVertical1}>
            <div className={styles.company}>Company</div>
            <div className={styles.bags}>Bags</div>
            <div className={styles.bags}>Blogs</div>
            <div className={styles.community}>Community</div>
            <div className={styles.bags}>Contact</div>
          </div>
          <div className={styles.autoLayoutVertical2}>
            <div className={styles.company}>Services</div>
            <div className={styles.bussines}>Bussines</div>
            <div className={styles.modifications}>Modifications</div>
            <div className={styles.morgansCare}>Morgans Care</div>
            <div className={styles.insurance}>Insurance</div>
            <div className={styles.warranty}>Warranty</div>
          </div>
          <div className={styles.autoLayoutVertical3}>
            <div className={styles.company}>Resource</div>
            <div className={styles.bags}>News</div>
            <div className={styles.newsletter}>Newsletter</div>
            <div className={styles.bags}>Careers</div>
            <div className={styles.bags}>FAQS</div>
            <div className={styles.bags}>Review</div>
          </div>
          <div className={styles.autoLayoutVertical4}>
            <div className={styles.company}>Legal</div>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
            <div className={styles.privacyPolicy}>Tems of Used</div>
            <div className={styles.cookies}>Cookies</div>
            <div className={styles.sitemap}>Sitemap</div>
          </div>
        </div>
      </div>
      <img className={styles.lineIcon} loading="lazy" alt="" src="/line.svg" />
      <div className={styles.autoLayoutHorizontal2}>
        <div className={styles.autoLayoutHorizontal3}>
          <div className={styles.marklyAllRight}>
            ©2024 Markly. All right reserved.
          </div>
        </div>
        <div className={styles.autoLayoutHorizontal4}>
          <div className={styles.autoLayoutHorizontal5}>
            <img
              className={styles.containerHeaderIcon}
              loading="lazy"
              alt=""
              src="/frame-8.svg"
            />
            <img
              className={styles.containerHeaderIcon}
              loading="lazy"
              alt=""
              src="/frame-9.svg"
            />
            <img
              className={styles.containerHeaderIcon}
              loading="lazy"
              alt=""
              src="/frame-10.svg"
            />
            <img
              className={styles.containerHeaderIcon}
              loading="lazy"
              alt=""
              src="/frame-11.svg"
            />
            <img
              className={styles.containerHeaderIcon}
              loading="lazy"
              alt=""
              src="/frame-12.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Property1Desktop;
