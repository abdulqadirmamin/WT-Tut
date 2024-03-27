import { useState } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  const [signUpTextValue, setSignUpTextValue] = useState("");
  return (
    <section className={styles.blogTextFrame}>
      <div className={styles.property1desktop}>
        <img
          className={styles.rectangleFrameIcon}
          loading="lazy"
          alt=""
          src="/rectangle@2x.png"
        />
        <div className={styles.autoLayoutVertical}>
          <div className={styles.autoLayoutVertical1}>
            <h1 className={styles.joinTheMarkly}>
              Join the Markly Community ⎯ Subscribe to Our Newsletter
            </h1>
            <div className={styles.beTheFirst}>
              Be the first to know about new arrivals, exclusive promotions, and
              the latest trends in the world of bags. Sign up for our newsletter
              and stay connected with the Markly lifestyle.
            </div>
          </div>
          <div className={styles.autoLayoutHorizontal}>
            <div className={styles.typesecondColorblackSize}>
              <input
                className={styles.signUp}
                placeholder="Email Address"
                type="text"
                value={signUpTextValue}
                onChange={(event) => setSignUpTextValue(event.target.value)}
              />
            </div>
            <button className={styles.typeprimaryColorwhiteSiz}>
              <div className={styles.signIn}>Submit</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
