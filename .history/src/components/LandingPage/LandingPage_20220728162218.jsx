import { HeroSection, CalendarSection, SocialsSection } from "../ComponentIndex";
import Footer from "../Footer/Footer";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles["LandingPage"]}>
      <HeroSection />
      <Carou
      <CalendarSection />
      <SocialsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;