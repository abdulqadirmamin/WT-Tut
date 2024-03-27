import Input from "../components/Input";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <main className={styles.mainContainer}>
        <div className={styles.leftSide8Column}>
          <div className={styles.fRAMEA}>
            <div className={styles.welcomeBackMessage}>
              <div className={styles.frameParent}>
                <div className={styles.welcomeBackParent}>
                  <h1 className={styles.welcomeBackContainer}>
                    <span className={styles.welcomeBackContainer1}>
                      <span
                        className={styles.welcomeBack}
                      >{`Welcome Back `}</span>
                      <span> 👋</span>
                    </span>
                  </h1>
                  <div className={styles.todayIsAContainer}>
                    <p
                      className={styles.todayIsA}
                    >{`Today is a new day. It's your day. You shape it. `}</p>
                    <p className={styles.todayIsA}>
                      Sign in to start growing your career.
                    </p>
                  </div>
                </div>
                <form className={styles.inputParent}>
                  <Input
                    label="Email"
                    placeholderPlaceholder="Example@email.com"
                  />
                  <Input
                    label="Password"
                    placeholderPlaceholder="at least 8 characters"
                  />
                  <div className={styles.forgotPassword}>Forgot Password?</div>
                  <button className={styles.mainButton}>
                    <div className={styles.signIn}>Sign in</div>
                  </button>
                </form>
              </div>
              <div className={styles.orDivider}>
                <div className={styles.frameContainer}>
                  <div className={styles.lineElement} />
                  <div className={styles.or}>Or</div>
                  <div className={styles.lineElement} />
                </div>
                <button className={styles.socialButton}>
                  <img className={styles.googleIcon} alt="" src="/google.svg" />
                  <img
                    className={styles.facebookIcon}
                    alt=""
                    src="/facebook.svg"
                  />
                  <div className={styles.signInWith}>Sign in with Google</div>
                </button>
              </div>
            </div>
            <div className={styles.dontYouHaveContainer}>
              <span className={styles.welcomeBackContainer1}>
                <span>{`Don't you have an account? `}</span>
                <span className={styles.signUp}>Sign up</span>
              </span>
            </div>
          </div>
          <div className={styles.footerText}>
            <div className={styles.allRightsReserved}>
              © 2023 ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
        <div className={styles.art}>
          <img
            className={styles.seamlessBackgroundBags27251Icon}
            loading="lazy"
            alt=""
            src="/seamlessbackgroundbags27251858-1@2x.png"
          />
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
