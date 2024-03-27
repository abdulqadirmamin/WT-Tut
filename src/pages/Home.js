import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import Frame from "../components/Frame";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Property1Desktop from "../components/Property1Desktop";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <Frame />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <Property1Desktop />
    </div>
  );
};

export default Home;
